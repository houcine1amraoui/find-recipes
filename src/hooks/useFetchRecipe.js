import axios from "axios";
import { useState, useReducer } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: { id: "1" },
  headers: {
    "X-RapidAPI-Key": "40974a6303mshf18df120ddd6f20p1eea86jsn60127333aa12",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const Action = {
  FETCHING: "FETCHING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const reducer = (_, action) => {
  switch (action.type) {
    case Action.FETCHING:
      return {
        data: null,
        loading: true,
        error: null,
      };
    case Action.SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case Action.ERROR:
      return {
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};

const useFetchRecipe = () => {
  // const [recipe, setRecipe] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [{ data: recipe, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchRecipe = async (id) => {
    // setLoading(true);
    // setRecipe(null);
    // setError(null);
    dispatch({ type: Action.FETCHING });
    try {
      const reqOptions = { ...options };
      reqOptions.params.id = id;
      const response = await axios.request(reqOptions);
      // setRecipe(response.data);
      // setLoading(false);
      dispatch({ type: Action.SUCCESS, payload: response.data });
    } catch (err) {
      console.log(err);
      // setError(err.message);
      // setLoading(false);
      dispatch({ type: Action.ERROR, payload: err.message });
    }
  };

  return [fetchRecipe, { data: recipe, loading, error }];
};

export default useFetchRecipe;
