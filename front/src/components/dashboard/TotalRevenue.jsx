import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRevenueData } from '../../redux/slices/apiSlice';

const TotalRevenue = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api.revenueData);

  useEffect(() => {
    dispatch(fetchRevenueData());
  }, [dispatch]);

  console.log(state);
  return <div>TotalRevenue</div>;
};

export default TotalRevenue;
