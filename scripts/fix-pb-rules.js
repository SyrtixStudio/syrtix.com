import PocketBase from 'pocketbase';
import * as dotenv from 'dotenv';

dotenv.config();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

async function run() {
  try {
    console.log('🔗 Conectando a PocketBase:', process.env.VITE_POCKETBASE_URL);
    
    // Autenticar como administrador
    const authData = await pb.admins.authWithPassword(
      process.env.PB_ADMIN_EMAIL.trim(),
      process.env.PB_ADMIN_PASSWORD.trim()
    );
    
    console.log('🔓 Autenticado exitosamente como admin:', process.env.PB_ADMIN_EMAIL);
    
    // Obtener la colección 'testimonials'
    const collection = await pb.collections.getOne('testimonials');
    console.log('📦 Colección testimonials encontrada:', collection.id);
    console.log('Reglas actuales:');
    console.log('  - listRule:', collection.listRule);
    console.log('  - viewRule:', collection.viewRule);
    console.log('  - createRule:', collection.createRule);
    console.log('  - updateRule:', collection.updateRule);
    console.log('  - deleteRule:', collection.deleteRule);

    // Cambiar las reglas de listRule y viewRule a "" (público)
    // También aseguremonos de que active es true por defecto o que las generadas se marquen active = true!
    const updatedCollection = await pb.collections.update('testimonials', {
      listRule: '',
      viewRule: '',
    });
    
    console.log('✅ Reglas actualizadas exitosamente a público!');
    console.log('Nuevas reglas:');
    console.log('  - listRule:', updatedCollection.listRule);
    console.log('  - viewRule:', updatedCollection.viewRule);
    
  } catch (error) {
    console.error('❌ Error actualizando reglas:', error.message);
    if (error.data) console.error('Detalle:', error.data);
  }
}

run();
