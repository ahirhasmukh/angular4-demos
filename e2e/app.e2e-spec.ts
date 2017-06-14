import { Angular4DemosPage } from './app.po';

describe('angular4-demos App', () => {
  let page: Angular4DemosPage;

  beforeEach(() => {
    page = new Angular4DemosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
