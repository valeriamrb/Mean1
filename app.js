/*MEAN CLASE02 JS */


var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);


app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav',
'$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, mdDialog){

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };


  $scope.menu = [
    {
      link :'',
      title:'Inicio',
      icon:'dashboard'
    },
    {
      link :'',
      title:'Rockers',
      icon:'group'
    },
    {
      link :'',
      title:'Mensajes',
      icon:'message'
    }
  ];

  $scope.admin = [
    {
      link: '',
      title: 'Borrar',
      icon: 'delete'
    },
    {
      link: 'showListBottomSheet($event)',
      title: 'Configuracion',
      icon: 'settings'
    }
  ];
  $scope.activity = [
    {
      what:'Actividad de escuela dev rock',
      who:'Valeria',
      when: "14:28",
      notes:'¿Cuando es la actividad?'
    },
    {
      what:'Actividad de escuela dev rock',
      who:'Laura',
      when: "14:43",
      notes:'Mañana paso toda la info'
    },
    {
      what:'Actividad de escuela dev rock',
      who:'Jona',
      when: "15:03",
      notes:'Anotense'
    }
  ];

}]);
