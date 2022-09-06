enum units {
  quilometro = 1000,
  hectometro = 100,
  decametro = 10,
  metro = 1,
  decimetro = 0.1,
  centimetro = 0.01,
  milimetro = 0.001,
}

type unitsType = keyof typeof units;

function convert(value: number, baseUnity: unitsType, targetUnit: unitsType): number {
  const exponent = units[baseUnity] / units[targetUnit];
  return value * exponent;
}