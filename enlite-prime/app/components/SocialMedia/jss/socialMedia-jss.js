import { makeStyles } from 'tss-react/mui';

import {
  deepOrange, deepPurple, pink, green
} from '@mui/material/colors';

const useStyles = makeStyles()((theme, _params, classes) => ({
  mobileStepper: {
    margin: `0 auto ${theme.spacing(3)}`,
    textAlign: 'center',
    borderRadius: '0 0 12px 12px'
  },
  orangeAvatar: {
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    backgroundColor: deepPurple[500],
  },
  pinkAvatar: {
    backgroundColor: pink[500],
  },
  greenAvatar: {
    backgroundColor: green[500],
  },
  divider: {
    margin: `${theme.spacing(1.5)} 0`,
    background: 'none'
  },
  link: {
    color: theme.palette.primary.main
  },
  listPeople: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  },
  sliderWrap: {
    height: 310,
    overflow: 'hidden'
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 18
  },
  profileList: {},
  trendingList: {
    '& li': {
      display: 'block'
    }
  },
  input: {},
  commentText: {
    marginTop: 5
  },
  buttonClose: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  avatarMini: {
    width: 30,
    height: 30,
  },
  avatarComment: {
    marginRight: theme.spacing(3)
  },
  commentAction: {
    background: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100],
    margin: 0,
  },
  commentForm: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      minWidth: 600,
    },
    width: '100%',
    padding: '15px 20px',
    margin: 0,
    [`& .${classes.input}`]: {
      flex: 1,
      margin: '0 10px'
    }
  },
  commentHead: {
    display: 'flex'
  },
  sliderContent: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
