import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#C4C2C2',
        },
    },
    fontsTextField: {
        fontFamily: 'Domine', 
        '& .MuiSelect-root': {
          fontSize: '2vh', 
        }
    },
    selectBorder: {
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
        },
    },
}))

export default useStyles