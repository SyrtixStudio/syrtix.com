import dotenv from "dotenv";
import { syrtixAgent } from "./rag-core.js";

dotenv.config();

/**
 * Suite de Pruebas de QA para Enrutador Multi-Agente
 * Diseñada bajo el rol de /qa-tester
 */
async function runQATests() {
  console.log("🧨 Iniciando QA Test Suite: Enrutador Multi-Agente de Syrtix AI...\n");

  const testCases = [
    {
      name: "Prueba 1: E-commerce (Ventas con Calificación)",
      question: "¿Qué precio tiene una tienda online?",
      assertions: (answer) => {
        const hasStart = /199\.000|start/i.test(answer);
        const hasSii = /sii|impuesto|empresa/i.test(answer);
        const hasWebpay = /webpay|tarjeta|mercado/i.test(answer);
        
        console.log(`  - ¿Tiene anclaje desde $199k?: ${hasStart ? "✅" : "❌"}`);
        console.log(`  - ¿Tiene calificación SII?: ${hasSii ? "✅" : "❌"}`);
        console.log(`  - ¿Menciona pagos con tarjeta/Webpay?: ${hasWebpay ? "✅" : "❌"}`);
        
        return hasStart && (hasSii || hasWebpay);
      }
    },
    {
      name: "Prueba 2: Rebranding & Diseño (Director Creativo)",
      question: "Mi sitio web es antiguo y lento, quiero hacer un diseño premium y rebranding de marca",
      assertions: (answer) => {
        const hasRebranding = /rebranding|redise|identidad|marca/i.test(answer);
        const hasTechStack = /react|vite|figma|world-class/i.test(answer);
        const hasEcommerceLeak = /webpay|sii|pasarela/i.test(answer);
        
        console.log(`  - ¿Habla de Rebranding/Marca/Identidad?: ${hasRebranding ? "✅" : "❌"}`);
        console.log(`  - ¿Menciona React/Vite/Figma/Estándar?: ${hasTechStack ? "✅" : "❌"}`);
        console.log(`  - ¿Alucina con pasarelas de pago/SII (Fuga)?: ${hasEcommerceLeak ? "❌ FILTRACIÓN DE INTENTO" : "✅ SANO"}`);
        
        return hasRebranding && !hasEcommerceLeak;
      }
    },
    {
      name: "Prueba 3: Auditorías Técnicas y SEO",
      question: "¿Cómo mejoro la velocidad móvil y el posicionamiento en Google de mi página?",
      assertions: (answer) => {
        const hasAudit = /auditor|diagn[oó]stico/i.test(answer);
        const hasSEOOrWPO = /seo|rendimiento|lighthouse|velocidad/i.test(answer);
        const hasEcommerceLeak = /webpay|sii/i.test(answer);
        
        console.log(`  - ¿Menciona auditorías/diagnósticos técnicos?: ${hasAudit ? "✅" : "❌"}`);
        console.log(`  - ¿Se enfoca en SEO/Lighthouse/Velocidad?: ${hasSEOOrWPO ? "✅" : "❌"}`);
        console.log(`  - ¿Alucina con pasarelas de pago/SII (Fuga)?: ${hasEcommerceLeak ? "❌ FILTRACIÓN DE INTENTO" : "✅ SANO"}`);
        
        return hasSEOOrWPO && !hasEcommerceLeak;
      }
    },
    {
      name: "Prueba 4: Cierre de Venta (CTA Link Injection)",
      question: "Perfecto, me interesa la solución Start de $199.000, ¿cómo avanzo?",
      assertions: (answer) => {
        const hasWhatsAppLink = /https:\/\/wa\.me\/56988126316/i.test(answer);
        const hasFormLink = /\/#contacto/i.test(answer);
        
        console.log(`  - ¿Inyecta link de WhatsApp?: ${hasWhatsAppLink ? "✅" : "❌"}`);
        console.log(`  - ¿Inyecta link de formulario?: ${hasFormLink ? "✅" : "❌"}`);
        
        return hasWhatsAppLink && hasFormLink;
      }
    }
  ];

  let passedTests = 0;

  for (const tc of testCases) {
    console.log(`--------------------------------------------------`);
    console.log(`🏃 ${tc.name}`);
    console.log(`❓ Pregunta: "${tc.question}"\n`);
    
    try {
      const startTime = Date.now();
      const answer = await syrtixAgent.ask(tc.question, []);
      const latency = Date.now() - startTime;
      
      console.log(`🤖 Respuesta [Latencia: ${latency}ms]:`);
      console.log(`"${answer}"\n`);
      
      console.log(`📊 Validaciones de QA:`);
      const isSuccess = tc.assertions(answer);
      
      if (isSuccess) {
        console.log(`\n🏆 Resultado: PASÓ`);
        passedTests++;
      } else {
        console.log(`\n🚨 Resultado: FALLÓ`);
      }
    } catch (err) {
      console.error(`❌ Excepción durante ejecución de prueba:`, err);
    }
  }

  console.log(`--------------------------------------------------`);
  console.log(`🏁 RESUMEN DEL DIAGNÓSTICO DE QA:`);
  console.log(`  - Pruebas Ejecutadas: ${testCases.length}`);
  console.log(`  - Pruebas Exitosas: ${passedTests}/${testCases.length}`);
  
  if (passedTests === testCases.length) {
    console.log(`\n🎉 ¡CONFIANZA 100/100! Todos los agentes y enrutadores operan bajo el estándar de calidad de Syrtix.`);
  } else {
    console.log(`\n⚠️ Se detectaron regresiones. Por favor revise el código de rag-core.js.`);
  }
}

runQATests();
