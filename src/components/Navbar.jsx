import { useState, useEffect } from "react";
const links=["home","schedule","speakers","checkin","venue"];
export default function Navbar({activeSection,setActiveSection}) {
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>40);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);},[]);
  const scrollTo=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setActiveSection(id);};
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:scrolled?"rgba(15,15,26,0.95)":"transparent",backdropFilter:scrolled?"blur(12px)":"none",borderBottom:scrolled?"1px solid rgba(255,255,255,0.08)":"none",transition:"all 0.3s",padding:"0 24px"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <span style={{fontWeight:800,fontSize:"1.2rem"}}><span style={{color:"#818cf8"}}>Innovate</span>Con 2026</span>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {links.map(l=>(
            <button key={l} onClick={()=>scrollTo(l)} style={{background:activeSection===l?"rgba(79,70,229,0.15)":"transparent",color:activeSection===l?"#818cf8":"#94a3b8",border:"none",padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:"0.9rem",fontWeight:500,textTransform:"capitalize"}}>
              {l==="checkin"?"Check-In":l.charAt(0).toUpperCase()+l.slice(1)}
            </button>
          ))}
          <button onClick={()=>scrollTo("checkin")} style={{background:"#4f46e5",color:"white",border:"none",padding:"8px 18px",borderRadius:8,cursor:"pointer",fontSize:"0.85rem",fontWeight:600}}>Register</button>
        </div>
      </div>
    </nav>
  );
}
