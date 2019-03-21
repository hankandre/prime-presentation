import $ from 'jquery/dist/jquery.slim';

const mono = {
  font: {
    base: ['Courier New', 'Courier', 'monospace'],
    header: ['Jost'],
  },
  color: {
    background: 'black',
    text: 'white',
  },
};
const fantasy = {
  font: {
    base: ['fantasy'],
    header: ['Times New Roman'],
  },
  color: {
    background: 'none',
    text: 'black',
  },
};

export const themes = {
  fantasy,
  mono,
};

export function setTheme(theme) {
  const chosenTheme = themes[theme];
  const root = $(':root');
  Object.keys(chosenTheme).forEach(type => {
    Object.entries(chosenTheme[type]).map(([rule, value]) => {
      root.css(`--${type}-${rule}`, value);
    });
  });
}
