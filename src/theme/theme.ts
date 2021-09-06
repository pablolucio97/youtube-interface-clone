import { createTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: 'rgba(244, 244, 255, 255)',
      paper: 'rgba(255, 255, 255, 255)',
    },
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3ea6ff',
    },
    error: {
      main: '#b44300',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
});

export default theme;
