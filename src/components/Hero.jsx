export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",paddingTop:80,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,zIndex:0,background:"radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,70,229,0.18) 0%, transparent 70%)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,maxWidth:760,padding:"0 20px"}}>
        <span style={{display:"inline-block",padding:"4px 14px",borderRadius:999,fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em",background:"rgba(6,182,212,0.2)",color:"#22d3ee",border:"1px solid rgba(6,182,212,0.3)",marginBottom:24}}>May 22–24, 2026 · Bengaluru, India</span>
        <h1 style={{fontSize:"clamp(2.5rem,6vw,4.5rem)",fontWeight:800,lineHeight:1.1,letterSpacing:"-0.03em",marginBottom:24}}>Where Innovation<br/><span style={{background:"linear-gradient(135deg,#818cf8,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Meets the Future</span></h1>
        <p style={{fontSize:"1.15rem",color:"#94a3b8",maxWidth:560,margin:"0 auto 40px"}}>Join 5,000+ developers, designers, and innovators at India's premier tech conference. 3 days of cutting-edge talks, workshops, and networking.</p>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={()=>scrollTo("checkin")} style={{background:"#4f46e5",color:"white",border:"none",padding:"14px 32px",borderRadius:12,fontSize:"1rem",fontWeight:600,cursor:"pointer"}}>Register Now →</button>
          <button onClick={()=>scrollTo("schedule")} style={{background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.2)",padding:"14px 32px",borderRadius:12,fontSize:"1rem",fontWeight:600,cursor:"pointer"}}>View Schedule</button>
        </div>
        <div style={{display:"flex",gap:40,justifyContent:"center",marginTop:64,flexWrap:"wrap"}}>
          {[["5,000+","Attendees"],["80+","Speakers"],["30+","Workshops"],["3","Days"]].map(([num,label])=>(
            <div key={label} style={{textAlign:"center"}}>
              <div style={{fontSize:"2rem",fontWeight:800,color:"#818cf8"}}>{num}</div>
              <div style={{fontSize:"0.85rem",color:"#94a3b8",marginTop:4}}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
