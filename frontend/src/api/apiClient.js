const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

function getToken() {
  return localStorage.getItem('authToken')
}

function getHeaders(customHeaders = {}) {
  const token = getToken()
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...customHeaders,
  }
}

export async function api(path, options = {}) {
  const url = `${API_BASE_URL}${path}`
  const init = {
    method: options.method || 'GET',
    headers: getHeaders(options.headers),
  }

  if (options.body !== undefined) {
    init.body = typeof options.body === 'string' ? options.body : JSON.stringify(options.body)
  }

  const response = await fetch(url, init)
  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.message || `Request failed with status ${response.status}`)
  }

  return data
}

export function saveAuthToken(token) {
  localStorage.setItem('authToken', token)
}

export function saveAuthUser(user) {
  localStorage.setItem('authUser', JSON.stringify(user))
}

export function getAuthUser() {
  const data = localStorage.getItem('authUser')
  return data ? JSON.parse(data) : null
}

export function clearAuth() {
  localStorage.removeItem('authToken')
  localStorage.removeItem('authUser')
}
