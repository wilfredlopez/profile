import Divider from '@material-ui/core/Divider'
// import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import DragHandleIcon from '@material-ui/icons/DragHandle'
import MailIcon from '@material-ui/icons/Mail'
import { Fragment } from 'react'
import clsx from 'clsx'
import NavLink from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
// import { StyledHtmlLink } from '@components/shared'
// import { SECONDARY_COLOR } from '@root/theme/getTheme'
import { NAV_LINKS, SOCIAL_LINKS } from './navlinks'

interface Props { }

const useStyles = makeStyles(() => ({
  list: {
    // width: 250,
    display: 'flex'
  },
  fullList: {
    width: 'auto',
  },
  innerList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  InnerText: {
    fontSize: '12px'
  },
  menuButton: {
    // marginRight: theme.spacing(0.5),
    // marginLeft: theme.spacing(0.5),
    minHeight: 50,
    minWidth: 50,
    zIndex: 1001,
  },
}))


export const StyledNavLinkWhite = styled.a<{ isActive?: boolean }>`
color: ${props => (props.isActive ? '#7bfdff' : 'inherit')};
font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
cursor: pointer;
text-decoration: none;
&:hover {
  color: #aefeff;
}
`

export type Anchor = 'top' | 'left' | 'bottom' | 'right'
interface Props {
  anchor: Anchor
}




export default function SideDrawer({ anchor }: Props) {
  const classes = useStyles()

  const router = useRouter()

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
    >
      <List className={classes.innerList}>
        {NAV_LINKS.map(({ text, href, Icon }, index) => (
          <NavLink key={text + index + "nav_links"} href={href}>
            <StyledNavLinkWhite isActive={href === router.pathname}>
              <ListItem button>
                <ListItemIcon style={{ color: 'inherit' }}>
                  {Icon ? Icon : <DragHandleIcon />}
                </ListItemIcon>
                <ListItemText primary={text} primaryTypographyProps={
                  { className: classes.InnerText }
                } />
              </ListItem>
            </StyledNavLinkWhite>
          </NavLink>
        ))}
      </List>
      <Divider />

      <List className={classes.innerList}>
        {/* <ListItem button={false}>
          <Typography variant='h6'>Social</Typography>
        </ListItem> */}
        {SOCIAL_LINKS.map(({ text, Icon, href }, index) => (
          <StyledNavLinkWhite
            href={href}
            title={text}
            target='_blank'
            rel='noopener noreferrer'
            role='link'
            key={text + index}
          >
            <ListItem button>
              <ListItemIcon style={{ color: 'inherit' }}>
                {Icon ? Icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}
                primaryTypographyProps={
                  { className: classes.InnerText }
                }
              />
            </ListItem>
          </StyledNavLinkWhite>
        ))}
      </List>
    </div>
  )


  return (
    <Fragment key={anchor}>



      {list(anchor)}
    </Fragment>
  )
}
