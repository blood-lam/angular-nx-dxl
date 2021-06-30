import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as XlsxTempsActions from './xlsx-temps.actions';
import * as XlsxTempsFeature from './xlsx-temps.reducer';

@Injectable()
export class XlsxTempsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(XlsxTempsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return XlsxTempsActions.loadXlsxTempsSuccess({ xlsxTemps: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return XlsxTempsActions.loadXlsxTempsFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
