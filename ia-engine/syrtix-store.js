import fs from 'fs';

/**
 * SyrtixStore: Una Vector Store minimalista y potente en JS Puro.
 * Ideal para portafolios porque demuestra control total sobre la lógica RAG.
 */
export class SyrtixStore {
  constructor() {
    this.vectors = []; // Formato: [{ vector: [], content: "", metadata: {} }]
  }

  async addDocuments(documents, embeddings) {
    console.log(`🧠 Generando embeddings para ${documents.length} fragmentos...`);
    
    // Generar vectores para cada fragmento
    const rawVectors = await embeddings.embedDocuments(
      documents.map(d => d.pageContent)
    );

    this.vectors = documents.map((doc, i) => ({
      vector: rawVectors[i],
      content: doc.pageContent,
      metadata: doc.metadata
    }));
  }

  save(path) {
    fs.writeFileSync(path, JSON.stringify(this.vectors));
    console.log(`💾 Store guardado en ${path}`);
  }

  load(path) {
    if (fs.existsSync(path)) {
      this.vectors = JSON.parse(fs.readFileSync(path, 'utf-8'));
      console.log(`📖 Store cargado con ${this.vectors.length} vectores.`);
    }
  }

  // Búsqueda por similitud de coseno
  search(queryVector, k = 4) {
    const scores = this.vectors.map(item => {
      const score = this.cosineSimilarity(queryVector, item.vector);
      return { ...item, score };
    });

    // Ordenar por puntaje (mejor primero) y devolver los mejores k
    return scores.sort((a, b) => b.score - a.score).slice(0, k);
  }

  cosineSimilarity(vecA, vecB) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      normA += vecA[i] * vecA[i];
      normB += vecB[i] * vecB[i];
    }
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }
}
