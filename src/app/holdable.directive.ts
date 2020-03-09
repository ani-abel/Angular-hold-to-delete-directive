import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, interval } from "rxjs";
import { takeUntil, tap, filter } from "rxjs/operators";

@Directive({
  selector: '[Holdable]'
})
export class HoldableDirective {
  //set-up Event as output which sends the current number of seconds the button has been click
  @Output() holdTime: EventEmitter<number> = new EventEmitter<number>();

  state: Subject<string> = new Subject<string>();

  cancel: Observable<string>;

  constructor() { 
    this.cancel = this.state.pipe(
                    filter(v => v === "cancel"),
                    tap(v => {
                        console.log("%c stopped hold", "color: #ec6969, font-weight: bold");
                        this.holdTime.emit(0);
                      })
                  );
  }

  @HostListener("mouseup", ["$event"])
  @HostListener("mouseup", ["$event"])
  onExit(): void {//when the user chooses to cancel the delete operation
    this.state.next("cancel");
  }

  @HostListener("mousedown", ["$event"])
  onHold(): void {
    console.log("%c Hold Started", "color: #5fba7d; font-weight: bold");
    this.state.next("start");

    //start the counter
    const n = 100;//every 100ms
    interval(n).pipe(
      takeUntil(this.cancel),//if any cancel operation occurs cancel the observable
      tap(v => {
        
        if(((v * n) / 10) <= 110){
          console.log((v * n) / 10);
          this.holdTime.emit(v * n);
        }
      })
    )
    .subscribe();
  }

}
