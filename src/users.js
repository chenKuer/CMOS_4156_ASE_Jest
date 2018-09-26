// mock modules 
/*
Suppose we have a class that fetches users from our API. 
The class uses axios to call the API then returns the data attribute 
which contains all the users:
*/
import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
    console.log("This is a mocking demo");
  }
}

export default Users;