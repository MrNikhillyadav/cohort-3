import  "./index.css";

export default function App() {

  const postData = [
    {
      id: 1,
      name:"Nikhil Y",
      time : "3 min",
      description : "In 2010, Google and Oracle went head-to-head in the biggest copyright case in history.",
      img: "https://i.pinimg.com/236x/bf/34/03/bf34037d138cf16a5f8e1410a4e61e2d.jpg"
  },
    {
      id: 2,
      name:"Hrithik Roshan",
      time : "1 hr",
      description : "Your brain has been fooling you your entire life. This Nobel Prize winner spent 40 years proving it.Your brain has been fooling you your entire life. This Nobel Prize winner spent 40 years proving it.",
      img: "https://i.pinimg.com/236x/bf/34/03/bf34037d138cf16a5f8e1410a4e61e2d.jpg"
  },
    {
      id: 3,
      name:"Harkirat Singh",
      time : "2 days",
      description : "we are designing interfaces where agents perform actions without prompts.",
        img: "https://i.pinimg.com/236x/bf/34/03/bf34037d138cf16a5f8e1410a4e61e2d.jpg"
  },
]

  return (
    <div className="post-bg" style={{height:"100vh",  width:"100vw", display:"flex", 
          alignItems:"center", justifyContent:"center"}}>

      {
        postData.map((post)=>(
                <PostComponent 
                  key={post.id} 
                  name={post.name} 
                  time={post.time} 
                  description={post.description} 
                  img={post.img} />

        ))
      }


    </div>
  );
}

const style =
  {
    display:"flex",
    justifyContent:"space-between",
    alignContent:'center',
    padding:"10px",
  }



function PostComponent({name,time,description,img}) {
  return (
    <>
        <div  style={{
          width: 500,
          margin:10,
          borderRadius:30,
          border:'white',
          borderWidth:2,
          boxShadow:'white',
          background: "black",
          padding:15,
          display:"flex",
          flexDirection:"column",
          alignItems:'center',
          justifyContent:'center'
        }}>

          <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignContent:'center',
            padding:10

          }}>

            <div style={{
              display:"flex",
              justifyContent:'center',
              alignItems:'center',
              marginRight:200,
              gap:10
              
            }}>
                  <img 
                      style={{ display:'flex',border:'white', backgroundColor:'black',  borderRadius:100, width:70, height:70}}
                      src={img } alt="" />
                    
                    <div>
                      {name}
                      <br />
                      Posted {time} ago
                    </div>

            </div>
                

          </div>

          <div>
            <p style={{color:'white',paddingLeft:40,paddingRight:40}}>
              {description}
            </p>
          </div>

          <div className='poll-bg' style={{
            width:400,
            height: 200,
            padding:20,
            paddingBottom:40,
            backgroundColor:'violet',
            color:'white',
            borderRadius: 20
          }}>

            <h3>Favourite Fitness Snacks?</h3>
            <p>Fresh Fruit</p>
            <p>Veggie Sticks</p>
            <p>Avacado Toast</p>

          </div>

          <div style={style}>
              <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                marginRight:80,
                cursor:'pointer'
              }} >
                    <div style={style}>
                        <img className="eye" style={{
                          width:30,
                          height:30,
                        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMh3KETFhBkNmMaBPcKAeVvWxCwgPYU0M8TA&s" alt="" />
                          5,874
                    </div>
                    <div style={style}>
                        <img className="eye" style={{
                          width:30,
                          height:30,
                        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMh3KETFhBkNmMaBPcKAeVvWxCwgPYU0M8TA&s" alt="" />
                          215
                    </div>
                    <div style={style}>
                        <img   style={{
                          padding:4,
                          width:25,
                          height:25,
                        }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1swDJYHJOceWHUv3znBIn9oC3kT-Aw7JFA&s" alt="" />
                          11
                    </div>
              </div>
              <div style={{padding:2, marginTop:4}}>
                      save
              </div>
          </div>

          




        </div>
    </>
  )
}