import angular from 'angular';
import '../style/app.css';

var jsonfile = require('../data/rest.json')
//console.log(jsonfile);

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

    $http.get(jsonfile).then(function(data) {
    // console.log(data.data);
    $scope.contents = data.data;
    // require all the icon png files, so they will be moved to dist/ 
    for(var i=0;i<$scope.contents.length;i++){
      var tmp_path = require('../icons/' + $scope.contents[i].tags + '.png');
      //console.log(tmp_path)
      $scope.contents[i].iconpath = tmp_path;
    }
    //debugger;
   });
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;

