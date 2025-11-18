import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

import men1 from '../../assets/images/men/men-1.avif';

const Cart = () => {
return (

<Layout>
<section className='container'>

<div className='row'>
<nav aria-label="breadcrumb" className='py-3'>
    <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <Link to="/"> Home </Link> 
        </li>

        <li className="breadcrumb-item active" aria-current="page">
            Cart 
        </li>
    </ol>
</nav>            


<div className="col-md-12">
<h2 className='border-bottom pb-3'> Your Cart Items </h2>

<table className='table'>
    <tbody>
        <tr>

            <td width={100}> 
                <img src={men1} alt="product img" width={100} />
            </td>

            <td width={600} className='price'> 
                <h4 className='mx-2'> Dummy Product Name 1 </h4>
                <div className='d-flex align-items-center pt-2'>
                    <span className='price mx-2'> UGX 50,000/= </span>
                    
                    <div className='ps-2'>
                        <button className='btn btn-size'> S </button>
                    </div>
                </div>
            </td>
            
            <td valign='middle'>
                <input style={{ width:'100px' }} type="number" className='form-control' min={1} defaultValue={1} />      
            </td>

            <td valign='middle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>    
            </td>

        </tr>

        <tr>          
            <td width={100}> 
                <img src={men1} alt="product img" width={100} />
            </td>

            <td width={600} className='price'> 
                <h4 className='mx-2'> Dummy Product Name 1 </h4>
                <div className='d-flex align-items-center pt-2'>
                    <span className='price mx-2'> UGX 50,000/= </span>
                    
                    <div className='ps-2'>
                        <button className='btn btn-size'> S </button>
                    </div>
                </div>
            </td>
            
            <td valign='middle'>
                <input style={{ width:'100px' }} type="number" className='form-control' min={1} defaultValue={1} />      
            </td>

            <td valign='middle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>    
            </td>          
        </tr>
    </tbody>
</table>
</div>
</div>

    <div className='row justify-content-end mb-3'>
        
        <div className="col-md-3 mx-2 p-3">
            
            <div className="d-flex justify-content-end border-bottom py-1">
                <div className='mx-1 fs-semibold'> Subtotal: </div>
                <div> UGX 50,000/= </div>
            </div>
        
            <div className="d-flex justify-content-end border-bottom py-1">
                <div className='mx-1 fs-semibold'> Shipping: </div>
                <div> UGX 10,000/= </div>
            </div>
        
            <div className="d-flex justify-content-end border-bottom py-1">
                <div className='mx-1'> 
                    <strong> Grand Total: </strong> 
                </div>
                <div> UGX 60,000/= </div>
            </div>

            <div className='d-flex justify-content-end py-3'>
                <button to="/checkout" className='btn btn-primary w-100'> Proceed to Checkout </button>
            </div>
        </div>
    </div>

</section>
</Layout>
)
}

export default Cart