import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    if (!response.ok) return setError(true);
    setError(false);
    setData(response.data);
  };
  return { dta, error, loading, request };
};

export default useApi;

const styles = StyleSheet.create({});
