import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent {
  public name: string = 'Diogo Asenjo';
  public age: number = 28;
  public enabled: boolean = true;
  public randomNum: number = 0;
  public isRed: boolean = false;

  public gerenateRandomNum(): void {
    this.randomNum = Math.random();
  }

  public decidingIfItIsRed(num: number): void {
    if (num > 0.5) {
      this.isRed = true;
    } else {
      this.isRed = false;
    }
    console.log(this.randomNum);
    console.log(this.isRed);
  }
}
