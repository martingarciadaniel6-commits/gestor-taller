import{c as d,m as r}from"./index-iU4Ir9V_.js";/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=d("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.470.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=d("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]),n=`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, 'Segoe UI', Roboto, sans-serif; font-size: 12px; color: #1e293b; padding: 28px 34px; }
  h1 { font-size: 20px; margin-bottom: 2px; }
  h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b; margin: 18px 0 6px; }
  .head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #2563eb; padding-bottom: 14px; }
  .muted { color: #64748b; }
  .doc-num { font-size: 15px; font-weight: 700; color: #2563eb; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 14px; }
  .box { border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 12px; }
  .box p { margin: 1px 0; }
  table { width: 100%; border-collapse: collapse; margin-top: 8px; }
  th { text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; border-bottom: 2px solid #e2e8f0; padding: 6px 8px; }
  td { padding: 7px 8px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
  .r { text-align: right; }
  .totals { margin-left: auto; margin-top: 12px; width: 260px; }
  .totals td { padding: 4px 8px; border: none; }
  .totals .grand { font-size: 15px; font-weight: 700; border-top: 2px solid #2563eb; color: #2563eb; }
  .foot { margin-top: 26px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 10px; color: #94a3b8; }
  .sign { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 34px; }
  .sign div { border-top: 1px solid #94a3b8; padding-top: 6px; font-size: 10px; color: #64748b; text-align: center; }
`;function a(t){return String(t??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s])}function l(t){return`
    <div>
      <h1>${a(t.legal_name||t.name)}</h1>
      <p class="muted">${a(t.tax_id??"")}</p>
      <p class="muted">${a([t.address,t.postal_code,t.city].filter(Boolean).join(", "))}</p>
      <p class="muted">${a([t.phone,t.email].filter(Boolean).join(" · "))}</p>
    </div>`}function p(t){return`
    <table>
      <thead>
        <tr><th>Concepto</th><th class="r">Cant.</th><th class="r">Precio</th><th class="r">Dto.</th><th class="r">IVA</th><th class="r">Importe</th></tr>
      </thead>
      <tbody>${t.map(e=>`
      <tr>
        <td>${a(e.description)}${e.reference?`<br><span class="muted">${a(e.reference)}</span>`:""}</td>
        <td class="r">${e.qty} ${a(e.unit)}</td>
        <td class="r">${r(e.unit_price)}</td>
        <td class="r">${e.discount_pct>0?e.discount_pct+"%":"—"}</td>
        <td class="r">${e.tax_rate}%</td>
        <td class="r"><strong>${r(e.line_total)}</strong></td>
      </tr>`).join("")}</tbody>
    </table>`}function c(t){return`
    <table class="totals">
      <tr><td class="muted">Base imponible</td><td class="r">${r(t.subtotal)}</td></tr>
      ${t.discount_amount>0?`<tr><td class="muted">Descuento (${t.discount_pct}%)</td><td class="r">−${r(t.discount_amount)}</td></tr>`:""}
      <tr><td class="muted">IVA</td><td class="r">${r(t.tax_total)}</td></tr>
      <tr class="grand"><td>TOTAL</td><td class="r">${r(t.total)}</td></tr>
    </table>`}function u(t){const{workshop:s,order:e}=t,i=e.is_quote?"PRESUPUESTO":"ORDEN DE TRABAJO";return`<!doctype html><html><head><meta charset="utf-8"><style>${n}</style></head><body>
    <div class="head">
      ${l(s)}
      <div style="text-align:right">
        <p class="muted">${i}</p>
        <p class="doc-num">${a(e.number??"")}</p>
        <p class="muted">${new Date(e.received_at).toLocaleDateString("es-ES")}</p>
      </div>
    </div>
    <div class="grid2">
      <div class="box">
        <h2 style="margin-top:0">Cliente</h2>
        <p><strong>${a(t.customerName??"—")}</strong></p>
        <p class="muted">${a(t.customerTaxId??"")}</p>
        <p class="muted">${a(t.customerPhone??"")}</p>
      </div>
      <div class="box">
        <h2 style="margin-top:0">Vehículo</h2>
        <p><strong>${a((t.plate??"").toUpperCase())}</strong> ${a(t.vehicleLabel??"")}</p>
        <p class="muted">${e.entry_km!=null?e.entry_km.toLocaleString("es-ES")+" km":""}</p>
      </div>
    </div>
    ${e.customer_complaint?`<h2>Solicitud del cliente</h2><p>${a(e.customer_complaint)}</p>`:""}
    ${e.work_performed?`<h2>Trabajos realizados</h2><p>${a(e.work_performed)}</p>`:""}
    <h2>Detalle</h2>
    ${p(t.items.filter(o=>o.is_approved&&o.status!=="rechazado"))}
    ${c(e)}
    ${e.is_quote?'<div class="sign"><div>Firma del taller</div><div>Acepto el presupuesto (firma del cliente)</div></div>':'<div class="sign"><div>Entregado por</div><div>Recibí conforme (firma del cliente)</div></div>'}
    <p class="foot">${a(s.name)} — Documento generado el ${new Date().toLocaleString("es-ES")}.
    ${e.warranty_months>0?` Garantía de la reparación: ${e.warranty_months} meses.`:""}</p>
  </body></html>`}function b(t){const{workshop:s,invoice:e}=t,i=e.customer_snapshot,o=e.vehicle_snapshot,m=e.kind==="rectificativa"?"FACTURA RECTIFICATIVA":e.kind==="simplificada"?"FACTURA SIMPLIFICADA":"FACTURA";return`<!doctype html><html><head><meta charset="utf-8"><style>${n}</style></head><body>
    <div class="head">
      ${l(s)}
      <div style="text-align:right">
        <p class="muted">${m}</p>
        <p class="doc-num">${a(e.number??"(borrador)")}</p>
        <p class="muted">Fecha: ${new Date(e.issue_date).toLocaleDateString("es-ES")}</p>
        ${e.due_date?`<p class="muted">Vencimiento: ${new Date(e.due_date).toLocaleDateString("es-ES")}</p>`:""}
      </div>
    </div>
    <div class="grid2">
      <div class="box">
        <h2 style="margin-top:0">Facturar a</h2>
        <p><strong>${a(i.legal_name||i.name||"—")}</strong></p>
        <p class="muted">${a(i.tax_id??"")}</p>
        <p class="muted">${a([i.address,i.postal_code,i.city].filter(Boolean).join(", "))}</p>
      </div>
      <div class="box">
        <h2 style="margin-top:0">Vehículo</h2>
        <p><strong>${a((o.plate??"").toUpperCase())}</strong> ${a([o.brand,o.model].filter(Boolean).join(" "))}</p>
      </div>
    </div>
    <h2>Detalle</h2>
    ${p(t.items)}
    ${c(e)}
    ${e.payment_method?`<p style="margin-top:10px" class="muted">Forma de pago: ${a(e.payment_method)}</p>`:""}
    ${e.notes?`<p style="margin-top:8px">${a(e.notes)}</p>`:""}
    ${t.qrDataUrl?`
    <div style="display:flex;align-items:center;gap:12px;margin-top:18px;border:1px solid #e2e8f0;border-radius:8px;padding:10px 12px">
      <img src="${t.qrDataUrl}" style="width:35mm;height:35mm" alt="QR AEAT" />
      <div>
        <!-- La frase «verificable en la sede electrónica de la AEAT» está
             reservada a los sistemas que REMITEN los registros a Hacienda.
             Mientras el taller no tenga activado el envío, prometerla sería
             falso: el cliente escanearía el QR y no encontraría nada. -->
        <p style="font-weight:700">${t.verifactuEnvio?"Factura verificable en la sede electrónica de la AEAT":"Factura con registro de facturación (RD 1007/2023)"}</p>
        ${t.verifactuHash?`<p class="muted" style="font-size:9px;word-break:break-all">Huella del registro: ${a(t.verifactuHash)}</p>`:""}
      </div>
    </div>`:""}
    <p class="foot">${a(s.legal_name||s.name)}${s.tax_id?" · "+a(s.tax_id):""} — Factura generada el ${new Date().toLocaleString("es-ES")}.</p>
  </body></html>`}function f(t){const{order:s}=t,e=s.fuel_level!=null?`${s.fuel_level}/8`:"—",i=t.items.filter(o=>o.is_approved&&o.status!=="rechazado").map(o=>`<tr>
        <td class="chk">☐</td>
        <td>${a(o.description)}</td>
        <td class="r">${o.qty} ${a(o.unit)}</td>
      </tr>`).join("");return`<!doctype html><html><head><meta charset="utf-8"><style>
    @page { size: A5; margin: 8mm; }
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:-apple-system,'Segoe UI',Roboto,sans-serif; font-size:11px; color:#000; }
    .top { display:flex; justify-content:space-between; align-items:flex-start;
           border-bottom:3px solid #000; padding-bottom:6px; }
    .ot { font-size:26px; font-weight:800; letter-spacing:-0.5px; }
    .plate { font-size:30px; font-weight:800; letter-spacing:1px; border:2px solid #000;
             border-radius:5px; padding:2px 10px; }
    .meta { display:grid; grid-template-columns:repeat(4,1fr); gap:4px; margin-top:8px;
            font-size:10px; }
    .meta div { border:1px solid #999; border-radius:4px; padding:3px 5px; }
    .meta span { display:block; font-size:8px; text-transform:uppercase;
                 letter-spacing:0.05em; color:#555; }
    h2 { font-size:10px; text-transform:uppercase; letter-spacing:0.08em;
         margin:9px 0 3px; border-bottom:1px solid #000; padding-bottom:1px; }
    .box { border:1px solid #999; border-radius:4px; padding:5px 6px; min-height:34px;
           font-size:11px; }
    table { width:100%; border-collapse:collapse; }
    td { padding:3px 4px; border-bottom:1px solid #ddd; vertical-align:top; }
    .chk { width:16px; font-size:15px; }
    .r { text-align:right; white-space:nowrap; }
    .notas { border:1px solid #999; border-radius:4px; height:78px; margin-top:3px;
             background:repeating-linear-gradient(transparent,transparent 17px,#e5e5e5 18px); }
    .pie { display:flex; justify-content:space-between; margin-top:8px; font-size:9px; color:#555; }
  </style></head><body>
    <div class="top">
      <div>
        <div class="ot">${a(s.number??"")}</div>
        <div>${a(t.customerName??"—")}</div>
      </div>
      <div style="text-align:right">
        <div class="plate">${a((t.plate??"").toUpperCase())}</div>
        <div style="margin-top:3px">${a(t.vehicleLabel??"")}</div>
      </div>
    </div>

    <div class="meta">
      <div><span>Km entrada</span>${s.entry_km!=null?s.entry_km.toLocaleString("es-ES"):"—"}</div>
      <div><span>Combustible</span>${e}</div>
      <div><span>Puesto</span>${a(s.bay??"—")}</div>
      <div><span>Mecánico</span>${a(t.assignedName??"—")}</div>
    </div>

    <h2>Avería / solicitud del cliente</h2>
    <div class="box">${a(s.customer_complaint??"")}</div>

    ${s.diagnosis?`<h2>Diagnóstico</h2><div class="box">${a(s.diagnosis)}</div>`:""}

    <h2>Trabajos y material a montar</h2>
    <table>${i||'<tr><td colspan="3" style="color:#777">Sin líneas asignadas</td></tr>'}</table>

    <h2>Anotaciones del mecánico</h2>
    <div class="notas"></div>

    <div class="pie">
      <span>${a(t.workshop.name)}</span>
      <span>${s.promised_at?"Entrega: "+new Date(s.promised_at).toLocaleString("es-ES"):""}</span>
      <span>Impreso ${new Date().toLocaleDateString("es-ES")}</span>
    </div>
  </body></html>`}async function v(t,s){if(window.taller)await window.taller.printPdf(t,s);else{const e=window.open("","_blank");e&&(e.document.write(t),e.document.close(),e.print())}}export{x as C,h as P,b as i,u as o,v as p,f as w};
