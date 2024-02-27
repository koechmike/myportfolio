export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-21'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "r7jungte";
export const useCdn = false
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

// import { config } from 'dotenv'

// config() // Load environment variables from .env file

// export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-21'
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
// export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// export const useCdn = false
