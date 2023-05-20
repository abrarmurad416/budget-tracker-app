import React from "react";
import {
    List as MUIList,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    ListItemSecondaryAction,
    IconButton,
    Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";

const List = () => {
    const classes = useStyles();
    const transactions = [];

    return (
        <div>
            <MUIList dense={false} className={classes.list}>
                {transactions.map((transaction) => (
                    <Slide
                        direction="down"
                        in
                        mountOnEnter
                        unmountOnEnter
                        key={transaction.id}
                    ></Slide>
                ))}
            </MUIList>
        </div>
    );
};

export default List;
