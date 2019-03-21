import $ from 'jquery/dist/jquery.slim';

/**
 *  -color-background: hsl(222, 100%, 3%);
    --color-text: white;
    --color-hover: hsl(100, 100%, 100%, .15);
    --font-header: Jost;
    --font-body: monospace;
    --weight-heavy: 'wght' 800;
    --font-size: 16px;
 */

const mono = {
  font: {
    body: ['Courier New', 'Courier', 'monospace'],
    header: ['Jost'],
    size: '14px',
    heavy: "'wght' 700",
    light: "'wght' 300",
  },
  color: {
    background: 'black',
    text: 'white',
    hover: 'hsla(0, 100%, 100%, .25)',
  },
};
const fantasy = {
  font: {
    body: ['fantasy'],
    header: ['Times New Roman'],
    size: '13px',
    heavy: '700',
    light: '400',
  },
  color: {
    background: 'none',
    text: 'black',
    hover: 'hsla(0, 100%, 0%, .05)',
  },
};

export const themes = {
  mono,
  fantasy,
};

export function setTheme(theme = 'mono') {
  const chosenTheme = themes[theme];
  const root = $(':root');
  Object.keys(chosenTheme).forEach(type => {
    Object.entries(chosenTheme[type]).forEach(([rule, value]) => {
      root.css(`--${type}-${rule}`, value);
    });
  });
}
