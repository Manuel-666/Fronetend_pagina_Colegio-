import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InicioPage from '../pages/secciones/InicioPage';
import QueEsPage from '../pages/secciones/QueEsPage';
import ObjetivosPage from '../pages/secciones/ObjetivosPage';
import AreasPage from '../pages/secciones/AreasPage';
import TalleresPage from '../pages/secciones/TalleresPage';
import CompetenciasPage from '../pages/secciones/CompetenciasPage';
import HerramientasPage from '../pages/secciones/HerramientasPage';
import SeguridadPage from '../pages/secciones/SeguridadPage';
import ProyectosPage from '../pages/secciones/ProyectosPage';
import PerfilPage from '../pages/secciones/PerfilPage';
import CampoLaboralPage from '../pages/secciones/CampoLaboralPage';
import GaleriaPage from '../pages/secciones/GaleriaPage';
import FaqPage from '../pages/secciones/FaqPage';
import TestimoniosPage from '../pages/secciones/TestimoniosPage';
import ContactoPage from '../pages/secciones/ContactoPage';

import Login from '../pages/Login';
import Registro from '../pages/Registro';
import RecuperarClave from '../pages/RecuperarClave';
import NuevaClave from '../pages/NuevaClave';
import { ProtectedRoute } from './ProtectedRoute';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Autenticación: únicas rutas públicas, sin iniciar sesión no se ve nada más */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar-clave" element={<RecuperarClave />} />
        <Route path="/recuperar-clave/:token" element={<NuevaClave />} />

        {/* Todo lo demás exige sesión iniciada */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<InicioPage />} />
          <Route path="/que-es" element={<QueEsPage />} />
          <Route path="/objetivos" element={<ObjetivosPage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/talleres" element={<TalleresPage />} />
          <Route path="/competencias" element={<CompetenciasPage />} />
          <Route path="/herramientas" element={<HerramientasPage />} />
          <Route path="/seguridad" element={<SeguridadPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/campo-laboral" element={<CampoLaboralPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/testimonios" element={<TestimoniosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}