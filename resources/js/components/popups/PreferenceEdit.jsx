import { Button, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import '../../../css/preferenceedit.scss'
import 'animate.css';

function PreferenceEdit({toggleHandler}) {

    const  [value, setValue] = React.useState('')
    const handleChange =(e)=>{
        setValue(e.target.value)
    }
  return (
    <div className='container_shadow animate__animated animate__fadeIn'>

        <div  className="inner_container animate__animated animate__slideInUp">
        <div className='nav'>
                    <h1>Edit</h1>
                    <button onClick={toggleHandler}><i className='fi fi-rr-cross'></i></button>
                </div>
                <RadioGroup   name="food" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />

                </RadioGroup>
                <Button variant='contained' color='primary' onClick={toggleHandler}>Save</Button>

        </div>


    </div>
  )
}

export default PreferenceEdit
