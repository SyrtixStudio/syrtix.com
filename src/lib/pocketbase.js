import PocketBase from 'pocketbase';

/**
 * 🚀 PocketBase Singleton (The Agencie's Master Service)
 * 
 * Esta es la conexión oficial de Syrtix Solutions a su cerebro digital.
 * 
 * Se utiliza un Singleton para evitar instanciar múltiples clientes en tu SPA 
 * y para manejar de forma robusta la URL de conexión.
 */

const POCKETBASE_URL = import.meta.env.VITE_POCKETBASE_URL;

if (!POCKETBASE_URL) {
    console.warn(
        "⚠️ PocketBase URL no está configurada. Verifica tu archivo .env o la configuración de Coolify."
    );
}

export const pb = new PocketBase(POCKETBASE_URL);

// Opcionalmente puedes exportar funciones helpers para uso común
export const getFileUrl = (record, filename) => {
    return pb.files.getUrl(record, filename);
};
