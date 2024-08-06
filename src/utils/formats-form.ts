export const formatCpf = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  return cleanedValue
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const formatUf = (value: string) => {
  return value
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase()
    .slice(0, 2);
};

export const formatDate = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");

  return cleanedValue
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/^(\d{2}\/\d{2})(\d)/, "$1/$2")
    .slice(0, 10);
};
