export const unique = <Type>(array: Type[]): Type[] => {
  return array.filter((item, index, all) => all.indexOf(item) === index)
}
