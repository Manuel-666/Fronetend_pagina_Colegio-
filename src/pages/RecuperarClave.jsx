import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { InputField } from '../components/ui/InputField';
import { forgotPassword } from '../api/authService';

function validar({ email }) {
  const errors = {};
  if (!email) errors.email = 'Ingresa tu correo electrónico.';
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'El correo no tiene un formato válido.';
  return errors;
}

export default function RecuperarClave() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError('');
    const validation = validar({ email });
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setIsSubmitting(true);
    try {
      await forgotPassword({ email });
      // Mensaje genérico por seguridad: no confirmamos si el correo existe o no.
      setEnviado(true);
    } catch (err) {
      setServerError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthLayout
      title="Recupera tu acceso"
      caption="Te enviaremos un enlace a tu correo para que puedas establecer una nueva contraseña."
    >
      <h2 className="auth-card-title">Recuperar contraseña</h2>
      <p className="auth-card-subtitle">
        Ingresa el correo con el que te registraste y te enviaremos un enlace.
      </p>

      {enviado ? (
        <p className="form-banner form-banner-success">
          Si el correo <strong>{email}</strong> está registrado, recibirás un enlace de
          recuperación en los próximos minutos.
        </p>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {serverError && <p className="form-banner form-banner-error">{serverError}</p>}

          <InputField
            id="email"
            label="Correo electrónico"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando…' : 'Enviar enlace de recuperación'}
          </button>
        </form>
      )}

      <p className="auth-footer-note">
        <Link className="auth-link" to="/login">
          Volver a iniciar sesión
        </Link>
      </p>
    </AuthLayout>
  );
}
