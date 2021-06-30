import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as XlsxTempsActions from './xlsx-temps.actions';
import { XlsxTempsEffects } from './xlsx-temps.effects';

describe('XlsxTempsEffects', () => {
  let actions: Observable<Action>;
  let effects: XlsxTempsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        XlsxTempsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(XlsxTempsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: XlsxTempsActions.init() });

      const expected = hot('-a-|', {
        a: XlsxTempsActions.loadXlsxTempsSuccess({ xlsxTemps: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
