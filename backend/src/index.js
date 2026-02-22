import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const port = Number(process.env.PORT || 4000);
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'syrtix-backend',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});