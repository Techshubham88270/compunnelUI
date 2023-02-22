import React,{useState,useEffect} from 'react'
// import {Chart as ChartJS,CategoryScale,BarElement,Title,Tooltip,Legend} from 'chart.js'

import {Bar} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
// ChartJS.register(CategoryScale,BarElement,Title,Tooltip,Legend)

function Barchart() {
    const[chartData,setChartData]=useState({
        datasets:[]
    })
    const [chartOption,setChartOption]=useState({});
    useEffect(()=>{
        setChartData({
            datasets: [{
                type: 'bar',
                label: 'Bar Dataset',
                barThickness: 60,
                borderRadius:5,
                grouped:true,
               
                data: [8, 6, 2, 1, 2, 3, 6]
            }, {
                type: 'line',
                label: 'Line Dataset',
                pointStyle:'triangle',
                data: [5, 7, 3, 3, 1, 2, 8]

            }],
            labels: ['Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06', 'Mar 07']
        })
        setChartOption({
            scales: {
                y: {
                  beginAtZero: false
                }
              }
        })
    },[])
  return (
    <div>
        <div className="row">
            <div className="col-8">
                <div className='col-12'>
                <Bar data={chartData} option={chartOption}/>
                </div>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'></div>

                </div>

            </div>
            <div className='col-4'></div>
        </div>
       
    </div>
  )
}

export default Barchart