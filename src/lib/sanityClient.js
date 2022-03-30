import sanityClient from '@sanity/client'
import {api} from '../../sanity.json'
const {projectId, dataset} = api

export const client = sanityClient({
  projectId,
  dataset,
  apiVersion: '2021-10-21',
  useCdn: true
})