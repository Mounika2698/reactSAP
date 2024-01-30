import { Card, Grid, TextField, CardActions, CardContent, Button, } from '@mui/material';
import { useState } from 'react';
import { FORM_FIELD } from '../contants/Constants';
import Table from './Table';
import { useNavigate } from 'react-router';

const Form = (props: any) => {
    const [formText, setFormText] = useState<any>('');
    const [tableData, setTableData] = useState<any>([]);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const navigate = useNavigate();
    const handleFieldChange = (e: any, id: any) => {
        const { name, value } = e.target;
        setFormText({ ...formText, [name]: value });
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        localStorage.setItem('formData', JSON.stringify(formText))
        setIsSubmitted(true)
        const dataObj = (data: any) => [...data, formText];
        setTableData(dataObj)

    }
    const handleViewResult = () => {
        navigate('/result', { state: tableData })
    }
    return (
        <>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card sx={{ maxWidth: 500 }} style={{ marginLeft: "8%" }} >
                            <CardContent>
                                <Grid container spacing={2} style={{ display: 'flex' }}>
                                    {
                                        FORM_FIELD.map((item, key) => {
                                            return <Grid item xs={6} key={key}><TextField
                                                type={item.type}
                                                name={item.name}
                                                label={item.label}
                                                variant="outlined"
                                                defaultValue={item.id === 'modelName' ? props.modelName : formText}
                                                onChange={(e) => handleFieldChange(e, item.id)}
                                            /></Grid>
                                        })
                                    }
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button size="medium" variant="contained" sx={{ alignItems: "flex-end" }} onClick={handleSubmit}>Submit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <br />
                    <Grid item xs={6}>
                        {
                            isSubmitted ?

                                <> <Table modelName={props.modelName} data={tableData} /> <Button onClick={handleViewResult}> View Result</Button></> : ""
                        }
                    </Grid>
                </Grid>
            </form>
            <br />
        </>
    )
}

export default Form;