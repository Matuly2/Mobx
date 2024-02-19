
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import imagenStore from '../almacen/ImagenStore';


const Galeria = observer(() => {
  const [urlImagen, setUrlImagen] = useState('');
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    setImagenes(imagenStore.imagenes);
  }, []);

  const handleUrlChange = (e) => {
    setUrlImagen(e.target.value);
  };

  const handleAgregarImagen = () => {
    if (urlImagen.trim() !== '') {
      imagenStore.agregarImagen(urlImagen);
      setImagenes(imagenStore.imagenes);
      setUrlImagen('');
    }
  };

  const handleEliminarImagen = (index) => {
    imagenStore.eliminarImagen(index);
    setImagenes(imagenStore.imagenes);
  };

  return (
    <div className="form-container">
      <input type="text" value={urlImagen} onChange={handleUrlChange} placeholder="URL de la imagen" />
      <button onClick={handleAgregarImagen}>Agregar Imagen</button>
      <div className="galeria">
        {imagenes.map((imagen, index) => (
          <div key={index} className="imagen-item">
            <img src={imagen} alt={`Imagen ${index}`} />
            <button onClick={() => handleEliminarImagen(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Galeria;

