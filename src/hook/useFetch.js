import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialstate = {
  error: null,
  loading: false,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null, data: null };

    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, error: null, data: action.payload };

    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload, data: null };

    default:
      return state;
  }
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    dispatch({ type: "FETCH_DATA_REQUEST" });

    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: err.message });
      });
  }, []);

  return state;
};

export default useFetch;
