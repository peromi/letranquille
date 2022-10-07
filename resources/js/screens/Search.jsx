import MainContainer from "../containers/MainContainer";
import cities from '../assets/json/cities.json'
import  country  from '../assets/json/country.json';
import  states  from '../assets/json/states.json';
import React from 'react'

const Search = () => {
    const [statesearch, setStatesearch] = React.useState([])
    const [citysearch, setCitysearch] = React.useState([])

    const [countrycode, setCountrycode] = React.useState({})
    const [statecode, setStatecode] = React.useState({})

    let age_list =[]
    for (let i = 18; i < 100 ; i++) {
        age_list.push(i)
    }
    return (
        <MainContainer>
            <div className="bg-red-800 w-full px-12  flex gap-x-6">
                <button className="p-3 text-white font-bold border-b-4 border-white">
                    Advanced Search
                </button>
            </div>
            <div className="md:w-full mx-auto  h-screen bg-white">

            <div className="flex  gap-x-4">
                <div>
                    <p>I'm a</p>
                    <select className="p-3 px-6 ring-1 ring-slate-900/5">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                    <p>Seeking</p>
                    <select className="p-3 px-6 ring-1 ring-slate-900/5">
                        <option>Any</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                    <p>Age</p>
                    <div className="flex gap-x-4  items-center">
                    <select className="ring- ring-slate-900/5 p-2">
                        {age_list.map((m, i) =><option key={i}>{m}</option>)}
                    </select>

                    <select  className="ring- ring-slate-900/5 p-2">
                        {age_list.map((m, i) =><option key={i}>{m}</option>)}
                    </select>

                    </div>

                </div>
            </div>


            <div className="flex  gap-x-4 mt-3">
                <div>
                    <p>Last Active</p>
                    <select className="p-3 px-6 ring-1 ring-slate-900/5">
                        <option>Any</option>
                        <option>within week</option>
                        <option>within 1 month</option>
                        <option>within 3 months</option>
                        <option>within 6 months</option>
                        <option>within a year</option>
                    </select>
                </div>
                <div>
                    <p>Sort results by:</p>
                    <select className="p-3 px-6 ring-1 ring-slate-900/5">
                        <option>Newest Members</option>
                        <option>Photos First</option>
                        <option>Last Active</option>
                    </select>
                </div>
                <div>
                    <p>Has Photo?</p>

                        <input type="checkbox" className="w-1/2 h-1/2" />



                </div>
                <div>
                    <p>Show verified users only?</p>
                    <div className="flex gap-x-4  items-center">
                        <input type="checkbox" /><p>Upgrade Now!</p>

                    </div>

                </div>
            </div>

            <div className="w-1/2 flex justify-between md:flex-row flex-col">

            <div className='flex-1 w-full'>
        <p>Country</p>
       <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full' onChange={(e)=>{
        let result = states.filter((s)=>s.country_code  == e.target.value)
        setStatesearch(result)
        console.log(result.length)
        setCountrycode(e.target.value)
       }}>

                <option>Any</option>
            {country.map((c,index)=><option key={index} value={c.code}>{c.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>State/Province</p>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full' onChange={(e)=>{
            let result = cities.filter((c)=>c.state_code == e.target.value && c.country_code == countrycode)
            console.log(result.length)
            setCitysearch(result)
        }}>

<option>Any</option>
            {statesearch.map((s, index)=><option key={index} value={s.state_code} >{s.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>City</p>
        <select className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full'>
        <option>Any</option>
            {citysearch.map((c,index)=><option key={index}>{c.name}</option>)}
        </select>
    </div>
    <div className='flex-1 w-full'>
        <p>Within</p>
        <input className='ring-1 p-2 ring-slate-900/5 outline-0 bg-transparent w-full' type="text" placeholder='kms' />
    </div>
            </div>

            </div>
        </MainContainer>
    );
};

export default Search;
