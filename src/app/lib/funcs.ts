export function leitoText(leito: string) {
  return `Paciente em ${leito},`;
}

export function respText(resp: string, value: string | null) {
  switch (resp) {
    case "ar ambiente":
      return `respirando em ar ambiente`;
    default:
      return `respirando com auxilio de ${resp} a ${value} L/min`;
  }
}

export function aliText(ali: string) {
  switch (ali) {
    case "alimentação VO":
      return `aceitando dieta VO oferecida, `;

    default:
      break;
  }
}
