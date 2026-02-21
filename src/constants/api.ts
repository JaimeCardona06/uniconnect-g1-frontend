import axios from 'axios';

if (!process.env.EXPO_PUBLIC_API_URL) {
  console.warn("⚠️ Falta configurar EXPO_PUBLIC_API_URL en el archivo .env");
}

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "http://192.168.1.41:3000/api",
  headers: {
    'Content-Type': 'application/json',
  },
});