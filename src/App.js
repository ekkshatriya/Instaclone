
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Post from './Post';
import { db } from './firebase';
import { useStyles } from 'material-ui/styles'
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

function App() {
    const classes=useStyles();
    const [modalStyle]=useState(getModalStyle);
    const [posts, setPosts]= useState([]);
    const [open, setOpen]=useState(false);

    //useEffect runs a piece of code based on a specific condition
    useEffect(()=>{
        //where the code runs
        db.collection('posts').onSnapshot(snapshot =>
        //every time a new post is added, this code fires
        setPosts(snapshot.docs.map(doc => ({
            id:doc.id,
            post:doc.data()}))));
    },[])

    const signUp=(event)=>{

    }
    
    return ( <>
        <div className = "App" >
        
        <Modal
          
          open={open}
          onClose={()=>setOpen(false)}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <h2>I am a Modal</h2>
          </div>
        </Modal>

            <div className = "app_header" >
        <img className = "app_headerImage"
        src = "instahead.jpg" //instagram header image to be downloaded
        alt = "" / >
            </div>

        <Button onClick={()=>setOpen(true)}>Signup</Button>

        <h1 > HELLO everyone How u doing </h1>  

        {
            posts.map(({id, post})=>(
                <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
            ))
        }
         <Post username="Sankalp Naik" caption=" Creativity" imageUrl="https://miro.medium.com/max/750/1*StRngt_Zmhs9QEeYNG1CcA.jpeg" /> 

        <Post username="The Weekend" caption=" Binding Lights" imageUrl="https://www.billboard.com/wp-content/uploads/media/The-Weeknd-press-by-Duncan-Loudon-2020-billboard-1548.jpg"/ > 

        <Post username="Lana Del Rey" caption=" West Coast" imageUrl="https://img.buzzfeed.com/buzzfeed-static/static/2016-02/29/17/campaign_images/webdr15/86-lana-del-rey-lyrics-for-when-you-need-an-insta-2-7669-1456785741-0_dblbig.jpg"/ > 
        { /* {Header} */ } 

        { /* {Posts} */ } 
        
        { /* {Posts} */ }


        </div>
        </>
    );
}

export default App;