export function removeFc(string) {
  const formattedString = string.replace('FC', '');
  return formattedString;
}

export function urlFormat(name) {
  const formattedName = name.toLowerCase().replace(' ', '-');
  return formattedName;
}