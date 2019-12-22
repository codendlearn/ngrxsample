import {DetailComponentComponent} from './detail-component/detail-component.component'
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'


const routes: Routes = [
  {path: 'leagues/:matchId', component: DetailComponentComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
