// licenses.js
const SHAREMAP_LICENSES = {
  // LIFETIME ACTIVE CLIENTS (NAGBAYAD NA NG ONE-TIME FEE) -> WALANG EXPIRATION / NULL
  "marjevinsoylucena": { status: "ACTIVE", expires: null },
  "techsavyboy":       { status: "ACTIVE", expires: null },

  // TRIAL CLIENTS (MAY EXPIRATION DATE PA RIN PARA SA 7-DAY FREE TRIAL)
  "buddysph":          { status: "TRIAL",  expires: "2026-10-17" }
};

function checkShareMapAccess() {
  const urlParams = new URLSearchParams(window.location.search);
  const pageId = (urlParams.get('page') || localStorage.getItem('sharemap_page') || '').toLowerCase().trim();
  const today = new Date().toISOString().split('T')[0];
  const record = SHAREMAP_LICENSES[pageId];

  // 1. UNREGISTERED STORE (WALA SA DATABASE)
  if (!pageId || !record) {
    document.body.innerHTML = `
      <div style="background:#0f172a; color:#fff; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; font-family:sans-serif;">
        <h2 style="color:#ef4444; margin-bottom:10px;">❌ Unregistered Store License</h2>
        <p style="color:#cbd5e1; max-width:350px; font-size:14px; line-height:1.5;">
          Ang Page ID na <b>"${pageId || 'UNKNOWN'}"</b> ay hindi pa nakatala sa ShareMap System.
        </p>
        <p style="color:#38bdf8; font-size:13px; margin-top:15px;">
          Para ma-activate ang inyong Facebook Page o kumuha ng 7-Day Free Trial, makipag-ugnayan sa Developer:
        </p>
        <a href="https://m.me/TechSavyBoy.SketchDevPro" style="background:#0284c7; color:#fff; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:bold; margin-top:12px; display:inline-block;">
          💬 Contact ShareMap Admin
        </a>
      </div>
    `;
    return false;
  }

  // 2. TRIAL EXPIRED CHECK (GAGANA LAMANG KUNG MAY EXPIRATION DATE NA NAKALAAN)
  const isExpiredTrial = record.expires && today > record.expires;
  const isForceExpired = record.status === "EXPIRED";

  if (isForceExpired || isExpiredTrial) {
    document.body.innerHTML = `
      <div style="background:#0f172a; color:#fff; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; font-family:sans-serif;">
        <h2 style="color:#eab308; margin-bottom:10px;">⚠️ Free Trial Expired</h2>
        <p style="color:#cbd5e1; max-width:350px; font-size:14px; line-height:1.5;">
          Ang 7-Day Free Trial para sa <b>"${pageId}"</b> ay nagwakas noong <b>${record.expires}</b>.
        </p>
        <p style="color:#94a3b8; font-size:13px; margin-top:10px;">
          Magbayad ng One-Time Setup Fee na <b>₱899</b> para sa Lifetime Access at walang buwanang bayarin!
        </p>
        <a href="https://m.me/TechSavyBoy.SketchDevPro" style="background:#16a34a; color:#fff; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:bold; margin-top:15px; display:inline-block;">
          💳 Activate Lifetime License (₱899)
        </a>
      </div>
    `;
    return false;
  }

  // 3. LIFETIME / VALID TRIAL ACCESS
  return true;
}
