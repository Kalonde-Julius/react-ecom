import React from 'react'
import Hero from './Hero'
import Layout from './Layout'

import product1 from '../../assets/images/men/men-1.avif';

const Shop = () => {
  return (
    <Layout>
      
      <div className='container'> 

        <nav aria-label="breadcrumb" className='py-3'>
          <ol class="breadcrumb">

            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
              Shop
            </li>

          </ol>
        </nav>

        <section className='row'>

          <article className='col-md-3'>
            <div className='card shadow border-0 mb-3'>
              <h3 className='mb-3'> Categories </h3>

              <ul>
                <li className='mb-2'>
                  <input type='checkbox' />
                  <label className='ps-2'> Kids </label>
                </li>

                <li className='mb-2'>
                  <input type='checkbox' />
                  <label className='ps-2'> Women </label>
                </li>

                <li className='mb-2'>
                  <input type='checkbox' />
                  <label className='ps-2'> Men </label>
                </li>

              </ul>
            </div>

          <div className='card shadow border-0 mb-3'>
            <div className='card-body p-4'>
              <h3 className='mb-3'> Brands </h3>

            <ul>
              <li className='mb-2'>
                <input type='checkbox' />
                <label className='ps-2'> Puma </label>
              </li>

              <li className='mb-2'>
                <input type='checkbox' />
                <label className='ps-2'> Killer </label>
              </li>

              <li className='mb-2'>
                <input type='checkbox' />
                <label className='ps-2'> Levis </label>
              </li>

              <li className='mb-2'>
                <input type='checkbox' />
                <label className='ps-2'> Flying Machine </label>
              </li>

            </ul>

          </div>
        </div> 
        </article>
        
        <section className='col-md-9'>
        <article className='row pb-5'>

          <div className='col-md-4 col-6'>
              <div className='product card border-0'>
                  <div className='card-img'>
                      <img src={product1} alt="product1" className='w-100'/>
                  </div>
                  <div className='card-body pt-3'>
                      <a href='#'> Casual Shirt </a>
                      <div className='price'> 
                          UGX 40,000/=  <br/>
                          <span className='text-decoration-line-through'> 
                              UGX 60,000/= 
                          </span>
                      </div>
                  </div>
              </div>
          </div>        

          <div className='col-md-4 col-6'>
              <div className='product card border-0'>
                  <div className='card-img'>
                      <img src={product1} alt="product1" className='w-100'/>
                  </div>
                  <div className='card-body pt-3'>
                      <a href='#'> Casual Shirt </a>
                      <div className='price'> 
                          UGX 40,000/=  <br/>
                          <span className='text-decoration-line-through'> 
                              UGX 60,000/= 
                          </span>
                      </div>
                  </div>
              </div>
          </div>

        <div className='col-md-4 col-6'>
          <div className='product card border-0'>
              <div className='card-img'>
                  <img src={product1} alt="product1" className='w-100'/>
              </div>
              <div className='card-body pt-3'>
                  <a href='#'> Casual Shirt </a>
                  <div className='price'> 
                      UGX 40,000/=  <br/>
                      <span className='text-decoration-line-through'> 
                          UGX 60,000/= 
                      </span>
                  </div>
              </div>
          </div>
        </div>

        <div className='col-md-4 col-6'>
          <div className='product card border-0'>
              <div className='card-img'>
                  <img src={product1} alt="product1" className='w-100'/>
              </div>
              <div className='card-body pt-3'>
                  <a href='#'> Casual Shirt </a>
                  <div className='price'> 
                      UGX 40,000/=  <br/>
                      <span className='text-decoration-line-through'> 
                          UGX 60,000/= 
                      </span>
                  </div>
              </div>
          </div>
      </div>

      <div className='col-md-4 col-6'>
        <div className='product card border-0'>
            <div className='card-img'>
                <img src={product1} alt="product1" className='w-100'/>
            </div>
            <div className='card-body pt-3'>
                <a href='#'> Casual Shirt </a>
                <div className='price'> 
                    UGX 40,000/=  <br/>
                    <span className='text-decoration-line-through'> 
                        UGX 60,000/= 
                    </span>
                </div>
            </div>
        </div>
      </div>

      <div className='col-md-4 col-6'>
          <div className='product card border-0'>
              <div className='card-img'>
                  <img src={product1} alt="product1" className='w-100'/>
              </div>
              <div className='card-body pt-3'>
                  <a href='#'> Casual Shirt </a>
                  <div className='price'> 
                      UGX 40,000/=  <br/>
                      <span className='text-decoration-line-through'> 
                          UGX 60,000/= 
                      </span>
                  </div>
              </div>
          </div>
      </div>


      </article>
      </section>
      
      </section>
      </div>
      

       
      

    
      
     
    </Layout>
  )
}

export default Shop
