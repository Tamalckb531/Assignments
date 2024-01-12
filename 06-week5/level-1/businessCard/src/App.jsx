import { useState } from 'react'

function App() {
  const interest = ['Open source', 'mobile app', 'ML'];
  const socialLink = ['https://www.linkedin.com/in/tamal-chakraborty-dip/', 'https://twitter.com/TamalCDip'];

  return (
    <>
      <div className="main">
          <BusinessCard name={"Tamal"} description={"Web dev enthusiast"} interest={interest} socialLink={socialLink}/>
          <BusinessCard name={"Tamal"} description={"Web dev enthusiast"} interest={interest} socialLink={socialLink}/>
          <BusinessCard name={"Tamal"} description={"Web dev enthusiast"} interest={interest} socialLink={socialLink}/>
          <BusinessCard name={"Tamal"} description={"Web dev enthusiast"} interest={interest} socialLink={socialLink}/>
          <BusinessCard name={"Tamal"} description={"Web dev enthusiast"} interest={interest} socialLink={socialLink}/>
      </div>  
    </>
  )
}

function BusinessCard({name, description, interest, socialLink}){
  return <div className="container">
    <h1>{name}</h1>
    <p>{description}</p>
    <h3>Interest</h3>
    <ul>
      <li>{interest[0]}</li>
      <li>{interest[1]}</li>
      <li>{interest[2]}</li>
    </ul>
    <div className="buttoncontainer">
      <button className='btn'><a href={socialLink[0]} target='_blank'>LinkedIn</a></button>
      <button className='btn'><a href={socialLink[1]} target='_blank'>Twitter</a></button>
    </div>
  </div>
}

export default App
