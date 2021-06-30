import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as XlsxTempsActions from './xlsx-temps.actions';
import { XlsxTempsEffects } from './xlsx-temps.effects';
import { XlsxTempsFacade } from './xlsx-temps.facade';
import { XlsxTempsEntity } from './xlsx-temps.models';
import {
  XLSX_TEMPS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './xlsx-temps.reducer';
import * as XlsxTempsSelectors from './xlsx-temps.selectors';

interface TestSchema {
  xlsxTemps: State;
}

describe('XlsxTempsFacade', () => {
  let facade: XlsxTempsFacade;
  let store: Store<TestSchema>;
  const createXlsxTempsEntity = (id: string, name = ''): XlsxTempsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(XLSX_TEMPS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([XlsxTempsEffects]),
        ],
        providers: [XlsxTempsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(XlsxTempsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allXlsxTemps$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allXlsxTemps$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadXlsxTempsSuccess` to manually update list
     */
    it('allXlsxTemps$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allXlsxTemps$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          XlsxTempsActions.loadXlsxTempsSuccess({
            xlsxTemps: [
              createXlsxTempsEntity('AAA'),
              createXlsxTempsEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allXlsxTemps$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
