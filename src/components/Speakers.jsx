const speakers=[
  {name:"Dr. Priya Sharma",role:"AI Research Lead",company:"Google DeepMind",initials:"PS",color:"#818cf8"},
  {name:"Arjun Mehta",role:"Cloud Architect",company:"Microsoft Azure",initials:"AM",color:"#22d3ee"},
  {name:"Sneha Patel",role:"Firebase Engineer",company:"Google",initials:"SP",color:"#34d399"},
  {name:"Vikram Singh",role:"Frontend Expert",company:"Meta",initials:"VS",color:"#fbbf24"},
  {name:"Ananya Krishnan",role:"CTO",company:"Razorpay",initials:"AK",color:"#f472b6"},
  {name:"Dr. Karan Bose",role:"ML Research Scientist",company:"IISc Bangalore",initials:"KB",color:"#fb923c"},
];
export default function Speakers() {
  return (
    <div>
      <h2 style={{fontSize:"2rem",fontWeight:700,textAlign:"center",marginBottom:12,background:"linear-gradient(135deg,#fff,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Featured Speakers</h2>
      <p style={{textAlign:"center",color:"#94a3b8",marginBottom:48}}>Learn from the best minds in tech</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:20}}>
        {speakers.map(s=>(
          <div key={s.name} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:20,padding:"28px 16px",textAlign:"center",transition:"transform 0.2s"}}>
            <div style={{width:72,height:72,borderRadius:"50%",margin:"0 auto 16px",background:`${s.color}22`,border:`2px solid ${s.color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",fontWeight:800,color:s.color}}>{s.initials}</div>
            <div style={{fontWeight:700,fontSize:"0.97rem",marginBottom:4}}>{s.name}</div>
            <div style={{fontSize:"0.82rem",color:"#818cf8",marginBottom:4}}>{s.role}</div>
            <div style={{fontSize:"0.78rem",color:"#64748b"}}>{s.company}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
