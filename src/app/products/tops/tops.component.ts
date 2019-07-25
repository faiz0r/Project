import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {
  description = 'Angular-Fire-Demo';
  itemValue = '';
  Tops: any[];

  faBasket = faShoppingBasket;

  constructor(public db: AngularFireDatabase) {

    db.list('/tops').valueChanges()
      .subscribe(result => {
        this.Tops = result;
      });
      
   }

  ngOnInit() {
  }

}
