export const useFetch = () => {

  const API = async (request) => {
    try {
      const response = await fetch(request)
      const payload = await response.json()
      return payload
    } catch (error) {
      return undefined
    }
  }

  const POST = async (url, model) => {
    const request = new Request(`${process.env.REACT_APP_API_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(model),
    })
    return API(request)
  }

  const GET = async (url) => {
    const request = new Request(`${process.env.REACT_APP_API_URL}${url}`, {
      method: 'GET',
    })
    return API(request)
  }

  const DELETE = async (url) => {
    const request = new Request(`${process.env.REACT_APP_API_URL}${url}`, {
      method: 'DELETE',
    })
    try {
      const response = await fetch(request)
      const payload = await response.json()
      if (!response.ok || !payload.success) {
        return Promise.reject()
      }
      return response.ok
    } catch (error) {
      return Promise.reject()
    }
  }

  return { POST, GET, DELETE }
}
