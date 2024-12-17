import React, {useState, useEffect} from 'react'
import { Typography, TextField } from '@material-ui/core'
import { MenuItem } from '@mui/material'
import Button from '@mui/material/Button'
import {firebaseApp} from '../../utils/firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {
    IconArrowLeft
} from '@tabler/icons-react'
import { TailSpin } from 'react-loader-spinner'
import Fade from 'react-reveal/Fade'

import useStyles from './AsistenciaStyle'

import foto from '../../assets/foto2_1.png'

const db = firebase.firestore(firebaseApp)

export default function Asistencia() {
    const classes = useStyles()
    const [convidats, setConvidats] = useState([])
    const [nom, setNom] = useState("")
    const [id, setId] = useState("")
    const [missatge, setMissatge] = useState("")
    const [buscat, setBuscat] = useState(false)
    const [buscats, setBuscats] = useState([]) 
    const [unitat, setUnitat] = useState([])
    const [enviat, setEnviat] = useState(false)

    const respostes = [
        {
            value: true,
            label: 'Si'
        },
        {
            value: false,
            label: 'No'
        }
    ]

    useEffect(() => {
        let conv = []
        db.collection("boda")
            .get()
            .then((response) => {
                response.forEach((doc) => {
                    const convidat = doc.data()
                    convidat.id = doc.id
                    conv.push(convidat)
                })
                setConvidats(conv)
            })
    },[])

    const buscarNom = () => {
        if(nom !== "") {
            const treureAccents = (nomI) => {
                return nomI.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            }
    
            const nomMod = treureAccents(nom.toLowerCase())
    
            const convFilt = convidats.filter((conv) => {
                const nomI = treureAccents(conv.id.toLowerCase())
                return nomI.includes(nomMod)
            })
    
            setBuscats(convFilt)
            setBuscat(true)
        }
    }

    const comprovaNom = (nomC) => {
        const treureAccents = (nomI) => {
            return nomI.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        }

        const nomMod = treureAccents(nomC.toLowerCase())
        const idMod = treureAccents(id.toLowerCase())

        if(nomMod === idMod) return true
        else return false
    }

    const creaUnitat = (idC, ufamiliar) => {
        const promises = []
        promises.push(afegeixConvUnit(idC))
       
        if(ufamiliar.length > 0) {
            ufamiliar.forEach((familiar) => {
                promises.push(afegeixConvUnit(familiar))
            })
        }

        Promise.all(promises).then((results) => {
            setUnitat(results)
        })
    }

    const afegeixConvUnit = (nomC) => {
        return new Promise((resolve) => {
            db.collection("boda")
                .doc(nomC)
                .get()
                .then((doc) => {
                    const convidat = doc.data()
                    convidat.id = doc.id
                    
                    resolve(convidat)
                })
        })
    }

    const enviar = () => {
        unitat.map((convidat) => {
            db.collection("boda")
                .doc(convidat.id)
                .update({
                    alergies: convidat.alergies,
                    asistencia: convidat.asistencia,
                    missatge: missatge,
                    veg: convidat.veg
                })
        })

        setEnviat(true)
    }

    return(
        <div>
            <div style={{backgroundColor: '#F7F0DD', paddingLeft: '1vh', paddingRight: '1vh', paddingBottom: '2.5vh'}}>
                <Fade>
                    <Typography style={{fontFamily:'Domine', fontSize: '3vh', textAlign: 'center', marginBottom: '1.5vh'}}>CONFIRMA L'ASSISTÈNCIA</Typography>
                </Fade>
                {!enviat ?
                    id === "" ?
                        !buscat ?
                            <Fade>
                                <div>
                                    <Typography style={{fontFamily: 'Domine', fontSize: '2.5vh', textAlign: 'center'}}>Busca el teu nom</Typography>
                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                        <TextField
                                            value={nom}
                                            onChange={(e)=>setNom(e.target.value)}
                                            variant='outlined'
                                            style={{width: '80%', backgroundColor: '#edebea'}}
                                            inputProps={{style: {fontFamily: 'Domine', fontSize: '2vh'}}}
                                            classes={{ root: classes.root }}
                                        />
                                        <Button 
                                            variant='contained' 
                                            onClick={buscarNom} 
                                            style={{ width: '80%', marginTop: '1.5vh', marginBottom: '1.5vh', fontFamily: 'Domine', fontSize: '2vh', color: '#fff', backgroundColor: '#DEB969' }}
                                        >
                                            Buscar
                                        </Button>
                                    </div>
                                </div>
                            </Fade>
                            :
                            buscats.length > 0 ?
                                <Fade>
                                    <div>
                                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5vh'}}>
                                            <IconArrowLeft 
                                                onClick={() => {
                                                    setBuscat(false)
                                                    setNom("")
                                                }}
                                            />
                                            <Typography style={{flexGrow: 1, fontFamily: 'Domine', fontSize: '2.5vh', textAlign: 'center'}}>Selecciona el teu nom</Typography>
                                        </div>
                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            {buscats.map((conv) => (
                                                <Typography 
                                                    style={{fontFamily:'Domine', fontSize: '2vh', textAlign: 'center', marginBottom: '1vh'}}
                                                    onClick={()=>{
                                                        setId(conv.id)
                                                        creaUnitat(conv.id, conv.ufamiliar)
                                                    }}
                                                >
                                                    {conv.nom} {conv.cognom}
                                                </Typography>
                                            ))}

                                        </div>
                                    </div>
                                </Fade>
                                :
                                <Fade>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <IconArrowLeft 
                                            onClick={() => {
                                                setBuscat(false)
                                                setNom("")
                                            }}
                                        />
                                        <Typography style={{flexGrow: 1, textAlign: 'center'}}>No s'ha trobat cap convidat amb aquest nom... 😢</Typography>
                                    </div>
                                </Fade>
                        :
                        unitat.length > 0 ?
                            <div>
                                <Fade>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <IconArrowLeft 
                                            onClick={() => {
                                                setId("")
                                            }}
                                        />
                                    </div>
                                </Fade>
                                {comprovaNom(unitat[0].nom+' '+unitat[0].cognom) ?
                                    <Fade>
                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            {unitat.map((conv) => (
                                                <div>
                                                    <Typography style={{fontFamily: 'Domine', fontSize: '2.25vh', fontWeight:'bold', marginBottom: '1vh'}}>{conv.nom} {conv.cognom}</Typography>
                                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                        <Typography style={{fontFamily: 'Domine', fontSize: '2vh'}}>Assistiràs?</Typography>
                                                        <TextField
                                                            select
                                                            variant='outlined'
                                                            size='small'
                                                            defaultValue={conv.asistencia}
                                                            onChange={(e)=>conv.asistencia = e.target.value}
                                                            style={{marginLeft: '2vh'}}
                                                            InputProps={{ classes: { root: classes.fontsTextField } }}
                                                            classes={{ root: classes.selectBorder }}
                                                        >
                                                            {respostes.map((res) => (
                                                                <MenuItem key={res.value} value={res.value} style={{fontSize: '2vh', fontFamily: 'Domine'}}> 
                                                                    {res.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </div>
                                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '0.5vh'}}>
                                                        <Typography style={{fontFamily: 'Domine', fontSize: '2vh'}}>Ets vegà/vegetarià?</Typography>
                                                        <TextField
                                                            select
                                                            variant='outlined'
                                                            size='small'
                                                            defaultValue={conv.veg}
                                                            onChange={(e)=>conv.vega = e.target.value}
                                                            style={{marginLeft: '2vh'}}
                                                            InputProps={{ classes: { root: classes.fontsTextField } }}
                                                            classes={{ root: classes.selectBorder }}
                                                        >
                                                            {respostes.map((res) => (
                                                                <MenuItem key={res.value} value={res.value} style={{fontSize: '2vh', fontFamily: 'Domine'}}> 
                                                                    {res.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </div>
                                                    <Typography style={{fontFamily: 'Domine', fontSize: '2vh'}}>Indica'ns si tens alguna alèrgia!</Typography>
                                                    <TextField
                                                        multiline
                                                        defaultValue={conv.alergies}
                                                        minRows={2}
                                                        onChange={(e)=>conv.alergies = e.target.value}
                                                        variant='outlined'
                                                        style={{width: '100%', marginBottom: '3vh'}}
                                                        inputProps={{style: {fontFamily: 'Domine', fontSize: '2vh'}}}
                                                        classes={{ root: classes.root }}
                                                    />
                                                </div>
                                            ))}
                                            <Typography style={{fontFamily: 'Domine', fontSize: '2vh'}}>Si ens vols dir alguna cosa, aquest és el teu espai</Typography>
                                            <TextField
                                                multiline
                                                minRows={5}
                                                onChange={(e)=>setMissatge(e.target.value)}
                                                variant='outlined'
                                                style={{width: '100%', marginBottom: '3vh'}}
                                                inputProps={{style: {fontFamily: 'Domine', fontSize: '2vh'}}}
                                                classes={{ root: classes.root }}
                                            />
                                            <Button 
                                                onClick={enviar}
                                                variant='contained'
                                                style={{ width: '80%', marginTop: '1.5vh', marginBottom: '1.5vh', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Domine', fontSize: '2vh', color: '#fff', backgroundColor: '#EB9D6C' }}
                                            >
                                                Enviar
                                            </Button>
                                        </div>
                                    </Fade>
                                    :
                                    <TailSpin
                                        height="2vh"
                                        width="2vh"
                                        color="#84C7C2"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                }
                            </div>
                            :
                            <TailSpin
                                height="2vh"
                                width="2vh"
                                color="#84C7C2"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                    :
                    <Fade>
                        <Typography style={{fontFamily: 'Domine', fontSize: '2.5vh', textAlign: 'center', marginTop: '2vh'}}>Has confirmat la teva asistència. Moltes gràcies!</Typography>
                    </Fade>
                }
            </div>
            <img src={foto} style={{width: '100vw', marginBottom: '-1.5vh'}}/>
        </div>
    )
}