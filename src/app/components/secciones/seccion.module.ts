import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { secRouting } from './sec.routing';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(secRouting)
  ]
})

export class SeccionModule {}