const fetch = require('node-fetch');

const fetchUser = (user) => {
  fetch(`https://api.github.com/search/users?q=${user}`)
    .then(response => response.json())
    .then(myJson => JSON.stringify(myJson));
};

module.exports = fetchUser;
