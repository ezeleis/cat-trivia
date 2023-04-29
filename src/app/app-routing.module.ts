import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcessoGuard } from './acesso.guard';
import { LoginComponent } from './login/login.component';
import { SemAcessoComponent } from './sem-acesso/sem-acesso.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AcessoGuard]},
  {path:'sem-acesso', component:SemAcessoComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
