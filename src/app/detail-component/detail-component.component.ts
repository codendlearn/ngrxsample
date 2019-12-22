import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {IAppState} from '../state/match.reducer'
import {IMatch} from '../state/match'
import {Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  matchObservable: Observable<IMatch[]>
  matchId: string
  match: IMatch
  constructor(private actRoute: ActivatedRoute, private store: Store<IAppState>) {
    this.matchId = this.actRoute.snapshot.params.matchId
    this.matchObservable = this.store.select('MatchData')
  }

  ngOnInit() {
    this.matchObservable.subscribe(data => {
      if (data) {
        this.match = data.MatchData.filter(m => m.Id === this.matchId)[0]
        console.log(this.match)
      }
    })
  }
}
