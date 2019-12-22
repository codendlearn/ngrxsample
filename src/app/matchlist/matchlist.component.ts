import {IMatch} from './../state/match'
import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {IAppState} from '../state/match.reducer'
import {Store, select} from '@ngrx/store'
import {Actions, AddMatch} from '../state/match.action'

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.component.html',
  styleUrls: ['./matchlist.component.css']
})
export class MatchlistComponent implements OnInit {

  // matches: IMatch[]
  matchesobs: string
  matchesOb: Observable<string>
  matchesObser: Observable<IMatch[]>
  matches: IMatch[]
  constructor(private store: Store<IAppState>) {
    this.matchesOb = this.store.select('Global')
    this.matchesObser = this.store.select('MatchData')
  }

  addMatch(name) {
    this.store.dispatch(new AddMatch({Id: '3', Name: 'Match new', }))
  }

  ngOnInit() {
    this.matchesOb.subscribe(data => {
      if (data) {
        this.matchesobs = data.Global
      }
    })

    this.matchesObser.subscribe(data => {
      if (data) {
        this.matches = data.MatchData
      }
    })

  }

}
