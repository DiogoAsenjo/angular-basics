import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component';

@Component({
  selector: 'app-template-variable',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.scss',
})
export class TemplateVariableComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild(NewComponent) public componente!: NewComponent;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.componente.frase);
  }
}
