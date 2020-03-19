//➀インポート
import React from "react"
import Test from "./Test"
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//➁コンポーネント

const StyledAppBar = styled(AppBar)`
background: linear-gradient(45deg, blue 30%, #00a81c 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height:60px;
  line-height:60px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin-left:10px;
  margin-top:-15px;
`;


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
            <StyledAppBar position="static" color="primary" >
                <Toolbar>
                    <Test></Test>
                    <Typography variant="h6" className={classes.title}>
                        アプリ名
                    </Typography>
                    <Button color="inherit"><ExitToAppIcon/>ログイン</Button>
                </Toolbar>
            </StyledAppBar>
            
        </div>
        
      
    )


}

//➃エクスポート
export default Header


