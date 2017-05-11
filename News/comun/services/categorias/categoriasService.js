/**
 * Created by diego on 10/05/17.
 */
(function () {

    "use strict";
    angular.module("comunService")

        .factory("categoriaService", categoriaService);
    
    function categoriaService($http) {
        return $http.get("api/categorias");
    }
}());