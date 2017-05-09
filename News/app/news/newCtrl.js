/**
 * Created by noe on 08/05/17.
 */
(function () {
   'use strict';

    angular.module("primerModulo")


            .controller("miCtrl",NewsCtrl);

        function NewsCtrl() {

            var me = this

            me.news = [
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-121",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":true,
                    "categoria":"Politíca",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-122",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":false,
                    "categoria":"Deporte",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-123",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":true,
                    "categoria":"Economía",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-124",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":false,
                    "categoria":"Politíca",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-125",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":true,
                    "categoria":"Deporte",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-126",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":false,
                    "categoria":"Moda",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-127",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":false,
                    "categoria":"Economia",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-128",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":true,
                    "categoria":"Politíca",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-129",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":false,
                    "categoria":"Politíca",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":"VCF-110",
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":false,
                    "categoria":"Moda",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":1,
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":false,
                    "categoria":"Moda",
                    "tags":["peru","politica","guerra"],
                },
                {
                    "idNoticia":1,
                    "codigoNoticia":1,
                    "tituloNoticia":"El Peru envio una diplomacia a Chile.",
                    "descripcionNoticia":"noventa. Esto se debió a la" +
                    " difusión del diagnóstico de trastorno por déficit" +
                    " de atención con hiperactividad (TDAH) en niños" +
                    " y adultos, fenómeno unido a la prescripción del " +
                    "MFD, fármaco de elección para este tratamiento. A " +
                    "modo de ejemplo, Concerta (una de las tantas marcas " +
                    "de MFD) alcanzó en EE. UU. volúmenes de venta superiores " +
                    "a los 839 millones de dólares durante el año 2005. Tanto " +
                    "el diagnóstico como el fármaco han sido objetados, apelando " +
                    "incluso a principios éticos, ideológicos o religiosos." +
                    " Tal rechazo se ha atribuido a reacciones de pánico " +
                    "moral del público no especializado ante el concepto de" +
                    " tratamiento medicamentoso en niños, o bien a creencias " +
                    "(muchas veces, infundadas) respecto de sus consec",
                    "fechaPublicacion": new Date(),
                    "banner":"https://img.difoosion.com/wp-content/blogs.dir/28/files/2016/06/fondoportada.jpg",
                    "destacado":false,
                    "categoria":"Politíca",
                    "tags":["peru","politica","guerra"],
                },

            ]

            me.categoria = ["Politica", "Economia", "Deportes", "Moda", "Mundo"]


        }
}());