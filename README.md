# Angular Reusable UI Components

> Una raccolta di componenti UI modulari, riutilizzabili e stilisticamente neutri per applicazioni Angular, costruiti con TypeScript e SCSS.

---

## Caratteristiche

- Componenti standalone facili da integrare
- Stile pulito e minimale, personalizzabile
- Componenti comuni: Button, Alert, Card, Loader, Modal, Toast, FormField, Input, Textarea, Navbar, Sidebar, Tabs, Accordion
- Gestione interna dello stato (es. apertura/chiusura modale, tabs, ecc.)

---

## Componenti inclusi

| Componente   | Descrizione                         |
|--------------|-----------------------------------|
| Button       | Pulsante con evento click          |
| Alert        | Messaggi di notifica (info, error, success) |
| Card         | Contenitore con bordo e ombra     |
| Loader       | Indicatore di caricamento          |
| Modal        | Finestra modale riutilizzabile     |
| Toast        | Notifica a comparsa                |
| FormField    | Wrapper per input e textarea con label e error |
| Input        | Campo input semplice               |
| Textarea     | Campo textarea                    |
| Navbar       | Barra di navigazione               |
| Sidebar      | Menu laterale                     |
| Tabs         | Componenti a schede               |
| Accordion    | Sezioni a espansione              |

---

## Installazione

Copia i file dei componenti nel tuo progetto Angular e aggiungi i componenti al modulo condiviso:

```ts
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
// importa gli altri componenti...

@NgModule({
  declarations: [
    ButtonComponent,
    // altri componenti...
  ],
  exports: [
    ButtonComponent,
    // altri componenti...
  ]
})
export class SharedModule {}
```
## Esempio di utilizzo
```
<app-button label="Salva" (clicked)="onSave()"></app-button>

<app-modal triggerLabel="Apri Modale">
  <p>Contenuto personalizzato</p>
</app-modal>
```
