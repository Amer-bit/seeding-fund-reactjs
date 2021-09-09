import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Container, TextField, MenuItem, Select, Box, InputLabel, Button } from '@material-ui/core';
import { requestFundAction } from '../../redux/actions/funds'

const FundRequest = () => {
    const [fundRequest, setFundRequest] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();
    const sectors = {
        it: 'IT',
        financials: 'Financials',
        industrials: 'Industrials',
        energy: 'Energy',
        healthCare: 'Health Care',
    }

    function onChangeHandler(e) {
        setFundRequest({ ...fundRequest, [e.target.name]: e.target.value });
    }

    function submitHandler(){
        history.push('/viewmyfunds')
    }

    return (
        <>
            <h1>Project Funding Request Form</h1>

            <Container maxWidth="sm" >
                <TextField
                    label="Project Name"
                    onChange={onChangeHandler}
                    required
                    fullWidth
                    name="name"
                >
                </TextField>

                <Box mt={5}>
                </Box>

                <InputLabel>Project Sector</InputLabel>
                <Select
                    name="sector"
                    label="Project Sector"
                    fullWidth
                    displayEmpty
                    onChange={onChangeHandler}
                >
                    <MenuItem value="">
                        <em></em>
                    </MenuItem>
                    <MenuItem value={sectors.it}>{sectors.it}</MenuItem>
                    <MenuItem value={sectors.energy}>{sectors.energy}</MenuItem>
                    <MenuItem value={sectors.financials}>{sectors.financials}</MenuItem>
                    <MenuItem value={sectors.industrials}>{sectors.industrials}</MenuItem>
                    <MenuItem value={sectors.healthCare}>{sectors.healthCare}</MenuItem>
                </Select>

                <TextField
                    name="description"
                    label="Project Description"
                    minRows={4}
                    multiline={true}
                    onChange={onChangeHandler}
                    required
                    fullWidth
                >
                </TextField>
                <Box mt={5}>
                </Box>
                <Button
            onClick={() => dispatch(requestFundAction(fundRequest)) && submitHandler()}
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
            </Container>
        </>
    )
}

export default FundRequest;