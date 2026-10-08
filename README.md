# 📍 ShareMap - Smart Delivery & Location Dispatcher
> **Serverless Order-to-Dispatch Web Gateway for Online Sellers & MSMEs**

Isang lightweight at zero-commission order gateway na binuo para sa mga online sellers na gumagamit ng **Facebook Page**. Pinapadali nito ang pagkuha ng kumpletong order list, contact details, at **eksaktong GPS Location (Plus Code, OSM Street Address, at Google Maps Pin)** diretso sa Messenger ng seller sa loob lang ng ilang segundo.

⚠️ **PAALALA:** Ang system na ito ay ginawa para sa **Facebook PAGE** (`m.me/PageID`). Hindi ito gagana sa mga personal Facebook profiles.

---

## 🚀 Key Features

* 🛒 **Dynamic Order List Creator:** Pinapahintulutan ang buyer na magdagdag, mag-adjust ng quantity, at mag-edit ng kanilang mga bibilhing item sa loob ng form.
* 📍 **Precision Digital Address Engine:** Awtomatikong kino-convert ang GPS Coordinates ng buyer sa **Plus Code**, **Google Maps link**, at **OpenStreetMap (OSM) Text Address**.
* 🌐 **In-App Browser Escape Protocol:** May built-in Chrome Intent handler para sa mga buyers na nagbubukas ng link sa loob ng Facebook/Messenger in-app browser upang matiyak na gagana nang tama ang GPS permission.
* 📋 **Auto-Clipboard Fallback:** Awtomatikong kino-copy ang buong formatted order at location summary sa clipboard ng buyer bago mag-redirect sa Messenger.
* ⚡ **Zero-Commission & Serverless:** 100% hosted sa GitHub Pages na walang monthly server fees o bawas sa kita ng seller.

---

## 📂 File Structure

* **`gateway.html`** — Ang primary form kung saan pino-proseso ang Pangalan, Contact Number, Landmark, at Dynamic Order List. Dito rin matatagpuan ang Messenger In-App Browser escape logic.
* **`index.html`** — Ang GPS Location Engine na humihingi ng device location permissions, nagko-compute ng Plus Code at Street Address, at nagre-redirect sa Messenger ng seller page.

---

## 🔗 Seller Link Format

Ibigay ang link na ito sa iyong mga buyer o ilagay sa Auto-Reply/Persistent Menu ng inyong Facebook Page (*palitan ang `PAGE_ID_OR_USERNAME` ng Numeric ID o Username ng inyong Page*):

```text
[https://sharemap-digital-address.github.io/sendmessage-to-sellerpage/gateway.html?page=PAGE_ID_OR_USERNAME](https://sharemap-digital-address.github.io/sendmessage-to-sellerpage/gateway.html?page=PAGE_ID_OR_USERNAME)
