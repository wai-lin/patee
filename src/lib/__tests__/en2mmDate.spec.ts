import { en2mmDay } from '../en2mmDate';

describe('en2mmDate.ts > en2mmDay function', () => {
  it('Should convert Days(long, min) to Myanmar Days(long, min)', () => {
    // Sunday
    expect(en2mmDay('Sunday')).toBe('တနင်္ဂနွေ');
    expect(en2mmDay('sunday')).toBe('တနင်္ဂနွေ');
    expect(en2mmDay('Sun')).toBe('နွေ');
    expect(en2mmDay('sun')).toBe('နွေ');
    // Monday
    expect(en2mmDay('Monday')).toBe('တနင်္လာ');
    expect(en2mmDay('monday')).toBe('တနင်္လာ');
    expect(en2mmDay('Mon')).toBe('လာ');
    expect(en2mmDay('mon')).toBe('လာ');
    // Tuesday
    expect(en2mmDay('Tuesday')).toBe('အင်္ဂါ');
    expect(en2mmDay('tuesday')).toBe('အင်္ဂါ');
    expect(en2mmDay('Tue')).toBe('ဂါ');
    expect(en2mmDay('tue')).toBe('ဂါ');
    // Wednesday
    expect(en2mmDay('Wednesday')).toBe('ဗုဒ္ဓဟူး');
    expect(en2mmDay('wednesday')).toBe('ဗုဒ္ဓဟူး');
    expect(en2mmDay('Wed')).toBe('ဟူး');
    expect(en2mmDay('wed')).toBe('ဟူး');
    // Thursday
    expect(en2mmDay('Thursday')).toBe('ကြာသပတေး');
    expect(en2mmDay('thursday')).toBe('ကြာသပတေး');
    expect(en2mmDay('Thur')).toBe('ကြာ');
    expect(en2mmDay('thur')).toBe('ကြာ');
    // Friday
    expect(en2mmDay('Friday')).toBe('သောကြာ');
    expect(en2mmDay('friday')).toBe('သောကြာ');
    expect(en2mmDay('Fri')).toBe('သော');
    expect(en2mmDay('fri')).toBe('သော');
    // Saturday
    expect(en2mmDay('Saturday')).toBe('စနေ');
    expect(en2mmDay('saturday')).toBe('စနေ');
    expect(en2mmDay('Sat')).toBe('နေ');
    expect(en2mmDay('sat')).toBe('နေ');
  });
});
