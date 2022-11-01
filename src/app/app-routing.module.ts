import { TornillosComponent } from './pages/tornillos/tornillos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
const routes: Routes = [
  {
    path: '',
    title: 'home',
    component: HomeComponent,
  },
  {
    path: 'signin',
    title: 'SignIn',
    component: SignInComponent,
  },
  {
    path: 'signup',
    title: 'SignUp',
    component: SignUpComponent,
  },
  {
    path: 'tornillos',
    title: 'Tronillos',
    component: TornillosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
