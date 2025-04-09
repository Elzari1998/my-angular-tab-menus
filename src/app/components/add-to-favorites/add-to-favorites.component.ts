import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-add-to-favorites',
  imports: [
    ReactiveFormsModule, CommonModule, FormsModule,
  ],
  templateUrl: './add-to-favorites.component.html',
  styleUrl: './add-to-favorites.component.css'
})
export class AddToFavoritesComponent {

  favoriteName = '';

  saveFavorite(): void {
    console.log('Favorite saved:', this.favoriteName);
  }

}
