import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  toggleDescription = false;

  @Input()
  recipe: Recipe;
  @Input()
  showDescription = false;

  @Output()
  deleteRecipe: EventEmitter<any> = new EventEmitter();

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    console.log(this.recipe);
  }

  handleToggleDescription() {
    this.toggleDescription = !this.toggleDescription;
  }

  handleDelete() {
    this._recipeService.deleteRecipe(this.recipe).subscribe(() => this.deleteRecipe.emit(this.recipe));
  }
}
