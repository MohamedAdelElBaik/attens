'use client';

import Card from './Card';
import { PieChart } from '@mui/x-charts/PieChart';

function DayAttendance() {
  return (
    <Card header="حضور اليوم" className="w-96 ">
      <div className="flex justify-between">
        <div>
          <p className="mt-8 text-gray">عدد الموظفين الحالي</p>
          <span className="text-primary-900 text-5xl font-medium">136/120</span>
        </div>
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: 60,
                  // label: 'series A',
                  color: '#fff',
                },
                {
                  id: 1,
                  value: 40,
                  // label: 'series B',
                  color: 'hsla(111, 64%, 39%, 1)',
                },
              ],
              innerRadius: 55,
              outerRadius: 70,
              startAngle: -360,
              endAngle: 0,
              cx: 80,
              cy: 70,
              fill: '#8884d8',
            },
          ]}
          width="100%"
          height="100%"
        />
      </div>
    </Card>
  );
}

export default DayAttendance;
