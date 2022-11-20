import React from 'react';
import {Link} from 'react-router-dom'

const RecipeList = ({recipes, title}) => {
    if(!recipes.length){
        return <h3>No Recipe Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {recipes && recipes.map(recipe => (
                <div key={recipe._id} className="card mb-3">
                    <p className='card-header'>
                        <Link to ={`/profile/${recipe.username}`} style = {{fontWeight: 700}} className = 'text-light'>
                            {recipe.username}
                        </Link>{' '}
                        Created on {recipe.createdAt}

                    </p>
                    <div className="card-body">
                        <Link to={`/recipe/${recipe._id}`}>
                            <p>Name: {recipe.name}</p>
                            <p>Ingredient: {recipe.ingredient}</p>
                            <p>Instruction: {recipe.instruction}</p>
                            <p>Cuisne Type:{recipe.cuisine}</p>
                            <p>Calories: {recipe.calories}</p>
                        </Link>

                    </div>

                </div>
            ))}
        </div>
    )
}
export default RecipeList