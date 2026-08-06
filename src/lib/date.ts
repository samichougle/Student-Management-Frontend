export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-GB").format(new Date(date));
}
