import { useState, useRef, useEffect } from "react";

const SHOP = { name: "Ferma cu Omenie", domain: "fermacuomenie.ro", currency: "RON" };

const DAILY_ORDERS = [
  {day:"2026-02-11",orders:118,sales:21285.95},{day:"2026-02-12",orders:125,sales:22924.48},
  {day:"2026-02-13",orders:165,sales:31127.42},{day:"2026-02-14",orders:94,sales:15309.75},
  {day:"2026-02-15",orders:153,sales:25678.84},{day:"2026-02-16",orders:96,sales:16898.26},
  {day:"2026-02-17",orders:99,sales:17222.34},{day:"2026-02-18",orders:95,sales:17021.59},
  {day:"2026-02-19",orders:91,sales:16432.71},{day:"2026-02-20",orders:80,sales:14734.29},
  {day:"2026-02-21",orders:44,sales:7054.60},{day:"2026-02-22",orders:73,sales:13555.98},
  {day:"2026-02-23",orders:69,sales:11670.44},{day:"2026-02-24",orders:75,sales:15236.08},
  {day:"2026-02-25",orders:77,sales:16792.04},{day:"2026-02-26",orders:63,sales:12720.39},
  {day:"2026-02-27",orders:67,sales:12102.55},{day:"2026-02-28",orders:70,sales:11914.92},
  {day:"2026-03-01",orders:60,sales:11799.18},{day:"2026-03-02",orders:77,sales:15458.53},
  {day:"2026-03-03",orders:69,sales:12915.67},{day:"2026-03-04",orders:82,sales:15227.83},
  {day:"2026-03-05",orders:52,sales:9687.10},{day:"2026-03-06",orders:75,sales:12512.12},
  {day:"2026-03-07",orders:73,sales:13839.46},{day:"2026-03-08",orders:76,sales:13161.45},
  {day:"2026-03-09",orders:89,sales:14653.86},{day:"2026-03-10",orders:104,sales:18853.09},
  {day:"2026-03-11",orders:94,sales:15556.23},{day:"2026-03-12",orders:120,sales:22136.54},
  {day:"2026-03-13",orders:85,sales:16018.03},{day:"2026-03-14",orders:90,sales:17182.94},
  {day:"2026-03-15",orders:122,sales:21049.41},{day:"2026-03-16",orders:65,sales:13621.22},
  {day:"2026-03-17",orders:59,sales:12506.90},{day:"2026-03-18",orders:52,sales:11363.16},
  {day:"2026-03-19",orders:77,sales:15592.34},{day:"2026-03-20",orders:49,sales:11262.96},
  {day:"2026-03-21",orders:48,sales:10435.45},{day:"2026-03-22",orders:55,sales:12484.73},
  {day:"2026-03-23",orders:98,sales:18320.04},{day:"2026-03-24",orders:77,sales:13528.25},
  {day:"2026-03-25",orders:86,sales:17768.24},{day:"2026-03-26",orders:80,sales:15634.20},
  {day:"2026-03-27",orders:112,sales:20125.70},{day:"2026-03-28",orders:92,sales:17618.85},
  {day:"2026-03-29",orders:140,sales:27262.76},{day:"2026-03-30",orders:172,sales:31509.97},
  {day:"2026-03-31",orders:199,sales:35679.49},{day:"2026-04-01",orders:160,sales:36537.82},
  {day:"2026-04-02",orders:186,sales:36384.31},{day:"2026-04-03",orders:215,sales:40279.23},
  {day:"2026-04-04",orders:171,sales:32995.73},{day:"2026-04-05",orders:145,sales:24123.97},
  {day:"2026-04-06",orders:165,sales:28160.82},{day:"2026-04-07",orders:133,sales:21881.75},
  {day:"2026-04-08",orders:75,sales:13433.98},{day:"2026-04-09",orders:31,sales:5205.33},
  {day:"2026-04-10",orders:16,sales:2613.36},{day:"2026-04-11",orders:8,sales:1381.78},
  {day:"2026-04-12",orders:13,sales:2316.90},{day:"2026-04-13",orders:22,sales:3742.94},
  {day:"2026-04-14",orders:36,sales:7659.20},{day:"2026-04-15",orders:40,sales:8118.10},
  {day:"2026-04-16",orders:38,sales:9565.59},{day:"2026-04-17",orders:39,sales:7403.69},
  {day:"2026-04-18",orders:36,sales:6329.19},{day:"2026-04-19",orders:45,sales:9422.62},
  {day:"2026-04-20",orders:68,sales:11268.43},{day:"2026-04-21",orders:52,sales:8829.23},
  {day:"2026-04-22",orders:70,sales:12301.78},{day:"2026-04-23",orders:60,sales:10260.42},
  {day:"2026-04-24",orders:46,sales:8817.58},{day:"2026-04-25",orders:47,sales:7744.35},
  {day:"2026-04-26",orders:40,sales:7218.48},{day:"2026-04-27",orders:60,sales:10406.65},
  {day:"2026-04-28",orders:70,sales:13874.66},{day:"2026-04-29",orders:63,sales:10668.88},
  {day:"2026-04-30",orders:58,sales:10681.76},{day:"2026-05-01",orders:39,sales:6990.63},
  {day:"2026-05-02",orders:43,sales:6717.48},{day:"2026-05-03",orders:43,sales:7528.35},
  {day:"2026-05-04",orders:66,sales:11974.09},{day:"2026-05-05",orders:59,sales:11150.87},
  {day:"2026-05-06",orders:65,sales:11981.02},{day:"2026-05-07",orders:63,sales:11640.45},
  {day:"2026-05-08",orders:63,sales:10749.57},{day:"2026-05-09",orders:62,sales:10421.51},
  {day:"2026-05-10",orders:68,sales:12432.26},{day:"2026-05-11",orders:96,sales:18101.09},
];

