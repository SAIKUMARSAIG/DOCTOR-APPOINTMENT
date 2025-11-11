import React from 'react'
import H1 from '../components/Home/H1'
import H4 from '../components/Home/Banner'
import H2 from '../components/Home/SpecialityMenu'
import TopDoctors from '../components/Home/TopDoctors'

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <H1 />
      <H2 />
      <TopDoctors />
      <H4 />
    </div>
  )
}

export default Home
