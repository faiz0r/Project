import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  faDumbell = faOldRepublic;

  constructor() { }

  ngOnInit() {
  }

}
