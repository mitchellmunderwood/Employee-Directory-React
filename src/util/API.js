import axios from "axios";
export default {
  getNumUsers: function (num) {
    return axios.get("https://randomuser.me/api/?results=" + num);
  },
};
