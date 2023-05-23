export function formatDate(date2: Date): string {
  const year = date2.getFullYear();
  const month = String(date2.getMonth() + 1).padStart(2, '0');
  const day = String(date2.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
