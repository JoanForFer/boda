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
        fontSize: '3vh', 
        textAlign: 'center'
    }, 
    text: {
        fontFamily: 'Domine', 
        fontSize: '1.5vh', 
        textAlign: 'center'
    },
    divLogo: {
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '1vh', 
        marginBottom: '1vh'
    },
    logo: {
        width: '30%',
    }
}))

export default useStyles