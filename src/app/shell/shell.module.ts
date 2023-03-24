import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


import { ShellComponent } from './shell.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, TranslateModule, RouterModule],
  declarations: [ShellComponent, TopbarComponent, FooterComponent]
})
export class ShellModule {}
