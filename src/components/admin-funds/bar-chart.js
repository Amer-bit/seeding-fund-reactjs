import React, { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { chartAction } from '../../redux/actions/admin';

const Chart = () => {
    const dispatch = useDispatch();
    const { states } = useSelector(state => state.admin);
    const [data, setData] = useState([]);
    useEffect(() => {
        dispatch(chartAction());
    }, [])

    useEffect(() => {
        setData([
            {
                "Accepted": states.accepted,
                "Rejected": states.rejected,
                "Pending": states.pending,
            },
        ])
    }, [states])

    return (
        <>
        <h1>Project Fund Requests Statistics</h1>
            <div className = "chart">
                <BarChart width={630} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Accepted" fill="#8884d8" />
                    <Bar dataKey="Rejected" fill="#82ca9d" />
                    <Bar dataKey="Pending" fill="#82ca2d" />
                </BarChart>
            </div>
        </>
    );
}

export default Chart;