import React from 'react'
import { Typography } from '@material-ui/core'
import Fade from 'react-reveal/Fade'

import useStyles from './DinersStyles'
import separador from '../../assets/separador3_1.png'

export default function Diners() {
    const classes = useStyles()

    return(
        <div>
            <Fade>
                <div style={{paddingLeft: '1vh', paddingRight: '1vh'}}>
                    <Typography className={classes.titol}>SUGGERIMENT DE REGAL</Typography>
                    <Typography className={classes.subtitol}>La vostra presència és el nostre millor regal</Typography>
                    <Typography className={classes.text}>Però si tot i això voleu ajudar-nos a continuar complint els nostres somnis, pot ser en efectiu, bizzum o al següent número de compte:</Typography>
                    <Typography className={classes.numero}>ES2201826128410203892577</Typography>
                </div>
            </Fade>
            <img src={separador} style={{width: '100vw', marginBottom: '-1vh'}}/>
        </div>
    )
    
}