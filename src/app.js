var App = (function () {
    function App() {
        this.albumList = new Array();
    }
    App.prototype.agregarAlbum = function () {
        var inputAlbumNombre = document.getElementById("album_nombre");
        var inputAlbumFechaLanzamiento = document.getElementById("album_fechaLanzamiento");
        var nombreAlbum = inputAlbumNombre.value;
        var fechaLanzamiento = new Date(inputAlbumFechaLanzamiento.value);
        var nuevoAlbum = new Album(nombreAlbum, fechaLanzamiento);
    };
    return App;
}());
var app = new App();
//# sourceMappingURL=app.js.map