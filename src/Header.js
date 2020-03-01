//➀インポート
import React from "react"
import Test from "./Test"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//➁コンポーネント


const Header =(props) =>{
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));
   
     const classes = useStyles();
      
      
   

    //➂レンダリング
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary" >
                <Toolbar>
                    <Test></Test>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
                        {/* <MenuIcon /> */}
                    {/* </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        アプリ名
                    </Typography>
                    <Button color="inherit"><ExitToAppIcon/>ログイン</Button>
                </Toolbar>
            </AppBar>
            
        </div>
        
      
    )


}

//➃エクスポート
export default Header


