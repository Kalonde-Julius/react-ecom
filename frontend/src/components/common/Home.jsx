import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import logo from '../../assets/images/logo/horizontal.png';
import logo2 from '../../assets/images/logo/logo.png';
import banner2 from '../../assets/images/banner2.avif';
import banner3 from '../../assets/images/banner3.avif';

import LatestProducts from './LatestProducts';
import FeaturedProducts from './FeaturedProducts';


const Home = () => {
  return (

    <>
    <header className='shadow'>

      <div className='bg-dark text-center py-3'>
        <span className='text-white'> Your fashion partner </span>
      </div>

    <div className='container'> 
        <Navbar expand="lg" className="">      
            <Navbar.Brand href="#">
                <img src={logo} alt="logo" width={160}/> 
                    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#action1"> Men </Nav.Link>
                <Nav.Link href="#action1"> Women </Nav.Link>
                <Nav.Link href="#action2"> Kids </Nav.Link>
            </Nav>  

            <div className='nav-right d-flex'>
                <a href='' className='ms-3'>
                    <svg xmlns="https://www.svgrepo.com/svg/458972/user-alt" width="28" height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path></svg>   
                </a> 
                <a href='' className='ms-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 13H4a.5.5 0 0 1-.49-.402L1.61 2H.5a.5.5 0 0 1-.5-.5zM3.14 6l1.25 5h8.22l1.25-5H3.14zM5.5 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/> </svg>
                </a>   
            </div>        
            </Navbar.Collapse>

        </Navbar>
    </div>

    </header>

    <section className='section-1'>
        <Swiper spaceBetween={0} slidesPerView={1} 
        breakpoints={{ 
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
         }}>
            <SwiperSlide>
                <div className='content' 
                    style={{ backgroundImage: `url(${banner2})` }}> 
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='content' 
                    style={{ backgroundImage: `url(${banner3})` }}> 
                </div>
            </SwiperSlide>

        </Swiper>
    </section>

  <LatestProducts />

  <FeaturedProducts />

  <footer>
    <div className='container py-1'>
        
        <div className='row pt-1'> 
            
            <div className='col-md-3 text-center'>
                <h3> Categories </h3>
                <ul>
                    <li>
                        <a href='#'> Kids </a>
                    </li>
                    <li>
                        <a href='#'> Women </a>
                    </li>
                    <li>
                        <a href='#'> Men </a>
                    </li>
                </ul>
            </div>

            <div className='col-md-3 text-center'>
                <h3> Quick Links </h3>
                <ul>
                    <li>
                        <a href='#'> Login </a>
                    </li>
                    <li>
                        <a href='#'> Register </a>
                    </li>
                </ul>
            </div>

            <div className='col-md-3 text-center mr-7'>
                <h3> Get in Touch </h3>
                <ul>
                    <li>
                        <a href='#'> +256704999056 </a>
                    </li>
                    <li>
                        <a href='#'> Kalondejulius@gmail.com </a>
                    </li>
                    <li className='d-flex justify-content-center'>
                        <a href='https://x.com/SeguyaGavillia2'> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.009-.422A6.683 6.683 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='col-md-3 p-1'>
                <img src={logo2} alt="logo" width={240} height={125} />
                <p className='text-center pt-1 mx-4'>
                <strong className='text-white fw-bold flex-column'>  
                    &copy; Kalonde Julius {new Date().getFullYear()} 
                </strong>
                </p>
            </div>
            
        </div>
    </div>
  </footer>

    </>

  )
}

export default Home
