import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_URL_API;

interface QueimadaData {
  // Tipagem opcional conforme a resposta da API
  id: string;
  lat: number;
  lon: number;
  date: string;
  confidence: string;
  [key: string]: any;
}

export async function getQueimadasPorEstado(
  uf: string,
  daysAgo: number = 7
): Promise<QueimadaData[]> {
  if (!API_KEY || !BASE_URL) {
    throw new Error("Variáveis de ambiente não definidas");
  }

  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - daysAgo);

  const formatDate = (date: Date): string => date.toISOString().split("T")[0];

  const params = {
    admin: `BRA.${uf}`,
    period: `${formatDate(startDate)},${formatDate(today)}`,
    confidence: "high",
    api_key: API_KEY,
  };

  try {
    const response = await axios.get(`${BASE_URL}/fires/alerts`, { params });
    return response.data?.data || [];
  } catch (error) {
    console.error("Erro ao buscar dados de queimadas:", error);
    throw error;
  }
}

interface QtdQueimadasGfw {
  startDate: string;
  endDate: string;
}

export async function getQueimadasAgrupadasPorEstado(
  startDate: string,
  endDate: string
): Promise<QtdQueimadasGfw[]> {
  if (!API_KEY || !BASE_URL) {
    throw new Error("Variáveis de ambiente não definidas");
  }

  const response = await axios.post(
    `${BASE_URL}/gfw/por-estado`,
    {
      startDate,
      endDate,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data;
}

export async function getQueimadasAgrupadasPorBioma(
  startDate: string,
  endDate: string
): Promise<QtdQueimadasGfw[]> {
  if (!API_KEY || !BASE_URL) {
    throw new Error("Variáveis de ambiente não definidas");
  }

  const response = await axios.post(
    `${BASE_URL}/gfw/por-bioma`,
    {
      startDate,
      endDate,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data;
}
