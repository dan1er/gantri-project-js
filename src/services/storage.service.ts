export function loadFromLocalStorage(key: string): any | undefined {
  try {
    const info = localStorage.getItem(key)
    return info && JSON.parse(info)
  } catch {
    return null
  }
}

export function saveToLocalStorage(key: string, value: any): boolean {
  try {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
    return true
  } catch {
    return false
  }
}

export function remove(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {}
}

export function clear(): void {
  try {
    localStorage.clear()
  } catch {}
}
