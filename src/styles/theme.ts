interface Colors {
  primary: string;
  secondary: string;
  primaryText: string;
  secondaryText: string;
  background: string;
  accentColor: string;
}

interface Theme {
  colors: Colors;
}

const theme: Theme = {
  colors: {
    primary: '#037FFC',
    secondary: '#41b02e',
    primaryText: '#1a1a1a',
    secondaryText: '#f1f1f1',
    background: '#ffffff',
    accentColor: '#eaeaea',
  },
};

export default theme;
