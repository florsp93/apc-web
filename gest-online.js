$('#consulta-gastos').on('click', function(){
    $('.removable').remove();
    $('#div-append').append(`
    <div class="removable input-group mt-5 mb-2 col-12 d-flex align-items-center flex-column">
    <div class="container col-md-8">
    <div class="form-group">
        <label for="exampleInputEmail1">Numero de BL</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
    </div>
    <button type="button" data-toggle="modal" data-target="#modal-agregar-bl-carrito" class="btn btn-primary">Agregar al Carrito</button>
    <!-- Modal -->
    <div class="modal fade" id="modal-agregar-bl-carrito" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">INGRESE LOS DATOS REQUERIDOS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">      
        <div class="input-group mb-3">
        <div class="input-group-prepend table-responsive">
          <span class="input-group-text" id="basic-addon3">CUIT/CUIL FACTURACION</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>      
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Emitir factura por BL?</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
            <option value="1">NO</option>
            <option value="2">SI</option>
        </select>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn alert-danger" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Aceptar</button>
    </div>
    </div>
    </div>
    </div>
    <!-- Modal -->
    </div>
    </div>
    `)
});
$('#consulta-demora').on('click', function(){
    $('.removable').remove();
    $('#div-append').append(`
    <div class="removable input-group mt-5 mb-2 col-12 d-flex align-items-center flex-column">
    <div class="container col-md-8">
    <div class="form-group">
        <label for="exampleInputEmail1">Numero de BL</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Contenedor</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Fecha</label>
        <input type="date" class="form-control" id="exampleInputPassword1" placeholder="">
    </div>
    <button type="button" data-toggle="modal" data-target="#modal-agregar-bl-carrito" class="btn btn-primary">Consultar</button>
    <!-- Modal -->
    <div class="modal fade" id="modal-agregar-bl-carrito" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">INGRESE LOS DATOS REQUERIDOS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">      
        <div class="input-group mb-3">
        <div class="input-group-prepend table-responsive">
          <span class="input-group-text" id="basic-addon3">CUIT/CUIL FACTURACION</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>      
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Emitir factura por BL?</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
            <option value="1">NO</option>
            <option value="2">SI</option>
        </select>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn alert-danger" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Aceptar</button>
    </div>
    </div>
    </div>
    </div>
    <!-- Modal -->
    </div>
    </div>
    `)
});
$('#consulta-cta-gtia').on('click', function(){
    $('.removable').remove();
    $('#div-append').append(`
    <div class="removable input-group mt-5 mb-2 col-12 d-flex align-items-center flex-column">
    <form class="container col-md-8">
    <div class="form-group">
        <label for="exampleInputEmail1">CUIT / CUIL</label>
        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
    </div>
    <button type="button" data-toggle="modal" data-target="#modal-agregar-bl-carrito" class="btn btn-primary">Consultar</button>
    <!-- Modal -->
    <div class="modal fade" id="modal-agregar-bl-carrito" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Falta presentar Carta de Garantia en APC.</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body text-center">  
            <p class="small">Acceda al siguiente link para completar el formulario antes indicado.</p>
            <a href="http://www.apconline.com.ar/carta.html" class="badge alert-danger">Click Aqui</a>
        </div>
    </div>
    </div>
    </div>
    <!-- Modal -->
    </div>
    </div>
    `)
});
$('#btn-volver').on('click', function(){
    $('#central').load('menu-gestion.html')
});