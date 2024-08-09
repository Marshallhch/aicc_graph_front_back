import React, { useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { useDispatch, useSelector } from 'react-redux';
import { fetchVolumeServicesData } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';

const VolumeServices = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.volumeServicesData);

  useEffect(() => {
    dispatch(fetchVolumeServicesData());
  }, [dispatch]);

  console.log(state);
  return (
    <div className="w-[30%] py-[10px] px-[5px]">
      <div className="block-cell">
        <div className="header-wrapper">
          <HeadTitle title="Volume VS Services" />
        </div>
        <div className="bar-chart w-full h-[280px] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={state}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Legend />
              <Bar dataKey="volume" stackId="a" fill="#8884d8" />
              <Bar dataKey="services" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VolumeServices;
