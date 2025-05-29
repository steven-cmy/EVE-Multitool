interface StoredData<T> {
  data: T;
  expiry: number;
}

export function loadFromLS<T>(key: string): T | null {
  const fp = localStorage.getItem(key);
  if (!fp) {
    return null;
  }
  try {
    const parsed = JSON.parse(fp) as StoredData<T>;
    const now = Date.now();
    if (now > parsed.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return parsed.data;
  } catch (e) {
    localStorage.removeItem(key);
    return null;
  }
}

export function saveToLS<T>(key: string, data: T, expiry: number): void {
  const now = Date.now();
  localStorage.setItem(
    key,
    JSON.stringify({ data: data, expiry: now + expiry }),
  );
}
