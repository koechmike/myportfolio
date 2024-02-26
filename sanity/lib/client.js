import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, baseUrl } from '../env'

export const sanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  baseUrl,
})

// import { createClient } from 'next-sanity'
// import { config } from 'dotenv'

// config() // Load environment variables from .env file

// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true'

// export const client = createClient({
//   apiVersion,
//   dataset,
//   projectId,
//   useCdn,
// })
