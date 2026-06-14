import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'TruVet Pet Care Clinic',
  projectId: 'h3p35rym',
  dataset: 'production',
  plugins: [structureTool()],
  schema,
})
