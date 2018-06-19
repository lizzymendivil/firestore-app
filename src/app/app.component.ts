import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // items: Observable<any[]>;
  // title = 'app';
  /* constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  } */

  /* private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  } */

  itemsCol: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  // items: any;


  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.itemsCol = this.afs.collection('items');
    this.items = this.itemsCol.valueChanges();
    /* this.items = this.itemsCol.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, data };
      });
    })); */

  }

}
