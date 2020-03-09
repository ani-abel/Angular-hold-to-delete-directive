import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoldableDirective } from './holdable.directive';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { DraggableListComponent } from './draggable-list/draggable-list.component';
import { CustomerComponent } from './delete-component/customer/customer.component';
import { SortableDirective } from './draggable-list/sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoldableDirective,
    DeleteComponentComponent,
    DraggableListComponent,
    CustomerComponent,
    SortableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
