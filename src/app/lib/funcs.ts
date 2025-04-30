export function leitoText(leito: string) {
  return `Paciente em ${leito},`;
}

export function respText(resp: string, value: string | null) {
  if (resp === "ar ambiente") {
    return "respirando em ar ambiente";
  }

  return `respirando com auxílio de ${resp} a ${value ?? "?"} L/min`;
}

export function aliText(ali: string) {
  switch (ali) {
    case "alimentação VO":
      return "aceitando dieta via oral oferecida";
    case "jejum":
      return "em jejum até segunda ordem";
    case "gtt":
      return "em uso de gastrostomia";
    case "jejuno":
      return "em uso de jejunostomia";
    case "SNE":
      return "em uso de sonda nasoenteral";
    default:
      return "padrão alimentar não especificado";
  }
}

export function diuText(diurese: string, modo: string) {
  if (diurese === "ausente") {
    return "diurese ausente no período";
  }

  switch (modo) {
    case "espontanea":
      return "apresentando diurese espontânea";
    case "SVD":
      return "mantendo SVD com débito em bolsa coletora";
    case "Cistostomia":
      return "mantendo cistostomia com débito em bolsa coletora";
    case "Uropen":
      return "mantendo Uropen com débito em frasco coletor";
    default:
      return "diurese presente, modo não especificado";
  }
}
