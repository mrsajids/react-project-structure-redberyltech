// components/DataComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>Data: {JSON.stringify(data)}</div>;
};

export default DataComponent;