const fetchUser = (user) => {
  fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then((myJson) => {
      console.log(JSON.stringify(myJson));
    });
};
