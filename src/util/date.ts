export const isValid = (d: Date) => d instanceof Date && !isNaN(d.getTime());
export const isToday = (d: Date) => {
  const today = new Date();
  return (
    isValid(d) &&
    d.getUTCDate() === today.getUTCDate() &&
    d.getUTCMonth() === today.getUTCMonth() &&
    d.getUTCFullYear() === today.getUTCFullYear()
  );
};
export const dateString = (d: Date) => d.toISOString().split("T")[0];
