angular.module("myChats").controller("mainCtrl", function($scope, mainSrvc, $interval){

  $scope.chatAppName = "Chatty App";

  $scope.screennameIsSet = false;

  $scope.setScreenname = function(user) {
    mainSrvc.setScreenname(user).then( () => {
        $scope.screennameIsSet = true;
    });
  }

  function getScreenname() {
    mainSrvc.getScreenname().then( screenname => {
      if(screenname.data.user) {
        $scope.user = screenname.data.user;
        $scope.screennameIsSet = true;
      }
    });
  }

  $scope.addChat = function(chatmessage){
    chatmessage.screenname = $scope.user.screenname;
    mainSrvc.addChats(chatmessage).then( chats => {
      $scope.chats = chats.data;
    });
  }

  function getChats(){
    mainSrvc.getChats().then( chats => {
      $scope.chats = chats.data;
    });
  }

  $scope.deleteChats = function(){
    mainSrvc.deleteChats().then( chats => {
      $scope.chats = chats.data;
    });
  }

  // Get screenname, if it's already in the session
  getScreenname();

  // Gets initial chats
  getChats();

  // Set up repeating call to get chats
  $interval(getChats, 3000);

})
