/**
 * Created by diego on 10/05/17.
 */

(function () {
   "use strict";

    var app = angular.module("comunServiceMock", ["ngMockE2E"]);

    app.run(function ($httBackend) {
        var categorias = ["Politica", "Economia", "Deportes", "Moda", "Mundo"];
        var categoriasUrl = "api/categorias";

        $httBackend.whenGET(categoriasUrl).respond(categorias);
    })


}());