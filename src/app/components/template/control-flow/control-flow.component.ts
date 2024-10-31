import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
})
export class ControlFlowComponent {
  public isTrue: boolean = true;
  public data: Observable<string[]> = of(['item 1', 'item 2', 'item 3']).pipe(
    delay(3000)
  );
  public data2: Array<string> = ['item 1', 'item 2', 'item 3'];
  public letter: string = 'A';
}
