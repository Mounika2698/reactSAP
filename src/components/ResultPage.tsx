import { useState } from "react";
import { Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import SearchBar from "./Search";
import { useLocation } from "react-router";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const ResultPage = () => {
    const [location, setLocation] = useState('');
    const [searchQuery, setSearchQuery] = useState()
    const handleChange = (event: any) => {
        setLocation(event.target.value);
    };
    const getTableData = JSON.parse(localStorage.getItem('formData') || '{}');
    const getArrayValues = Object.values(getTableData)

    const filterData= (query:any, data:any) => {
        if (!query) {
            return data;
        }
        else {
            return data.filter((d: any) => d.toLowerCase().includes(query));
        }
    };
    const dataFiltered = filterData(searchQuery, getArrayValues);

    return (
        <>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>Filters</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Typography>Body Type</Typography>
                            <SearchBar setSearchQuery={setSearchQuery} />
                            <div style={{ padding: 3 }}>
                                {dataFiltered && dataFiltered.map((item: any) => (
                                    <div
                                        className="text"
                                        style={{
                                            padding: 5,
                                            justifyContent: "normal",
                                            fontSize: 20,
                                            color: "blue",
                                            margin: 1,
                                            width: "250px",
                                            borderWidth: "10px"
                                        }}
                                        key={item.id}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                    <Typography>Brand</Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Wagon R" />
                        <FormControlLabel control={<Checkbox />} label="Celerio" />
                        <FormControlLabel control={<Checkbox />} label="Swift" />
                        <FormControlLabel control={<Checkbox />} label="Swift dezire" />
                    </FormGroup>

                    <Typography>owners</Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Wagon R" />
                        <FormControlLabel control={<Checkbox />} label="Celerio" />
                        <FormControlLabel control={<Checkbox />} label="Swift" />
                        <FormControlLabel control={<Checkbox />} label="Swift dezire" />
                    </FormGroup>
                </CardContent>
            </Card>


        </>
    )
}

export default ResultPage;