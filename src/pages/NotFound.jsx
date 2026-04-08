import { Link } from 'react-router-dom';

import { Package, AlertTriangle, ArrowLeft } from 'lucide-react';

function NotFound() {
  return (
    <main className="min-h-screen bg-base flex items-center justify-center mt-28">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        {/* Número 404 */}
        <div className="text-9xl font-bold text-gray-200 mb-4">404</div>

        {/* Icono y mensaje */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gray-100 p-6 mb-6">
            <AlertTriangle size={48} className="text-gray-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Página no encontrada
          </h1>

          <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
            Lo sentimos, no pudimos encontrar la página que estás buscando. Puede que la dirección
            sea incorrecta o la página haya sido movida.
          </p>
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-primary text-gray-800 font-bold px-8 py-4 rounded-none hover:bg-amber-600 transition duration-300"
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>

          <Link
            to="/paquetes"
            className="flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-800 font-bold px-8 py-4 rounded-none hover:bg-gray-900 hover:text-white transition duration-300"
          >
            <Package size={20} />
            Ver paquetes
          </Link>
        </div>

        {/* Enlaces útiles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">También puedes visitar:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/servicios"
              className="text-gray-700 hover:text-primary transition duration-300"
            >
              Nuestros servicios
            </Link>
            <Link
              to="/nosotros"
              className="text-gray-700 hover:text-primary transition duration-300"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/contacto"
              className="text-gray-700 hover:text-primary transition duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="mt-8 text-sm text-gray-500">
          ¿Necesitas ayuda?{' '}
          <Link
            to="/contacto"
            className="text-primary hover:text-amber-600 transition duration-300 font-medium"
          >
            Contáctaños
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
