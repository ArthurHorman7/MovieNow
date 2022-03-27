import { InformacoesComponent } from './body-global/informacoes/informacoes.component';
import { FilmesComponent } from './body-global/filmes/filmes.component';
import { SobreNosComponent } from './body-global/sobre-nos/sobre-nos.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SobreNosComponent
  },
  {
    path: 'filmes',
    component: FilmesComponent
  },
  {
    path: 'informacoes',
    component: InformacoesComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
