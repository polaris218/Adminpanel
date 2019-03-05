const muiStyles = theme => ({
  paper: {
    width: '25%',
    margin: 'auto',
    marginTop: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 4,
  },
  subtitle: {
    marginTop: theme.spacing.unit * 3,
  },
  formgroup: {
    width: '70%',
    margin: 'auto',
  },
  submit: {
    marginBottom: theme.spacing.unit * 4,
  },
  avatar: {
    margin: 'auto',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing.unit,
  },
});

export default muiStyles;