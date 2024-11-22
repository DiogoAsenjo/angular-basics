import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  public firstName: WritableSignal<string> = signal('Diogo');
  public lastName: WritableSignal<string> = signal('Asenjo');
  public fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  });
  public array = signal([1, 2]);

  public changeFirstName(): void {
    this.firstName() === 'Diogo'
      ? this.firstName.set('Gabriel')
      : this.firstName.set('Diogo');
  }

  public updateArray(): void {
    this.array.update((oldValue) => {
      let lengthArray = oldValue.length;
      let lastNumberOfArray = oldValue[lengthArray - 1];
      return [...oldValue, lastNumberOfArray + 1];
    });
  }
}
