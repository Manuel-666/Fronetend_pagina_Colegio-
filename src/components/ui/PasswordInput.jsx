import { useState } from 'react';

export function PasswordInput({ label, id, error, ...rest }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className="field-password-wrap">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          className={`field-input${error ? ' field-input-error' : ''}`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
        <button
          type="button"
          className="field-toggle-visibility"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        >
          {visible ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}
