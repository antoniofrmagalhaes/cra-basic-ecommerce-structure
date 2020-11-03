interface Colors {
  primary: string;
  secondary: string;
  danger: string;
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
    danger: '#d63a3a',
    primaryText: '#1a1a1a',
    secondaryText: '#f1f1f1',
    background: '#ffffff',
    accentColor: '#eaeaea',
  },
};

export default theme;
