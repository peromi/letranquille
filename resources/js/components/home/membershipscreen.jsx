import React from 'react'
import HomeContainer from './HomeContainer'

function MembershipScreen() {

    const [rates, setRates] =  React.useState('')

    const loadCurrencyValue = () => {
        axios
            .get("https://api.exchangerate.host/latest/?base=CAD", {
                headers: {

                    "Content-Type": "application/json",
                },

            })
            .then((res) => {
                console.log(res.data);
                setRates(res.data.rates)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    React.useEffect(()=>{
        loadCurrencyValue()
    },[])
  return (
      <HomeContainer>
       <div className='mt-20' />
     <h1 className=' mb-2 font-bold text-3xl text-center tracking-tighter mt-6'>Choose from our Membership</h1>
     <div className='w-[45px] h-[4px] rounded-full bg-slate-500 mx-auto' />
    <h1 className='mt-3 mb-2 font-bold text-3xl text-center tracking-tighter '>Silver Package</h1>
    <div className='pb-4 w-10/12 mx-auto flex flex-col justify-between items-center md:flex-row'>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-slate-200 px-4 p-2 rounded-full tracking-tighter  '>Silver</h1>
            <p className='text-4xl font-bold mt-1 mb-1 tracking-tighter '>Weekly<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(17.50 * rates['USD']).toFixed(2)}</h1>
                <span>/7days</span>
            </div>
            <p>$18 *VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[64px] p-[6px] rounded-full   font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-slate-300 px-4 p-2 rounded-full tracking-tighter  '>Silver</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Monthly<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(34.99 * rates['USD']).toFixed(2)}</h1>
                <span>/1mo</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[64px] p-[6px] rounded-full  font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-slate-300 px-4 p-2 rounded-full tracking-tighter '>Sliver</h1>
            <p className='text-4xl font-bold mt-1 mb-1 tracking-tighter '>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(139.99 * rates['USD']).toFixed(2)}</h1>
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
            <button className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-slate-300 px-[64px] p-[6px] rounded-full font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>

    </div>
    <h1 className='mt-3 mb-2 font-bold text-3xl text-center tracking-tighter '>Gold Package</h1>
    <div className='pb-4 w-10/12 mx-auto flex flex-col justify-between items-center md:flex-row'>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-amber-300 px-4 p-2 rounded-full tracking-tighter '>Gold</h1>
            <p className='text-4xl font-bold mt-1 mb-1 tracking-tighter '>Weekly<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(20.00 * rates['USD']).toFixed(2)}</h1>
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
            <button className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[64px] p-[6px] rounded-full  font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-amber-300 px-4 p-2 rounded-full tracking-tighter  '>Gold</h1>
            <p className='text-4xl font-bold mt-1 mb-1 tracking-tighter '>Monthly<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(39.99 * rates['USD']).toFixed(2)}</h1>
                <span>/1mo</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[64px] p-[6px] rounded-full font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-amber-300 px-4 p-2 rounded-full tracking-tighter  '>Gold</h1>
            <p className='text-4xl font-bold mt-1 mb-1 tracking-tighter '>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(149.99* rates['USD']).toFixed(2)}</h1>
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
            <button className="mt-2 hover:bg-red-600 hover:text-white flex justify-center items-center text-center bg-amber-300 px-[64px] p-[6px] rounded-full font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>

    </div>
    <h1 className='mt-3 mb-2 font-bold text-3xl text-center tracking-tighter '>Platinum Package</h1>
    <div className='pb-4 w-10/12 mx-auto flex flex-col justify-between items-center md:flex-row'>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-purple-800 px-4 p-2 rounded-full text-white tracking-tighter '>Platinum</h1>
            <p className='text-4xl font-bold mt-1 mb-1'>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(40 * rates['USD']).toFixed(2)}</h1>
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
            <button className="mt-2 hover:bg-red-600 flex justify-center items-center text-center bg-purple-800 px-[64px] p-[6px] rounded-full text-white font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-purple-800 px-4 p-2 rounded-full text-white tracking-tighter '>Platinum</h1>
            <p className='text-4xl font-bold mt-1 mb-1 tracking-tighter '>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(79.98 * rates['USD']).toFixed(2)}</h1>
                <span>/1mo</span>
            </div>
            <p>*VAT & local taxes may apply</p>
            <div className='w-[24px] h-[3px] bg-slate-300 rounded-full mb-3' />
            <ul>
                <li>Unlimited Messaging</li>
                <li>Unlimited Calling</li>
                <li>Profile Always on top</li>
                <li>Better Match Making</li>
            </ul>
            <button className="mt-2 hover:bg-red-600 flex justify-center items-center text-center bg-purple-800 px-[64px] p-[6px] rounded-full text-white font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>
        <div className='flex flex-col justify-center items-center py-2 font-bold bg-white px-4 ring-1 ring-slate-900/5'>
            <h1 className='bg-purple-800 px-4 p-2 rounded-full text-white tracking-tighter '>Platinum</h1>
            <p className='text-4xl font-bold mt-1 mb-1 tracking-tighter '>Annual<br />Subscription</p>
            <div className='flex my-4'>
                <span>$</span>
                <h1 className='text-3xl font-bold'>{(159.99  * rates['USD']).toFixed(2)}</h1>
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
            <button className="mt-2 hover:bg-red-600 flex justify-center items-center text-center bg-purple-800 px-[64px] p-[6px] rounded-full text-white font-bold">
                <p>Choose Plan</p>
                <i className='fi fi-rr-arrow-right text-[24px] ml-[12px] mt-[10px] font-bold'></i>
            </button>
        </div>

    </div>
   </HomeContainer>
  )
}

export default MembershipScreen
