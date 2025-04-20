export function formatData(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("ru-Ru", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
