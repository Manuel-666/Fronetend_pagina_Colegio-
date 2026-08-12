import { createContext, useEffect, useState, useCallback } from 'react';
import * as authService from '../api/authService';
import { getStoredToken, setStoredToken } from '../api/axiosClient';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Al montar la app: si hay un token guardado, validarlo contra /auth/me.
  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      setIsLoading(false);
      return;
    }
    authService
      .getMe()
      .then((data) => setUser(data.user))
      .catch(() => setStoredToken(null))
      .finally(() => setIsLoading(false));
  }, []);

  const login = useCallback(async (credentials) => {
    const data = await authService.login(credentials);
    setStoredToken(data.token);
    setUser(data.user);
    return data.user;
  }, []);

const register = useCallback(async (payload) => {
    // Solo crea la cuenta. Aunque el backend devuelva un token, lo ignoramos
    // a propósito: el usuario debe iniciar sesión manualmente después.
    const data = await authService.register(payload);
    return data;
  }, []);

  const logout = useCallback(async () => {
    await authService.logout();
    setStoredToken(null);
    setUser(null);
  }, []);

  const value = {
    user,
    isAuthenticated: Boolean(user),
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
