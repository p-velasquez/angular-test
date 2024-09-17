import { Component } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // Lista de personajes que se pasará al ListComponent
  public characters: Character[] = [
    { name: 'Krilin', power: 1000 },
    { name: 'Goku', power: 9000 }
  ];

  // Método que se llamará cuando se agregue un nuevo personaje
  onCharacterAdded(newCharacter: Character) {
    this.characters.push(newCharacter); // Agregar el personaje a la lista
  }
}
