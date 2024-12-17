import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    divGeneral: {
        backgroundColor: '#12567A'
    },
    imatge: {
        width:'100vw',
        marginBottom: '-1vh'
    },
    titol:{
        fontFamily: 'Allura', 
        textAlign: 'center', 
        fontSize: '4vh', 
        marginBottom: '2vh',
        color: '#DEB969'
    },
    divContador: {
        display:'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: '5vh',
    },
    seccioContador: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: '5vw'
    },
    lastSeccioContador: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    punts: {
        fontFamily: 'Domine', 
        fontSize: '3vh', 
        marginTop: '-3vh', 
        marginRight: '5vw',
        color: '#DEB969',
    },
    numero: {
        fontFamily: 'Domine', 
        fontSize: '3vh',
        color: '#DEB969',
    },
    text: {
        fontFamily: 'Domine',
        fontSize: '1.8vh',
        color: '#DEB969',
    }
}))

export default useStyles