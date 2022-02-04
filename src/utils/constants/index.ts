import { format, formatDistanceToNow, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
export const MONTHS = {
  '01': 'Janeiro',
  '02': 'Fevereiro',
  '03': 'Março',
  '04': 'Abril',
  '05': 'Maio',
  '06': 'Junho',
  '07': 'Julho',
  '08': 'Agosto',
  '09': 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro'
}

export function minDateInput(): string {
  return format(new Date(), 'yyyy-MM-dd')
}

export function distanceDate(date: string): string {
  if (date) {
    return formatDistanceToNow(parseISO(date), { addSuffix: false, locale: pt })
  }
  return ''
}
