class App
{

    private albumList:Array<Album>;

    constructor(){
        this.albumList = new Array<Album>();
    }

    public agregarAlbum()
    {
        let inputAlbumNombre: HTMLInputElement = (document.getElementById("album_nombre") as HTMLInputElement);
        let inputAlbumFechaLanzamiento: HTMLInputElement = (document.getElementById("album_fechaLanzamiento") as HTMLInputElement);
        
        let nombreAlbum: string = inputAlbumNombre.value;
        let fechaLanzamiento: Date = new Date(inputAlbumFechaLanzamiento.value); 

        let nuevoAlbum: Album = new Album(nombreAlbum, fechaLanzamiento);
    }
}

let app:App = new App();