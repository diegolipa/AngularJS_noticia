/**
 * Created by diego on 08/05/17.
 */

(function () {
    'use strict';
    angular.module("primerModulo")
        .controller("catCtrl", catCtrl);

        function catCtrl (categoriaService) {
            var me = this;

            categoriaService.then(function (response) {
                me.categoria = response.data;
            })


                //["Politica", "Economia", "Deportes", "Moda", "Mundo"];


            me.showCategorias = false;

            me.toggleCategorias = function () {
                me.showCategorias = !me.showCategorias;

            };
        }
}());