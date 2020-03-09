import { Component, OnInit } from '@angular/core';

//Commented out sections are for code that deals directly with the 'firestore db'
//Resource Link: "https://angularfirebase.com/lessons/sortable-drag-and-drop-lists-in-firestore/"

@Component({
  selector: 'app-draggable-list',
  templateUrl: './draggable-list.component.html',
  styleUrls: ['./draggable-list.component.css']
})
export class DraggableListComponent implements OnInit {
  docs: string[] = ["Amy", "James", "Johnny", "Annie"];

// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

// @Component(...)
// export class EmojisComponent implements OnInit {
//   constructor(private afs: AngularFirestore) {}

//   docRef: AngularFirestoreDocument;
//   doc$: Observable<any>;


//   ngOnInit() {
//     this.docRef = this.afs.doc(`emojis/userJeffD`);
//     this.doc$ = this.docRef.valueChanges();
//   }
  
//   update(e) {
//     this.docRef.update(e) 
//   }

  constructor() { }

  ngOnInit() {
  }

  updateFirestore($event): void {
    console.log(event);
  }

  removeItem(index: number): void {
    this.docs.splice(index, 1);
    console.log(this.docs);
  }

  addItem(): void {
    this.docs.push("Jimmy");
    console.log(this.docs);
  }

  // appendItem() {
  //   const emoji = '🍺 Beer Me'
  //   this.docRef.update({ 
  //     favs: firestore.FieldValue.arrayUnion(emoji) 
  //   })
  // }

  // removeItem(emoji) {
  //   this.docRef.update({ 
  //     favs:  firestore.FieldValue.arrayRemove(emoji) 
  //   })
  // }

}
