import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { DraggableListComponent } from './draggable-list/draggable-list.component';

const routes: Routes = [
  { path: "", redirectTo: "hold-to-delete", pathMatch: "full" },
  { path: "hold-to-delete", component: DeleteComponentComponent },
  { path: "shoppify-draggable", component: DraggableListComponent },
  { path: "**", redirectTo: "hold-to-delete" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
