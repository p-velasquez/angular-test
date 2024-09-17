import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  newCharacter: Character = { name: '', power: 0 };

  @Output() characterAdded = new EventEmitter<Character>(); // Emitir un evento con el personaje

  constructor() {}

  onSubmit() {
    if (this.newCharacter.name && this.newCharacter.power) {
      this.characterAdded.emit({ ...this.newCharacter });  // Emitir el nuevo personaje
      this.newCharacter = { name: '', power: 0 };  // Reiniciar el formulario
    }
  }
}
