import {createStyles, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: '#F78B11',
      fontSize: '18px',
    },
    'html': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      'height': '100%',
      'width': '100%',
    },
    'body': {
      backgroundColor: '#000000',
      height: '100%',
      width: '100%',
    },
    'a': {
      textDecoration: 'none',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  },
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
