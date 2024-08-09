import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRevenueData } from '../../redux/slices/apiSlice';
import HeadTitle from './HeadTitle';

const TotalRevenue = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.revenueData);

  useEffect(() => {
    dispatch(fetchRevenueData());
  }, [dispatch]);

  // console.log(state);
  return (
    <div className="block-cell">
      <HeadTitle title="Total Revenue" />
    </div>
  );
};

export default TotalRevenue;
