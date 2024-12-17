import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@mui/material/Button'
import Fade from 'react-reveal/Fade'

import useStyles from './FotosStyles'
import separador from '../../assets/separador1_1.png'

export default function Fotos() {
    const classes = useStyles()
    const afegirMusica = () => {
        window.open('https://drive.google.com/drive/folders/14qhMjtp8Xg9L-RFlHe3d7osbISl_mVSq?usp=drive_link', '_blank')
    }

    return(
        <div>
            <div className={classes.divGeneral}>
                <Fade>
                    <Typography className={classes.titol}>ÀLBUM DE RECORDS</Typography>
                    <Typography className={classes.subtitol}>Converteix-te en el nostre millor fotògraf!</Typography>
                    <Typography className={classes.text}>Ajuda'ns a guardar els millors moments del nostre dia</Typography>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button 
                                variant='contained' 
                                style={{fontFamily: 'Domine', fontSize: '2vh', marginTop: '1.5vh', width: '90%', backgroundColor: '#DEB969'}} 
                                onClick={afegirMusica}
                            >AFEGEIX FOTO</Button>
                    </div>
                </Fade>
            </div>
            <img src={separador} className={classes.imatge}/>
        </div>
    )
}