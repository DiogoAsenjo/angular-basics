import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.html',
  styleUrl: './new-component.scss',
})
export class NewComponent {
  public frase: string = 'Você está acessando a propriedade de outra classe!';
}
