import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule  } from '@angular/forms';

import { RepositorioRoutingModule } from './repositorio-routing.module';
import { RepositorioComponent } from './repositorio.component';

@NgModule({
  declarations: [RepositorioComponent],
  imports: [CommonModule, RepositorioRoutingModule, TranslateModule,ReactiveFormsModule]
})
export class RepositorioModule {}
