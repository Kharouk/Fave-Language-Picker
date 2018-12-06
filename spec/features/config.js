exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  baseUrl: 'http://localhost:3000',
  specs: ['checkGithubAPIWorksSpec.js'],
};
