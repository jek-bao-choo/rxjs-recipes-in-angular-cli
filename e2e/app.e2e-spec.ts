import { RxjsRecipesInAngularCliPage } from './app.po';

describe('rxjs-recipes-in-angular-cli App', () => {
  let page: RxjsRecipesInAngularCliPage;

  beforeEach(() => {
    page = new RxjsRecipesInAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
