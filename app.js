var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider.when("/", 
    {
      templateUrl: "inicial.html"
    }
  )
  .when("/jogos", 
    {
      templateUrl: "melhoresJogos.html"
    }
  )
  .when("/comidas", 
    {
      templateUrl: "melhoresPratos.html"
    }
  )
  .when("/lugares", 
    {
      templateUrl: "melhoresLugares.html"
    }
  )
  .otherwise(
    {
      redirectTo: "/"    
    }
  );
});