import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    radioGroup: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "-10px",
    },
    button: {
        marginTop: "20px",
        backgroundColor: "#fbb034",
        backgroundImage: "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)",
        color: "white",
        border: "none",
        transition: "transform 0.3s ease",
        "&:hover": {
            border: "none",
            transform: "scale(1.02)",
        },
    },
}));
