import en2mmNum from '../en2mmNum';

describe('en2mmNum.ts', () => {
  it('Should convert 1234567890 to ၁၂၃၄၅၆၇၈၉၀', () => {
    expect(en2mmNum(1234567890)).toBe('၁၂၃၄၅၆၇၈၉၀');
    expect(en2mmNum('1234567890')).toBe('၁၂၃၄၅၆၇၈၉၀');
  });

  it('Should convert 1234$56#7abc890 to ၁၂၃၄$၅၆#၇abc၈၉၀', () => {
    expect(en2mmNum('1234$56#7abc890')).toBe('၁၂၃၄$၅၆#၇abc၈၉၀');
  });
});
