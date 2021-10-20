import React, { useState } from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper, Card, CardHeader } from '@material-ui/core';



function App() {

  const [count, setCount] = useState(0);

  const colors = ["White", "Tomato", "Orange", "LemonChiffon", "MediumSeaGreen", "DodgerBlue", "SlateBlue", "Violet", "Black"]
  return (
    <Container maxWidth="sm" className="App" style={{backgroundColor: colors[Math.abs(count) % colors.length],}}>
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Increment Progress
        </Typography>
        <Card style={{backgroundColor: colors[Math.abs(count) % colors.length],}}>
          <CardHeader title={count} style={(8 === count % (colors.length)) ? {color: 'white'} : {color: 'black'}} />
        </Card>
        <Button variant="contained" color="secondary" onClick={() => (setCount(count - 1))}>
          Minus
        </Button>
        <Button variant="contained" color="primary" onClick={() => (setCount(count + 1))}>
          Plus
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </Paper>
    </Container>
  );
}

export default App;