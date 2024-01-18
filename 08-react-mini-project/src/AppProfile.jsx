import ninaImage from './assets/nina.jpg'
import ninaBgImage from './assets/nina-bg.jpg'
import maxImage from './assets/max.jpg'
import maxBgImage from './assets/max-bg.jpg'
import './AppProfile.css'

function App() {

  return (
    <div className='main'>
      {/* <Pofile name={"Nina Correia"} age={23} location={"Dhaka"} followers={"80K"} likes={"803K"} Photos={"1.4K"} image={ninaImage}
      bgImage={ninaBgImage}/> */}
      <Pofile name={"Max Bail"} age={22} location={"Chittagong"} followers={"80K"} likes={"803K"} Photos={"1.4K"} image={maxImage}
      bgImage={maxBgImage}/>
    </div>
  )
}

export default App


function Pofile({name,age,location,followers,likes,Photos,image,bgImage}){
  return <>
    <div className="container">
      <div className="images">
          <img src={bgImage}  alt="Background-Image" id='bgimage'/>
          <img src={image} alt="Profile-Image" id='image'/>
      </div>
      <div className="identity">
          <h3> {name} <span> {age} </span></h3>
          <p className='location'>{location}</p>
      </div>
      <hr />
      <div className="credentials">
          <div className="crd">
            <h3>{followers}</h3>
            <p>Followers</p>
          </div>
          <div className="crd">
            <h3>{likes}</h3>
            <p>Likes</p>
          </div>
          <div className="crd">
            <h3>{Photos}</h3>
            <p>Photos</p>
          </div>
      </div>
    </div>
  </>
}