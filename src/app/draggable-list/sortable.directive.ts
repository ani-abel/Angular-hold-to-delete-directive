import { 
  Directive, 
  ElementRef, 
  AfterViewInit, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';

import { Sortable } from "@shopify/draggable";

@Directive({
  selector: '[sortable]'
})
export class SortableDirective implements AfterViewInit {
  @Input() data: any[];//holds thenew order of the sorted items
  @Output() stop: EventEmitter<any> = new EventEmitter<any>();

  sortable: Sortable;

  ngAfterViewInit(): void {
    this.sortable = new Sortable(this.el.nativeElement, {
      draggable: "li"
    });

    //Different Event that Shoppify offers which can be listened to
    //this.sortable.on("sortable:start", e => this.start.emit(e));
    //this.sortable.on("sortable:sort", e => this.start.emit(e));
    //this.sortable.on("sortable:sorted", e => this.start.emit(e));

    this.sortable.on("sortable:stop", e => this.handleStop(e));
  }

  handleStop(e): void {
    console.log(e);
    //get the new and old index to be used for ordering
    const { newIndex, oldIndex } = e;
    const next = this.data;
    const moved = next.splice(oldIndex, 1);//re-order the list and 
    next.splice(newIndex, 0, moved[0]);//add the re-ordered element back into the list

    this.stop.emit();
  }

  constructor(private el: ElementRef) { }

}
