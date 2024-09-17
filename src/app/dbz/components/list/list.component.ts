import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characters: Character[] = [];

  // Método que se invoca cuando se agrega un nuevo personaje desde el formulario
  onCharacterAdded(character: Character) {
    this.characters.push(character);  // Agregar el nuevo personaje a la lista
  }
}
