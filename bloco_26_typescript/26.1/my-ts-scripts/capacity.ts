enum capacityUnits {
  quilolitro = 1000,
  hectolitro = 100,
  decalitro = 10,
  litro = 1,
  decilitro = 0.1,
  centilitro = 0.01,
  mililitro = 0.001,
}

type capacityUnitsType = keyof typeof capacityUnits;

function convertCapacity(
  value: number,
  baseUnity: capacityUnitsType,
  targetUnit: capacityUnitsType
): number {
  const exponent = capacityUnits[baseUnity] / capacityUnits[targetUnit];
  return value * exponent;
}
