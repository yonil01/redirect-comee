import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FuseProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [FuseProgressBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [FuseProgressBarComponent],
})
export class FuseProgressBarModule {}
