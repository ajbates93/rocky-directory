import { useBody } from 'h3'
import { add } from '../../lib/firestore'

export default defineEventHandler(async (event) => {
  try {
    const body = await useBody(event.req)

    const docRef = await add('animals', body)

    return { result: docRef }
  } catch (error) {
    return {
      result: [], 
      error: error.message
    }
  }
})