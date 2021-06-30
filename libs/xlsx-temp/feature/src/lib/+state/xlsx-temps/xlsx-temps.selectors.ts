import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  XLSX_TEMPS_FEATURE_KEY,
  State,
  xlsxTempsAdapter,
} from './xlsx-temps.reducer';

// Lookup the 'XlsxTemps' feature state managed by NgRx
export const getXlsxTempsState = createFeatureSelector<State>(
  XLSX_TEMPS_FEATURE_KEY
);

const { selectAll, selectEntities } = xlsxTempsAdapter.getSelectors();

export const getXlsxTempsLoaded = createSelector(
  getXlsxTempsState,
  (state: State) => state.loaded
);

export const getXlsxTempsError = createSelector(
  getXlsxTempsState,
  (state: State) => state.error
);

export const getAllXlsxTemps = createSelector(
  getXlsxTempsState,
  (state: State) => selectAll(state)
);

export const getXlsxTempsEntities = createSelector(
  getXlsxTempsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getXlsxTempsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getXlsxTempsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
