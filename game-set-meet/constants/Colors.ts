const pale_bud = "#EBF4BA";
const daichi   = "#302d2d";
const celtic_blue = "#2D75CB";
const milk = "#FDFCF6";
const tangerine = "#FBA673";

const skillLevel = [
  '#FBA673',
  '#FDD692',
  '#EBF4BA',
  '#B9E4C9',
];

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: daichi,
    background: '#fff',
    cardBackground: milk,
    borderColor: '#e6e6e6',
    shadowColor: '#000',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    chipBackground: celtic_blue,
    chipText: milk,
    // skillLevel: skillLevel
  },
  dark: {
    text: milk,
    background: '#000',
    cardBackground: daichi,
    borderColor: '#333',
    shadowColor: '#fff',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    chipBackground: celtic_blue,
    chipText: milk,
    // skillLevel: skillLevel
  },
};

// OLD
// export default {
//   light: {
//     text: '#000',
//     background: '#fff',
//     cardBackground: '#fff',
//     borderColor: '#e6e6e6',
//     shadowColor: '#000',
//     tint: tintColorLight,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#fff',
//     background: '#000',
//     cardBackground: '#1c1c1c',
//     borderColor: '#333',
//     shadowColor: '#fff',
//     tint: tintColorDark,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorDark,
//   },
// };
