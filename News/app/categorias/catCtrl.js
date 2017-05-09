/**
 * Created by diego on 08/05/17.
 */

(function () {
    'use strict';
    angular.module("primerModulo")
        .controller("catCtrl", catCtrl);

        function catCtrl () {
            var me = this;
            me.categoria = ["Politica", "Economia", "Deportes", "Moda", "Mundo"];


            me.showCategorias = false;

            me.toggleCategorias = function () {
                me.showCategorias = !me.showCategorias;

            };
        }
}());