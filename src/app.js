import angular from 'angular';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($http, $scope){
    // read the json file
    $http.get("../data/rest.json").then(function(data) {
    // console.log(data.data);
    $scope.contents = data.data;
    //debugger;
   });
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;

