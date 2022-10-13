enum areaUnits {
  quilometro = Math.pow(10, 6),
  hectometro = Math.pow(10, 4),
  decametro = Math.pow(10, 2),
  metro = Math.pow(10, 0),
  decimetro = Math.pow(10, -2),
  centimetro = Math.pow(10, -4),
  milimetro = Math.pow(10, -6),
}


type areaUnitsType = keyof typeof areaUnits;

function convertArea(value: number, baseUnity: areaUnitsType, targetUnit: areaUnitsType): number {
  const exponent = areaUnits[baseUnity] / areaUnits[targetUnit];
  return value * exponent;
}