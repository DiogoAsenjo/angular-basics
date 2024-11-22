import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, JsonPipe, CurrencyPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {
  public date = signal(new Date());
  public text = 'diogo asenjo';
  public simpleJSON = signal([{ nome: 'Diogo', Idade: 28 }]);
}
