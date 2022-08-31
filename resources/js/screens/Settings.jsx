import React from 'react'
import MainContainer from '../containers/MainContainer'

function Settings() {
  return (
    <MainContainer>
         <div style={{padding:35, marginTop:124, marginLeft:34, marginRight:34, background:'white',   }}>
       <div style={{ display:'flex', gap:12, marginBottom:23, justifyContent:'flex-start', alignItems:'center' }}>
           <i className='fi fi-rr-apps-add' style={{ fontSize:34, color:'#C62251' }}></i>
           <h2 style={{ color:'#C62251' }}>Settings</h2>


       </div>
       </div>
    </MainContainer>
  )
}

export default Settings
