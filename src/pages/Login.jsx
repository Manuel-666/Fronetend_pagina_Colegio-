import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { InputField } from '../components/ui/InputField';
import { PasswordInput } from '../components/ui/PasswordInput';
import { useAuth } from '../hooks/useAuth';

function validar({ email, password }) {
  const errors = {};
  if (!email) errors.email = 'Ingresa tu correo electrónico.';
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'El correo no tiene un formato válido.';
  if (!password) errors.password = 'Ingresa tu contraseña.';
  return errors;
}

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectTo = location.state?.from?.pathname || '/';

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError('');
    const validation = validar(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setIsSubmitting(true);
    try {
      await login(form);
      navigate(redirectTo, { replace: true });
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
      title="Inicia sesión"
      caption="Accede a tu cuenta para consultar tu progreso, tus proyectos de taller y las novedades de la modalidad."
    >
      <h2 className="auth-card-title">Iniciar sesión</h2>
      <p className="auth-card-subtitle">Ingresa tus credenciales para continuar.</p>

<form className="auth-form" onSubmit={handleSubmit} noValidate>
        {location.state?.registrado && !serverError && (
          <p className="form-banner form-banner-success">
            Cuenta creada exitosamente. Ahora inicia sesión.
          </p>
        )}
        {serverError && <p className="form-banner form-banner-error">{serverError}</p>}
        <InputField
          id="email"
          label="Correo electrónico"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange('email')}
          error={errors.email}
        />

        <PasswordInput
          id="password"
          label="Contraseña"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange('password')}
          error={errors.password}
        />

        <div className="field-row">
          <label className="field-checkbox">
            <input type="checkbox" /> Recordarme
          </label>
          <Link className="auth-link" to="/recuperar-clave">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Ingresando…' : 'Ingresar'}
        </button>
      </form>

      <p className="auth-footer-note">
        ¿No tienes cuenta?{' '}
        <Link className="auth-link" to="/registro">
          Regístrate
        </Link>
      </p>
    </AuthLayout>
  );
}
