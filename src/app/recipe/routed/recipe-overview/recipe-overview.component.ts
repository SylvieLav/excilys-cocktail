import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {

  id: string;
  recipe: Recipe;

  constructor(private _recipeService: RecipeService, private _route: ActivatedRoute) {
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this._recipeService
      .getRecipeById(this._route.snapshot.paramMap.get('id'))
      .subscribe(recipe => (this.recipe = recipe));
  }
}
