const getUsersData = () => {
    let list = window.localStorage.getItem("USERS_DATA");
    // console.log(list);
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  const getUserState = () => {
    let state = window.localStorage.getItem("USER_STATE");
    if (state != null) {
      return state;
    } else {
      return false;
    }
  };
  export  {getUsersData}
  export  {getUserState}