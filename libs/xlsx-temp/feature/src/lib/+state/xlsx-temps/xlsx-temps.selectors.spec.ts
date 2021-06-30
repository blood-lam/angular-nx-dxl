import { XlsxTempsEntity } from './xlsx-temps.models';
import {
  xlsxTempsAdapter,
  XlsxTempsPartialState,
  initialState,
} from './xlsx-temps.reducer';
import * as XlsxTempsSelectors from './xlsx-temps.selectors';

describe('XlsxTemps Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getXlsxTempsId = (it: XlsxTempsEntity) => it.id;
  const createXlsxTempsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as XlsxTempsEntity);

  let state: XlsxTempsPartialState;

  beforeEach(() => {
    state = {
      xlsxTemps: xlsxTempsAdapter.setAll(
        [
          createXlsxTempsEntity('PRODUCT-AAA'),
          createXlsxTempsEntity('PRODUCT-BBB'),
          createXlsxTempsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('XlsxTemps Selectors', () => {
    it('getAllXlsxTemps() should return the list of XlsxTemps', () => {
      const results = XlsxTempsSelectors.getAllXlsxTemps(state);
      const selId = getXlsxTempsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = XlsxTempsSelectors.getSelected(state) as XlsxTempsEntity;
      const selId = getXlsxTempsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getXlsxTempsLoaded() should return the current "loaded" status', () => {
      const result = XlsxTempsSelectors.getXlsxTempsLoaded(state);

      expect(result).toBe(true);
    });

    it('getXlsxTempsError() should return the current "error" state', () => {
      const result = XlsxTempsSelectors.getXlsxTempsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
