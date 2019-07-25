import { Component, OnInit } from '@angular/core';
import { faDumbbell, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faAirFreshener = faDumbbell;
  faBasket = faShoppingBasket;

  constructor() {}

  ngOnInit() {}

}
