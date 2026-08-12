import { axiosClient } from './axiosClient';

function extraerMensajeError(error) {
  const data = error.response?.data;
  if (data?.message) {
    return data.message;
  }
  return 'El chat no está disponible en este momento.';
}

// messages: [{ role: 'user' | 'assistant', content: string }, ...]
export async function enviarMensaje(messages) {
  try {
    const { data } = await axiosClient.post('/account/chat', { messages });
    return data.data?.reply ?? data.reply;
  } catch (error) {
    throw new Error(extraerMensajeError(error));
  }
}