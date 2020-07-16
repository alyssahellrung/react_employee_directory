import axios from "axios";
const BASEURL = "https://www.randomuser.me/api?results=";
const APIKEY = "&nat=u";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};


// https://randomuser.me/api/?results=200&nat=u