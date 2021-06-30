import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as XlsxTempsActions from './xlsx-temps.actions';
import { XlsxTempsEntity } from './xlsx-temps.models';

export const XLSX_TEMPS_FEATURE_KEY = 'xlsxTemps';

export interface State extends EntityState<XlsxTempsEntity> {
  selectedId?: string | number; // which XlsxTemps record has been selected
  loaded: boolean; // has the XlsxTemps list been loaded
  error?: string | null; // last known error (if any)
}

export interface XlsxTempsPartialState {
  readonly [XLSX_TEMPS_FEATURE_KEY]: State;
}

export const xlsxTempsAdapter: EntityAdapter<XlsxTempsEntity> =
  createEntityAdapter<XlsxTempsEntity>();

export const initialState: State = xlsxTempsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const xlsxTempsReducer = createReducer(
  initialState,
  on(XlsxTempsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(XlsxTempsActions.loadXlsxTempsSuccess, (state, { xlsxTemps }) =>
    xlsxTempsAdapter.setAll(xlsxTemps, { ...state, loaded: true })
  ),
  on(XlsxTempsActions.loadXlsxTempsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return xlsxTempsReducer(state, action);
}
