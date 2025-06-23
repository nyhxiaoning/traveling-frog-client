import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom'
import config from '../../config'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import UpdateIcon from '@material-ui/icons/Update';
import { DetailsViewsContext } from '../../context/DetailsViewsContext'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        //   maxWidth: 360,
        overflow: "auto",
        maxHeight: '93vh',
        //   height: 400, 
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        backgroundColor: "#00b0ff",
    },
    beenhereicon: {
        color: 'green'
    }
}));

const ListItems = () => {
    const classes = useStyles();
    const locations = useLocation();
    const typeid = locations.state?.id ? 1 : 1;
    // const [pointsofinterest, setPointsofinterest] = useState([])
    const { pointsofinterest, setPointsofinterest } = useContext(DetailsViewsContext)

    const getPointsofinterest = async () => {
        localStorage.setItem('data', JSON.stringify({
            access_token: "123", user: {
                email: "154@qq.com"
            }
        }))
        const email = JSON.parse(localStorage.getItem("data")).user.email;
        const res = await fetch(`${config.baseUrl}/pointsofinterest/${typeid}/${email}`);
        const data = await res.json();
        // console.log(data)
        return data
    }

    useEffect(() => {
        (async () => {
            // const data = await getPointsofinterest()
            // console.log(data)

            let collection1 = [{
                title: "Yosemite",
                state: 'CA',
                lat: "37.9083432",
                lng: "-119.539726",
                type_id: 1
            }]

            setPointsofinterest(collection1)
        })();
    }, [])

    useEffect(() => {
    }, [setPointsofinterest, pointsofinterest])

    return (
        <List dense className={classes.root} >
            {pointsofinterest.map((point) => {
                const labelId = `checkbox-list-secondary-label-${point.id}`;
                return (
                    <>
                        <ListItem key={point.id} >
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}> {point.state}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={point.title} />
                            {point.visited ? <BeenhereIcon className={classes.beenhereicon} /> : <UpdateIcon />}
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>
                );
            })}
        </List>
    )
}

export default ListItems;
//  <ListCard key={point.id} point={point}/>