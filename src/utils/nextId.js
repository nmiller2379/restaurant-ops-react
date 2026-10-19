export class InvalidIntegerError extends Error {
  constructor(value) {
    super(`Cannot convert ${JSON.stringify(value)} to an integer`);
    this.name = "InvalidIntegerError";
    this.value = value;
  }
}

export function toInt(value) {
  const result = Number.parseInt(String(value), 10);
  if (Number.isNaN(result)) {
    throw new InvalidIntegerError(value);
  }
  return result;
}

export function nextId(array) {
  if (array.length === 0) return 1;
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value) || 0);
}

export function toDateTimeMs(date, time) {
  // Missing date/time sorts to the end when used in ascending order.
  if (!date || !time) {
    return Number.POSITIVE_INFINITY;
  }

  return Date.parse(`${date}T${time}`);
}
