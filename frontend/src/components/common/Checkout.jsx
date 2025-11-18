import React from 'react'
import { Link } from 'react-router-dom'

import men1 from '../../assets/images/men/men-1.avif';

const Checkout = () => {

    const [paymentMethod, setPaymentMethod] = React.useState('cod');
    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
    }

  return (
    
    <section className='container py-5'>

      <div className='row'>
        <div className='col-md-12 text-center'>
          <nav aria-label="breadcrumb" className='py-3'>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/"> Home </Link> 
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                    Checkout  
                </li>
            </ol>
          </nav> 
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          
          <h3 className='border-bottom py-2'> 
            <strong> Billing Details </strong>
          </h3>

          <form action="">
            
            <article className="row">
                
                <div className="col-md-6">
                    <div className="mb-3">
                        <input type="text" className='form-control my-2' placeholder='Name' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <input type="text" className='form-control my-2' placeholder='Phone Number' />
                    </div>
                </div>

                <div className="mb-3">
                    <textarea className='form-control my-2' rows={3} placeholder='Address'></textarea>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <input type="text" className='form-control my-2' placeholder='City' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <input type="text" className='form-control my-2' placeholder='State' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <input type="text" className='form-control my-2' placeholder='Zip' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <input type="text" className='form-control my-2' placeholder='Email' />
                    </div>
                </div>

            </article>
            
          </form>
        </div>

        <div className="col-md-5">
            <h3 className='border-bottom py-2'> 
                <strong> Items </strong>
          </h3>

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

                            <div className='mx-2'> X 1</div>
                        </div>
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
                            
                            <div className='mx-2'>
                                <button className='btn btn-size'> S </button>
                            </div>

                            <div className='mx-2'> X 1</div>
                        </div>
                    </td>         
                </tr>

            </tbody>
        </table>

        <article className='row mb-3'>
        
        <div className="col-md-12 mx-2 p-3">
            
            <div className="d-flex justify-content-between border-bottom py-1">
                <div className='mx-1 fs-semibold'> Subtotal: </div>
                <div> UGX 50,000/= </div>
            </div>
        
            <div className="d-flex justify-content-between border-bottom py-1">
                <div className='mx-1 fs-semibold'> Shipping: </div>
                <div> UGX 10,000/= </div>
            </div>
        
            <div className="d-flex justify-content-between border-bottom py-1">
                <div className='mx-1'> 
                    <strong> Grand Total: </strong> 
                </div>
                <div> UGX 60,000/= </div>
            </div>

        </div>
    </article>

        <h3 className='border-bottom py-2'> Payment Methods </h3>

        <div>
            <input onClick={handlePaymentMethod} value='cod' checked={paymentMethod == 'cod'} type='radio' name='cod' className='' />
            <label htmlFor='cod' className='mx-2'> Cash on Delivery </label>

            <input onClick={handlePaymentMethod} value='mobileMoney' checked={paymentMethod == 'mobileMoney'} type='radio' name='mobileMoney' className='' />
            <label htmlFor='mobileMoney' className='mx-2'> Mobile Money </label>

            <input onClick={handlePaymentMethod} value='mpesa' checked={paymentMethod == 'mpesa'} type='radio' name='mpesa' className='' />
            <label htmlFor='mpesa' className='mx-2'> M-Pesa </label>
        </div>

            <div className='d-flex py-1'>
                <button to="" className='btn btn-primary w-100'> Pay </button>
            </div>

        </div>
        </div>

    </section>
  )
}

export default Checkout