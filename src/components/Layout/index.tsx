import React from 'react'
import { makeStyles } from '@material-ui/core'
import Head from 'next/head'
import TopBar from './TopBar'
import NavBar from './NavBar'

type ChildrenProps = {
  children: React.ReactNode;
  title: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}))

export default function Layout({ children, title }: ChildrenProps) {

  const classes = useStyles()

  return (

    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="Pablo Lúcio Youtube pablojmde" />
        <meta name="description" content="Youtube Clone" />
      </Head>
      <div className={classes.root}>
        <TopBar/>
        <NavBar/>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}