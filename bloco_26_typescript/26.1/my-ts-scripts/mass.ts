enum massUnits {
    quilograma = 1000,
    hectograma = 100,
    decagrama = 10,
    grama = 1,
    decigrama = 0.1,
    centigrama = 0.01,
    miligrama = 0.001,
}

type massUnitsType = keyof typeof massUnits;

function convertMass(value: number, baseUnity: massUnitsType, targetUnit: massUnitsType): number {
    const exponent = massUnits[baseUnity] / massUnits[targetUnit];
    return value * exponent;
}