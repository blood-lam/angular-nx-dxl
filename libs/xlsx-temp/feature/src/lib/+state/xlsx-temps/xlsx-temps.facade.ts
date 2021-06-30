import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as XlsxTempsActions from './xlsx-temps.actions';
import * as XlsxTempsFeature from './xlsx-temps.reducer';
import * as XlsxTempsSelectors from './xlsx-temps.selectors';

@Injectable()
export class XlsxTempsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(XlsxTempsSelectors.getXlsxTempsLoaded));
  allXlsxTemps$ = this.store.pipe(select(XlsxTempsSelectors.getAllXlsxTemps));
  selectedXlsxTemps$ = this.store.pipe(select(XlsxTempsSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(XlsxTempsActions.init());
  }
}
