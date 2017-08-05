import { MyApp5Page } from './app.po';

describe('my-app5 App', () => {
  let page: MyApp5Page;

  beforeEach(() => {
    page = new MyApp5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
