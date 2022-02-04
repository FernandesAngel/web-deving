export const phoneMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d)/, '($1')
    .replace(/^\((\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
}

export const currencyMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d)/, 'R$ $1')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.')
}

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export const formatNumber = (value: string | number) => {
  return String(value).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
