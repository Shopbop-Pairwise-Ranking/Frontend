import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenderSelectionComponent } from './components/gender-selection/gender-selection.component';
import { CategorySelectionComponent } from './components/category-selection/category-selection.component';
import { ClothingRankingComponent } from './components/clothing-ranking/clothing-ranking.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'gender-selection',
        component: GenderSelectionComponent
    },
    {
        path: 'categories/:gender',
        component: CategorySelectionComponent
    },
    {
        path: 'ranking/:gender/:category', 
        component: ClothingRankingComponent
    },

    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
