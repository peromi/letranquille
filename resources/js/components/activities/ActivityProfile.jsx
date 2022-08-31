import { Button } from "@material-ui/core";
import React from "react";
import { data } from "../../constants";
import { Link } from "react-router-dom"
import "../../../css/activityprofile.scss"
import ls from 'localstorage-slim'
import axios from "axios";


const DB = "user-m9j234u94"
function ActivityProfile({profile}) {
    const [showgallery, setShowgallery] = React.useState(false)
    const [index, setIndex] = React.useState(0)
    const [gallery, setGallery] = React.useState([])

    const loadGallery = () =>{

        const token  = ls.get(DB, {decrypt:true})
        axios.get('/api/user-gallery/'+profile.id,{
            headers:{
                'Accept':'application/json',
                'Authorization':'Bearer '+token
            }
        }).then((response)=>{
            setGallery(response.data.gallery)
        })

    }
    React.useEffect(()=>{
        loadGallery()
    },[])
    return (
        <div style={{border:'1px solid #f4f4f4',breakInside:'avoid',width:450, padding:16, boxShadow:'0px 0px 12px #f4f4f4', borderRadius:12, marginBottom:12 }}>
            <div style={{ display:'flex',width:'100%', justifyContent:'space-between', gap:8}}>
                <div style={{ position:'relative',borderRadius:12, overflow:'hidden'  }}>
                    <img src={data.goldencrown} style={{ position:'absolute', margin:8 }} />
                    <img src={`/storage/avatar/${profile.first_cover}`} style={{width:150, height:150 }} />
                    <p style={{ position:'absolute', bottom:0, left:0, right:0, padding:4, textAlign:'center', background:'#C62251', color:'white', fontSize:14, fontWeight:'bold' }}>80% Match</p>
                </div>
                <div>
                    <div style={{ display:'flex',alignItems:'center', justifyContent:'space-between' }}>
                        <h3 style={{ textTransform:'capitalize' }}>{profile.name}, {Math.abs(new Date().getFullYear() - new Date(profile.birthday).getFullYear())}</h3>
                        <i className="fi fi-sr-rec" style={{ fontSize:8, color:'#cecece' }}></i>
                    </div>
                    <div style={{ display:'flex', gap:18, marginBottom:34, marginTop:24 }}>
                       <i className="fi fi-sr-marker"></i>
                        <p><strong>{profile.address.split(',')[0]}</strong>, {profile.address.split(',')[1].split(' ')[1]}, 5 miles Away</p>

                    </div>
                    <p style={{ textTransform:'capitalize' }}>Seeking:<strong>{profile.lookingfor} {profile.min} - {profile.max}</strong></p>
                </div>
            </div>

            <div className="buttonHolder">
                <Link to={`/messages/${profile.id}`} className="message">
                    <i className="fi fi-rr-paper-plane"></i>
                    <p>Message</p>
                </Link>
                <button className="likedbtn">
                    <i className="fi fi-rr-heart"></i>
                    <p>Like Back</p>
                </button>
                <button className="buttonProfile" onClick={()=>{
                    setShowgallery(!showgallery)
                }}>

                    <p>View Pictures</p>
                </button>
                <button className="trash">
                    <i className="fi fi-rr-trash"></i>
                </button>
            </div>

            {/* PHOTO OVERLAY */}
            {showgallery && <div  style={{zoom:'80%', zIndex:500000, position:'fixed', left:0, top:0, bottom:0, right:0, background:'rgba(0,0,0,0.5)', display:'flex', justifyContent:'center', alignItems:'center' }}>
                <div style={{  width:'80%', height:'80%', background:'white', padding:21, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <p style={{ textTransform:'capitalize', fontWeight:'bold' }}>{profile.name}</p>
                        <h2>Photo Gallery</h2>
                        <button onClick={()=>{
                            setShowgallery(!showgallery)
                        }} style={{ fontSize:23, fontWeight: 'bold', border:0, cursor:'pointer', background:'transparent' }}>
                            <i className="fi fi-rr-cross"></i>
                        </button>
                    </div>
                    <div style={{ display:'flex',alignItems: 'flex-start',  marginTop:45,  justifyContent:'center'  }}>
                        <div className="mainphoto" style={{ width:'40%', display:'flex', justifyContent:'space-around' }}>
                        <div style={{ width:450, height:450,borderRadius:12,  background:`url(/storage/gallery/${gallery[index].cover})`, backgroundSize:'cover', backgroundPosition:'center center', backgroundRepeat:'round' }}></div>

                           <div style={{ width:1, background:'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0))' }}></div>
                        </div>
                        <div className="thumbs" style={{ width:'60%',marginRight:21,borderRadius:12, display:'grid', gridTemplateColumns:'auto auto auto auto',  rowGap:36, alignContent:'start' }}>
                            {gallery.map((avatar, i)=> <div onClick={()=>{
                                setIndex(i)
                            }} style={{cursor: 'pointer', width:160, height:160,borderRadius:12,  background:`url(/storage/gallery/${avatar.cover})`,backgroundSize:'cover', backgroundPosition:'center',filter:i==index?'grayscale(0%)':'grayscale(100%)' }}></div>)}
                        </div>
                    </div>
                    <div style={{ display:'flex',gap:34, marginTop:23, height:45, justifyContent: 'center', alignItems: 'center' }}>
                        <button style={{ border:0, fontSize:34,cursor:'pointer', background:'transparent' }} onClick={()=>{
                            if(index > 0){
                                setIndex(index-1)
                            }
                        }}>
                            <i className="fi  fi-rr-angle-circle-left"></i>
                        </button>
                        <button style={{ border:0, fontSize:34, background:'transparent', cursor:'pointer' }} onClick={()=>{
                             if(index < gallery.length-1){
                                setIndex(index+1)
                            }
                        }}>
                            <i className="fi  fi-rr-angle-circle-right"></i>
                        </button>
                    </div>
                </div>
            </div>}
        </div>

    );
}

export default ActivityProfile;


