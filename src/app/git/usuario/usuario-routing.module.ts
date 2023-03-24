import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { UsuarioComponent } from './usuario.component';
import { AutenticacaoGuard } from 'src/app/core/seguranca/autenticacao.guard';



const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', 
  component: UsuarioComponent, 
  data: { title: extract('Git') , breadcrumb: 'CADASTRO_USUARIO_GIT' },
  canActivate: [AutenticacaoGuard],
  canActivateChild: [AutenticacaoGuard],
  canDeactivate: [AutenticacaoGuard],
  resolve: [AutenticacaoGuard],
  canLoad: [AutenticacaoGuard], 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}
