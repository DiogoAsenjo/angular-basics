import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariableComponent } from './components/template/template-variable/template-variable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariableComponent,
  ],
  template: `
    <app-new-component />
    <app-template-binding />
    <app-template-variable />
  `,
})
export class AppComponent {
  title = 'angular-primeiro-projeto';
}
