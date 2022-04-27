import { queryByCollection } from '../../lib/firestore'

export default defineEventHandler(async (event) => {
  try {
    // const query = useQuery(event.req)
    const docs = await queryByCollection('animals')

    return { result: docs }
  } catch (error) {
    return {
      result: [], 
      error: error.message
    }
  }
})