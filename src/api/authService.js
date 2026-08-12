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

export async function login({ email, password }) {
  try {
    const { data } = await axiosClient.post('/auth/login', { email, password });
    return data.data; // el backend envuelve la respuesta en { data: { user, token } }
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}

export async function register({ fullName, email, password, passwordConfirmation }) {
  try {
    const { data } = await axiosClient.post('/auth/signup', {
      fullName,
      email,
      password,
      passwordConfirmation,
    });
    return data.data; // { user, token }
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}

export async function logout() {
  try {
    await axiosClient.post('/account/logout');
  } catch {
    // Igual limpiamos el estado local aunque el logout en el servidor falle.
  }
}

export async function getMe() {
  const { data } = await axiosClient.get('/account/profile');
  // El profile también viene serializado, probablemente como { data: {...usuario} }.
  return { user: data.data ?? data };
}

// Tu backend todavía no tiene estos dos endpoints.
export async function forgotPassword({ email }) {
  try {
    const { data } = await axiosClient.post('/auth/forgot-password', { email });
    return data.data ?? data;
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}

export async function resetPassword({ token, password, passwordConfirmation }) {
  try {
    const { data } = await axiosClient.post('/auth/reset-password', {
      token,
      password,
      passwordConfirmation,
    });
    return data.data ?? data;
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}