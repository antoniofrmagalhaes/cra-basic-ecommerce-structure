interface Colors {
  primary: string;
  secondary: string;
  primaryText: string;
  secondaryText: string;
  background: string;
  base: string;
  border: string;
  thumb: string;
  track: string;
}

interface Theme {
  colors: Colors;
}

const theme: Theme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#a626aa',
    primaryText: '#e1e1e4',
    secondaryText: '#1a1a1a',
    background: '#f1f1f1',
    base: '#151515',
    border: '#f7c360',
    thumb: '#2d2d2d',
    track: '#1a1a1a',
  },
};

export default theme;
