import { useState, useEffect } from 'react';
import { pb } from '../lib/pocketbase';
import { testimonials as fallbackTestimonials } from '../data/testimonials';

/**
 * 🌟 Hook Maestro para Testimonios de Syrtix
 * 
 * Prioriza la carga desde PocketBase para obtener los testimonios generados 
 * semanalmente por la IA, pero mantiene un fallback robusto a los datos estáticos.
 */
export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Intentar obtener los últimos 12 testimonios de la colección
        const records = await pb.collection('testimonials').getFullList({
          sort: '-created',
        });

        if (records.length > 0) {
          // Mapear los campos de PocketBase a la estructura del frontend
          const formatted = records.map(record => ({
            id: record.id,
            name: record.name,
            textEs: record.textEs,
            textEn: record.textEn,
            rating: record.rating,
            createdAt: record.created,
          }));
          
          // Mezclar con los fallback para tener siempre una buena cantidad
          // (Eliminando duplicados si los hubiera por nombre)
          const merged = [...formatted, ...fallbackTestimonials].filter(
            (v, i, a) => a.findIndex(t => t.name === v.name) === i
          );
          
          setTestimonials(merged);
        }
      } catch (err) {
        console.warn('⚠️ No se pudieron cargar testimonios de PocketBase, usando fallback:', err.message);
        setError(err.message);
        // El estado inicial ya tiene los fallbackTestimonials
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};
