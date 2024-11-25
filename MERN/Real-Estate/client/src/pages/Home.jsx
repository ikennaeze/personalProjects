import React from 'react'
import Categories from '../components/Categories'
import TopApartments from '../components/TopApartments'
import Main from '../components/Main'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Main/>
        <Categories/>
        <TopApartments/>
        <Banner/>
        <Footer/>
    </>
  )
}

export default Home