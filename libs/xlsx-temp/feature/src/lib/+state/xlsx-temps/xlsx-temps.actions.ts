import { createAction, props } from '@ngrx/store';
import { XlsxTempsEntity } from './xlsx-temps.models';

export const init = createAction('[XlsxTemps Page] Init');

export const loadXlsxTempsSuccess = createAction(
  '[XlsxTemps/API] Load XlsxTemps Success',
  props<{ xlsxTemps: XlsxTempsEntity[] }>()
);

export const loadXlsxTempsFailure = createAction(
  '[XlsxTemps/API] Load XlsxTemps Failure',
  props<{ error: any }>()
);
