describe('Protractor Demo App', () => {
  it('should have a title', () => {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('Github Language Picker');
  });
});
