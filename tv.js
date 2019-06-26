var axios = require('axios');

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "https://api.tvmaze.com/singlesearch/shows?q=" + show;
    // var URL = "http://api.tvmaze.com/singlesearch/shows?q=breaking+bad";

axios.get(URL).then(function(response) {
    
    console.log(`
    Show Name: ${response.data.name}
    Genres: ${response.data.genres.join(" ")}
    Rating: ${response.data.rating.average}
    Network: ${response.data.network.name}
    Summary: ${response.data.summary}
    `)
})
  };
};

var tv=new TV();
tv.findShow('breaking bad');


module.exports = TV;
