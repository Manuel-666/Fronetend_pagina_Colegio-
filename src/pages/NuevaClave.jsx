import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { PasswordInput } from '../components/ui/PasswordInput';
import { resetPassword } from '../api/authService';

function validar({ password, passwordConfirmation }) {
  const errors = {};
  if (!password || password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres.';
  }
  if (passwordConfirmation !== password) {
    errors.passwordConfirmation = 'Las contraseñas no coinciden.';
  }
  return errors;
}

export default function NuevaClave() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: '', passwordConfirmation: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError('');
    const validation = validar(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setIsSubmitting(true);
    try {
      await resetPassword({ token, ...form });
      navigate('/login', { replace: true, state: { claveRestablecida: true } });
    } catch (err) {
      setServerError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  return (
    <AuthLayout
      title="Nueva contraseña"
      caption="Define una nueva contraseña segura para tu cuenta."
    >
      <h2 className="auth-card-title">Establecer nueva contraseña</h2>
      <p className="auth-card-subtitle">Elige una contraseña que no hayas usado antes.</p>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {serverError && <p className="form-banner form-banner-error">{serverError}</p>}

        <PasswordInput
          id="password"
          label="Nueva contraseña"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange('password')}
          error={errors.password}
        />

        <PasswordInput
          id="passwordConfirmation"
          label="Confirmar nueva contraseña"
          autoComplete="new-password"
          value={form.passwordConfirmation}
          onChange={handleChange('passwordConfirmation')}
          error={errors.passwordConfirmation}
        />

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Guardando…' : 'Guardar nueva contraseña'}
        </button>
      </form>

      <p className="auth-footer-note">
        <Link className="auth-link" to="/login">
          Volver a iniciar sesión
        </Link>
      </p>
    </AuthLayout>
  );
}
