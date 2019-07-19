import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { TopsComponent } from './products/tops/tops.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'tops', component: TopsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'signin', component: SigninComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
