import React from "react";

function Hobby(props) {

    return (
        <Grid item>
            <Paper
                onClick={props.click}
                variant="outlined"
                style={{
                    padding: 8,
                    marginBottom: 12,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderColor: props.hobby.length > 0 ? "#C62251" : "gray",
                }}
            >
                <p style={{ color: cooking.length > 0 ? "#C62251" : "gray" }}>
               { props.hobby}
                </p>
                {props.hobby.length > 0 ? (
                    <i
                        class="fa-solid fa-circle-check"
                        style={{ color: "#C62251" }}
                    ></i>
                ) : (
                    <i></i>
                )}
            </Paper>
        </Grid>
    );
}

export default Hobby;
