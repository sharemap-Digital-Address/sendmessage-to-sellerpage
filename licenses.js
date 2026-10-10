// ==========================================
// SHAREMAP CENTRAL LICENSE DATABASE
// ==========================================

const SHAREMAP_LICENSES = {
    // PLATINUM (LIFETIME ACCESS - WALANG EXPIRATION)
    "marjevinsoylucena": {
        status: "ACTIVE",
        plan: "PLATINUM_LIFETIME",
        expiry: null // Lifetime, walang katapusan
    },
    
    // BRONZE (MONTHLY SUBSCRIPTION - MAY EXPIRATION DATE)
    "sample.online.store": {
        status: "ACTIVE",
        plan: "BRONZE_MONTHLY",
        expiry: "2026-11-10" // Format: YYYY-MM-DD (Halimbawa: Oct 10 nabayaran, valid hanggang Nov 10)
    },

    // TRIAL (7 DAYS FREE TRIAL)
    "test.resto.page": {
        status: "TRIAL",
        plan: "TRIAL_ACCESS",
        expiry: "2026-10-17"
    }
};

function checkShareMapAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('page') || localStorage.getItem('sharemap_page');

    if (!pageId) {
        alert("⚠️ Walang natagpung Store Page ID. Hindi maiproseso ang gateway.");
        document.body.innerHTML = "<h2 style='color:red; text-align:center; margin-top:50px;'>⚠️ Invalid Gateway Link</h2>";
        return;
    }

    const license = SHAREMAP_LICENSES[pageId];
    const today = new Date().toISOString().split('T')[0]; // Kuha ang petsa ngayon (YYYY-MM-DD)

    // CHECK 1: KUNG WALA SA DATABASE O INACTIVE
    if (!license || license.status === "INACTIVE") {
        showBlockScreen("⚠️ Walang Lisensya / Inactive Account", "Ang store na ito ay wala pang lisensya sa ShareMap. Mangyaring makipag-ugnayan sa provider.");
        return;
    }

    // CHECK 2: KUNG EXPIRED NA ANG MONTHLY O TRIAL PLAN
    if (license.expiry && today > license.expiry) {
        showBlockScreen("🚫 Expired License", `Ang inyong ${license.plan === 'BRONZE_MONTHLY' ? 'Bronze Monthly' : 'Trial'} Access ay nag-expire noong ${license.expiry}. Paki-renew ang inyong subscription sa ShareMap.`);
        return;
    }

    // KUNG VALID ANG LISENSYA
    console.log(`✅ Access Granted for ${pageId} [Plan: ${license.plan}]`);
}

function showBlockScreen(title, message) {
    // Palitan ang link sa ibaba ng iyong opisyal na Facebook Messenger link o Contact Link
    const CONTACT_LINK = "https://m.me/sharemap.digital.address"; 

    document.body.innerHTML = `
        <div style="background:#0f172a; color:#fff; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; font-family:sans-serif;">
            <div style="background:#1e293b; padding:30px; border-radius:12px; border:1px solid #ef4444; max-width:400px; width:90%; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                <h2 style="color:#ef4444; margin-top:0; font-size:20px;">${title}</h2>
                <p style="color:#cbd5e1; font-size:14px; line-height:1.5;">${message}</p>
                
                <a href="${CONTACT_LINK}" target="_blank" style="display:inline-block; margin-top:15px; background:#2563eb; color:#fff; text-decoration:none; padding:12px 24px; border-radius:8px; font-weight:bold; font-size:14px; width:80%;">
                    💬 Contact Developer / Renew Access
                </a>

                <hr style="border:0; border-top:1px solid #334155; margin:25px 0 15px 0;">
                <p style="font-size:11px; color:#94a3b8; margin:0;">ShareMap Licensing Protection &copy; 2026</p>
            </div>
        </div>
    `;
}
