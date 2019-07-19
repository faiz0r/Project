import { Component, OnInit } from '@angular/core';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faDumbell = faDumbbell;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faSnapchat = faSnapchat;

  constructor() { }

  ngOnInit() {
  }

}
