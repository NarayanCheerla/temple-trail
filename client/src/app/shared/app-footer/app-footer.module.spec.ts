import { AppFooterModule } from './app-footer.module';

describe('AppFooterModule', () => {
  let appFooterModule: AppFooterModule;

  beforeEach(() => {
    appFooterModule = new AppFooterModule();
  });

  it('should create an instance', () => {
    expect(appFooterModule).toBeTruthy();
  });
});
