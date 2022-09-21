import { TextField, Button, Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import React from 'react'
import '../../../css/membership.scss'
import { data } from '../../constants'
import ls from 'localstorage-slim'
import axios from 'axios'
import { toast } from 'react-toastify';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const DATABASE_KEY = 'user-m9j234u94'
const DBNAV = 'nav'
const USERDB = 'dao'
const subscribe = "subscriptionDb"
function Membership(){
  const [process, setProcess] = React.useState(0)
  const [type, setType] = React.useState('')
  const [amount, setAmount] = React.useState(0)
  const [credit, setCredit] = React.useState(0)
  const [duration, setDuration] = React.useState(0)

  const [payoption, setPayoption] = React.useState('paypal')

  //   Personal information
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [region, setRegion] = React.useState('')
  const [city, setCity] = React.useState('')
  const [zip, setZip] = React.useState('')
  const [coupon, setCoupon] = React.useState('')


  const _handleSignupMembership = ()=>{
    let token = ls.get(DATABASE_KEY, {decrypt:true})
      axios.post("/api/membership", {
        address:address,
        country:country,
        state:region,
        city:city,
        zip:zip,
        duration:duration,
        plan_type:type
      }, {
          headers: {
              Accept:'application/json',
              Authorization: 'Bearer ' + token
          }
      }).then((response)=>{
          console.log(response.data)
        //   setnote(response.data.notice)
        ls.set(subscribe, response.data.subscription, {encrypt:true})
        toast.success(response.data.message);
      }).catch((error)=>{
          console.log(error)
      })
  }

  return (
    <div className="w-full mx-auto bg-white">
      <div className=" flex mb-4 bg-red-700 p-2 text-white items-center gap-x-2">

        <h2 className='font-bold md:text-3xl tracking-tighter'>Membership Plan</h2>
      </div>


          {/* <div
            style={{
              height: '100%',
              width: process * 33 + '%',
              background: '#830B2D',
            }}
          ></div> */}

        <div className="">
          <ul className='flex justify-around'>
            <li className='flex flex-col items-center font-bold'>
              <h2 className='font-bold w-[45px] h-[45px] text-white flex justify-center items-center  rounded-full' style={{ background: process >= 0 ? '#830B2D' : '#2d2d2d' }}>
                1
              </h2>
              <p style={{ color: process >= 0 ? '#830B2D' : 'gray' }}>
                Choose A
              </p>
              <p style={{ color: process >= 0 ? '#830B2D' : 'gray' }}>
                Membership Plan
              </p>
            </li>
            <li  className='flex flex-col items-center font-bold'>
              <h2 className='w-[45px] h-[45px] text-white flex justify-center items-center  rounded-full' style={{ background: process >= 1 ? '#830B2D' : '#2d2d2d' }}>
                2
              </h2>
              <p style={{ color: process >= 1 ? '#830B2D' : 'gray' }}>
                Billing Information
              </p>
            </li>
            <li  className='flex flex-col items-center font-bold'>
              <h2 className='w-[45px] h-[45px] text-white flex justify-center items-center  rounded-full' style={{ background: process >= 2 ? '#830B2D' : '#2d2d2d' }}>
                3
              </h2>
              <p style={{ color: process >= 2 ? '#830B2D' : 'gray' }}>
                Payment Method
              </p>
            </li>
            <li  className='flex flex-col items-center font-bold'>
              <h2 className='w-[45px] h-[45px] text-white flex justify-center items-center  rounded-full' style={{ background: process >= 3 ? '#830B2D' : '#2d2d2d' }}>
                4
              </h2>
              <p style={{ color: process >= 3 ? '#830B2D' : 'gray' }}>
                Order Summary
              </p>
            </li>
          </ul>
        </div>


      {process == 0 && (
        <>



{/* Silver package */}
          <h1 className='mt-3 mb-2 font-bold text-3xl text-center'>Silver Package</h1>
    <div className='pb-4 w-10/12 mx-auto flex flex-col justify-between items-center md:flex-row'>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-slate-200 px-4 p-2 rounded-full  '>Silver</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Weekly<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>90</h1>
                <span>/7days</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button onClick={() => {
                    setProcess(1)
                    setType('silver')
                    setAmount(90)
                    setCredit(3000)
                    setDuration(7)
                  }} className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[34px] p-[6px] rounded-full   font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-slate-300 px-4 p-2 rounded-full '>Silver</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Monthly<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>100</h1>
                <span>/6mo</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button  onClick={() => {
                    setProcess(1)
                    setType('silver')
                    setAmount(100)
                    setCredit(3000)
                    setDuration(30)
                  }} className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[34px] p-[6px] rounded-full  font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-slate-300 px-4 p-2 rounded-full '>Sliver</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>190</h1>
                <span>/yr</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button  onClick={() => {
                    setProcess(1)
                    setType('silver')
                    setAmount(190)
                    setCredit(3000)
                    setDuration(365)
                  }} className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[34px] p-[6px] rounded-full font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>

    </div>


      {/* Gold Package */}

      <h1 className='mt-3 mb-2 font-bold text-3xl text-center'>Gold Package</h1>
    <div className='pb-4 w-10/12 mx-auto flex flex-col justify-between items-center md:flex-row'>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-amber-300 px-4 p-2 rounded-full'>Gold</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Weekly<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>98</h1>
                <span>/7days</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button  onClick={() => {
                    setProcess(1)
                    setType('gold')
                    setAmount(90)
                    setCredit(3000)
                    setDuration(7)
                  }} className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[34px] p-[6px] rounded-full  font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-amber-300 px-4 p-2 rounded-full  '>Gold</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Monthly<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>120</h1>
                <span>/6mo</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button onClick={() => {
                    setProcess(1)
                    setType('gold')
                    setAmount(120)
                    setCredit(3000)
                    setDuration(180)
                  }} className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[34px] p-[6px] rounded-full font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-amber-300 px-4 p-2 rounded-full '>Gold</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>190</h1>
                <span>/yr</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button onClick={() => {
                    setProcess(1)
                    setType('gold')
                    setAmount(190)
                    setCredit(3000)
                    setDuration(365)
                  }} className="mt-2 w-full hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[34px] p-[6px] rounded-full font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[8px] mt-[10px] font-bold'></i>
            </button>
        </div>

    </div>

    {/* Platinum package */}
    <h1 className='mt-3 mb-2 font-bold text-3xl text-center'>Platinum Package</h1>
    <div className='pb-4 w-10/12 mx-auto flex flex-col justify-between items-center md:flex-row'>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-purple-800 px-4 p-2 rounded-full text-white'>Platinum</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>120</h1>
                <span>1/wk</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button onClick={() => {
                    setProcess(1)
                    setType('platinum')
                    setAmount(120)
                    setCredit(3000)
                    setDuration(7)
                  }} className="mt-2 hover:bg-red-600 flex justify-center items-center text-center bg-purple-800 px-[34px] p-[6px] rounded-full text-white font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-purple-800 px-4 p-2 rounded-full text-white'>Platinum</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>150</h1>
                <span>/6mo</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button onClick={() => {
                    setProcess(1)
                    setType('platinum')
                    setAmount(150)
                    setCredit(3000)
                    setDuration(180)
                  }}  className="mt-2 hover:bg-red-600 flex justify-center items-center text-center bg-purple-800 px-[34px] p-[6px] rounded-full text-white font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-purple-800 px-4 p-2 rounded-full text-white'>Platinum</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>300</h1>
                <span>/yr</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button onClick={() => {
                    setProcess(1)
                    setType('platinum')
                    setAmount(300)
                    setCredit(3000)
                    setDuration(365)
                  }}  className="mt-2 hover:bg-red-600 flex justify-center items-center text-center bg-purple-800 px-[34px] p-[6px] rounded-full text-white font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>

    </div>


          {/* <table>
            <thead>
              <tr>
                <th>
                  <p style={{ paddingLeft: 12 }}>Membership Details</p>
                </th>
                <th rowSpan={0}>
                  <p style={{ textAlign: 'center' }}>Free</p>
                </th>
                <th rowSpan={0}>
                  <p style={{ textAlign: 'center' }}>Premium</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingLeft: 12 }}>Thousands of members</td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-check"></i>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-check"></i>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 12 }}>60,000+ Members</td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-cross"></i>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-check"></i>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 12 }}>Unlimited Video calling</td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-cross"></i>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-check"></i>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 12 }}>Unlimited Messaging</td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-cross"></i>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-check"></i>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: 12 }}>Unlimited Likes</td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-cross"></i>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <i className="fi fi-rr-check"></i>
                </td>
              </tr>
            </tbody>
          </table> */}
        </>
      )}

      {process >= 1&& process < 3 && (
        <>
          <div className="px-4 py-4">
            <div className='flex flex-col md:flex-row justify-between'>
              {process == 1 && <div className='flex flex-col w-full md:w-[50%]'>
                <TextField
                  id="outlined-basic"
                  label="Enter Your Name"
                  style={{ marginTop: 12, }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  style={{ marginTop: 12,  }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Enter Your Addess"
                  multiline
                  rows={3}
                  style={{ marginTop: 12, }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Country"
                  style={{ marginTop: 12,  }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />

                <TextField
                  id="outlined-basic"
                  label="State/Province/Region"
                  style={{ marginTop: 12,   }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />

                <TextField
                  id="outlined-basic"
                  label="City"
                  style={{ marginTop: 12,  }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Zip/Postal Code"
                  style={{ marginTop: 12,   }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>}
              {process == 2 && <div className='md:w-[50%]'>

              <RadioGroup   name="card" value={payoption} onChange={(e)=>{
                setPayoption(e.target.value)
              }}>

                <FormControlLabel value="card payment" control={<Radio />} label="Card Payment" />
                    <>

                    <TextField
                    disabled={payoption == "card payment" ? false:true}
                  id="outlined-basic"
                  label="Card"
                  style={{ marginTop: 12, width: '100%' }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={name}
                //   onChange={(e) => setName(e.target.value)}
                />
                <TextField
                disabled={payoption == "card payment" ? false:true}
                  id="outlined-basic"
                  label="Card Name"
                  style={{ marginTop: 12, width: '100%' }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />



                <TextField
                disabled={payoption == "card payment" ? false:true}
                  id="outlined-basic"
                  label="State/Province/Region"
                  style={{ marginTop: 12, width: '100%' }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />

                <TextField
                disabled={payoption == "card payment" ? false:true}
                  id="outlined-basic"
                  label="City"
                  style={{ marginTop: 12, width: '100%' }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                disabled={payoption == "card payment" ? false:true}
                  id="outlined-basic"
                  label="Zip/Postal Code"
                  style={{ marginTop: 12,  }}
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontFamily: 'Dosis',
                      fontWeight: 'bold',
                    },
                  }}
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />

                    </>
                <FormControlLabel value="paypal" control={<Radio />} label="Pay with Paypal" />
            </RadioGroup>

              </div>}
              <div
                style={{
                  height: '100%',
                  width: 1,
                  marginLeft: 35,
                  marginRight: 35,
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))',
                }}
              ></div>
              <div style={{ flex: 1 }}>
                <h2 className='font-bold text-2xl'>You are subscribing for:</h2>
                <div style={{ display: 'flex', gap: 21, marginTop: 21, justifyContent:'center', alignItems:'center' }}>
                  <img src={data.logo} width={60} />
                  <div style={{ flex:1 }}>
                    <h2>{type}</h2>
                    <p>{duration} subscription</p>
                  </div>
                  <a href="">Change option</a>
                </div>
                {/* Coupon section */}

                <div
                  style={{
                    marginTop: 34,
                    display: 'flex',
                    gap: 8,
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Coupon"
                    style={{ width: '90%' }}
                    variant="outlined"
                    inputProps={{
                      style: {
                        fontFamily: 'Dosis',
                        fontWeight: 'bold',
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: 'Dosis',
                        fontWeight: 'bold',
                      },
                    }}
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <Button
                  disabled = {coupon !== ""?false:true}
                    variant="contained"
                    color="primary"
                    style={{ height: '100%' }}
                  >
                    Apply
                  </Button>
                </div>

                {/* Summary */}
                <div style={{marginTop:24, display: 'flex', flex:1, justifyContent: 'space-between' }}>
                    <p>{type}</p>
                    <p>${amount}</p>
                </div>
                <div style={{marginTop:8, display: 'flex', flex:1, justifyContent: 'space-between' }}>
                    <p>Discount</p>
                    <p>NA</p>
                </div>
                <div style={{marginTop:34, display: 'flex', flex:1, justifyContent: 'space-between', fontWeight:'bold' }}>
                    <p>Total</p>
                    <p>${amount}</p>
                </div>

                {process == 1 && <Button
                onClick={()=>{
                    if(name.length == 0 && email.length == 0){
                        toast.error('Please enter your details ');
                    }else{
                        setProcess(2)
                           }

                }}
                    variant="contained"
                    color="primary"
                    style={{flex:1, width:'100%', marginTop:65, height:48,   }}
                  >
                    Continue
                  </Button>}

                  {process == 2 && payoption !== "paypal" && <Button
                onClick={()=>{
                    // setProcess(3)
                    // _handleSignupMembership();
                    // card payment
                }}
                    variant="contained"
                    color="primary"
                    style={{flex:1, width:'100%', marginTop:65, height:48,   }}
                  >
                    Pay
                  </Button>}
                  {process == 2 && payoption === "paypal" &&  <div style={{ height:120, paddingTop:21 }}>
                  <PayPalScriptProvider options={{ "client-id": "ATtzjhuIaE8LR7VOs2LhvaK4no7WtUxQ8P18QgJuuGvwKo7Dc7p-mh6gm10Nj8LYYke8MScZcx93wIC5",
                currency:'USD',

                 }}>
            <PayPalButtons style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description:type,
                            amount: {
                                value:amount,
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    _handleSignupMembership();

                    // alert(`Transaction completed by ${name} ${type}`);
                });
            }}
            />
        </PayPalScriptProvider>
                    </div>}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Membership
