const findCommonLanguage = require('../javascripts/findLanguage');

describe('Finds Common Language', () => {
  it('#findCommonLanguage', () => {
    const aryOfLanguages = ['Ruby', 'Python', 'C#', 'Swift', 'C#', 'C#', null];
    expect(findCommonLanguage(aryOfLanguages)).toBe('C#');
  });

  it('finds more nulls than languages', () => {
    const aryOfLanguages = ['Ruby', 'Python', null, 'Swift', 'C#', 'C#', null, null];
    expect(findCommonLanguage(aryOfLanguages)).toBe('READMEs!');
  });
});
