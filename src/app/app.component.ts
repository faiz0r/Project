import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Event, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faDiceFour = faDumbbell;

  title = 'angular8demo';
  constructor(
    private loadingBar: SlimLoadingBarService,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
}
