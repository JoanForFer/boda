import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    general: {
        backgroundColor: '#12567A', 
        paddingLeft: '1vh', 
        paddingRight: '1vh',
        paddingBottom: '4vh'
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
}))

export default useStyles