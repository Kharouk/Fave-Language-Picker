findAllRepos = (user) => {
  fetch(`https://api.github.com/users/${req.body.gitUser}/repo`)
    .then(response => response.json())
    .then(myJson => myJson);
};
