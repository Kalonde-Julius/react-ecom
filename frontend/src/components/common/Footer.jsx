import React from 'react'
import logo2 from '../../assets/images/logo/logo.png';

const Footer = () => {
  return (
   
    <footer>
    <div className='container py-1'>
        
        <div className='row pt-1 mb-3'>

            <div className='col-md-3 p-1'>
                <img src={logo2} alt="logo" width={240} height={130} />
            </div> 
            
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

            <div className='col-md-3 text-center'>
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
            
        </div>

        <div className='row spotlight'>
            <div className='col-md-4'> 
                <div className='d-flex justify-content-center'>
                    <svg className='svg mx-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16"><path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></svg>
                    <h3> Free Delivery </h3>
                </div>
            </div>

            <div className='col-md-4'> 
                <div className='d-flex justify-content-center'>
                    <svg className='text-svg mx-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16"><path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path><path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"></path></svg>
                    <h3> Money Back Guararntee </h3>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='d-flex justify-content-center'>
                    <svg className='svg mx-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16"><path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"></path><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"></path></svg> 
                    <h3> Secure Payment </h3>
                </div>
            </div>
        </div>

       <div className='row'>
            <div className='col-md-12 text-center bg-dark py-2'>
                <p className='text-center pt-1 mx-4'>
                    <strong className='text-white fw-bold flex-column'>  
                        &copy; Kalonde Julius {new Date().getFullYear()} 
                    </strong>
                </p>
            </div>
       </div>
    </div>
  </footer>

  )
}

export default Footer