import {IMatch} from './match'
import * as MatchActions from './match.action'

export interface IAppState {
  MatchData: IMatch[]
  Global: string
}

const initialState: IAppState = {
  MatchData: [{
    Id: 'asdf',
    Name: 'sdfasdfasdf',
    // GuestTeamId: 'guesteam',
    // HostTeamId: 'hostteam',
    // GuestTeamFlag: '',
    // HostTeamFlag: ''
  }],
  Global: 'st'
}

export function reducer(state: IAppState = initialState, action: MatchActions.Actions) {
  switch (action.type) {
    case MatchActions.ADD_MATCH:
      return {...state, MatchData: [...state.MatchData, action.payload]}

    default: return state
  }
}
