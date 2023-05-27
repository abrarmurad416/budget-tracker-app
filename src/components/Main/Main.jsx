import React, { useContext } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Divider,
} from "@material-ui/core";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../context/context";
import InfoCard from "../InfoCard";

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    title="Expenses Tracker"
                    subheader="Powered by Speechly"
                    titleTypographyProps={{
                        className: classes.font,
                        style: { fontFamily: "'Lexend Deca', sans-serif" },
                    }}
                />
                <CardContent>
                    <Typography
                        align="center"
                        variant="h5"
                        className={classes.font}
                    >
                        Total Balance ${balance}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{
                            lineHeight: "1.5em",
                            marginTop: "20px",
                            color: "#999999",
                        }}
                    >
                        <InfoCard />
                    </Typography>
                    <Divider  className={classes.divider}/>
                    <Form />
                </CardContent>
                <CardContent className={classes.CardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br />
            <br />
        </div>
    );
};

export default Main;
