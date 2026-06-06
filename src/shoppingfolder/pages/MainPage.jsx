import React,{useState} from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Gents,Ladies,Banners} from '../data'
import WomenCollection from '../WomenCollection'

const MainPage = () => {

  const [gentsFashion,setGentsFashion] = useState(Gents)
  const [ladiesFashion,setLadiesFashion] = useState(Ladies)
  const [banners,setBanners] = useState(Banners)
  return (
    <div>
      
      <Header />
     <Banner banner={banners.banner1}/>
     <Collections gentsFashion={gentsFashion}/>
     <Banner banner={banners.banner2}/>
     <WomenCollection ladiesFashion={ladiesFashion}/>
     <Footer />
    </div>
  )
}

export default MainPage
