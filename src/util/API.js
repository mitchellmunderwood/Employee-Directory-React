import axios from "axios";
export default {
  getNumUsers: function (num) {
    // return axios.get("https://randomuser.me/api/?results=" + num);
    return axios.get(
      `https://randomuser.me/api/?results=${num}&exc=login,location,registered,cell,gender&nat=us&noinfo`
    );
  },
};
