import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    }
];
