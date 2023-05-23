export function formatTime(date2: Date): string {
  const hours = date2.getHours();
  const minutes = date2.getMinutes();

  return `${hours}:${minutes} `;
}
