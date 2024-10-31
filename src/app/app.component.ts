import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariableComponent } from './components/template/template-variable/template-variable.component';
import { ControlFlowComponent } from './components/template/control-flow/control-flow.component';
import { DeferrableViewsComponent } from './components/template/deferrable-views/deferrable-views.component';
import { SignalsComponent } from './components/signals/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariableComponent,
    ControlFlowComponent,
    DeferrableViewsComponent,
    SignalsComponent,
  ],
  template: `
    <app-signals />
    <app-new-component />
    <app-template-binding />
    <app-template-variable />
    <app-control-flow />
    <app-deferrable-views />
  `,
})
export class AppComponent {
  title = 'angular-primeiro-projeto';
}
