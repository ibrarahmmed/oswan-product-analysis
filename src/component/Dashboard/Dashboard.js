import React, { useEffect, useState } from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='main-container'>
            <div className="bar-chart">

                <BarChart
                    width={600}
                    height={400}
                    data={products}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>

            </div>

            <div className="pie-chart">
                <PieChart width={600} height={400}>
                    <Pie
                        dataKey="investment"

                        data={products}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"


                    />
                    <Pie dataKey="revenue" isAnimationActive={false} data={products} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d"  label />
                    <Tooltip />
                </PieChart>
                <p><span className='investment'>Investment </span> vs <span className='revenue'> Revenue</span></p>
                
            </div>
            <div className="radar-chart">
                <RadarChart height={500} width={400} cx="50%" cy="50%" outerRadius="80%" data={products}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="month" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Revenue" dataKey="revenue" stroke="green" fill="green" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip></Tooltip>
                </RadarChart>
            </div>
            <div className="composed-chart">
                <ComposedChart
                    width={600}
                    height={400}
                    data={products}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Area type="monotone" dataKey="revenue" fill="green" stroke="green" />
                   
                </ComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;