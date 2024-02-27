/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.jsx` route
 */

 import {visionTool} from '@sanity/vision'
 import {defineConfig} from 'sanity'
 import {structureTool} from 'sanity/structure'

 // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
 import {apiVersion, dataset, projectId} from './sanity/env'
 import {schema} from './sanity/schema'

export default defineConfig({
   basePath: 'http://localhost:3000/studio',
   projectId: "r7jungte",
   dataset,
   // Add and edit the content schema in the './sanity/schema' folder
   schema,
   plugins: [
     structureTool(),
     // Vision is a tool that lets you query your content with GROQ in the studio
     // https://www.sanity.io/docs/the-vision-plugin
     visionTool({defaultApiVersion: apiVersion}),
   ],
 })

// import { defineConfig } from 'sanity'
// import { visionTool } from '@sanity/vision'
// import { structureTool } from 'sanity/structure'
// import { config } from 'dotenv'
// config() // Load environment variables from .env file

// // Access environment variables using process.env
// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
// // Import other necessary variables

// import { schema } from './schema'

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   schema,
//   plugins: [
//     structureTool(),
//     visionTool({ defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION }),
//   ],
// })
