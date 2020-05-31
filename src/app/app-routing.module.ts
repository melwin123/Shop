import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WomenComponent } from './women/women.component';



const routes: Routes = [
{path:'',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'contact',component:ContactComponent},
{path:'details',component:DetailsComponent},
{path:'checkout',component:CheckoutComponent},
{path:'women',component:WomenComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