const SALARY_WINDOWS = [
  { label: "Pensii", days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], color: "#7C3AED", bg: "#F3E8FF" },
  { label: "Salarii bugetari", days: [14,15,16,17], color: "#0E7490", bg: "#E0F7FA" },
  { label: "Salarii private", days: [25,26,27,28,29,30,31], color: "#B45309", bg: "#FEF3C7" },
];

function getDayType(dateStr) {
  const d = new Date(dateStr);
  const dom = d.getDate();
  for (const w of SALARY_WINDOWS) {
    if (w.days.includes(dom)) return w;
  }
  return null;
}

function isSalaryDay(dateStr) { return getDayType(dateStr) !== null; }

const CUSTOMERS = [
  { id:"c1",  name:"DELIA MOCAN",          email:"deliavultur@yahoo.com",        totalSpent:457.14, ordersCount:1, orders:[{name:"#30308",date:"2026-05-11",total:457.14,items:25,status:"PENDING"}] },
  { id:"c2",  name:"Laura Lacraru",         email:"—",                            totalSpent:537.72, ordersCount:1, orders:[{name:"#30323",date:"2026-05-12",total:537.72,items:20,status:"PAID"}] },
  { id:"c3",  name:"Emil Buloi",            email:"—",                            totalSpent:432.97, ordersCount:1, orders:[{name:"#30274",date:"2026-05-11",total:432.97,items:11,status:"PENDING"}] },
  { id:"c4",  name:"Stanca Tupilus",        email:"—",                            totalSpent:368.92, ordersCount:1, orders:[{name:"#30317",date:"2026-05-12",total:368.92,items:17,status:"PAID"}] },
  { id:"c5",  name:"Dinu Alice",            email:"—",                            totalSpent:360.74, ordersCount:1, orders:[{name:"#30316",date:"2026-05-12",total:360.74,items:9,status:"PENDING"}] },
  { id:"c6",  name:"Sanda Apostolescu",     email:"—",                            totalSpent:353.15, ordersCount:1, orders:[{name:"#30299",date:"2026-05-11",total:353.15,items:8,status:"PENDING"}] },
  { id:"c7",  name:"Dragu Silviu",          email:"silviudragu85@yahoo.com",      totalSpent:328.61, ordersCount:1, orders:[{name:"#30313",date:"2026-05-11",total:328.61,items:17,status:"PENDING"}] },
  { id:"c8",  name:"Adela Popescu",         email:"adela.e.popescu@gmail.com",    totalSpent:307.82, ordersCount:1, orders:[{name:"#30309",date:"2026-05-11",total:307.82,items:17,status:"PENDING"}] },
  { id:"c9",  name:"Maria Avram",           email:"—",                            totalSpent:291.30, ordersCount:1, orders:[{name:"#30288",date:"2026-05-11",total:291.30,items:11,status:"PAID"}] },
  { id:"c10", name:"Maria Marinel",         email:"—",                            totalSpent:277.67, ordersCount:1, orders:[{name:"#30306",date:"2026-05-11",total:277.67,items:13,status:"PENDING"}] },
  { id:"c11", name:"dirmon valentina",      email:"—",                            totalSpent:261.85, ordersCount:1, orders:[{name:"#30273",date:"2026-05-11",total:261.85,items:9,status:"PENDING"}] },
  { id:"c12", name:"Doru Ghita",            email:"—",                            totalSpent:257.88, ordersCount:1, orders:[{name:"#30276",date:"2026-05-11",total:257.88,items:6,status:"PAID"}] },
  { id:"c13", name:"Enache Alexandra",      email:"—",                            totalSpent:245.27, ordersCount:1, orders:[{name:"#30275",date:"2026-05-11",total:245.27,items:12,status:"PENDING"}] },
  { id:"c14", name:"Lucia Ducu",            email:"—",                            totalSpent:244.02, ordersCount:1, orders:[{name:"#30295",date:"2026-05-11",total:244.02,items:7,status:"PENDING"}] },
  { id:"c15", name:"Andreea Tibil",         email:"—",                            totalSpent:224.27, ordersCount:1, orders:[{name:"#30303",date:"2026-05-11",total:224.27,items:10,status:"PENDING"}] },
  { id:"c16", name:"Anișoara Botoc",        email:"—",                            totalSpent:224.09, ordersCount:1, orders:[{name:"#30311",date:"2026-05-11",total:224.09,items:13,status:"PENDING"}] },
  { id:"c17", name:"Grigore Anca",          email:"—",                            totalSpent:211.82, ordersCount:1, orders:[{name:"#30272",date:"2026-05-11",total:211.82,items:10,status:"PENDING"}] },
  { id:"c18", name:"Carmen Popa",           email:"—",                            totalSpent:209.88, ordersCount:1, orders:[{name:"#30293",date:"2026-05-11",total:209.88,items:8,status:"PENDING"}] },
  { id:"c19", name:"Lucian Vasile",         email:"—",                            totalSpent:208.77, ordersCount:1, orders:[{name:"#30285",date:"2026-05-11",total:208.77,items:9,status:"PENDING"}] },
  { id:"c20", name:"Delia Melnicescu",      email:"melnicescumihaela@yahoo.com",  totalSpent:208.56, ordersCount:1, orders:[{name:"#30310",date:"2026-05-11",total:208.56,items:9,status:"PENDING"}] },
  { id:"c21", name:"Adina Oltean",          email:"—",                            totalSpent:205.77, ordersCount:1, orders:[{name:"#30300",date:"2026-05-11",total:205.77,items:4,status:"PAID"}] },
  { id:"c22", name:"Ana Radoi",             email:"—",                            totalSpent:204.90, ordersCount:1, orders:[{name:"#30302",date:"2026-05-11",total:204.90,items:12,status:"PENDING"}] },
  { id:"c23", name:"Goga lucia",            email:"—",                            totalSpent:204.00, ordersCount:1, orders:[{name:"#30292",date:"2026-05-11",total:204.00,items:17,status:"PENDING"}] },
  { id:"c24", name:"Oana Gancea",           email:"—",                            totalSpent:203.42, ordersCount:1, orders:[{name:"#30297",date:"2026-05-11",total:203.42,items:3,status:"PENDING"}] },
  { id:"c25", name:"Laura Polmolea",        email:"—",                            totalSpent:202.88, ordersCount:1, orders:[{name:"#30305",date:"2026-05-11",total:202.88,items:10,status:"PAID"}] },
  { id:"c26", name:"Camelia Dasoveanu",     email:"—",                            totalSpent:202.55, ordersCount:1, orders:[{name:"#30278",date:"2026-05-11",total:202.55,items:7,status:"PENDING"}] },
  { id:"c27", name:"sergiu dascalu",        email:"—",                            totalSpent:201.49, ordersCount:1, orders:[{name:"#30315",date:"2026-05-12",total:201.49,items:13,status:"PENDING"}] },
  { id:"c28", name:"Damaschin Daniel",      email:"—",                            totalSpent:200.24, ordersCount:1, orders:[{name:"#30280",date:"2026-05-11",total:200.24,items:6,status:"PAID"}] },
  { id:"c29", name:"Andra Enescu",          email:"andraclaudia.enescu@gmail.com",totalSpent:118.01, ordersCount:1, orders:[{name:"#30320",date:"2026-05-12",total:118.01,items:3,status:"PAID"}] },
  { id:"c30", name:"Margareta Enache",      email:"mety.enache1964@yahoo.com",    totalSpent:89.00,  ordersCount:1, orders:[{name:"#30319",date:"2026-05-12",total:89.00,items:5,status:"PENDING"}] },
];

