import { Routes } from '@angular/router';
import { InvestmentForm } from './investment-form/investment-form';
import { InvestmentDetails } from './investment-details/investment-details';
import { HomePage } from './home-page/home-page';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'investment-details', component: InvestmentDetails},
    {path: 'investment-form', component: InvestmentForm},
    {path: 'investment-dashboard', component: Dashboard}
];
