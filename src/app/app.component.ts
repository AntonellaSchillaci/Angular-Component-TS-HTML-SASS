import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from './components /Accordion/accordion.component';
import { AlertComponent } from './components /Alert/alert.component';
import { AlertXComponent } from './components /AlertWithX/alertX.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components /Button/button.component';
import { CardComponent } from './components /Card/card.component';
import { FormFieldComponent } from "./components /FormField/formfield.component";
import { InputComponent } from './components /Input/input.component';
import { LoaderComponent } from './components /Loader/loader.component';
import { ModalComponent } from './components /Modal/modal.component';
import { NavbarComponent } from './components /Navbar/navbar.component';
import { SidebarComponent } from './components /Sidebar/sidebar.component';
import { TabsComponent } from './components /Tabs/tabs.component';
import { TextareaComponent } from './components /Textarea/textarea.component';
import { ToastComponent } from './components /Toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AccordionComponent,
    AlertComponent,
    AlertXComponent,
    ButtonComponent,
    CardComponent,
    FormFieldComponent,
    InputComponent,
    LoaderComponent,
    ModalComponent,
    NavbarComponent,
    SidebarComponent,
    TabsComponent,
    TextareaComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-components';
  tabsData = [
    { label: 'Home', content: 'Benvenuto nella Home!' },
    { label: 'Profilo', content: 'Questa è la tua pagina profilo.' },
    { label: 'Contatti', content: 'Scrivici pure a questo indirizzo...' },
  ];
  showToast = true;
  handleToastClose() {
    this.showToast = false;
  }
}
