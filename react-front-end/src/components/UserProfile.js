// const UserProfile = () => {
//     const username = "";
  
//     const getName = () => {
//       return localStorage.getItem('username');    // Or pull this from cookie/localStorage
//     };
  
//     const setName = (name) => {    
//         username = name
        
//         // Also set this in cookie/localStorage
//         localStorage.setItem('username', username)
//     }
  
//     return {
//       getName: getName,
//       setName: setName
//     }
  
//   };
  
//   export default UserProfile;

var UserProfile = (function() {
  var username = "";

  var getName = function() {
    localStorage.getItem('username');    // Or pull this from cookie/localStorage
  };

  var setName = function(name) {
    username = name;     
    // Also set this in cookie/localStorage
    localStorage.setItem('username', username)
  };

  return {
    getName: getName,
    setName: setName
  }

})();

export default UserProfile;