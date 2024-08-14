import React from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'
const PricingPlan = () => {
  return (
    <>
      <div className='container py-3 pricing_plan'>
        <h3 className='text-center title'>Pricing Plan</h3> 
      <table className="table table-bordered border-primary pricing_plans">
        <thead>
          <tr>
            <th scope="col" className="col-lg-3 pb-3">
              <div className='row d-flex justify-content-center align-items-center ps-4'> 
                <div className="col-12 d-flex complare_plan p-0">
                <p>Compare plans</p>
                  <div className="badge btn_off border border-black text-dark rounded-pill fs-6 mt-2 p-2 d-lg-block d-none ms-2">
                    60% Off
                  </div>
                </div>
                  <small className='text-muted p-0 fs-7 line-height-15'>Choose your workspace plan according to your organisational plan</small>
              </div>
            </th>
            <th scope="col" className="col-lg-3 text-center pb-3">
              <div>
                <h3 className='plan_heading'>Free<span className='fs-7 ps-1 text-secondary'>/ Lifetime</span></h3>
              </div>
              <button className='btn w-100 btn-primary fs-7'>Create Free Account</button>
            </th>
            <th scope="col" className="col-lg-3 text-center pb-3">
            <div>
                <h3 className='plan_heading'><FaIndianRupeeSign/>849<span className='fs-7 ps-1 text-secondary'>/ Month</span></h3>
              </div>
              <button className='btn w-100 btn-primary fs-7'>Login to Buy</button>
            </th>
            <th scope="col" className="col-lg-3 text-center pb-3">
            <div>
                <h3 className='plan_heading'><FaIndianRupeeSign/>43 10<span className='fs-7 ps-1 text-secondary'>/ Year</span></h3>
              </div>
              <button className='btn w-100 btn-primary fs-7'>Login to Buy</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-center'>
          <th scope="row" className="col-lg-3 text-start ps-4">Number of Users</th>
            <td className="col-lg-3">1</td>
            <td className="col-lg-3">3</td>
            <td className="col-lg-3">1</td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">Users Per Page</th>
            <td className="col-lg-3">5 Pages</td>
            <td className="col-lg-3">50 Pages</td>
            <td className="col-lg-3"><p className='p-0 m-0'>Unlimited </p><p className='p-0 m-0'><small className='text-muted'>Pages Add-ons on Demand</small> </p>
            </td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">Includes essential features to get started</th>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">More advanced features for increased productivity</th>
            <td className="col-lg-3"><img src={"Subtract.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">Designing & Development</th>
            <td className="col-lg-3"><img src={"Subtract.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">Customizable options to meet your specific needs</th>
            <td className="col-lg-3"><img src={"Subtract.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">Secure data storage</th>
            <td className="col-lg-3"><img src={"Subtract.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">Email Support</th>
            <td className="col-lg-3"><img src={"Subtract.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">24/7 customer support</th>
            <td className="col-lg-3"><img src={"Subtract.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">Analytics and reporting</th>
            <td className="col-lg-3"><img src={"Subtract.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
          <tr className='text-center'>
            <th scope="row" className="col-lg-3 text-start ps-4">Account Management</th>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
            <td className="col-lg-3"><img src={"Vector.svg"} alt="" /></td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  )
}

export default PricingPlan
