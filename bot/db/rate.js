function toRupiah(value) {
  return value.toLocaleString('id-ID');
}

function generateSocl(teksoc) {
  const prices = [
    { diamond: 86, price: 6.4 },
    { diamond: 172, price: 12.7 },
    { diamond: 257, price: 19.1 },
    { diamond: 344, price: 25.4 },
    { diamond: 429, price: 31.8 },
    { diamond: 514, price: 38.2 },
    { diamond: 600, price: 44.6 },
    { diamond: 706, price: 51 },
    { diamond: 878, price: 63.7 },
    { diamond: 963, price: 70.1 },
    { diamond: 1050, price: 76.4 },
    { diamond: 1135, price: 82.8 },
    { diamond: 1220, price: 89.2 },
    { diamond: 1412, price: 102 },
    { diamond: 1584, price: 114.7 },
    { diamond: 1669, price: 121.1 },
    { diamond: 1756, price: 127.4 },
    { diamond: 1841, price: 133.8 },
    { diamond: 2195, price: 153.2 },
    { diamond: 2539, price: 178.6 },
    { diamond: 2901, price: 204.2 },
    { diamond: 3073, price: 216.9 },
    { diamond: 3688, price: 255.6 },
    { diamond: 4394, price: 306.6 },
    { diamond: 5532, price: 383.6 },
    { diamond: 6238, price: 434.6 },
    { diamond: 7727, price: 536.8 },
    { diamond: 9288, price: 638 },
    { diamond: 'Twilight', price: 41.9 },
    { diamond: 'Weekly Pass 1', price: 7.92 },
    { diamond: 'Weekly Pass 2', price: 15.84 },
    { diamond: 'Weekly Pass 3', price: 23.76 },
    { diamond: 'Weekly Pass 4', price: 31.68 },
    { diamond: 'Weekly Pass 5', price: 39.6 }
  ];

  const txt = prices
    .map(({ diamond, price }) => `${diamond}   💎 = Rp ${toRupiah(price * teksoc)}`)
    .join('\n');

  return `*MLA R${teksoc}*\n${txt}`;
}
function generateKachi(tekachi) {
  const prices = [
    { diamond: 140, price: 9.19 },
    { diamond: 280, price: 18.38 },
    { diamond: 355, price: 22.99 },
    { diamond: 425, price: 27.58 },
    { diamond: 565, price: 36.77 },
    { diamond: 716, price: 46.99 },
    { diamond: 1446, price: 94.99 },
    { diamond: 2976, price: 189.99 },
    { diamond: 7502, price: 467 }
  ];

  const txt = prices
    .map(({ diamond, price }) => `${diamond} = Rp ${toRupiah(price * tekachi)}`)
    .join('\n');

  return `*RATE KACHI R${tekachi}*\n${txt}`;
}
function generateSoc(teksoc) {
  const prices = [
    { diamond: 86, price: 6.4 },
    { diamond: 172, price: 12.7 },
    { diamond: 257, price: 19.1 },
    { diamond: 344, price: 24.9 },
    { diamond: 429, price: 31.2 },
    { diamond: 514, price: 37 },
    { diamond: 600, price: 43.4 },
    { diamond: 706, price: 50 },
    { diamond: 878, price: 62.7 },
    { diamond: 963, price: 68.5 },
    { diamond: 1050, price: 75.4 },
    { diamond: 1135, price: 81.2 },
    { diamond: 1220, price: 87.6 },
    { diamond: 1412, price: 100 },
    { diamond: 1584, price: 112.7 },
    { diamond: 1669, price: 119.1 },
    { diamond: 1756, price: 125.4 },
    { diamond: 1841, price: 131.8 },
    { diamond: 2195, price: 151.3 },
    { diamond: 2539, price: 176.2 },
    { diamond: 2901, price: 201.3 },
    { diamond: 3073, price: 214 },
    { diamond: 3688, price: 252.4 },
    { diamond: 4394, price: 302.4 },
    { diamond: 5532, price: 381 },
    { diamond: 6238, price: 431 },
    { diamond: 7727, price: 532.3 },
    { diamond: 9288, price: 632.9 },
    { diamond: 'Twilight', price: 41.9 },
    { diamond: 'Weekly Pass 1', price: 7.92 },
    { diamond: 'Weekly Pass 2', price: 15.84 },
    { diamond: 'Weekly Pass 3', price: 23.76 },
    { diamond: 'Weekly Pass 4', price: 31.68 },
    { diamond: 'Weekly Pass 5', price: 39.6 }
  ];

  const txt = prices
    .map(({ diamond, price }) => `${diamond}    = Rp ${toRupiah(price * teksoc)}`)
    .join('\n');

  return `*MLA R${teksoc}*\n${txt}`;
}
function generateUnibrl(tekunibrl) {
  const prices = [
    { diamond: 86, price: 7.1 },
    { diamond: 172, price: 14.2 },
    { diamond: 257, price: 21.3 },
    { diamond: 344, price: 28.4 },
    { diamond: 429, price: 35.5 },
    { diamond: 514, price: 42.6 },
    { diamond: 600, price: 49.7 },
    { diamond: 706, price: 56.8 },
    { diamond: 878, price: 71 },
    { diamond: 963, price: 78.1 },
    { diamond: 1050, price: 85.19 },
    { diamond: 1135, price: 92.3 },
    { diamond: 1220, price: 99.4 },
    { diamond: 1412, price: 113.6 },
    { diamond: 1584, price: 127.8 },
    { diamond: 1669, price: 134.9 },
    { diamond: 1756, price: 142 },
    { diamond: 1841, price: 149.1 },
    { diamond: 2195, price: 170.4 },
    { diamond: 2539, price: 198.8 },
    { diamond: 2901, price: 227.2 },
    { diamond: 3073, price: 241.4 },
    { diamond: 3688, price: 284 },
    { diamond: 4394, price: 340.8 },
    { diamond: 5532, price: 426 },
    { diamond: 6238, price: 482.8 },
    { diamond: 7727, price: 596.4 },
    { diamond: 9288, price: 710 },
    { diamond: 'Twilight', price: 46.86 },
    { diamond: 'SL + 12', price: 46.86 },
    { diamond: 'Starlight Plus', price: 106.5 }
  ];

  const txt = prices
    .map(({ diamond, price }) => `${diamond} = Rp ${toRupiah(price * tekunibrl)}`)
    .join('\n');

  return `*MLA R${tekunibrl}*\n${txt}`;
}
function generateUnimy(tekunimy) {
  const prices = [
    { diamond: 14, price: 1.06 },
    { diamond: 28, price: 2.12 },
    { diamond: 42, price: 3.18 },
    { diamond: 56, price: 4.24 },
    { diamond: 70, price: 5.3 },
    { diamond: 112, price: 8.48 },
    { diamond: 140, price: 10.6 },
    { diamond: 284, price: 21.2 },
    { diamond: 355, price: 26.5 },
    { diamond: 429, price: 31.8 },
    { diamond: 716, price: 53 },
    { diamond: 1446, price: 106 },
    { diamond: 'Weekly Diamond Pass', price: 8.48 },
    { diamond: 'Twilight', price: 42.4 }
  ];

  const txt = prices
    .map(({ diamond, price }) => `${diamond} = Rp ${toRupiah(price * tekunimy)}`)
    .join('\n');

  return `*MLB R${tekunimy}*\n${txt}`;
}

