const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  axios
    //  .get("http://www.recipepuppy.com/api/", {params: req.query})
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931", { params:req.query })
    .then(({ data: { response } }) => res.json(response))
    .catch(err => res.status(422).json(err));
});

module.exports = router;


