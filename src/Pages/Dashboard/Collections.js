import "./Collections.css";

import React, { useEffect, useState } from "react";

import Box from '@material-ui/core/Box';
import CollectionCard from "./CollectionCard";
import Grid from '@material-ui/core/Grid';
import config from "../../config";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  collectionsContainer: {
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(12),
  },
}));

const Collections = () => {
  const classes = useStyles();
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    alert('获取收集的照片')
    // const res = await fetch(`${config.baseUrl}/collections`);
    // const data = await res.json();
    // // console.log(data);
    // return data;
  };

  useEffect(() => {
    (async () => {
      // const collections = await getCollections();
      const collections = [{
        id: 1,
        type: "U.S. National Parks",
        image: "https://i.pinimg.com/originals/6f/cd/66/6fcd66a405936566e17938daf8c82cb1.jpg"
      }, {
        id: 1,
        type: "States of the U.S.",
        image: "https://i.redd.it/30363cj9nsl11.jpg"
      }]


      setCollections(collections);
    })();
  }, []);

  return (

    <Grid container spacing={4} className={classes.collectionsContainer}>
      {collections.map((collection) => (
        <Grid item xs={4}>
          <CollectionCard className={classes.paper} key={collection.id} collection={collection} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Collections;
