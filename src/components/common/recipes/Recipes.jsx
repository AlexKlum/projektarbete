import React from "react";

import "./Recipes.css";

function Recipes() {
	return (
		<div className="recipes">
			<div className="recipeImg">
				<img
					src="https://webkit.org/demos/srcset/image-src.png"
					alt=""
					srcset=""
				/>
			</div>
			<div className="info">
				<div className="recipeName">
					<h2>Tomatsås PRO</h2>
				</div>

				<div className="recipeInfo">
					<p>
						Recept på hur man gör en tomatsås.
						blabalbablablababalblablablalablablalalb
					</p>
				</div>

				<div className="recipeIngredients">
					<p>5 ingridientser | 10 min</p>
				</div>
			</div>
		</div>
	);
}

export default Recipes;
