import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  animations: [
    trigger('explainerAnim', [
      transition('* => *', [
        query('.col0', style({ opacity: 0, transform: 'translateX(-40px)' })),
        query('.col1', style({ opacity: 0, transform: 'translateY(-40px)' })),
        query('.col2', style({ opacity: 0, transform: 'translateX(40px)' })),
        query('.col3', style({ opacity: 0, transform: 'translateY(40px)' })),

        query(
          '.col',
          stagger('500ms', [
            animate(
              '800ms 1.2s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            )
          ])
        ),

        query('.col', [animate(1000, style('*'))])
      ])
    ])
  ]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    this._recipeService
      .getAllRecipes()
      .subscribe(recipes => (this.recipes = recipes));
  }

  handleDelete(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
    console.log(recipe);
  }
}
