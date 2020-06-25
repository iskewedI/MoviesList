import React, { useState } from 'react';

import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import { MovieIcon } from '../../icons';
import styles from './style';

export default ({ history }) => {

	const [searchText, setSearchText] = useState('');
	const classes = styles();

	const handleTextChange = event => {
		setSearchText(event.target.value)
	}

	const handleClean = event => {
		setSearchText("")
	}
	const handleSearch = event => {
		history.push(`/results?movieName=${searchText}`);
	}
	return(
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>Bienvenido!</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon}/>
					</Grid>
				</Grid>
				<TextField 
					value={searchText}
					placeholder="Buscar..."
					onChange={handleTextChange}
					className={classes.textFieldSearch}>
				</TextField>
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" onClick={handleClean}>Limpiar</Button>
					<Button variant="contained" color="primary" onClick={handleSearch} className={classes.searchButton}>Buscar</Button>
				</Grid>
			</Card>
		</Container>
	)
}