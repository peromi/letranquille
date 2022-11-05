import React from 'react'

function Userplaceholder() {
  return (
    <div
            className=" ring-1 ring-slate-900/5 hover:ring-1 hover:ring-red-600 transition-all duration-500 ease hover:drop-shadow-2xl rounded-xl bg-white animate__animated animate__slideInUp"

        >
            <div className="flex flex-col p-2">
                <div className="bg-slate-200 relative overflow-hidden rounded-xl">

                    <div className="w-full h-[325px] bg-zink-200"  >

                    </div>

                    <div className="absolute bottom-0 right-0 left-0 " style={{ background:'linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,0.3)' }}>

                        <div className="bg-slate-200 w-[34px] p-3">

                        </div>
                        <div className="text-white flex items-center font-bold gap-x-3 ">
                            <i class="fi fi-sr-marker ml-2 text-zink-300"></i>
                            <div className=" ">
                            <div className='bg-slate-400 px-12 p-2 rounded-full m-2' />
                            <div className='bg-slate-400 px-12 p-2 rounded-full m-2' />
                            </div>
                            {/* <p className="text-sm">5 miles away</p> */}
                        </div>
                        {/* <p className="bg-red-600 text-sm p-1 font-bold text-white text-center w-full">85% Match</p> */}
                    </div>
                </div>
                <div
    className="flex justify-between items-center"
                >
                    <div className="font-bold text-[15px] capitalize">

                    </div>
                    <i
                        class="fa-solid fa-circle"
                        style={{ fontSize: 8, color: "grey" }}
                    ></i>
                </div>
                {/* BIO */}
                <div className="mb-1 w-[45px] h-[12px] bg-zink-200 rounded-full">

                </div>

<div style={{ height:1, width:'100%', background:"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0)" }}></div>

                <div
                    className="flex justify-between mt-2 font-bold"
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 23,
                        }}
                    >

                            <div
                                style={{
                                    border: 0,
                                    background: "transparent",
                                    cursor: "pointer",
                                }}

                            >
                                <i
                                    class="fi fi-sr-heart text-zink-200"

                                ></i>
                            </div>

                        <div  >
                            <i
                                class="fi fi-sr-paper-plane text-zink-200"

                            ></i>
                        </div>
                    </div>
                    <div className="flex items-center px-3 rounded-full ring-1 ring-slate-900/5 gap-x-2 bg-zinc-100 hover:bg-red-600 hover:text-white p-2">
                        <div />

                        <div />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Userplaceholder
