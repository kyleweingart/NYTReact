import axios from "axios";


// TO DO - use axios to create API call to NYT database
// save results and display

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";



// jQuery way
// var searchTerm = $("#search-term").val().trim();
// queryURL += "&q=" + searchTerm;



export default {

  // Get request to NYT API
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
    // console.log("working");
  },
  
  
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
