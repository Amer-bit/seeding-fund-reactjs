import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableCell, TableContainer, Table, TableHead, TableRow, TableBody, Paper, makeStyles, Select } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { viewUserRequestAction, changeStatusAction } from '../../redux/actions/admin';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const status = ["accepted", 'rejected', 'pending'];

const Users = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { users, loading } = useSelector(state => state.admin);
    useEffect(() => {
        dispatch(viewUserRequestAction())
    }, [])

    console.log(users);

    const changeHandler = (userId, projectId, status) => {
        dispatch(changeStatusAction({userId, projectId, status}));
    }

    return (
        <>
            <TableContainer component={Paper}>
                {loading ? new Array(10).fill(0).map((val, idx) => <Skeleton style={{ height: "40px" }} key={idx} animation="wave" />) :
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Project name</TableCell>
                                <TableCell align="right">Project Owner </TableCell>
                                <TableCell align="right">Project Description </TableCell>
                                <TableCell align="right">Project Sector</TableCell>
                                <TableCell align="right">Project Status</TableCell>
                                <TableCell align="right">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, idx) => (
                                <TableRow key={idx}>
                                    <TableCell component="th" scope="row">
                                        {user.projectName}
                                    </TableCell>
                                    <TableCell align="right">{user.username}</TableCell>
                                    <TableCell align="right">{user.projectDescription}</TableCell>
                                    <TableCell align="right">{user.projectSector}</TableCell>
                                    <TableCell align="right">{user.projectStatus}</TableCell>
                                    <TableCell align="right">
                                        <Select
                                            native
                                            value={user.projectStatus}
                                            onChange={(e) => {changeHandler(user.userId, user.projectId, e.target.value)}}
                                            inputProps={{
                                                name: 'age',
                                                id: 'filled-age-native-simple',
                                            }}
                                        >
                                            {status.map(status => <option key={status} value={status}>{status}</option>)}
                                        </Select>
                                    </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>}
            </TableContainer>
        </>
    )
}

export default Users;