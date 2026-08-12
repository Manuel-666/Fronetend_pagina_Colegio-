import { createContext, useCallback, useEffect, useState } from 'react';
import * as favoritesService from '../api/favoritesService';
import { useAuth } from '../hooks/useAuth';

export const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const [favoritos, setFavoritos] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setFavoritos(new Set());
      return;
    }
    setIsLoading(true);
    favoritesService
      .getFavorites()
      .then((lista) => setFavoritos(new Set(lista)))
      .catch(() => setFavoritos(new Set()))
      .finally(() => setIsLoading(false));
  }, [isAuthenticated]);

  const toggleFavorito = useCallback(async (projectName) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      if (next.has(projectName)) next.delete(projectName);
      else next.add(projectName);
      return next;
    });

    try {
      const yaEstaba = favoritos.has(projectName);
      if (yaEstaba) {
        await favoritesService.removeFavorite(projectName);
      } else {
        await favoritesService.addFavorite(projectName);
      }
    } catch {
      // Si falla en el servidor, revertimos el cambio optimista local.
      setFavoritos((prev) => {
        const next = new Set(prev);
        if (next.has(projectName)) next.delete(projectName);
        else next.add(projectName);
        return next;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoritos]);

  const value = {
    favoritos,
    isFavorito: (projectName) => favoritos.has(projectName),
    toggleFavorito,
    isLoading,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}