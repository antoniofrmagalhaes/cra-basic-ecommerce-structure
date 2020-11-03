interface Colors {
  primaryColor: string;
  secondaryColor: string;
  dangerColor: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  backgroundColor: string;
  accentColor: string;
  baseColor: string;
  borderColor: string;
  socialMediaIconsColor: string;
  facebookColor: string;
  instagramColor: string;
  twitterColor: string;
  youtubeColor: string;
}

interface Theme {
  colors: Colors;
}

const theme: Theme = {
  colors: {
    primaryColor: '#037FFC',
    secondaryColor: '#41b02e',
    dangerColor: '#ff0000',
    successColor: '#41b02e',
    infoColor: '#037FFC',
    warningColor: '#ffff00',
    primaryTextColor: '#1a1a1a',
    secondaryTextColor: '#f1f1f1',
    backgroundColor: '#ffffff',
    baseColor: '#f1f1f1',
    accentColor: '#f1f1f1',
    borderColor: '#dddddd',
    socialMediaIconsColor: '#444444',
    facebookColor: '#3b5998',
    instagramColor: '#aaaaaa',
    twitterColor: '#1da1f2',
    youtubeColor: '#c4302b',
  },
};

export default theme;
