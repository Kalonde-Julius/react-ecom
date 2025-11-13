import React from 'react'




//import logo from '../../assets/images/logo/horizontal.png';

import LatestProducts from './LatestProducts';
import FeaturedProducts from './FeaturedProducts';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Layout from './Layout';


const Home = () => {
  return (

    <>
    <Layout>
        <Hero />

        <LatestProducts />

        <FeaturedProducts />

    </Layout>

    </>

  )
}

export default Home
