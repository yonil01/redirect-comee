import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormlyStepComponent } from './formly-step/formly-step.component';
// import { FormComponent } from './form/form.component';
// import { FormlyComponent } from './formly/formly.component';
// import { DataTableComponent } from './data-table/data-table.component';
// import { PanelCardComponent } from './panel-card/panel-card.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ImageComponent } from './image/image.component';
// import { TextComponent } from './text/text.component';
// import { DocumentIdComponent } from './document-id/document-id.component';

@NgModule({
  declarations: [
    // FormlyStepComponent,
    // FormComponent,
    // FormlyComponent,
    // DataTableComponent,
    // PanelCardComponent,
    // ImageComponent,
    // TextComponent,
    // DocumentIdComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // FormlyStepComponent, FormComponent, FormlyComponent, DataTableComponent, PanelCardComponent
  ],
})
export class DynamicFormViewerModule {}
