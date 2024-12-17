import React, {useState, useEffect} from 'react'
import { Typography } from '@material-ui/core'
import Button from '@mui/material/Button'
import Fade from 'react-reveal/Fade'
import {firebaseApp} from '../../utils/firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import useStyles from './MusicaStyles'

import logo from '../../assets/logo.png'

const db = firebase.firestore(firebaseApp)

export default function Musica() {
    const classes = useStyles()
    const [link, setLink] = useState("")

    useEffect(() => {
        let link = ""
        db.collection("musica")
            .get()
            .then((response) => {
                response.forEach((doc) => {
                    const spotify = doc.data()
                    spotify.id = doc.id
                    link = spotify.link
                })
                setLink(link)
            })
    }, [])

    const afegirMusica = () => {
        window.open(link, '_blank')
    }

    return(
        <div className={classes.general}>
            <Fade>
                <Typography className={classes.titol}>LLISTA SPOTIFY</Typography>
                <Typography className={classes.subtitol}>Ajudan's amb la música!</Typography>
                <Typography className={classes.text}>Uneix-te a la llista col·laborativa i afegeix la cançó que, segons tú, no pot faltar aquell dia</Typography>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button 
                            variant='contained' 
                            style={{fontFamily: 'Domine', fontSize: '2vh', marginTop: '1.5vh', width: '90%', backgroundColor: '#DEB969'}} 
                            onClick={afegirMusica}
                        >AFEGIR CANÇÓ</Button>
                </div>
            </Fade>
        </div>
    )
}