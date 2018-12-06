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
    browser.get('/');
    browser.driver.findElement(by.css('#git-user')).sendKeys('kharouk');
    browser.driver.findElement(by.css('.submit-user')).click();
    const title = browser.driver.findElement(by.css('#username')).getText();
    expect(title).toContain('Kharouk');
  });

  it('Search for User and get language', () => {
    browser.get('/');
    browser.driver.findElement(by.css('#git-user')).sendKeys('alex');
    browser.driver.findElement(by.css('.submit-user')).click();
    const language = browser.driver.findElement(by.css('#language')).getText();
    expect(language).toContain('Python');
  });

  it('Returns Error Message if No Username', () => {
    browser.get('/');
    browser.driver.findElement(by.css('#git-user')).sendKeys('jefwifweji9feh');
    browser.driver.findElement(by.css('.submit-user')).click();
    const error = browser.driver.findElement(by.css('.alert')).getText();
    expect(error).toContain("Sorry, that GitHub username doesn't exist. Try again!");
  });
});
