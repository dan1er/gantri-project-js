export const transparentize = (color: string, alpha: number = 0.7) => {
  const red = parseInt(color.substring(1, 3), 16)
  const green = parseInt(color.substring(3, 5), 16)
  const blue = parseInt(color.substring(5, 7), 16)

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}
