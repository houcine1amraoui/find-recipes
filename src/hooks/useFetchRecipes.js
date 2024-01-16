import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
  },
  headers: {
    "X-RapidAPI-Key": "40974a6303mshf18df120ddd6f20p1eea86jsn60127333aa12",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (searchInput) => {
    setLoading(true);
    setRecipes(null);
    setError(null);
    try {
      const reqOptions = { ...options };
      if (searchInput) {
        reqOptions.params.q = searchInput;
      }
      const response = await axios.request(reqOptions);
      setRecipes(response.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  };

  return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;
