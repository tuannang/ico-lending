import { UpcomingAngularPage } from './app.po';

describe('upcoming-angular App', () => {
  let page: UpcomingAngularPage;

  beforeEach(() => {
    page = new UpcomingAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
