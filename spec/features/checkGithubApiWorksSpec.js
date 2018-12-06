const searchUser = (username) => {
  browser.get('/');
  browser.driver.findElement(by.css('#git-user')).sendKeys(username);
  browser.driver.findElement(by.css('.submit-user')).click();
};

describe('Protractor Demo App', () => {
  beforeEach(() => {
    browser.ignoreSynchronization = true;
  });

  it('Title: Github Language Picker', () => {
    browser.get('/');
    const title = browser.driver.findElement(by.css('#title')).getText();
    expect(title).toContain('Github Language Picker');
  });

  it('Search for User', () => {
    searchUser('kharouk');
    const title = browser.driver.findElement(by.css('#username')).getText();
    expect(title).toContain('Kharouk');
  });

  it('Search for User and get language', () => {
    searchUser('alex');
    const language = browser.driver.findElement(by.css('#language')).getText();
    expect(language).toContain('Python');
  });

  it("Returns 'READMEs' if user's common language is null", () => {
    searchUser('wesbos');
    const language = browser.driver.findElement(by.css('#language')).getText();
    expect(language).toContain('READMEs!');
  });

  it('Returns Error Message if No Username', () => {
    searchUser('dsfhjewiofhiweh');
    const error = browser.driver.findElement(by.css('.alert')).getText();
    expect(error).toContain("Sorry, that GitHub username doesn't exist. Try again!");
  });
});
