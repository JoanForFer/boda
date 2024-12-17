import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    divGeneral: {
        backgroundColor: '#F7F0DD'
    },
    quadrat: {
        width: '40vh', 
        height: '40vh', 
        backgroundColor: '#fff', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: '3vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        borderRadius: 25
    },
    crono: {
        width: '100%',
    },
    logo: {
        width: '30%'
    },
    titol: {
        fontFamily: 'Domine', 
        textAlign: 'center', 
        marginTop: '1.5vh', 
        fontSize: '4vh'
    },
    lloc: {
        fontFamily: 'Allura', 
        textAlign: 'center',
         marginTop: '1.5vh', 
         fontSize: '4vh'
    },
    ubi: {
        fontFamily: 'Domine', 
        textAlign: 'center', 
        marginTop: '1.5vh', 
        fontSize: '1.5vh'
    },
    separator: {
        width: '100vw', 
        marginBottom: '-1vh'
    }
}))

export default useStyles