/**
 * Limpia HTML tags y limita el largo de un string
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado
 */
export function truncateText(text, maxLength) {
  if (!text) return '';
  const cleanText = text.replace(/<[^>]*>/g, '');
  return cleanText.length > maxLength ? cleanText.slice(0, maxLength) + '...' : cleanText;
}

/**
 * Formatea un número como moneda chilena con separadores de miles
 * @param {number|string} amount - Monto a formatear
 * @param {string} currency - Código de moneda (CLP, UF, etc.)
 * @returns {string} Monto formateado
 */
export function formatCurrency(amount, currency = 'CLP') {
  if (!amount) return '0';

  const numAmount =
    typeof amount === 'string' ? parseFloat(amount.replace(/[^0-9.-]/g, '')) : amount;

  if (isNaN(numAmount)) return '0';

  const formatted = numAmount.toLocaleString('es-CL');

  if (currency === 'UF') {
    return formatted;
  }

  return formatted;
}
