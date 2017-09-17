import { VuePage } from './app.po';

describe('vue App', () => {
  let page: VuePage;

  beforeEach(() => {
    page = new VuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
