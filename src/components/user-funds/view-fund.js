import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles/';
import Skeleton from '@material-ui/lab/Skeleton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { viewFundsAction } from "../../redux/actions/funds"

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const UserFundRequests = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { projects, loading } = useSelector(state => state.funds);
    useEffect(()=>{
        dispatch(viewFundsAction());
    }, [])

    return (
        <TableContainer component={Paper}>
            {loading ? new Array(10).fill(0).map((val, idx) => <Skeleton style={{height: "40px"}} key = {idx} animation="wave" />):
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Project name</TableCell>
                        <TableCell align="right">Project Description </TableCell>
                        <TableCell align="right">Project Sector</TableCell>
                        <TableCell align="right">Project Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map((project, idx) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                {project.name}
                            </TableCell>
                            <TableCell align="right">{project.description}</TableCell>
                            <TableCell align="right">{project.sector}</TableCell>
                            <TableCell align="right">{project.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>}
        </TableContainer>
    );
}

export default UserFundRequests;