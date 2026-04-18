import { useState, useEffect } from "react";

export default function CheckIn() {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({name:"",email:"",role:"Developer",days:"All 3 Days"});
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [lookup, setLookup] = useState("");
  const [lookupResult, setLookupResult] = useState(null);
  const [lookupError, setLookupError] = useState("");
  const [tab, setTab] = useState("register");

  useEffect(()=>{
    const saved = localStorage.getItem("innovatcon_tickets");
    if(saved) setTickets(JSON.parse(saved));
  },[]);

  const saveTickets = (updated) => {
    setTickets(updated);
    localStorage.setItem("innovatcon_tickets", JSON.stringify(updated));
  };

  const handleRegister=(e)=>{
    e.preventDefault();
    if(!form.name||!form.email)return;
    const id="IC2026-"+Math.floor(1000+Math.random()*9000);
    const newTicket={id, name:form.name, email:form.email.toLowerCase(), role:form.role, days:form.days};
    saveTickets([...tickets, newTicket]);
    setTicketId(id);
    setSubmitted(true);
  };

  const handleLookup=(e)=>{
    e.preventDefault();
    const found=tickets.find(t=>
      t.id.toLowerCase()===lookup.toLowerCase()||
      t.email.toLowerCase()===lookup.toLowerCase()
    );
    if(found){setLookupResult(found);setLookupError("");}
    else{setLookupResult(null);setLookupError("No ticket found. Please check your Ticket ID or email.");}
  };

  const inputStyle={background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"white",borderRadius:12,padding:"12px 16px",fontSize:"0.95rem",width:"100%",outline:"none"};
  const selectStyle={...inputStyle,background:"#1a1a2e"};

  return (
    <div>
      <h2 style={{fontSize:"2rem",fontWeight:700,textAlign:"center",marginBottom:12,background:"linear-gradient(135deg,#fff,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Event Check-In</h2>
      <p style={{textAlign:"center",color:"#94a3b8",marginBottom:48}}>Register or look up your ticket</p>
      <div style={{maxWidth:560,margin:"0 auto"}}>
        <div style={{display:"flex",marginBottom:32,background:"rgba(255,255,255,0.05)",borderRadius:12,padding:4}}>
          {["register","lookup"].map(t=>(
            <button key={t} onClick={()=>{setTab(t);setLookupResult(null);setLookupError("");}} style={{flex:1,padding:10,borderRadius:9,border:"none",background:tab===t?"#4f46e5":"transparent",color:tab===t?"white":"#94a3b8",cursor:"pointer",fontWeight:600,fontSize:"0.9rem"}}>
              {t==="register"?"New Registration":"Ticket Lookup"}
            </button>
          ))}
        </div>

        {tab==="register"&&!submitted&&(
          <form onSubmit={handleRegister} style={{display:"flex",flexDirection:"column",gap:16}}>
            <div><label style={{fontSize:"0.85rem",color:"#94a3b8",marginBottom:6,display:"block"}}>Full Name *</label><input placeholder="Enter your full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required style={inputStyle}/></div>
            <div><label style={{fontSize:"0.85rem",color:"#94a3b8",marginBottom:6,display:"block"}}>Email Address *</label><input type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required style={inputStyle}/></div>
            <div><label style={{fontSize:"0.85rem",color:"#94a3b8",marginBottom:6,display:"block"}}>Your Role</label>
              <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})} style={selectStyle}>
                {["Developer","Designer","Product Manager","Student","Entrepreneur","Other"].map(r=><option key={r}>{r}</option>)}
              </select>
            </div>
            <div><label style={{fontSize:"0.85rem",color:"#94a3b8",marginBottom:6,display:"block"}}>Attendance</label>
              <select value={form.days} onChange={e=>setForm({...form,days:e.target.value})} style={selectStyle}>
                {["All 3 Days","Day 1 Only","Day 2 Only","Day 3 Only"].map(d=><option key={d}>{d}</option>)}
              </select>
            </div>
            <button type="submit" style={{background:"#4f46e5",color:"white",border:"none",padding:"14px",borderRadius:12,fontSize:"1rem",fontWeight:600,cursor:"pointer",marginTop:8}}>Complete Registration →</button>
          </form>
        )}

        {tab==="register"&&submitted&&(
          <div style={{textAlign:"center",padding:40,background:"rgba(255,255,255,0.05)",borderRadius:20,border:"1px solid rgba(79,70,229,0.4)"}}>
            <div style={{fontSize:"3rem",marginBottom:16}}>🎉</div>
            <div style={{fontWeight:800,fontSize:"1.4rem",marginBottom:8,color:"#818cf8"}}>You're Registered!</div>
            <p style={{color:"#94a3b8",marginBottom:24}}>Welcome to InnovateCon 2026, {form.name}!</p>
            <div style={{background:"rgba(79,70,229,0.1)",borderRadius:10,padding:"16px 24px",marginBottom:8}}>
              <div style={{fontSize:"0.8rem",color:"#94a3b8",marginBottom:4}}>Your Ticket ID</div>
              <div style={{fontWeight:800,fontSize:"1.5rem",letterSpacing:"0.05em",color:"#818cf8"}}>{ticketId}</div>
            </div>
            <div style={{fontSize:"0.82rem",color:"#64748b",marginBottom:20}}>Save this ID — use it in Ticket Lookup anytime</div>
            <div style={{fontSize:"0.85rem",color:"#64748b",marginBottom:20}}>Registered with: {form.email}</div>
            <button style={{background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.2)",padding:"12px 28px",borderRadius:12,cursor:"pointer",fontWeight:600}} onClick={()=>{setSubmitted(false);setForm({name:"",email:"",role:"Developer",days:"All 3 Days"});}}>Register Another</button>
          </div>
        )}

        {tab==="lookup"&&(
          <div>
            <form onSubmit={handleLookup} style={{display:"flex",flexDirection:"column",gap:16}}>
              <div><label style={{fontSize:"0.85rem",color:"#94a3b8",marginBottom:6,display:"block"}}>Ticket ID or Email</label>
                <input placeholder="e.g. IC2026-1234 or your email" value={lookup} onChange={e=>{setLookup(e.target.value);setLookupResult(null);setLookupError("");}} style={inputStyle}/>
              </div>
              <button type="submit" style={{background:"#4f46e5",color:"white",border:"none",padding:13,borderRadius:12,fontSize:"1rem",fontWeight:600,cursor:"pointer"}}>Look Up Ticket</button>
            </form>
            {lookupError&&<div style={{marginTop:20,padding:"14px 18px",borderRadius:10,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.2)",color:"#f87171",fontSize:"0.9rem"}}>{lookupError}</div>}
            {lookupResult&&(
              <div style={{marginTop:20,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(79,70,229,0.4)",borderRadius:20,padding:24}}>
                <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:16}}>
                  <div style={{width:48,height:48,borderRadius:"50%",background:"rgba(79,70,229,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#818cf8",fontSize:"1.1rem"}}>{lookupResult.name.split(" ").map(n=>n[0]).join("")}</div>
                  <div><div style={{fontWeight:700}}>{lookupResult.name}</div><div style={{fontSize:"0.85rem",color:"#94a3b8"}}>{lookupResult.email}</div></div>
                </div>
                <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:12}}>
                  <span style={{background:"rgba(79,70,229,0.2)",color:"#818cf8",padding:"4px 14px",borderRadius:999,fontSize:12,fontWeight:600}}>{lookupResult.id}</span>
                  <span style={{background:"rgba(6,182,212,0.2)",color:"#22d3ee",padding:"4px 14px",borderRadius:999,fontSize:12,fontWeight:600}}>{lookupResult.role}</span>
                  <span style={{background:"rgba(16,185,129,0.2)",color:"#34d399",padding:"4px 14px",borderRadius:999,fontSize:12,fontWeight:600}}>✓ Confirmed</span>
                </div>
                <div style={{fontSize:"0.85rem",color:"#64748b"}}>Attending: {lookupResult.days}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
