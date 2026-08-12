import { axiosClient } from './axiosClient';

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

export async function getFavorites() {
  try {
    const { data } = await axiosClient.get('/account/favorites');
    return data.data?.favorites ?? [];
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}

export async function addFavorite(projectName) {
  try {
    await axiosClient.post('/account/favorites', { projectName });
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}

export async function removeFavorite(projectName) {
  try {
    await axiosClient.delete(`/account/favorites/${encodeURIComponent(projectName)}`);
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}