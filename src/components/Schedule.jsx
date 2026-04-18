import { useState } from "react";
const days = [
  {day:"Day 1",date:"May 22",events:[
    {time:"09:00",title:"Opening Keynote: The AI Revolution",speaker:"Dr. Priya Sharma",track:"Main Stage",type:"keynote"},
    {time:"10:30",title:"Building Scalable Cloud Architectures",speaker:"Arjun Mehta",track:"Cloud",type:"talk"},
    {time:"12:00",title:"Lunch & Networking",speaker:"",track:"All",type:"break"},
    {time:"13:30",title:"Workshop: Vibe Coding with Google Antigravity",speaker:"Team Google",track:"Workshop",type:"workshop"},
    {time:"15:30",title:"Panel: Future of Generative AI in India",speaker:"Multiple Speakers",track:"Main Stage",type:"panel"},
    {time:"17:30",title:"Networking Happy Hour",speaker:"",track:"All",type:"break"},
  ]},
  {day:"Day 2",date:"May 23",events:[
    {time:"09:30",title:"Keynote: Open Source & Community",speaker:"Rahul Gupta",track:"Main Stage",type:"keynote"},
    {time:"11:00",title:"Deep Dive: Firebase & Real-time Apps",speaker:"Sneha Patel",track:"Firebase",type:"talk"},
    {time:"12:30",title:"Lunch Break",speaker:"",track:"All",type:"break"},
    {time:"14:00",title:"Workshop: React Performance Mastery",speaker:"Vikram Singh",track:"Workshop",type:"workshop"},
    {time:"16:00",title:"Startup Pitch Competition",speaker:"Various",track:"Stage B",type:"special"},
    {time:"18:00",title:"Cultural Evening",speaker:"",track:"All",type:"break"},
  ]},
  {day:"Day 3",date:"May 24",events:[
    {time:"09:30",title:"Keynote: India's Tech Decade",speaker:"Ananya Krishnan",track:"Main Stage",type:"keynote"},
    {time:"11:00",title:"ML Ops in Production",speaker:"Dr. Karan Bose",track:"ML",type:"talk"},
    {time:"12:30",title:"Lunch Break",speaker:"",track:"All",type:"break"},
    {time:"14:00",title:"Hackathon Showcase",speaker:"Participants",track:"Main Stage",type:"special"},
    {time:"16:30",title:"Closing Ceremony & Awards",speaker:"Organizers",track:"Main Stage",type:"keynote"},
  ]},
];
const tc={keynote:{bg:"rgba(79,70,229,0.15)",color:"#818cf8",label:"Keynote"},talk:{bg:"rgba(6,182,212,0.15)",color:"#22d3ee",label:"Talk"},workshop:{bg:"rgba(16,185,129,0.15)",color:"#34d399",label:"Workshop"},panel:{bg:"rgba(245,158,11,0.15)",color:"#fbbf24",label:"Panel"},special:{bg:"rgba(236,72,153,0.15)",color:"#f472b6",label:"Special"},break:{bg:"rgba(148,163,184,0.1)",color:"#64748b",label:"Break"}};
export default function Schedule() {
  const [activeDay,setActiveDay]=useState(0);
  return (
    <div>
      <h2 style={{fontSize:"2rem",fontWeight:700,textAlign:"center",marginBottom:12,background:"linear-gradient(135deg,#fff,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Event Schedule</h2>
      <p style={{textAlign:"center",color:"#94a3b8",marginBottom:48}}>3 days packed with learning, building, and connecting</p>
      <div style={{display:"flex",gap:12,justifyContent:"center",marginBottom:40,flexWrap:"wrap"}}>
        {days.map((d,i)=>(
          <button key={i} onClick={()=>setActiveDay(i)} style={{padding:"10px 24px",borderRadius:10,border:"1px solid",borderColor:activeDay===i?"#4f46e5":"rgba(255,255,255,0.1)",background:activeDay===i?"rgba(79,70,229,0.15)":"transparent",color:activeDay===i?"#818cf8":"#94a3b8",cursor:"pointer",fontWeight:600,fontSize:"0.9rem"}}>
            {d.day} · {d.date}
          </button>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:12,maxWidth:720,margin:"0 auto"}}>
        {days[activeDay].events.map((ev,i)=>{
          const t=tc[ev.type];
          return (
            <div key={i} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,padding:"18px 22px",display:"flex",gap:20,alignItems:"flex-start"}}>
              <div style={{minWidth:54,fontWeight:700,color:"#818cf8",fontSize:"0.95rem",paddingTop:2}}>{ev.time}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
                  <span style={{fontWeight:600,fontSize:"0.97rem"}}>{ev.title}</span>
                  <span style={{background:t.bg,color:t.color,fontSize:11,fontWeight:700,padding:"2px 10px",borderRadius:999,textTransform:"uppercase"}}>{t.label}</span>
                </div>
                {ev.speaker&&<div style={{fontSize:"0.85rem",color:"#94a3b8"}}>{ev.speaker} · {ev.track}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
