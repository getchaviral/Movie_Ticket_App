import { api, saveAuthToken, saveAuthUser } from './apiClient.js'

export async function loginUser(credentials) {
  const response = await api('/auth/login', {
    method: 'POST',
    body: credentials,
  })

  saveAuthToken(response.token)
  saveAuthUser(response.user)

  return response
}

export async function registerUser(data) {
  const response = await api('/auth/register', {
    method: 'POST',
    body: data,
  })

  saveAuthToken(response.token)
  saveAuthUser(response.user)

  return response
}
