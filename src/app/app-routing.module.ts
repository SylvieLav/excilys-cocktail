import { NgModule } from '@angular/core';
import { RecipeCreateComponent } from './recipe/routed/recipe-create/recipe-create.component';
import { RecipeListComponent } from './recipe/routed/recipe-list/recipe-list.component';
import { RecipeOverviewComponent } from './recipe/routed/recipe-overview/recipe-overview.component';
import { RecipeUpdateComponent } from './recipe/routed/recipe-update/recipe-update.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: 'recipes/create',
    component: RecipeCreateComponent
  },
  {
    path: 'recipes/update/:id',
    component: RecipeUpdateComponent
  },
  {
    path: 'recipes/:id',
    component: RecipeOverviewComponent
  },
  {
    path: '**',
    redirectTo: 'recipes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
