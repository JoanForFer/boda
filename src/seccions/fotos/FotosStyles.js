import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    divGeneral: {
        backgroundColor: '#12567A', 
        paddingLeft: '1vh', 
        paddingRight: '1vh', 
        marginTop: '-1vh', 
        marginBottom: '-1vh', 
        paddingBottom: '3vh'
    },
    titol: {
        fontFamily: 'Domine', 
        fontSize: '3.5vh', 
        textAlign: 'center',
        color: '#DEB969',
    },
    subtitol: {
        fontFamily: 'Allura', 
        fontSize: '2.75vh', 
        textAlign: 'center',
        color: '#DEB969',
    },
    text: {
        fontFamily: 'Domine', 
        fontSize: '2vh', 
        textAlign: 'center',
        color: '#DEB969',
    },
    imatge: {
        width: '100vw', 
        marginBottom: '-1vh'
    }
}))

export default useStyles