const PRODUCTS = [
  "Brânză de burduf 250g — 20.90 RON","Brânză de burduf 350g — 29.90 RON",
  "Brânză de burduf 2kg — 118.90 RON","Caș din lapte de vacă 300g — 22.90 RON",
  "Cașcaval clasic 350g — 25.90 RON","Cașcaval afumat 350g — 25.90 RON",
  "Smântână 32% 500g — 19.12 RON","Smântână 32% 900g — 41.90 RON",
  "Smântână 20% 900g — 29.90 RON","Kefir 3.3% 330g — 7.90 RON",
  "Sana 3.6% 330g — 7.90 RON","Lapte bătut 2% 330g — 7.90 RON",
  "Telemea vacă puțin sărată 800g — 36.81 RON","Brânză de oaie maturată 60z — 39.50 RON",
  "Mozzarella bivoliță 250g — 35.90 RON","Zacuscă de vinete 350g — 34.99 RON",
  "Silvoiz prune fără zahăr 320g — 34.99 RON","Miere polifloră Bio 250g — 19.90 RON",
  "Miere cremă Bio 250g — 21.90 RON","Ulei floarea soarelui presat 1L — 27.90 RON",
];

const API_KEY = import.meta.env.VITE_ANTHROPIC_KEY;

async function callAI(system, messages) {
  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      system,
      messages,
    })
  });
  const data = await resp.json();
  return data.content?.find(b => b.type === "text")?.text || "";
}

function Avatar({ name, size = 40 }) {
  const i = name.split(" ").filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase();
  const cols = ["#3B6D11","#185FA5","#853A0B","#534AB7","#0F6E56","#7A3B0B","#3B4D99","#6B3B6D"];
  return (
    <div style={{width:size,height:size,borderRadius:"50%",background:cols[name.charCodeAt(0)%cols.length],display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:size*0.34,flexShrink:0}}>
      {i}
    </div>
  );
}

function Pill({ text, bg, color, dot }) {
  return (
    <span style={{fontSize:11,padding:"2px 8px",borderRadius:99,fontWeight:600,background:bg||"#f3f4f6",color:color||"#6b7280",whiteSpace:"nowrap",display:"inline-flex",alignItems:"center",gap:4}}>
      {dot && <span style={{width:6,height:6,borderRadius:"50%",background:color,flexShrink:0}}/>}
      {text}
    </span>
  );
}

function Spin() {
  return <div style={{width:18,height:18,border:"2px solid #e5e7eb",borderTopColor:"#185FA5",borderRadius:"50%",animation:"crmspin .7s linear infinite",flexShrink:0}}/>;
}

