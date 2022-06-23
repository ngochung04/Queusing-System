import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { ReactComponent as Calendar1Ic } from '../../../Assets/calendar1.svg';
import { ReactComponent as Calendar2Ic } from '../../../Assets/calendar2.svg';
import { ReactComponent as WaitIc } from '../../../Assets/wait.svg';
import { ReactComponent as PassingIc } from '../../../Assets/passing.svg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import './dashboard.scss';
import StatsPanel from './StatsPanel/StatsPanel';
import Arrow from '../../../Assets/Arrow';
import Select from '../../Select/Select';
const selectOptions = ['Ngày', 'Tháng', 'Năm'];
const Counter: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  const data = {
    labels: [1, 5, 15, 20, 25, 30],
    drawActiveElementsOnTop: false,
    datasets: [
      {
        label: '',
        data: [
          25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1,
        ],
        fill: true,
        lineTension: 0.4,
        backgroundColor: 'rgba(206, 221, 255, 0.4)',
        borderColor: '#5185F7',
        borderWidth: 1,
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };
  return (
    <div className='app__layout-dashboard__counter'>
      <div className='app__layout-dashboard__counter__container'>
        <div className='counter-label'>Biểu đồ cấp số</div>
        <div className='counter-cards'>
          <div className='counter-cards__card'>
            <div className='row'>
              <div className='image blue'>
                <Calendar1Ic />
              </div>
              <div className='label'>Số thứ tự đã cấp</div>
            </div>
            <div className='row'>
              <div className='count'>4.221</div>
              <div className='diff raise'>
                <Arrow />
                32,41%
              </div>
            </div>
          </div>
          <div className='counter-cards__card'>
            <div className='row'>
              <div className='image green'>
                <Calendar2Ic />
              </div>
              <div className='label'>Số thứ tự đã cấp</div>
            </div>
            <div className='row'>
              <div className='count'>3.721</div>

              <div className='diff drop'>
                <Arrow />
                32,41%
              </div>
            </div>
          </div>
          <div className='counter-cards__card'>
            <div className='row'>
              <div className='image orange'>
                <WaitIc />
              </div>
              <div className='label'>Số thứ tự đã cấp</div>
            </div>
            <div className='row'>
              <div className='count'>468</div>
              <div className='diff drop'>
                <Arrow />
                32,41%
              </div>
            </div>
          </div>
          <div className='counter-cards__card'>
            <div className='row'>
              <div className='image red'>
                <PassingIc />
              </div>
              <div className='label'>Số thứ tự đã cấp</div>
            </div>
            <div className='row'>
              <div className='count'>32</div>
              <div className='diff raise'>
                <Arrow />
                32,41%
              </div>
            </div>
          </div>
        </div>
        <div className='counter-chart'>
          <div className='row'>
            <div className='col'>
              <div className='chart-label'>Bảng thống kê theo ngày</div>
              <div className='chart-month-of-year'>Tháng 11/2021</div>
            </div>
            <div className='col'>
              <div className='view-mode'>
                <span>Xem theo</span>
                <Select options={selectOptions} onSelectedChange={change} />
              </div>
            </div>
          </div>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

const change = (newValue: string) => {
  console.log(newValue);
};

const Dashboard: React.FC = () => {
  return (
    <div className='app__layout-dashboard'>
      <Counter />
      <StatsPanel />
    </div>
  );
};

export default Dashboard;
