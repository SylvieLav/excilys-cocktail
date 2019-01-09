import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {
  recipe: Recipe;

  recipeForm = this.fb.group({
    name: [''],
    picture: [''],
    description: ['']
  });

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this._recipeService
      .getRecipeById(this._route.snapshot.paramMap.get('id'))
      .subscribe(recipe => {
        this.recipe = recipe;
        this.recipeForm.patchValue({
          name: recipe.name,
          picture: recipe.picture,
          description: recipe.description
        });
      });
  }

  handleUpdate() {
    this.recipe.name = this.recipeForm.get('name').value;
    this.recipe.picture = this.recipeForm.get('picture').value;
    this.recipe.description = this.recipeForm.get('description').value;
    this._recipeService.updateRecipe(this.recipe).subscribe();
    console.log(this.recipe);
  }
}