function CalendarHeatmap() {
  const maxOrders = Math.max(...DAILY_ORDERS.map(d=>d.orders));
  const avgOrders = DAILY_ORDERS.reduce((s,d)=>s+d.orders,0)/DAILY_ORDERS.length;
  const months = {};
  DAILY_ORDERS.forEach(d => {
    const m = d.day.slice(0,7);
    if (!months[m]) months[m] = [];
    months[m].push(d);
  });
  const getColor = (orders, dateStr) => {
    const ratio = orders / maxOrders;
    const salType = getDayType(dateStr);
    if (salType) return { bg: salType.bg, border: salType.color };
    if (ratio > 0.7) return { bg: "#14532D", border: "#14532D" };
    if (ratio > 0.5) return { bg: "#166534", border: "#166534" };
    if (ratio > 0.35) return { bg: "#4ADE80", border: "#4ADE80" };
    if (ratio > 0.2) return { bg: "#BBF7D0", border: "#BBF7D0" };
    return { bg: "#f9fafb", border: "#e5e7eb" };
  };
  const [tooltip, setTooltip] = useState(null);
  const monthNames = {"2026-02":"Feb 2026","2026-03":"Mar 2026","2026-04":"Apr 2026","2026-05":"Mai 2026"};
  return (
    <div>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:14}}>
        {[{color:"#14532D",label:"Vârf mare"},{color:"#4ADE80",label:"Normal"},{color:"#7C3AED",label:"Pensii (1-15)"},{color:"#0E7490",label:"Salarii bugetari"},{color:"#B45309",label:"Salarii private (25-31)"}].map(l=>(
          <div key={l.label} style={{display:"flex",alignItems:"center",gap:5,fontSize:11,color:"#6b7280"}}>
            <div style={{width:10,height:10,borderRadius:2,background:l.color}}/>{l.label}
          </div>
        ))}
      </div>
      {Object.entries(months).map(([month, days]) => (
        <div key={month} style={{marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:600,color:"#6b7280",marginBottom:6}}>{monthNames[month]||month}</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:3}}>
            {Array.from({length: new Date(days[0].day).getDay()===0?6:new Date(days[0].day).getDay()-1}).map((_,i)=>(
              <div key={`e${i}`} style={{width:28,height:28}}/>
            ))}
            {days.map(d => {
              const c = getColor(d.orders, d.day);
              const salType = getDayType(d.day);
              return (
                <div key={d.day}
                  onMouseEnter={e=>setTooltip({d,x:e.clientX,y:e.clientY,salType})}
                  onMouseLeave={()=>setTooltip(null)}
                  style={{width:28,height:28,borderRadius:4,background:c.bg,border:`1.5px solid ${c.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,cursor:"default",color:salType?salType.color:d.orders>avgOrders*1.3?"#fff":"#6b7280",position:"relative"}}>
                  {new Date(d.day).getDate()}
                  {d.orders > avgOrders * 1.5 && <div style={{position:"absolute",top:-4,right:-4,width:8,height:8,borderRadius:"50%",background:"#EF4444"}}/>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      {tooltip && (
        <div style={{position:"fixed",left:tooltip.x+12,top:tooltip.y-40,background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:8,padding:"8px 12px",fontSize:12,zIndex:999,boxShadow:"0 4px 16px rgba(0,0,0,0.15)",pointerEvents:"none",minWidth:180}}>
          <div style={{fontWeight:700,marginBottom:4}}>{new Date(tooltip.d.day).toLocaleDateString("ro-RO",{day:"numeric",month:"long"})}</div>
          <div>📦 <b>{tooltip.d.orders}</b> comenzi</div>
          <div>💰 <b>{tooltip.d.sales.toLocaleString("ro-RO")}</b> RON</div>
          {tooltip.salType && <div style={{marginTop:4,color:tooltip.salType.color,fontWeight:600}}>💳 {tooltip.salType.label}</div>}
        </div>
      )}
    </div>
  );
}

function SalaryAnalysis() {
  const salaryDays = DAILY_ORDERS.filter(d => isSalaryDay(d.day));
  const normalDays = DAILY_ORDERS.filter(d => !isSalaryDay(d.day));
  const avgSalary = salaryDays.reduce((s,d)=>s+d.orders,0)/(salaryDays.length||1);
  const avgNormal = normalDays.reduce((s,d)=>s+d.orders,0)/(normalDays.length||1);
  const uplift = ((avgSalary/avgNormal-1)*100).toFixed(0);
  const byWindow = SALARY_WINDOWS.map(w => {
    const wDays = DAILY_ORDERS.filter(d => w.days.includes(new Date(d.day).getDate()));
    return {...w, avg: Math.round(wDays.reduce((s,d)=>s+d.orders,0)/(wDays.length||1)), avgVal: Math.round(wDays.reduce((s,d)=>s+d.sales,0)/(wDays.length||1))};
  });
  const sorted = [...DAILY_ORDERS].sort((a,b)=>b.orders-a.orders).slice(0,5);
  const dom = new Date().getDate();
  const upcoming = [];
  if (dom<=15) upcoming.push({label:"🟣 Pensii",days:"până pe 15 ale lunii",urgent:true});
  if (dom<=17) upcoming.push({label:"🔵 Salarii bugetari",days:"14-17 ale lunii",urgent:dom>=14});
  if (dom<=31) upcoming.push({label:"🟡 Salarii private",days:"25-31 ale lunii",urgent:dom>=23});
  return (
    <div style={{display:"flex",flexDirection:"column",gap:14}}>
      {upcoming.length > 0 && (
        <div style={{background:"#FFF8E6",border:"1.5px solid #F0D080",borderRadius:12,padding:"14px 18px"}}>
          <div style={{fontWeight:700,fontSize:13,marginBottom:10}}>📅 Ferestre active luna aceasta</div>
          {upcoming.map(u=>(
            <div key={u.label} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 0",borderBottom:"0.5px solid #F0D080",fontSize:13}}>
              <span style={{fontWeight:600}}>{u.label}</span>
              <span style={{color:"#7A5500"}}>{u.days}</span>
              {u.urgent && <Pill text="Acționează ACUM" bg="#FEF3C7" color="#B45309" dot/>}
            </div>
          ))}
          <p style={{margin:"10px 0 0",fontSize:12,color:"#7A5500"}}>💡 Sună clienții fideli cu 1-2 zile înainte de ferestrele de salariu.</p>
        </div>
      )}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
        {[
          {label:"Medie/zi salariu",val:`${Math.round(avgSalary)} comenzi`,sub:"zile cu salariu/pensie",color:"#7C3AED"},
          {label:"Medie/zi normală",val:`${Math.round(avgNormal)} comenzi`,sub:"restul zilelor",color:"#185FA5"},
          {label:"Uplift salariu",val:`+${uplift}%`,sub:"față de zilele normale",color:"#3B6D11"},
        ].map(k=>(
          <div key={k.label} style={{background:"#f9fafb",borderRadius:10,padding:"12px 14px"}}>
            <div style={{fontSize:11,color:"#6b7280",marginBottom:4}}>{k.label}</div>
            <div style={{fontSize:20,fontWeight:700,color:k.color}}>{k.val}</div>
            <div style={{fontSize:11,color:"#6b7280"}}>{k.sub}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:12,padding:"14px 18px"}}>
        <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>Performanță pe tip de fereastră</div>
        {byWindow.map(w=>(
          <div key={w.label} style={{display:"flex",alignItems:"center",gap:12,padding:"8px 0",borderBottom:"0.5px solid #e5e7eb"}}>
            <div style={{width:10,height:10,borderRadius:2,background:w.color,flexShrink:0}}/>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600}}>{w.label}</div>
              <div style={{fontSize:11,color:"#6b7280"}}>zile {w.days.join(", ")} ale lunii</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontWeight:700,fontSize:14,color:w.color}}>{w.avg} cmd/zi</div>
              <div style={{fontSize:11,color:"#6b7280"}}>{w.avgVal.toLocaleString("ro-RO")} RON/zi</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:12,padding:"14px 18px"}}>
        <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>🔥 Top 5 zile cu cele mai multe comenzi</div>
        {sorted.map((d,i)=>{
          const salType = getDayType(d.day);
          return (
            <div key={d.day} style={{display:"flex",alignItems:"center",gap:12,padding:"7px 0",borderBottom:"0.5px solid #e5e7eb"}}>
              <div style={{width:22,height:22,borderRadius:"50%",background:i===0?"#EF4444":i===1?"#F97316":"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:i<2?"#fff":"#6b7280",flexShrink:0}}>{i+1}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:600}}>{new Date(d.day).toLocaleDateString("ro-RO",{day:"numeric",month:"long",year:"numeric"})}</div>
                {salType && <Pill text={salType.label} bg={salType.bg} color={salType.color}/>}
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontWeight:700,fontSize:14}}>{d.orders} comenzi</div>
                <div style={{fontSize:11,color:"#6b7280"}}>{d.sales.toLocaleString("ro-RO")} RON</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AIChat({ client, onClose }) {
  const [msgs, setMsgs] = useState([
    {role:"assistant",text:`Bună! Am datele pentru "${client.name}". Cu ce te ajut?`}
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);

  const send = async () => {
    if (!input.trim()||loading) return;
    const userMsg = input.trim();
    setInput("");
    setMsgs(m=>[...m,{role:"user",text:userMsg}]);
    setLoading(true);
    const dom = new Date().getDate();
    const salaryContext = dom<=15?"Suntem în perioada de PENSII — clienții au bani disponibili ACUM."
      :dom<=17?"Suntem în perioada de SALARII BUGETARI — moment optim pentru apel."
      :dom>=25?"Suntem în perioada de SALARII PRIVATE — clienții din privat au bani disponibili."
      :"Perioadă normală. Urmează salariile private pe 25 ale lunii.";
    const orderInfo = client.orders.map(o=>`${o.date}: ${o.name}, ${o.items} produse, ${o.total} RON, ${o.status}`).join("\n");
    const history = msgs.map(m=>({role:m.role,content:m.text}));
    try {
      const text = await callAI(
        `Ești un asistent CRM pentru "Ferma cu Omenie", magazin de produse tradiționale românești. Răspunde DOAR în română, concis și practic.
CLIENT: ${client.name} | Total: ${client.totalSpent} RON | Comenzi: ${client.ordersCount}
COMENZI: ${orderInfo}
CONTEXT ZI: ${salaryContext}
PRODUSE: ${PRODUCTS.slice(0,10).join(" | ")}
Sfătuiește echipa de sales: când să sune, ce să propună, cum să argumenteze.`,
        [...history,{role:"user",content:userMsg}]
      );
      setMsgs(m=>[...m,{role:"assistant",text}]);
    } catch { setMsgs(m=>[...m,{role:"assistant",text:"Eroare de conexiune. Verificați cheia API."}]); }
    setLoading(false);
  };

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1000,display:"flex",alignItems:"flex-end",justifyContent:"flex-end",padding:20}}>
      <div style={{width:420,maxHeight:"80vh",background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:16,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div style={{padding:"12px 16px",borderBottom:"0.5px solid #e5e7eb",display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:32,height:32,borderRadius:"50%",background:"#185FA5",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{color:"#fff",fontSize:16}}>🤖</span>
          </div>
          <div style={{flex:1}}>
            <div style={{fontWeight:700,fontSize:13}}>AI Sales Assistant</div>
            <div style={{fontSize:11,color:"#6b7280"}}>{client.name} · Ferma cu Omenie</div>
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontSize:18,color:"#6b7280"}}>✕</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:14,display:"flex",flexDirection:"column",gap:10}}>
          {msgs.map((m,i)=>(
            <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
              <div style={{maxWidth:"87%",padding:"9px 13px",borderRadius:12,fontSize:13,lineHeight:1.6,whiteSpace:"pre-wrap",background:m.role==="user"?"#185FA5":"#f3f4f6",color:m.role==="user"?"#fff":"#111827",borderBottomRightRadius:m.role==="user"?3:12,borderBottomLeftRadius:m.role==="assistant"?3:12}}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && <div style={{display:"flex",alignItems:"center",gap:8}}><Spin/><span style={{fontSize:12,color:"#6b7280"}}>Generez...</span></div>}
          <div ref={endRef}/>
        </div>
        <div style={{padding:12,borderTop:"0.5px solid #e5e7eb",display:"flex",gap:8}}>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
            placeholder="Ex: Când să sun? Ce să propun?"
            style={{flex:1,fontSize:13,padding:"8px 12px",borderRadius:8,border:"0.5px solid #d1d5db",outline:"none"}}/>
          <button onClick={send} disabled={loading} style={{padding:"8px 16px",borderRadius:8,background:"#185FA5",color:"#fff",border:"none",cursor:loading?"not-allowed":"pointer",fontWeight:600}}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

function AIProposals({ client }) {
  const [state, setState] = useState("idle");
  const [result, setResult] = useState(null);

  const generate = async () => {
    setState("loading");
    const dom = new Date().getDate();
    const salCtx = dom<=15?"Suntem în perioada PENSII (1-15). Propune produse tradiționale valoroase."
      :dom<=17?"Suntem în perioada SALARII BUGETARI (14-17). Propune pachete complete."
      :dom>=25?"Suntem în perioada SALARII PRIVATE (25-31). Propune produse premium."
      :"Perioadă normală. Focusează-te pe fidelizare.";
    try {
      const text = await callAI(
        "Ești expert CRM pentru magazin de produse tradiționale românești. Răspunde EXCLUSIV cu JSON valid, fără markdown.",
        [{role:"user",content:`Client: ${client.name}, total: ${client.totalSpent} RON, ${client.ordersCount} comenzi.
Ultima comandă: ${client.orders[0]?.date}, ${client.orders[0]?.items} produse, ${client.orders[0]?.total} RON.
CONTEXT ZI: ${salCtx}
Produse: ${PRODUCTS.join(" | ")}
Returnează JSON: {"summary":"...","urgency":"ridicata|medie|scazuta","bestCallTime":"...","callScript":"...","proposals":[{"title":"...","reason":"...","products":["..."],"estimatedValue":100,"confidence":80}]}`}]
      );
      try { setResult(JSON.parse(text.replace(/```json|```/g,"").trim())); setState("done"); }
      catch { setResult({summary:text,urgency:"medie",proposals:[]}); setState("done"); }
    } catch { setState("error"); }
  };

  if (state==="idle") return (
    <div style={{textAlign:"center",padding:"36px 20px",background:"#f9fafb",borderRadius:12}}>
      <div style={{fontSize:32,marginBottom:12}}>🤖</div>
      <p style={{margin:"0 0 16px",fontSize:13,color:"#6b7280"}}>AI analizează istoricul comenzilor în contextul zilei din lună și generează propuneri optime.</p>
      <button onClick={generate} style={{padding:"10px 24px",background:"#185FA5",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontWeight:700,fontSize:13}}>
        Generează propuneri AI
      </button>
    </div>
  );
  if (state==="loading") return <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12,padding:"40px 20px"}}><Spin/><span style={{fontSize:13,color:"#6b7280"}}>Analizez contextul și istoricul...</span></div>;
  if (state==="error") return <div style={{padding:20,textAlign:"center",color:"#DC2626",fontSize:13}}>Eroare. Verificați cheia API în fișierul .env. <button onClick={generate} style={{color:"#185FA5",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"}}>Reîncearcă</button></div>;

  const urgMap = {ridicata:{bg:"#FEE2E2",color:"#DC2626"},medie:{bg:"#FEF3C7",color:"#B45309"},scazuta:{bg:"#DCFCE7",color:"#16A34A"}};
  const urg = urgMap[result.urgency]||urgMap.medie;

  return (
    <div style={{display:"flex",flexDirection:"column",gap:14}}>
      <div style={{background:"#EFF6FF",border:"0.5px solid #BFDBFE",borderRadius:12,padding:"14px 18px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"}}>
          <span style={{fontWeight:700,fontSize:13,color:"#1E40AF"}}>Analiza AI</span>
          <Pill text={result.urgency==="ridicata"?"🔴 Urgență ridicată":result.urgency==="medie"?"🟡 Urgență medie":"🟢 Urgență scăzută"} bg={urg.bg} color={urg.color}/>
        </div>
        <p style={{margin:"0 0 8px",fontSize:13,color:"#1E40AF",lineHeight:1.6}}>{result.summary}</p>
        {result.bestCallTime && <div style={{fontSize:12,color:"#185FA5",fontWeight:600}}>⏰ Cel mai bun moment: {result.bestCallTime}</div>}
      </div>
      {result.callScript && (
        <div style={{background:"#f9fafb",borderRadius:10,padding:"12px 16px",borderLeft:"3px solid #185FA5"}}>
          <div style={{fontSize:11,fontWeight:700,color:"#6b7280",marginBottom:6,textTransform:"uppercase"}}>📞 Script apel</div>
          <p style={{margin:0,fontSize:13,lineHeight:1.6,fontStyle:"italic"}}>"{result.callScript}"</p>
        </div>
      )}
      {result.proposals?.map((p,i)=>(
        <div key={i} style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:12,padding:"16px 18px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
            <div style={{flex:1,marginRight:12}}>
              <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{p.title}</div>
              <div style={{fontSize:13,color:"#6b7280",lineHeight:1.5}}>{p.reason}</div>
            </div>
            <div style={{textAlign:"right",flexShrink:0}}>
              <div style={{fontWeight:700,fontSize:15,color:"#15803D"}}>{(p.estimatedValue||0).toLocaleString("ro-RO")} RON</div>
              <div style={{fontSize:11,color:"#6b7280"}}>estimat</div>
            </div>
          </div>
          {p.products?.map((prod,j)=>(
            <div key={j} style={{display:"flex",alignItems:"center",gap:6,padding:"3px 0",fontSize:13}}>
              <span style={{color:"#15803D"}}>✓</span>{prod}
            </div>
          ))}
          <div style={{display:"flex",alignItems:"center",gap:8,marginTop:10}}>
            <div style={{flex:1,height:4,background:"#e5e7eb",borderRadius:2}}>
              <div style={{width:`${p.confidence||70}%`,height:"100%",background:p.confidence>=85?"#15803D":p.confidence>=70?"#B45309":"#DC2626",borderRadius:2}}/>
            </div>
            <span style={{fontSize:12,fontWeight:600,color:"#6b7280",minWidth:40}}>{p.confidence||70}%</span>
          </div>
        </div>
      ))}
      <button onClick={generate} style={{alignSelf:"flex-start",fontSize:12,padding:"6px 14px",borderRadius:8,border:"0.5px solid #e5e7eb",background:"transparent",color:"#6b7280",cursor:"pointer"}}>↻ Regenerează</button>
    </div>
  );
}

function ClientDetail({ client, onBack }) {
  const [tab, setTab] = useState("overview");
  const [chat, setChat] = useState(false);
  const lastOrderDate = client.orders[0]?.date;
  const salType = lastOrderDate ? getDayType(lastOrderDate) : null;
  const dom = new Date().getDate();
  const isGoodCallTime = (dom>=1&&dom<=15)||(dom>=14&&dom<=17)||(dom>=25);

  return (
    <div style={{paddingBottom:40}}>
      <button onClick={onBack} style={{display:"flex",alignItems:"center",gap:6,background:"none",border:"none",cursor:"pointer",color:"#6b7280",fontSize:13,marginBottom:16}}>
        ← Înapoi
      </button>
      {isGoodCallTime && (
        <div style={{background:"#FFF8E6",border:"1.5px solid #F0D080",borderRadius:10,padding:"10px 16px",marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:18}}>💳</span>
          <span style={{fontSize:13,color:"#7A5500",fontWeight:600}}>
            {dom<=15?"Perioada de PENSII activă — moment optim pentru apel!":dom<=17?"Perioada de SALARII BUGETARI activă — moment optim!":"Perioada de SALARII PRIVATE activă — moment optim!"}
          </span>
        </div>
      )}
      <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:14,padding:"18px 22px",marginBottom:14}}>
        <div style={{display:"flex",alignItems:"flex-start",gap:14,marginBottom:14}}>
          <Avatar name={client.name} size={50}/>
          <div style={{flex:1}}>
            <h2 style={{margin:"0 0 4px",fontSize:18,fontWeight:700}}>{client.name}</h2>
            <div style={{fontSize:13,color:"#6b7280"}}>{client.email!=="—"?client.email:"Email nedisponibil"}</div>
          </div>
          <button onClick={()=>setChat(true)} style={{display:"flex",alignItems:"center",gap:8,padding:"9px 16px",background:"#185FA5",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontWeight:700,fontSize:13,flexShrink:0}}>
            🤖 Chat AI
          </button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
          {[
            {label:"Total cheltuit",val:`${client.totalSpent.toLocaleString("ro-RO")} RON`},
            {label:"Nr. comenzi",val:client.ordersCount},
            {label:"Ultima comandă",val:lastOrderDate||"—"},
          ].map(m=>(
            <div key={m.label} style={{background:"#f9fafb",borderRadius:8,padding:"10px 12px"}}>
              <div style={{fontSize:11,color:"#6b7280",marginBottom:4}}>{m.label}</div>
              <div style={{fontSize:15,fontWeight:700}}>{m.val}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:"flex",gap:8,marginBottom:14}}>
        {[["overview","Prezentare"],["orders",`Comenzi (${client.orders.length})`],["proposals","Propuneri AI"]].map(([k,l])=>(
          <button key={k} onClick={()=>setTab(k)} style={{padding:"8px 16px",borderRadius:8,border:tab===k?"1.5px solid #185FA5":"0.5px solid #e5e7eb",background:tab===k?"#EFF6FF":"#fff",color:tab===k?"#185FA5":"#6b7280",cursor:"pointer",fontSize:13,fontWeight:tab===k?700:400}}>
            {l}
          </button>
        ))}
      </div>
      {tab==="overview" && (
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:12,padding:"16px 20px"}}>
            <h3 style={{margin:"0 0 12px",fontSize:14,fontWeight:700}}>Date client</h3>
            {[["Email",client.email],["Total cheltuit",`${client.totalSpent.toLocaleString("ro-RO")} RON`],["Nr. comenzi",client.ordersCount],["Valoare medie/comandă",`${(client.totalSpent/client.ordersCount).toFixed(2)} RON`],["Ultima comandă",lastOrderDate||"—"]].map(([l,v])=>(
              <div key={l} style={{display:"flex",gap:12,padding:"7px 0",borderBottom:"0.5px solid #e5e7eb",fontSize:13}}>
                <span style={{color:"#6b7280",minWidth:150}}>{l}</span>
                <span style={{fontWeight:600}}>{v}</span>
              </div>
            ))}
          </div>
          {salType && (
            <div style={{background:salType.bg,border:`1px solid ${salType.color}`,borderRadius:10,padding:"12px 16px"}}>
              <span style={{fontWeight:700,color:salType.color,fontSize:13}}>💳 Ultima comandă în perioada: {salType.label}</span>
              <p style={{margin:"6px 0 0",fontSize:12,color:salType.color}}>Clientul cumpără tipic în această fereastră. Contactați-l din nou în aceeași perioadă!</p>
            </div>
          )}
        </div>
      )}
      {tab==="orders" && (
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {client.orders.map((o,i)=>{
            const st = getDayType(o.date);
            return (
              <div key={i} style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:12,padding:"14px 18px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                    <span style={{fontWeight:700,fontSize:13}}>{o.name}</span>
                    <span style={{fontSize:12,color:"#6b7280"}}>{o.date}</span>
                    <Pill text={o.status} bg={o.status==="PAID"?"#DCFCE7":o.status==="VOIDED"?"#FEE2E2":"#FEF3C7"} color={o.status==="PAID"?"#15803D":o.status==="VOIDED"?"#DC2626":"#B45309"}/>
                    {st && <Pill text={`💳 ${st.label}`} bg={st.bg} color={st.color}/>}
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{fontWeight:700,color:"#15803D"}}>{o.total.toLocaleString("ro-RO")} RON</div>
                    <div style={{fontSize:11,color:"#6b7280"}}>{o.items} produse</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {tab==="proposals" && <AIProposals client={client}/>}
      {chat && <AIChat client={client} onClose={()=>setChat(false)}/>}
    </div>
  );
}

export default function CRM() {
  const [page, setPage] = useState("clients");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("totalSpent");

  const dom = new Date().getDate();
  const todayWindow = SALARY_WINDOWS.find(w=>w.days.includes(dom));
  const filtered = CUSTOMERS
    .filter(c=>!search||c.name.toLowerCase().includes(search.toLowerCase())||c.email.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b)=>sort==="name"?a.name.localeCompare(b.name):sort==="ordersCount"?b.ordersCount-a.ordersCount:b.totalSpent-a.totalSpent);
  const totalVal = CUSTOMERS.reduce((s,c)=>s+c.totalSpent,0);
  const avgOrder = DAILY_ORDERS.reduce((s,d)=>s+d.orders,0)/DAILY_ORDERS.length;
  const todayData = DAILY_ORDERS[DAILY_ORDERS.length-1];

  if (selected) {
    const client = CUSTOMERS.find(c=>c.id===selected);
    return <ClientDetail client={client} onBack={()=>setSelected(null)}/>;
  }

  return (
    <div style={{paddingBottom:40,fontFamily:"system-ui,sans-serif"}}>
      <style>{`@keyframes crmspin{to{transform:rotate(360deg)}} body{margin:0;padding:16px;background:#f9fafb}`}</style>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16,flexWrap:"wrap",gap:10}}>
        <div>
          <h2 style={{margin:"0 0 3px",fontSize:22,fontWeight:700}}>Sales CRM</h2>
          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
            <span style={{fontSize:13,color:"#6b7280"}}>Ferma cu Omenie · fermacuomenie.ro</span>
            <Pill text="● Shopify Plus · RON" bg="#DCFCE7" color="#15803D"/>
            {todayWindow && <Pill text={`💳 Azi: ${todayWindow.label}`} bg={todayWindow.bg} color={todayWindow.color} dot/>}
          </div>
        </div>
      </div>
      <div style={{display:"flex",gap:8,marginBottom:18}}>
        {[["clients","👥 Clienți"],["analytics","💳 Analiză salariu"],["calendar","📅 Calendar comenzi"]].map(([k,l])=>(
          <button key={k} onClick={()=>setPage(k)} style={{padding:"8px 16px",borderRadius:8,border:page===k?"1.5px solid #185FA5":"0.5px solid #e5e7eb",background:page===k?"#EFF6FF":"#fff",color:page===k?"#185FA5":"#6b7280",cursor:"pointer",fontSize:13,fontWeight:page===k?700:400}}>
            {l}
          </button>
        ))}
      </div>
      {page==="clients" && (
        <>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:18}}>
            {[
              {label:"Clienți în baza de date",val:CUSTOMERS.length,sub:"din Shopify"},
              {label:"Valoare totală",val:`${(totalVal/1000).toFixed(1)}k RON`,sub:"clienții afișați"},
              {label:"Comenzi ultima zi",val:todayData?.orders||0,sub:`${todayData?.sales.toLocaleString("ro-RO")} RON`},
              {label:"Medie zilnică (90z)",val:`${Math.round(avgOrder)} cmd`,sub:"din analytics Shopify"},
            ].map(s=>(
              <div key={s.label} style={{background:"#f9fafb",borderRadius:10,padding:"12px 14px",border:"0.5px solid #e5e7eb"}}>
                <div style={{fontSize:11,color:"#6b7280",marginBottom:4}}>{s.label}</div>
                <div style={{fontSize:20,fontWeight:700}}>{s.val}</div>
                <div style={{fontSize:11,color:"#6b7280"}}>{s.sub}</div>
              </div>
            ))}
          </div>
          {todayWindow && (
            <div style={{background:todayWindow.bg,border:`1.5px solid ${todayWindow.color}`,borderRadius:10,padding:"12px 16px",marginBottom:14,display:"flex",alignItems:"center",gap:12}}>
              <span style={{fontSize:24}}>💳</span>
              <div>
                <div style={{fontWeight:700,color:todayWindow.color,fontSize:13}}>Fereastră activă: {todayWindow.label}</div>
                <div style={{fontSize:12,color:todayWindow.color}}>Astăzi este o zi optimă pentru apeluri — clienții au buget disponibil. Prioritizează contactele!</div>
              </div>
            </div>
          )}
          <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Caută după nume sau email..."
              style={{flex:1,minWidth:180,fontSize:13,padding:"8px 12px",borderRadius:8,border:"0.5px solid #d1d5db",outline:"none",background:"#fff"}}/>
            <select value={sort} onChange={e=>setSort(e.target.value)}
              style={{fontSize:13,padding:"8px 12px",borderRadius:8,border:"0.5px solid #d1d5db",background:"#fff",cursor:"pointer"}}>
              <option value="totalSpent">Sortare: Valoare</option>
              <option value="ordersCount">Sortare: Nr. comenzi</option>
              <option value="name">Sortare: Nume</option>
            </select>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {filtered.map(client=>{
              const lastDate = client.orders[0]?.date;
              const salType = lastDate ? getDayType(lastDate) : null;
              return (
                <div key={client.id} onClick={()=>setSelected(client.id)}
                  style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:12,padding:"13px 18px",cursor:"pointer",display:"flex",alignItems:"center",gap:14,transition:"border-color 0.15s"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="#185FA5"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor="#e5e7eb"}
                >
                  <Avatar name={client.name} size={42}/>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3,flexWrap:"wrap"}}>
                      <span style={{fontWeight:700,fontSize:14}}>{client.name}</span>
                      {salType && <Pill text={`💳 ${salType.label}`} bg={salType.bg} color={salType.color}/>}
                    </div>
                    <div style={{fontSize:12,color:"#6b7280",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                      {client.email!=="—"?client.email:"Email nedisponibil"} · cmd: {lastDate||"—"}
                    </div>
                  </div>
                  <div style={{textAlign:"right",flexShrink:0}}>
                    <div style={{fontWeight:700,fontSize:14}}>{client.totalSpent.toLocaleString("ro-RO")} RON</div>
                    <div style={{fontSize:11,color:"#6b7280"}}>{client.ordersCount} {client.ordersCount===1?"comandă":"comenzi"}</div>
                  </div>
                  <span style={{color:"#9ca3af",fontSize:18,flexShrink:0}}>›</span>
                </div>
              );
            })}
          </div>
        </>
      )}
      {page==="analytics" && <SalaryAnalysis/>}
      {page==="calendar" && (
        <div style={{background:"#fff",border:"0.5px solid #e5e7eb",borderRadius:14,padding:"18px 22px"}}>
          <h3 style={{margin:"0 0 16px",fontSize:15,fontWeight:700}}>Calendar comenzi — 90 zile reale Shopify</h3>
          <CalendarHeatmap/>
        </div>
      )}
    </div>
  );
}
