import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home_page/home_page.component';
import { BooksPageComponent } from './books_page/books_page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, // Home page route
  { path: 'books', component: BooksPageComponent }, // Books page route
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), // Add routes to the app
  ],
})
export class AppRoutesModule {}
