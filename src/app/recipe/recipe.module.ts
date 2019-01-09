
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RecipeCreateComponent } from './routed/recipe-create/recipe-create.component';
import { RecipeDetailComponent } from './routed/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './routed/recipe-list/recipe-list.component';
import { RouterModule } from '@angular/router';
import { RecipeOverviewComponent } from './routed/recipe-overview/recipe-overview.component';
import { StrToArrayPipe } from '../shared/pipes/str-to-array.pipe';
import { RecipeUpdateComponent } from './routed/recipe-update/recipe-update.component';


@NgModule({
  declarations: [
    RecipeCreateComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeOverviewComponent,
    StrToArrayPipe,
    RecipeUpdateComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [RecipeDetailComponent, RecipeListComponent]
})
export class RecipeModule {}
