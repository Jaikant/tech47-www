import gray from 'gray-percentage';

const colorStr = `
#281505
#042b1b
#2e1740
#3a2407
#073e2e
#452054
#48340a
#0d4f43
#5c2965
#53450e
#165e5a
#743272
#5c5815
#216c72
#8a3d7d
#636a1e
#2f798a
#9f4984
#697d2a
#4084a1
#b3568b
#6f8f39
#538eb6
#c36490
#75a14b
#6998c9
#d17494
#7db15f
#7fa1d9
#dd859a
#86c076
#96abe6
#e598a1
#91ce8e
#adb6f0
#ecabaa
#a0daa6
#c2c2f7
#f1beb6
#b1e5be
#d6cffb
#f4d1c6
#c6eed5
#e7defe
#f8e4d9
#def6ea
#f5eefe
#fcf6f0
`;

const colors = {
  a: [],
  b: [],
  c: [],
  // original palette by @SachaG
  // @see https://www.figma.com/file/J6IYJEtdRmwJQOrcZ2DfvxDD/Gatsby
  tech47: `#663399`, // was #744c9e
  tech47blue: `rgba(74, 62, 255, 1)`,
  tech47category: `rgba(81, 185, 238)`,
  tech47categoryhover: `rgba(81, 185, 238, 0.5)`,
  tech47purple: `rgba(173, 60, 203, 1)`,
  tech47purplehex: `#ad3ccb`,
  tech47hover: `rgba(255, 255, 255, 0.5)`,
  tech47date: `#d1d1d1`,
  tech47pink: `rgba(252, 56, 167, 1)`,
  tech47pinkhex: `#FC38A7`,
  tech47background: `rgba(243, 246, 250)`,
  tech47white: '#ffffff',
  lilac: `#9D7CBF`,
  // accent color from the "bolder palette" by @ArchieHicklin
  // @see https://github.com/gatsbyjs/gatsby/issues/1173#issuecomment-309415650
  accent: `#0f0f0f`, // "Mustard",
  success: `#37b635`,
  warning: `#ec1818`,
  primary: '#0f0f0f',
  secondary: '#000000',
  third: '#ffffff',
  fourth: '#0f0f0f',
  fifth: '#FFFFFF', // For front page - Navigation, Service cards
  sixth: '#0f0f0f',
  light: '#c0c0c0',
  linkcolor: '#0033CC',
  linkvisited: '#663399',
  primaryNew: '#101010',

  darkTheme: {
    primary: `#101010`,
    primaryLight: `#363636`,
    secondary: `#f0f0f0`,
  },
  
  ui: {
    bright: `#e0d6eb`,
    light: `#f5f3f7`,
    whisper: `#fbfafc`
  },
  gray: {
    dark: gray(8, 270),
    copy: gray(12, 270),
    calm: gray(46, 270)
  }
};

let pointer = `a`;
colorStr
  .split(`\n`)
  .reverse()
  .forEach(c => {
    if (c === ``) return;
    colors[pointer].push(c);
    switch (pointer) {
      case `a`:
        pointer = `b`;
        break;
      case `b`:
        pointer = `c`;
        break;
      case `c`:
        pointer = `a`;
        break;
      default:
    }
  });

export default colors
