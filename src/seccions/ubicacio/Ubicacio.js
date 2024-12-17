import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@mui/material/Button'
import Fade from 'react-reveal/Fade'

import logo from '../../assets/logo.png'
import crono from '../../assets/crono.png'
import separador from '../../assets/separador2_1.png'
import useStyles from './UbicacioStyles'

export default function Ubicacio() {
    const classes = useStyles()
    const obrirUbicacio = () => {
        window.open('https://www.google.com/maps/place/Masia+La+Florida/@41.1344236,1.1819497,17z/data=!3m1!4b1!4m6!3m5!1s0x12a157a2628b8dad:0x7ae90e7a2ab13626!8m2!3d41.1344236!4d1.1819497!16s%2Fg%2F11bwfqr1wr?entry=ttu', '_blank')
    }

    return(
        <div className={classes.divGeneral}>
            <Fade>
                <div className={classes.quadrat}>
                    <img src={logo} className={classes.logo}/>
                    <Typography className={classes.titol}>CERIMÒNIA</Typography>
                    <Typography className={classes.lloc}>Masia La Florida</Typography>
                    <Typography className={classes.ubi}>Partida de Collblanc, 12, Reus, Tarragona</Typography>
                    <Button 
                        variant='contained' 
                        style={{fontFamily: 'Domine', fontSize: '2vh', marginTop: '1.5vh', width: '90%', backgroundColor: '#DEB969'}} 
                        onClick={obrirUbicacio}
                    >VEURE UBICACIÓ</Button>
                </div>
            </Fade>
            <Fade>
                <img src={crono} className={classes.crono}/>
            </Fade>
            <img src={separador} className={classes.separator}/>
        </div>
    )
}