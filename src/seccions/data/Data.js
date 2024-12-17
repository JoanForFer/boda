import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import 'dayjs/locale/ca'
import Fade from 'react-reveal/Fade'

import useStyles from './DataStyles'

import img from '../../assets/data_1.png'
import separador from '../../assets/separador1_1.png'

dayjs.extend(duration)

export default function Data(){
    const classes = useStyles()
    const [dia, setDia] = useState(null)
    const [hora, setHora] = useState(null)
    const [minut, setMinut] = useState(null)
    const [segon, setSegon] = useState(null)
    const avui = dayjs()

    const diaB = dayjs('2024-09-07 12:30:00')

    useEffect(() => {
        const intervalId = setInterval(() => {
            const diferencia = diaB.diff(avui, 'second')
            setDia(diaB.diff(avui, 'day'))
            setHora(Math.floor(diferencia / 3600) % 24)
            setMinut(Math.floor(diferencia / 60) % 60)
            setSegon(diferencia % 60)
        }, 1000);
    
        return () => clearInterval(intervalId)
      }, [avui])

    return (
        <div className={classes.divGeneral}>
            <Fade>
                <img src={img} className={classes.imatge}/>
            </Fade>
            <Fade>
                <Typography className={classes.titol}>El nostre gran dia</Typography>
                <div className={classes.divContador}>
                    <div className={classes.seccioContador}>
                        <Typography className={classes.numero}>{dia >= 0 ? dia : '-'}</Typography>
                        <Typography className={classes.text}>{dia === 1 ? 'DIA' : 'DIES'}</Typography>
                    </div>
                    <Typography className={classes.punts}>:</Typography>
                    <div  className={classes.seccioContador}>
                        <Typography className={classes.numero}>{dia >= 0 ? hora : '-'}</Typography>
                        <Typography className={classes.text}>{hora === 1 ? 'HORA' : 'HORES'}</Typography>
                    </div>
                    <Typography className={classes.punts}>:</Typography>
                    <div className={classes.seccioContador}>
                        <Typography className={classes.numero}>{dia >= 0 ? minut : '-'}</Typography>
                        <Typography className={classes.text}>{minut === 1 ? 'MINUT' : 'MINUTS'}</Typography>
                    </div>
                    <Typography className={classes.punts}>:</Typography>
                    <div className={classes.lastSeccioContador}>
                        <Typography className={classes.numero}>{dia >= 0 ? segon : '-'}</Typography>
                        <Typography className={classes.text}>{segon === 1 ? 'SEGON' : 'SEGONS'}</Typography>
                    </div>
                </div>
            </Fade>
            <img src={separador} className={classes.imatge}/>
        </div>
        
    )
}