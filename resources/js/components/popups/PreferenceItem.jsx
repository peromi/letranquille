import React from 'react'

function PreferenceItem({title, pref}) {
  return (
    <div style={{ display:'flex', borderTopWidth:1, borderTopColor:'#cecece', width:'100%', paddingTop:16, paddingBottom:16 }}>
    <i className='fi fi-rr-utensils' style={{ fontSize:24, fontWeight:'bold' }}></i>
    <div style={{ width:'100%', marginLeft:12 }}>
        <h3>{title}</h3>
        <p>{pref}</p>
    </div>
    <button style={{ border:0, background:'transparent', display:'flex', gap:8 }}>
    <i className='fi fi-rr-pencil' style={{   }}></i>
    <p>Edit</p>
    </button>
</div>
  )
}

export default PreferenceItem
