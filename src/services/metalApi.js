const API_KEY = process.env.REACT_APP_METAL_API_KEY;
const API_URL = process.env.REACT_APP_METAL_API_URL;

/**
 * Fetch metal rates from the API
 * @param {string} currency - Currency code (default: INR)
 * @param {string} unit - Unit of measurement (default: g for grams)
 * @returns {Promise<Object>} - Metal rates data
 */
export async function fetchMetalRates(currency = 'INR', unit = 'g') {
  const url = `${API_URL}?api_key=${API_KEY}&currency=${currency}&unit=${unit}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Metal rates API response:', result);
    console.log('Metals data:', result.metals);
    return result;
  } catch (error) {
    console.error('Error fetching metal rates:', error);
    throw error;
  }
}
