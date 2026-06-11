import { useState, useEffect } from 'react';
import { pb } from '../lib/pocketbase';

/**
 * 🌟 Hook para obtener los precios y configuraciones de planes desde PocketBase.
 * 
 * Si PocketBase no está disponible o falla, devuelve un mapa vacío para que
 * los componentes utilicen los precios estáticos (fallback).
 */
export const usePlans = () => {
  const [plans, setPlans] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const records = await pb.collection('plans').getFullList();
        
        if (records.length > 0) {
          // Crear un mapa indexado por "category-tier" para búsquedas rápidas,
          // por ejemplo: plansMap["web-pro"] o plansMap["chatbot-enterprise"]
          const plansMap = {};
          records.forEach((record) => {
            const key = `${record.category}-${record.tier}`;
            plansMap[key] = {
              id: record.id,
              name: record.name,
              category: record.category,
              tier: record.tier,
              priceNormal: record.price_normal,
              priceOffer: record.price_offer,
              isOnOffer: record.is_on_offer,
              deliveryTime: record.delivery_time,
            };
          });
          setPlans(plansMap);
        }
      } catch (err) {
        console.warn('⚠️ No se pudieron cargar los precios de PocketBase, usando fallback local:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return { plans, loading, error };
};
