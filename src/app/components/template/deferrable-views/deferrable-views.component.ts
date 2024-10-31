import { Component } from '@angular/core';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
})
export class DeferrableViewsComponent {
  public isTrue: boolean = false;

  public changeBoolean(): void {
    this.isTrue = this.isTrue ? false : true;
    console.log(this.isTrue);
  }
}
