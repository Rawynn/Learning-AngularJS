(function (){
  'use strict';
  angular.module('LunchChecker',[])

  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];

  function MsgController ($scope){
    $scope.message = "";
    $scope.lunch="";
    $scope.color="color:black;"
    $scope.state="";

    $scope.ifTooMuch = function() {
      if(calculateIfTooMuch($scope.lunch)<1){
        $scope.state="has-error";
        $scope.color="color:red;"
        return $scope.message= "Please enter data first.";
      }
      else if(calculateIfTooMuch($scope.lunch)<=3)
      {
        $scope.state="has-success";
        $scope.color="color:green;"
        return $scope.message= "Enjoy!";
      }
      else if(calculateIfTooMuch($scope.lunch)>3){
        $scope.state="has-success";
        $scope.color="color:green;"
        return $scope.message= "Too much!";
      }
    };

    function calculateIfTooMuch(string){
      if(string==="")
      {
        return 0;
      }
      else{
        var splitted = string.split(',').join(',').split('.').join(',').split(';').join(',').split(/,\ +\, +,/).join(',').split(/,\ +\,/).join(',').split(',').filter(Boolean);
      //  console.log(splitted.length);
        console.log(splitted);
        return splitted.length;
      }

    };

  }
  })();
