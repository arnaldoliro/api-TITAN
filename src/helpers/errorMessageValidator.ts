export type changeErrorMessageData = {
  contrainKey: string;
  property: string;
};

export function changeErrorMessage({
  contrainKey,
  property,
}: changeErrorMessageData): string | null {
  switch (contrainKey) {
    case 'isEmail':
      return 'Email inválido.';
    case 'isNotEmpty':
      return `${property} não pode estar vazio.`;
    case 'isString':
      return `${property} precisa ser uma string.`;
    case 'minLenght':
      return `${property} deve ter mais caracteres.`;
    case 'maxLenght':
      return `${property} deve ter menos caracteres.`;
    default:
      return null;
  }
}
