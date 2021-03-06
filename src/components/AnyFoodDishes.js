// existen 8 hooks, los mas utilizados: useState, useEffect, useContext, useRef, useMemo
// createStructutedSelector y memorazacion reemplazas useMemo
// para optimizar rutas: lazy loading and suspense
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AutoComplete from '@material-ui/lab/AutoComplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { anyFoodDishes } from './../constants';

const AnyFoodDishes = ({}) => {
  const [query, setQuery] = useState();
  const getFoods = ({}) => {
    const title = document
      .querySelector('#AnyFoodDishes')
      .value.toLoweCase()
      .trim();

    if (query !== title) {
      setQuery(title);
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <Paper className="paper">
        <AutoComplete
          id="AnyFoodDishes"
          freeSolo
          options={anyFoodDishes.map((foodDish) => foodDish.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Food"
              margin="normal"
              variant="outlined"
            />
          )}
        />
        <IconButton onClick={() => getFoods()}>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Paper>
    </Grid>
  );
};

AnyFoodDishes.displayName = 'AnyFoodDishes';

export default AnyFoodDishes;
