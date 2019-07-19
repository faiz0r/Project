import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  faDumbell = faOldRepublic

  constructor() { }

  ngOnInit() {
  }

}
