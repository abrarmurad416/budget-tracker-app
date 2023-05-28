import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    radioGroup: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "-10px",
    },
    button: {
        marginTop: "20px",
        backgroundColor: "#09091a",
        fontFamily: "'Lexend Deca', sans-serif",
        color: "#ffffff",
        border: "none",
        transition: "transform 0.3s ease",
        "&:hover": {
            border: "none",
            transform: "scale(1.02)",
            background:
                "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
        },
    },
}));
