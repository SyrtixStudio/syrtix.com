import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registrar plugins UNA sola vez
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Exportar para uso en componentes
export { gsap, ScrollTrigger, useGSAP };
