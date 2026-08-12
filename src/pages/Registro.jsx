import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { InputField } from '../components/ui/InputField';
import { PasswordInput } from '../components/ui/PasswordInput';
import { useAuth } from '../hooks/useAuth';

function validar({ fullName, email, password, passwordConfirmation, aceptaTerminos }) {
  const errors = {};
  if (!fullName || fullName.trim().length < 3) {
    errors.fullName = 'Ingresa tu nombre completo.';
  }
  if (!email) errors.email = 'Ingresa tu correo electrónico.';
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'El correo no tiene un formato válido.';
  if (!password || password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres.';
  }
  if (passwordConfirmation !== password) {
    errors.passwordConfirmation = 'Las contraseñas no coinciden.';
  }
  if (!aceptaTerminos) {
    errors.aceptaTerminos = 'Debes aceptar los términos y condiciones.';
  }
  return errors;
}

export default function Registro() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    aceptaTerminos: false,
  });
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
      await register(form);
      navigate('/login', {
        replace: true,
        state: { registrado: true },
      });
    } catch (err) {
      setServerError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(field) {
    return (e) => {
      const value = field === 'aceptaTerminos' ? e.target.checked : e.target.value;
      setForm((f) => ({ ...f, [field]: value }));
    };
  }

  return (
    <AuthLayout
      title="Crea tu cuenta"
      caption="Regístrate para hacer seguimiento a tus proyectos de taller y mantenerte al día con la modalidad Industrial."
    >
      <h2 className="auth-card-title">Registro</h2>
      <p className="auth-card-subtitle">Completa tus datos para crear tu cuenta.</p>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {serverError && <p className="form-banner form-banner-error">{serverError}</p>}

        <InputField
          id="fullName"
          label="Nombre completo"
          autoComplete="name"
          value={form.fullName}
          onChange={handleChange('fullName')}
          error={errors.fullName}
        />

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
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange('password')}
          error={errors.password}
        />

        <PasswordInput
          id="passwordConfirmation"
          label="Confirmar contraseña"
          autoComplete="new-password"
          value={form.passwordConfirmation}
          onChange={handleChange('passwordConfirmation')}
          error={errors.passwordConfirmation}
        />

        <div className="field">
          <label className="field-checkbox">
            <input
              type="checkbox"
              checked={form.aceptaTerminos}
              onChange={handleChange('aceptaTerminos')}
            />
            Acepto los términos y condiciones.
          </label>
          {errors.aceptaTerminos && <p className="field-error">{errors.aceptaTerminos}</p>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Creando cuenta…' : 'Crear cuenta'}
        </button>
      </form>

      <p className="auth-footer-note">
        ¿Ya tienes cuenta?{' '}
        <Link className="auth-link" to="/login">
          Inicia sesión
        </Link>
      </p>
    </AuthLayout>
  );
}
