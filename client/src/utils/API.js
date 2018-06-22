import axios from "axios";


export default {
  
  // returns articles from the NYT API based on search query
  getArticles: function(query) {
    return axios.get("/api/articles", { params: { q: query } });
  },
  
  // saves article to the MongoDB
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData)
  },

  // get saved articles from the MongoDB
  getSavedArticles: function() {
    return axios.get("/api/savedarticles");
  },

  deleteSavedArticle: function(id) {
    return axios.delete("/api/savedarticles/" + id);
  },

};
