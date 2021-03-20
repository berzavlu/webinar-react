import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) =>  ({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function App() {
  const [number, setNumber] = useState(0)
  const [pokemones, setPokemones] = useState([])

  const classes = useStyles()

  async function getNoticias() {
    try {
      const res = await fetch('https://randomuser.me/api/?results=20')
      const data = await res.json()
      console.log(data.results)
      setPokemones(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNoticias()
  }, [])

  function onUpdateCounter() {
    const newNumber = number + 1
    setNumber(newNumber)
  }

  const onOpenProfile = () => {
    const link = 'https://facebook.com'
    window.open(link)
  }

  return (
    <div>
      <div>
        contador: {number}
      </div>
      <button onClick={onUpdateCounter}>Incrementar</button>
      <div>
        <center>
          <h2>Clientes 😁</h2>
        </center>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {pokemones.map((pokemon) => (
            <div style={{ width: '200px', margin: '25px' }}>
              <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Nombre:
                </Typography>
                <Typography variant="h5" component="h2">
                  {pokemon.name.first} {pokemon.name.last}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  edad: {pokemon.dob.age}
                </Typography>
                <Avatar src={pokemon.picture.large} className={classes.large} />
              </CardContent>
              <CardActions>
                <Button size="small" onClick={onOpenProfile}>Ver perfil</Button>
              </CardActions>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
