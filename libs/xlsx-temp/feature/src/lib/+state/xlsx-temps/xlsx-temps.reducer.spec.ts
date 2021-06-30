import { Action } from '@ngrx/store';

import * as XlsxTempsActions from './xlsx-temps.actions';
import { XlsxTempsEntity } from './xlsx-temps.models';
import { State, initialState, reducer } from './xlsx-temps.reducer';

describe('XlsxTemps Reducer', () => {
  const createXlsxTempsEntity = (id: string, name = ''): XlsxTempsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid XlsxTemps actions', () => {
    it('loadXlsxTempsSuccess should return the list of known XlsxTemps', () => {
      const xlsxTemps = [
        createXlsxTempsEntity('PRODUCT-AAA'),
        createXlsxTempsEntity('PRODUCT-zzz'),
      ];
      const action = XlsxTempsActions.loadXlsxTempsSuccess({ xlsxTemps });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
