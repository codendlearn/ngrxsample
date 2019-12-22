import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store'
import {reducer} from './state/match.reducer'
import {MatchlistComponent} from './matchlist/matchlist.component'
import {Routes} from '@angular/router'
import {DetailComponentComponent} from './detail-component/detail-component.component'

@NgModule({
  declarations: [
    AppComponent,
    MatchlistComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      Global: reducer,
      MatchData: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent, MatchlistComponent]
})
export class AppModule {}
