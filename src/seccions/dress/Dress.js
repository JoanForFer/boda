import React from 'react'
import { Typography } from '@material-ui/core'
import Fade from 'react-reveal/Fade'

import useStyles from './DressStyles'

import logo from '../../assets/logo.png'

export default function Dress(){
    const classes = useStyles()

    return(
        <div>
            <Fade>
                <Typography className={classes.titol}>DRESS CODE</Typography>
                <Typography className={classes.subtitol}>Formal</Typography>
                <Typography className={classes.text}>*Color blanc i derivats són exclusius per la núvia</Typography>
            </Fade>
            <Fade>
                <div className={classes.divLogo}>
                    <img src={logo} className={classes.logo}/>
                </div>
            </Fade>
        </div>
    )
}