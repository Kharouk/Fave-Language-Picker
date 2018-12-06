describe('Protractor Demo App', () => {
  beforeEach(() => {
    browser.ignoreSynchronization = true;
  });

  it('should have a title', () => {
    browser.get('/');
    const title = browser.driver.findElement(by.css('#title')).getText();
    expect(title).toContain('Github Language Picker');
  });
});
