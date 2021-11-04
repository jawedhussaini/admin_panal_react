
import React from 'react'
import {Bar} from 'react-chartjs-2'
function Chart_one() {
    return (
        <div className="container">
           

          <Bar 
          data={{
               labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','fuchsia'],
                datasets: [{
            label: 'ACTIVETY DEAGRAM',
            data: [5, 10, 12, 14, 16,18,20],
            backgroundColor: [
                'rgb(0, 238, 255)',
                'rgb(0, 195, 255)',
                'rgb(0, 140, 255)',
                'rgb(68, 0, 255)',
                'rgb(111, 0, 255)',
                'rgb(174, 0, 255)',
                'rgb(195, 0, 255)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
     
          }}
   
          height={400}
          width={600}

          options={{
maintainAspectRatio:false
          }}
          
          />  
        </div>
    )
}

export default Chart_one