export function scrollTo(value: number): void {
  window.scroll({
    top: value,
    left: 0,
    behavior: 'smooth'
  })
}
