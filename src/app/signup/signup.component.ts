import { Component, OnInit } from '@angular/core';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  faDumbell = faOldRepublic;

  constructor() { }

  ngOnInit() {
  }

}
