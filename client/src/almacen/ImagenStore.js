import { makeAutoObservable } from 'mobx';

class ImagenStore {
  imagenes = JSON.parse(localStorage.getItem('imagenes')) || [];

  constructor() {
    makeAutoObservable(this);
  }

  agregarImagen(imagen) {
    this.imagenes.push(imagen);
    this.actualizarLocalStorage();
  }

  eliminarImagen(index) {
    this.imagenes.splice(index, 1);
    this.actualizarLocalStorage();
  }

  actualizarLocalStorage() {
    localStorage.setItem('imagenes', JSON.stringify(this.imagenes));
  }
}

const imagenStore = new ImagenStore();
export default imagenStore;