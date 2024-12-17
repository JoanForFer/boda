import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    titol: {
        fontFamily: 'Domine', 
        fontSize: '3.5vh', 
        textAlign: 'center'
    },
    subtitol: {
        fontFamily: 'Allura', 
        fontSize: '2.75vh', 
        textAlign: 'center', 
        marginTop: '0vh'
    },
    text: {
        fontFamily: 'Domine', 
        fontSize: '2vh', 
        textAlign: 'center'
    },
    numero: {
        fontFamily: 'Domine', 
        fontSize: '2vh', 
        textAlign: 'center', 
        marginTop: '2vh', 
        backgroundColor: '#DEB969', 
        width: '80%', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: '3vh', 
        borderRadius: 5, 
        color: '#fff'
    }
}))

export default useStyles