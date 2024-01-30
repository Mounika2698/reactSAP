import { Box, Card, CardContent, Grid, Link } from '@mui/material';
import React, { useState } from 'react';
import { LOGO } from '../contants/Constants';
import Form from './Form';

const Model = () => {
    const [modelState,setModelState] = useState(false);
    const [modelName,setModelName] = useState('')
const handleModelClick = (name:string)=> {
    setModelState(true)
    setModelName(name)
}

    return (
        <>
            <Grid container spacing={2}>
                {
                    LOGO. map((item,key) => {
                        return <Grid item xs={2} key={key}>  <Card><img src={item.src} height="80px" width="80px" onClick={()=>handleModelClick(item.name)}/></Card></Grid>
                    })
                }
                <Link>More</Link>
            </Grid>
            <br/>
            {
                modelState ? <Form modelName={modelName} /> :""
            }

         
        </>
    )
}

export default Model;