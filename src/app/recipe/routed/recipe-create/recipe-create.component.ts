import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  recipe: Recipe;

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = new Recipe();
  }

  handlePostRecipe() {
    this.recipe.ingredients = [{ ingredientId: 1 } as Ingredient];
    this._recipeService.postRecipe(this.recipe).subscribe();
    console.log(this.recipe);
  }
}
