
import '../App.css'
import HeroSection from '../components/HeroSection'
import CardList from '../components/CardList.jsx'
import useFetchRecipes from '../hooks/useFetchRecipes.js'
import Loading from '../components/Loading.jsx'
import { useEffect } from 'react'

export default function HomePage() {
  
  const [fetchRecipes, {data, loading, error}] = useFetchRecipes()

  const handleSearch = (searchInput) => {
    if (searchInput) {
      fetchRecipes(searchInput)
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);


  return (
    <>
        <HeroSection handleSearch={handleSearch}/>
        {loading && <Loading />}
        {data && <CardList recipes={data}/>}
        {error && <h1>{error}</h1>}
        </>
  )
}
