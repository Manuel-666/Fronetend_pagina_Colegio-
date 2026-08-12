import { axiosClient } from './axiosClient';

const BACKEND_ORIGIN = import.meta.env.VITE_API_URL || 'http://localhost:3333';

function extraerMensajeError(error) {
  const data = error.response?.data;
  if (data?.errors?.length) {
    return data.errors.map((e) => e.message).join(' ');
  }
  if (data?.message) {
    return data.message;
  }
  return 'Ocurrió un error inesperado. Intenta de nuevo.';
}

function normalizarFoto(foto) {
  return {
    ...foto,
    // El backend devuelve una ruta relativa (/uploads/gallery/xxx.jpg);
    // la completamos con el origen del backend para poder mostrarla.
    url: `${BACKEND_ORIGIN}${foto.url}`,
  };
}

export async function getGaleria() {
  try {
    const { data } = await axiosClient.get('/account/gallery');
    const fotos = data.data?.photos ?? [];
    return fotos.map(normalizarFoto);
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}

export async function subirFoto({ file, caption, category, visibility }) {
  try {
    const formData = new FormData();
    formData.append('photo', file);
    if (caption) formData.append('caption', caption);
    if (category) formData.append('category', category);
    formData.append('visibility', visibility);

    const { data } = await axiosClient.post('/account/gallery', formData, {
      // Dejamos que el navegador arme el Content-Type con el boundary correcto.
      headers: { 'Content-Type': undefined },
    });

    return normalizarFoto(data.data.photo);
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}

export async function eliminarFoto(id) {
  try {
    await axiosClient.delete(`/account/gallery/${id}`);
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}