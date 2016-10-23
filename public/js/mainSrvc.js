angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http.get("/api/chats");
  };

  this.addChats = function(chat){
    //TODO Call server to add to chats
    return $http.post("/api/chats", chat);
  };

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
    return $http.delete("/api/chats");
  };

  this.getScreenname = function(){
    return $http.get("/api/screenname");
  };

  this.setScreenname = function(user){
    return $http.post("/api/screenname", user);
  };

});
