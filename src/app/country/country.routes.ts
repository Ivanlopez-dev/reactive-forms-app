import { Routes } from '@angular/router';
import { RegisterPageComponent } from '../auth/pages/register-page/register-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


export const authRoutes: Routes = [
  {
    path: '',
    component: CountryPageComponent
  }
]