function generateUniph(tekuniph) {
  const prices = [
    { diamond: 10, price: 10 },
    { diamond: 19, price: 20 },
    { diamond: 47, price: 50 },
    { diamond: 93, price: 100 },
    { diamond: 184, price: 200 },
    { diamond: 277, price: 300 },
    { diamond: 570, price: 500 },
    { diamond: 954, price: 1000 },
    { diamond: 1968, price: 2000 },
    { diamond: 4955, price: 5000 },
    { diamond: 'Twilight', price: 500 },
    { diamond: 'Weekly Pass 1', price: 99 },
    { diamond: 'Weekly Pass 2', price: 198 },
    { diamond: 'Weekly Pass 3', price: 297 },
    { diamond: 'Weekly Pass 4', price: 396 },
    { diamond: 'Weekly Pass 5', price: 495 }
  ];

  const txt = prices
    .map(({ diamond, price }) => `${diamond} = Rp ${toRupiah(price * tekuniph)}`)
    .join('\n');

  return `*MLC R${tekuniph}*\n${txt}`;
}

function generateAcerace(tekacer) {
  const prices = [
    { coins: 65, price: 4.9 },
    { coins: 270, price: 18.9 },
    { coins: 740, price: 44.9 },
    { coins: 1300, price: 84.9 },
    { coins: 2180, price: 214.9 },
    { coins: 6530, price: 429.9 }
  ];

  const txt = prices
    .map(({ coins, price }) => `${coins} ( ${coins - (coins % 60)} + ${coins % 60} ) = Rp ${toRupiah(price * tekacer)}`)
    .join('\n');

  return `*Ace Racer R${tekacer}*\n${txt}`;
}
function generateCodm(tekkcodm) {
  const prices = [
    { coins: 63, price: 33 },
    { coins: 128, price: 66 },
    { coins: 321, price: 165 },
    { coins: 645, price: 330 },
    { coins: 800, price: 396 },
    { coins: 1373, price: 660 },
    { coins: 2060, price: 990 },
    { coins: 2750, price: 1254 },
    { coins: 3564, price: 1650 },
    { coins: 5619, price: 2409 },
    { coins: 7656, price: 3300 }
  ];

  const txt = prices
    .map(({ coins, price }) => `${coins}  = Rp ${toRupiah(price * tekkcodm)}`)
    .join('\n');

  return `*CALL OF DUTY MOBILE R${tekkcodm}*\n${txt}`;
}
function generateUcodm(tekucodm) {
  const prices = [
    { coins: 32, price: 5000 },
    { coins: 62, price: 10000 },
    { coins: 127, price: 20000 },
    { coins: 320, price: 50000 },
    { coins: 644, price: 100000 },
    { coins: 1373, price: 200000 },
    { coins: 2059, price: 300000 },
    { coins: 3564, price: 500000 },
    { coins: 7656, price: 1000000 }
  ];

  const txt = prices
    .map(({ coins, price }) => `${coins}  = Rp ${toRupiah(price * tekucodm)}`)
    .join('\n');

  return `*UNIPIN ID CODM R${tekucodm}*\n${txt}`;
}
function generateKff(tekkios) {
  const prices = [
    { diamonds: 5, price: 3 },
    { diamonds: 10, price: 6 },
    { diamonds: 15, price: 9 },
    { diamonds: 20, price: 12 },
    { diamonds: 25, price: 15 },
    { diamonds: 30, price: 18 },
    { diamonds: 50, price: 24 },
    { diamonds: 55, price: 27 },
    { diamonds: 60, price: 30 },
    { diamonds: 70, price: 33 },
    { diamonds: 75, price: 36 },
    { diamonds: 80, price: 39 },
    { diamonds: 90, price: 45 },
    { diamonds: 100, price: 48 },
    { diamonds: 120, price: 57 },
    { diamonds: 130, price: 63 },
    { diamonds: 140, price: 66 },
    { diamonds: 145, price: 69 },
    { diamonds: 150, price: 72 },
    { diamonds: 160, price: 78 },
    { diamonds: 190, price: 90 },
    { diamonds: 200, price: 96 },
    { diamonds: 210, price: 99 },
    { diamonds: 250, price: 120 },
    { diamonds: 280, price: 132 },
    { diamonds: 300, price: 144 },
    { diamonds: 355, price: 165 },
    { diamonds: 360, price: 168 },
    { diamonds: 375, price: 177 },
    { diamonds: 405, price: 189 },
    { diamonds: 425, price: 198 },
    { diamonds: 475, price: 222 },
    { diamonds: 500, price: 234 },
    { diamonds: 510, price: 240 },
    { diamonds: 515, price: 243 },
    { diamonds: 520, price: 246 },
    { diamonds: 545, price: 255 },
    { diamonds: 565, price: 264 },
    { diamonds: 600, price: 282 },
    { diamonds: 635, price: 297 },
    { diamonds: 645, price: 303 },
    { diamonds: 655, price: 309 },
    { diamonds: 725, price: 333 },
    { diamonds: 740, price: 342 },
    { diamonds: 770, price: 354 },
    { diamonds: 790, price: 363 },
    { diamonds: 800, price: 369 },
    { diamonds: 860, price: 396 },
    { diamonds: 930, price: 429 },
    { diamonds: 1000, price: 462 },
    { diamonds: 1050, price: 486 },
    { diamonds: 1060, price: 492 },
    { diamonds: 1075, price: 495 },
    { diamonds: 1080, price: 498 },
    { diamonds: 1200, price: 558 },
    { diamonds: 1215, price: 561 },
    { diamonds: 1300, price: 603 },
    { diamonds: 1440, price: 660 },
    { diamonds: 1450, price: 666 },
    { diamonds: 1490, price: 684 },
    { diamonds: 1510, price: 693 },
    { diamonds: 1580, price: 726 },
    { diamonds: 1795, price: 825 },
    { diamonds: 1800, price: 828 },
    { diamonds: 2000, price: 924 },
    { diamonds: 2160, price: 990 },
    { diamonds: 2180, price: 1002 },
    { diamonds: 2200, price: 1014 },
    { diamonds: 2210, price: 1023 },
    { diamonds: 2280, price: 1056 },
    { diamonds: 2355, price: 1089 },
    { diamonds: 2720, price: 1254 },
    { diamonds: 3640, price: 1674 },
    { diamonds: 3800, price: 1746 },
    { diamonds: 4000, price: 1842 },
    { diamonds: 4340, price: 1992 },
    { diamonds: 7290, price: 3300 },
    { diamonds: 100, price: 100 },
    { diamonds: 200, price: 200 },
    { diamonds: 300, price: 300 },
    { diamonds: 300, price: 300 },
    { diamonds: 600, price: 600 },
    { diamonds: 900, price: 900 },
    { diamonds: 50, price: 50 },
    { diamonds: 150, price: 150 }
  ];

  const txt = prices
    .map(({ diamonds, price }) => ` ${diamonds} = Rp ${toRupiah(price * tekkios)}`)
    .join('\n');

  return `*FREE FIRE R${tekkios}*\n${txt}`;
}
function generateUndawn(tekud) {
  const prices = [
    { diamonds: 80, price: 50 },
    { diamonds: 250, price: 150 },
    { diamonds: 450, price: 250 },
    { diamonds: 920, price: 495 },
    { diamonds: 1850, price: 900 },
    { diamonds: 2800, price: 1485 },
    { diamonds: 4750, price: 2475 },
    { diamonds: 9600, price: 4950 },
    { diamonds: 33000, price: 16500 },
    { diamonds: 66500, price: 33000 },
    { diamonds: 'Kartu Mingguan', price: 96 },
    { diamonds: 'Kartu Bulanan', price: 159 },
    { diamonds: 'Growth Fund (REBATE)', price: 319 },
    { diamonds: 'Glory Pass Premium', price: 479 },
  ];

  const txt = prices
    .map(({ diamonds, price }) => `${diamonds}  = Rp ${toRupiah(price * tekud)}`)
    .join('\n');

  return `*GARENA UNDAWN R${tekud}*\n${txt}`;
}
function generateAov(tekaov) {
  const prices = [
    { diamonds: 40, price: 33 },
    { diamonds: 90, price: 66 },
    { diamonds: 230, price: 165 },
    { diamonds: 470, price: 330 },
    { diamonds: 950, price: 660 },
    { diamonds: 1430, price: 990 },
    { diamonds: 2390, price: 1660 },
    { diamonds: 4800, price: 3300 },
    { diamonds: 24050, price: 16500 },
    { diamonds: 48200, price: 33000 },
  ];

  const txt = prices
    .map(({ diamonds, price }) => `${diamonds}  = Rp ${toRupiah(price * tekaov)}`)
    .join('\n');

  return `*ARENA OF VALOR R${tekaov}*\n${txt}`;
}
function generateGensinmy(tekgenmy) {
  const prices = [
    { crystals: 60, price: 3.9 },
    { crystals: 330, price: 19.9 },
    { crystals: 1090, price: 59.9 },
    { crystals: 2240, price: 129.9 },
    { crystals: 3880, price: 199.9 },
  ];

  const txt = prices
    .map(({ crystals, price }) => `${crystals}  = Rp ${toRupiah(price * tekgenmy)}`)
    .join('\n');

  return `*GENSHIN UNI MY R${tekgenmy}*\n${txt}\n\nBlessing of the Welkin Moon = Rp ${toRupiah(19.9 * tekgenmy)}`;
}
function generateGensinph(tekgennph) {
  const prices = [
    { crystals: 60, price: 55 },
    { crystals: 330, price: 280 },
    { crystals: 1090, price: 830 },
    { crystals: 2240, price: 1670 },
    { crystals: 3880, price: 2800 },
    { crystals: 8080, price: 5500 },
  ];

  const txt = prices
    .map(({ crystals, price }) => `${crystals}  = Rp ${toRupiah(price * tekgennph)}`)
    .join('\n');

  return `*GENSHIN UNI PH R${tekgennph}*\n${txt}\n\nBlessing of the Welkin Moon = Rp ${toRupiah(280 * tekgennph)}`;
}

function generateValo(tekvalo) {
  const prices = [
    { stars: 300, price: 9.51 },
    { stars: 625, price: 19.02 },
    { stars: 1125, price: 33.29 },
    { stars: 1650, price: 47.55 },
    { stars: 3400, price: 95.1 },
    { stars: 7000, price: 190.2 },
  ];

  const txt = prices
    .map(({ stars, price }) => `${stars}  = Rp ${toRupiah(price * tekvalo)}`)
    .join('\n');

  return `*VALORANT R${tekvalo}*\n${txt}`;
}

module.exports = {
  generateSoc,
  generateKff,
  generateAov,
  generateSocl,
  generateValo,
  generateKachi,
  generateUnibrl,
  generateUnimy,
  generateUniph,
  generateCodm,
  generateUndawn,
  generateUcodm,
  generateGensinmy,
  generateGensinph,
  generateAcerace
};
