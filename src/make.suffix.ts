const dividers = [
  { unitMinAmount: Math.pow(10, 3), unitName: 'kilo' },
  { unitMinAmount: Math.pow(10, 6), unitName: 'mega' },
  { unitMinAmount: Math.pow(10, 9), unitName: 'giga' },
  { unitMinAmount: Math.pow(10, 12), unitName: 'tera' },
  { unitMinAmount: Math.pow(10, 15), unitName: 'peta' },
  { unitMinAmount: Math.pow(10, 18), unitName: 'exa' },
  { unitMinAmount: Math.pow(10, 21), unitName: 'zetta' },
  { unitMinAmount: Math.pow(10, 24), unitName: 'yotta' }
];

export function makeSuffix(input: number) {
  if (typeof input !== 'number') {
    throw new Error(`Expected a number, received ${typeof input} instead.`);
  }
  if (input < dividers[0].unitMinAmount) {
    return input.toString();
  }

  for (let i = 0; i < dividers.length; i++) {
    const currentDivider = dividers[i];
    const nextDivider = dividers[i + 1];
    if (
      input >= currentDivider.unitMinAmount &&
       nextDivider != null &&
       input < nextDivider.unitMinAmount
    ) {
      return `${input / currentDivider.unitMinAmount} ${currentDivider.unitName}`;
    }
  }
}