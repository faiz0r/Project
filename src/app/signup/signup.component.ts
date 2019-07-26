import { Component, OnInit } from '@angular/core';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  faDumbell = faOldRepublic;
  
  constructor(private authService: AuthService) { }

  signup(username: string, password: string){
    this.authService.signup(username, password);
    console.log(username, password);
  }

  ngOnInit() {
  }

}
