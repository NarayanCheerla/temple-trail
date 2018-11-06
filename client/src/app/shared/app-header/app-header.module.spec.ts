import { AppHeaderModule } from './app-header.module';

describe('AppHeaderModule', () => {
  let appHeaderModule: AppHeaderModule;

  beforeEach(() => {
    appHeaderModule = new AppHeaderModule();
  });

  it('should create an instance', () => {
    expect(appHeaderModule).toBeTruthy();
  });
});
