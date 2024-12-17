import React from 'react'
import { Typography } from '@material-ui/core'
import Fade from 'react-reveal/Fade'

import useStyles from './PortadaStyles'

import img from '../../assets/portada.png'
import foto from '../../assets/foto1_1.png'

export default function Portada() {
    const classes = useStyles()

    return (
        <div style={{backgroundColor: '#F7F0DD'}}>
            <div style={{height: '100vh'}}>
                <img src={img} style={{width:'100vw'}}/>
            </div>
            <Fade>
                <Typography style={{fontFamily: 'Domine', textAlign: 'center', fontSize: '5vh', marginBottom: '5%'}}>ENS CASEM!</Typography>
                <Typography style={{fontFamily: 'Domine', textAlign: 'center', fontSize: '2vh'}}>I volem celebrar aquesta gran festa amb</Typography>
                <Typography style={{fontFamily: 'Allura', textAlign: 'center', fontSize: '3.5vh', marginBottom: '10%'}}>tots vosaltres</Typography>
            </Fade>
            <img src={foto} style={{width: '100vw', marginBottom: -10}} />
        </div>
    )
}