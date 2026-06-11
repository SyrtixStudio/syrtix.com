import PocketBase from 'pocketbase';
import * as dotenv from 'dotenv';

dotenv.config();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

const plans = [
  { name: 'Web Solution Start', category: 'web', tier: 'start', price_normal: 299000, price_offer: 199000, is_on_offer: true, delivery_time: '7 días hábiles' },
  { name: 'Web Solution Pro', category: 'web', tier: 'pro', price_normal: 599000, price_offer: 499000, is_on_offer: true, delivery_time: '2 a 4 semanas' },
  { name: 'Web Solution Enterprise', category: 'web', tier: 'enterprise', price_normal: 999000, price_offer: 899000, is_on_offer: true, delivery_time: '2 a 4 semanas' },
  { name: 'Chatbot AI Start', category: 'chatbot', tier: 'start', price_normal: 299000, price_offer: 199000, is_on_offer: true, delivery_time: 'Setup inmediato' },
  { name: 'Chatbot AI Pro', category: 'chatbot', tier: 'pro', price_normal: 599000, price_offer: 499000, is_on_offer: true, delivery_time: '1 a 2 semanas' },
  { name: 'Chatbot AI Enterprise', category: 'chatbot', tier: 'enterprise', price_normal: 999000, price_offer: 899000, is_on_offer: true, delivery_time: '2 a 4 semanas' }
];

async function run() {
  try {
    console.log('🔗 Conectando a PocketBase:', process.env.VITE_POCKETBASE_URL);
    
    // Autenticar como administrador
    await pb.admins.authWithPassword(
      process.env.PB_ADMIN_EMAIL.trim(),
      process.env.PB_ADMIN_PASSWORD.trim()
    );
    
    console.log('🔓 Autenticado exitosamente como admin:', process.env.PB_ADMIN_EMAIL);
    
    // 1. Crear o verificar la colección 'plans'
    let plansCollection;
    try {
      plansCollection = await pb.collections.getOne('plans');
      console.log('✅ Colección plans ya existe.');
    } catch {
      console.log('📦 Colección plans no existe. Creándola...');
      plansCollection = await pb.collections.create({
        name: 'plans',
        type: 'base',
        schema: [
          { name: 'name', type: 'text', required: true },
          { name: 'category', type: 'text', required: true },
          { name: 'tier', type: 'text', required: true },
          { name: 'price_normal', type: 'number', required: true },
          { name: 'price_offer', type: 'number', required: true },
          { name: 'is_on_offer', type: 'bool' },
          { name: 'delivery_time', type: 'text' }
        ],
        listRule: '', // Público
        viewRule: '', // Público
        createRule: null,
        updateRule: null,
        deleteRule: null
      });
      console.log('✅ Colección plans creada con éxito.');
    }

    // 2. Sembrar o actualizar los planes
    for (const plan of plans) {
      try {
        // Buscar si existe un plan con la misma categoría y tier
        const existing = await pb.collection('plans').getList(1, 1, {
          filter: `category = "${plan.category}" && tier = "${plan.tier}"`
        });

        if (existing.items.length > 0) {
          // Actualizar
          const id = existing.items[0].id;
          await pb.collection('plans').update(id, plan);
          console.log(`🔄 Plan actualizado: ${plan.name} (${plan.category} - ${plan.tier})`);
        } else {
          // Crear
          await pb.collection('plans').create(plan);
          console.log(`✨ Plan creado: ${plan.name} (${plan.category} - ${plan.tier})`);
        }
      } catch (err) {
        console.error(`❌ Error procesando plan ${plan.name}:`, err.message);
      }
    }
    
    console.log('🎉 Siembra de planes completada con éxito.');
  } catch (error) {
    console.error('❌ Error general de siembra:', error.message);
    if (error.data) console.error('Detalle:', error.data);
  }
}

run();
