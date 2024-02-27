import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'
import { px } from 'framer-motion';
// import { createClient } from 'next-sanity'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'r7jungte',
  dataset: dataset || 'production',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max').url();
}

// export const sanityClient = createClient(config);

// import createImageUrlBuilder from '@sanity/image-url'
// import { config } from 'dotenv'

// config() // Load environment variables from .env file

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || '',
//   dataset: dataset || '',
// })

// export const urlForImage = (source) => {
//   return imageBuilder?.image(source).auto('format').fit('max').url()
// }
