export default function Venue() {
  return (
    <div>
      <h2 style={{fontSize:"2rem",fontWeight:700,textAlign:"center",marginBottom:12,background:"linear-gradient(135deg,#fff,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Venue</h2>
      <p style={{textAlign:"center",color:"#94a3b8",marginBottom:48}}>Join us at the heart of India's Silicon Valley</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24,alignItems:"start"}}>
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          <div style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:20,padding:24}}>
            <div style={{fontWeight:700,fontSize:"1.1rem",marginBottom:8}}>Bangalore International Exhibition Centre</div>
            <div style={{color:"#94a3b8",fontSize:"0.9rem",lineHeight:1.7}}>10th Mile, Tumkur Road<br/>Madavara Post, Bangalore<br/>Karnataka 562123, India</div>
          </div>
          <div style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:20,padding:24}}>
            <div style={{fontWeight:600,marginBottom:12}}>Getting There</div>
            {[["🚇","Metro","Green Line to Peenya, then cab"],["✈️","Airport","45 min from Kempegowda Int'l"],["🚌","Bus","BMTC routes 252E, 400"],["🚗","Drive","Ample parking on-site"]].map(([icon,mode,detail])=>(
              <div key={mode} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:12}}>
                <span style={{fontSize:16}}>{icon}</span>
                <div><span style={{fontWeight:600,fontSize:"0.9rem"}}>{mode}: </span><span style={{color:"#94a3b8",fontSize:"0.87rem"}}>{detail}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{borderRadius:16,overflow:"hidden",border:"1px solid rgba(255,255,255,0.1)",height:420}}>
          <iframe title="Venue Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d77.5!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1d88888889%3A0x1234567890abcdef!2sBangalore+International+Exhibition+Centre!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{border:0,display:"block"}} allowFullScreen="" loading="lazy"/>
        </div>
      </div>
    </div>
  );
}
