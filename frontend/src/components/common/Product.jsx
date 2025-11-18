import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Link } from 'react-router-dom'
import Layout from './Layout';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import { Rating } from 'react-simple-star-rating';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import men1 from '../../assets/images/men/men-1.avif';
import men2 from '../../assets/images/men/men-2.avif';
import men3 from '../../assets/images/men/men-3.avif';
import men4 from '../../assets/images/men/men-4.avif';
import men5 from '../../assets/images/men/men-5.avif';
import men6 from '../../assets/images/men/men-6.avif';
import men7 from '../../assets/images/men/men-7.avif';
import men8 from '../../assets/images/men/men-8.avif';
import men9 from '../../assets/images/men/men-9.avif';
import men10 from '../../assets/images/men/men-10.avif';



const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating, setRating] = useState(4);
     // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }


  return (

    <Layout>
        <div className='container product-detail'>

            <div className='row'>
                <nav aria-label="breadcrumb" className='py-3'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/"> Home </Link> 
                        </li>

                        <li className="breadcrumb-item" aria-current="page">
                            <Link to="/shop"> Shop </Link>
                        </li>

                        <li className="breadcrumb-item active" aria-current="page">
                            Dummy Product Title 
                        </li>
                    </ol>
                </nav>            
            </div>

        <div className='row mb-3'>
            <div className='col-md-5'>

                <div className="d-flex flex-col-4">
                    <div className="col-2">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#000',
                                '--swiper-pagination-color': '#000',
                                }}
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                direction={`horizontal`}
                                spaceBetween={10}
                                slidesPerView={6}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper mt-2"
                            >
                                    
                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men1} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men2} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men3} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                   <img src={men4} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men5} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men6} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men7} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men8} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men9} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men10} alt="" height={100} className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="col-10">
                        <Swiper
                            style={{
                            '--swiper-navigation-color': '#000',
                            '--swiper-pagination-color': '#000',
                            }}
                            loop={true}
                            spaceBetween={0}
                            navigation={true}
                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : { swiper: thumbsSwiper } }
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            
                            <SwiperSlide >
                                <div className='content'>
                                    <img src={men1} alt="" className='w-100' />
                                </div>
                            </SwiperSlide>   

                            <SwiperSlide >
                                <div className='content'>
                                    <img src={men2} alt="" className='w-100' />
                                </div>
                            </SwiperSlide>  

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men3} alt="" className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men4} alt="" className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men5} alt="" className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men6} alt="" className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                   <img src={men7} alt="" className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men8} alt="" className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men9} alt="" className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='content'>
                                    <img src={men10} alt="" className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>       
                            </Swiper>

                    </div>
                </div>

            </div>

            <div className="col-md-7">
                <h2> Dummy Product Title </h2>

                <div className='d-flex align-items-center mb-3'>
                    {/* set initial value */}
                    <Rating onClick={handleRating} initialValue={rating} size={20} readonly /* Available Props */ />

                    <span className='pt-1 ps-2'> (10 Reviews) </span>
                </div>
                        
                <div className="price h3 px-4">
                    UGX 50,000/= <br/>
                    <span className='text-decoration-line-through'>
                        UGX 80,000/=
                    </span>
                </div>

                <div>
                    100% original products <br/>
                    Free delivery on orders over UGX 100,000/= <br/>
                    Cash on delivery available <br/>
                    7 days easy return policy
                </div>
                
                <div className='pt-3'>
                    <strong> Select size </strong>
                    <div className='sizes pt-2'>
                        <button className='btn btn-size ms-1'> S </button>
                        <button className='btn btn-size ms-1'> M </button>
                        <button className='btn btn-size ms-1'> L </button>
                        <button className='btn btn-size ms-1'> XL </button>
                    </div>
                </div>
                
                <div className="add-to-cart mt-1">
                    <button className='btn btn-primary text-upper mt-2'> 
                        Add to Cart 
                    </button>
                </div>

                <hr/>

                <div className=''>
                    <strong> SKU: </strong>
                    DDXX2234
                </div>
            </div>
            </div>

        <div className="row pb-4">
            <div className="col-md-12">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3"              >
                    
                    <Tab eventKey="home" title="Description">
                        Tab content for Description
                    </Tab>

                    <Tab eventKey="profile" title="Reviews (10)">
                        Reviews Area
                    </Tab>

                </Tabs>
            </div>
        </div>


        </div>        
    </Layout>

  )
}

export default Product