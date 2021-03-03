const mmDaysMapping = [
  // Long
  ['sunday', 'တနင်္ဂနွေ'],
  ['monday', 'တနင်္လာ'],
  ['tuesday', 'အင်္ဂါ'],
  ['wednesday', 'ဗုဒ္ဓဟူး'],
  ['thursday', 'ကြာသပတေး'],
  ['friday', 'သောကြာ'],
  ['saturday', 'စနေ'],
  // Min
  ['sun', 'နွေ'],
  ['mon', 'လာ'],
  ['tue', 'ဂါ'],
  ['wed', 'ဟူး'],
  ['thur', 'ကြာ'],
  ['fri', 'သော'],
  ['sat', 'နေ'],
];

export type EN_DAY =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sun'
  | 'mon'
  | 'tue'
  | 'wed'
  | 'thur'
  | 'fri'
  | 'sat';

export type MM_DAY =
  | 'တနင်္ဂနွေ'
  | 'တနင်္လာ'
  | 'အင်္ဂါ'
  | 'ဗုဒ္ဓဟူး'
  | 'ကြာသပတေး'
  | 'သောကြာ'
  | 'စနေ'
  | 'နွေ'
  | 'လာ'
  | 'ဂါ'
  | 'ဟူး'
  | 'ကြာ'
  | 'သော'
  | 'နေ';

/**
 * en2mmDay function
 * convert supplied Eng Day to MM Day String
 * @param enDayStr string, typeof EN_DAY
 * @returns MM_DAY (default return နွေ)
 */
export function en2mmDay(enDayStr: string): MM_DAY {
  const enDay: EN_DAY = enDayStr.toLowerCase() as EN_DAY;
  let mmDay: MM_DAY = 'နွေ';

  mmDaysMapping.forEach(mapping => {
    if (mapping[0] === enDay) mmDay = mapping[1] as MM_DAY;
  });

  return mmDay;
}
