import {Action} from '@ngrx/store'
import {IMatch} from './match'

export const ADD_MATCH = 'ADD_MATCH'
export const REMOVE_MATCH = 'ADD_MATCH'


export class AddMatch implements Action {
  readonly type = ADD_MATCH
  constructor(public payload: IMatch) {}
}

export class RemoveMatch implements Action {
  readonly type = ADD_MATCH
  constructor(public payload: IMatch) {}
}

export type Actions = AddMatch | RemoveMatch
