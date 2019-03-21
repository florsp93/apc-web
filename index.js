$(document).ready(function() {
    $('#central').load('btn-menu-gestion.html');

    $('#btn-cotiz').on('click', function() {
        $("#central").load('menu-cot.html');
        return false;
    });
    $('#link-panel-usr').on('click', function() {
        $("#central").load('panel-usuario.html');
        return false;
    });
    $('#link-panel-notif').on('click', function() {
        $("#central").load('panel-notif-config.html');
        return false;
    });
    $('#link-panel-notif2').on('click', function() {
        $("#central").load('panel-notif-config.html');
        return false;
    });
    $('#cerrar-sesion').on('click', function() {
        window.location.replace('log-in.html');
        return false;
    });
    $('#btn-inicio').on('click', function() {
        $('#central').load('btn-menu-gestion.html');
        return false;
    });
    $('#btn-carrito').on('click', function() {
        $("#central").load('detalle-consultas.html');
        return false;
    });

});