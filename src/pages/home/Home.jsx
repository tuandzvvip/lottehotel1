import React from 'react'
import Header from '../../components/header/Header'
import Taskbar from '../../components/taskbar/Taskbar'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"
import Slider from '../../components/slide/Slider'
import Content from '../../components/content/Content'
import Content1 from '../../components/content1/COntent1'
import Video from '../../components/video/Video'
import Map from '../../map/Map'
import Hero from '../../components/carousel/Hero'
import Content2 from '../../components/content2/Content2'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div className='home'>
        <Header  />
        <Taskbar  />
        <Navbar />
        <Slider />
        <Content/>
        <Content1/>
        <Video/>
        <Map />
        <Hero/>
        <Content2/>
        <Footer/>
    </div>
  )
}

export default Home