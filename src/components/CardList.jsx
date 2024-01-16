import Card from './Card'

// import { recipes } from '../constants/recipes'

export default function CardList({recipes}) {
  return (
    <div className="cards">
        {recipes.map(recipe =>(<Card key={recipe.id} recipe={recipe}/>))}
    </div>
  )
}
