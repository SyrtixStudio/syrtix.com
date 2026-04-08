# 🧠 Material de Estudio: Ingeniería de IA & RAG

Este documento contiene los conceptos clave para el rol de **AI Engineer** y las arquitecturas modernas de IA generativa.

---

## 1. El Rol de AI Engineer (Análisis de Usercode)
En palabras simples, es la persona encargada de **conectar el cerebro de la IA (LLMs) con el negocio real**. No solo sabe "chatear", sabe **construir sistemas**.

### Lenguajes y Herramientas:
- **Python (El Rey):** El 90% de la investigación y librerías de IA están aquí. Frameworks: **FastAPI, Flask, Pandas**.
- **Node.js (El Práctico):** Ideal para integrar IA en aplicaciones web ya existentes. Librerías: **LangChain.js, OpenAI SDK**.
- **La Herramienta Maestra: LangChain.** Es el "pegamento" que permite crear flujos de RAG y agentes fácilmente en ambos lenguajes.

---

## 2. RAG (Retrieval-Augmented Generation)
**¡OJO!** No es un chatbot. El chatbot es la *interfaz* (la pantalla), mientras que el RAG es el **motor de búsqueda inteligente** que alimenta a la IA con datos reales.

### Diferencia Clave:
- **Chatbot:** Es el "mensajero" que habla con el usuario.
- **RAG:** Es el "investigador" que busca en archivos privados para que el mensajero diga la verdad.

### El Proceso de 3 Pasos (ETL para IA):
1.  **Retrieval (Recuperar):** Busca en archivos privados la información que responde a la duda.
2.  **Augmented (Aumentar):** Le entrega esa información a la IA como contexto.
3.  **Generation (Generar):** La IA responde usando los datos reales.

---

## 3. Tipos de RAG: De lo Simple a lo Complejo

### A. Por Arquitectura:
- **Naive RAG:** El más simple. Pregunta -> Busca -> Responde.
- **Advanced RAG:** Mejora la pregunta del usuario y filtra mejor los resultados.
- **Modular RAG:** Permite que la IA use diferentes herramientas según lo que necesite.

### B. Por Tecnología (Nombres en el mercado):
- **Vector RAG:** Busca por **similitud** matemática. Estándar actual.
- **GraphRAG / Knowledge Graph:** Busca por **conexión o relación**. Entiende la jerarquía y estructura de los datos.
- **LightRAG:** Versión optimizada, rápida y económica de GraphRAG.

---

## 4. RAG vs Orquestadores (Cerebro vs Logística)
No confundirlos. Trabajan juntos pero son cosas distintas.

| Concepto | Rol | Ejemplo |
| :--- | :--- | :--- |
| **RAG** | El **Cerebro** (Conocimiento). | Buscar en un manual cómo arreglar un motor. |
| **Orquestador** | La **Logística** (Flujos). | Al recibir un mensaje, enviarlo a la IA y luego a WhatsApp. |

**Arquitectura común:** Un Orquestador (como **n8n** o **Make**) llama a un proceso de RAG para obtener la respuesta correcta antes de enviarla.

---

## 5. Orquestadores: n8n vs Make vs AWS Step Functions
- **Make:** SaaS (Nube), muy visual y fácil para marketing. Pago por operación.
- **n8n:** Self-hosted (Corre en tu servidor), permite meter código **JavaScript** nativo. Ideal para AI Engineers.
- **AWS Step Functions:** Nivel industrial, procesos críticos y masivos dentro de AWS.

---

## 6. AWS Bedrock y Entornos Corporativos
- **Amazon Bedrock:** Plataforma de AWS para acceder a modelos como **Claude (Anthropic)** o **Llama (Meta)** en entornos privados.
- **Seguridad en Bedrock:** Tus datos NUNCA salen de tu infraestructura de AWS para entrenar modelos públicos.

## 7. Seguridad y Escalabilidad en IA
- **Prompt Injection:** Evitar que el usuario dé órdenes malas a la IA.
- **Rate Limiting:** Controlar el gasto de dinero por cada usuario.
- **Secret Manager:** Guardar las llaves API de forma profesional en la nube.

## 8. Gestión de Vector DBs (Cuidar la Biblioteca)
- **Indexing (Indexado):** Cómo organizar los datos para que la búsqueda sea rápida.
- **Actualización de Datos:** Borrar "recuerdos" viejos si la empresa cambia de información.

---

## 9. Glosario de Supervivencia Final
- **LLM:** El cerebro (GPT, Claude, Gemini).
- **Vector DB:** La biblioteca (Pinecone, ChromaDB, Weaviate).
- **Embedding:** Convertir texto en números para que la IA entienda el "sentido" de las cosas.
- **Agent (Agente):** Una IA que puede realizar acciones por sí misma.
- **Alucinación:** Cuando la IA miente con convicción. El RAG es la cura.
- **Prompt Engineering:** La técnica de escribir instrucciones perfectas para la IA.
