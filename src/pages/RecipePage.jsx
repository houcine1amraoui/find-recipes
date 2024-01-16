import { useParams } from "react-router-dom";
import useFetchRecipe from "../hooks/useFetchRecipe";
import { useEffect } from "react";
import RecipeHeader from "../components/RecipeHeader";
import Loading from "../components/Loading";
import RecipeInfo from "../components/RecipeInfo";

export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, {data, loading, error}] = useFetchRecipe()
  // const recipe = recipes.find(r => r.id === parseInt(id))

  useEffect(() => {
    fetchRecipe(id)
  }, [])

  if (loading){return <Loading />}
  if (error) {return <h1>{error.message}</h1>}

  return (
    <div>
      {data && 
      <>
        <RecipeHeader name={data.name} nutritionalFacts={data.nutrition}/>
        <RecipeInfo instructions={data.instructions} image={data.thumbnail_url}/>
      </>
      }
    </div>
  );
}
