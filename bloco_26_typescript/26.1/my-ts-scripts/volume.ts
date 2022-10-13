enum volumeUnits {
  quilometro = Math.pow(10, 9),
  hectometro = Math.pow(10, 6),
  decametro = Math.pow(10, 3),
  metro = Math.pow(10, 0),
  decimetro = Math.pow(10, -3),
  centimetro = Math.pow(10, -6),
  milimetro = Math.pow(10, -9),
}

type volumeUnitsType = keyof typeof volumeUnits;

function convertVolume(
  value: number,
  baseUnity: volumeUnitsType,
  targetUnit: volumeUnitsType
): number {
  const exponent = volumeUnits[baseUnity] / volumeUnits[targetUnit];
  return value * exponent;
}


convertVolume(1, 'quilometro', 'decametro');
