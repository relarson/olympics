import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { OlympicsAppComponent } from '../app/olympics.component';

beforeEachProviders(() => [OlympicsAppComponent]);

describe('App: Olympics', () => {
  it('should create the app',
      inject([OlympicsAppComponent], (app: OlympicsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'olympics works!\'',
      inject([OlympicsAppComponent], (app: OlympicsAppComponent) => {
    expect(app.title).toEqual('olympics works!');
  }));
});
