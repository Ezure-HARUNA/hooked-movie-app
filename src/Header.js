//➀インポート
import React from "react"
import Test from "./Test"
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


//➁コンポーネント

const StyledAppBar = styled(AppBar)`
background: linear-gradient(45deg, blue, brown);
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

/*
const StyledLink = styled(Link)`
  border: 1px solid #7ca887;
  border: none;
  box-shadow: 0 0.22em #151c24;
  background: none;
  margin: 1em 0.35em 0 0.35em;
  padding: 0 0.5em 0.2em;
  outline: none;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  color: #7ca887;
  :hover {
    cursor: pointer;
  }
`;
*/


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
                    <Test id={props.id} setId={props.setId}></Test>
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


