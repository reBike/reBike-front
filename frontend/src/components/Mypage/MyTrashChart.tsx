import * as React from "react";

import { useState } from "react";
import {
    Typography,
    Container,
    Box

} from "@mui/material";
import Chart from "../chart/Chart";
import Date from "../chart/Date";

function MyTrashchart() {
    const [userData, setUserData] = useState<any>([]);

    return (
        <Container
            style={{
                border: "solid",
                borderRadius: 5,
                borderColor: "transparent",
                minWidth: "100%",
                height: "100vh",
            }}>
            <Typography color="black" fontWeight="bold" sx={{ mt: 3, mb: 2, fontSize: "medium" }}>
                내 쓰레기 통계
            </Typography>
            <Container
                style={{
                    borderRadius: 5,
                    backgroundColor: "white",
                    height: "80vh",
                    boxShadow: "1px 3px 3px #B0B09A",
                }}
                sx={{ mt: 3 }}>
                <Container>
                    <Date onClickRetrieve={setUserData} />
                </Container>
                <Container
                    sx={{ width: "100%", height: "80%" }}>
                    <Chart list={userData} />
                </Container>
            </Container>
        </Container>
    );

}

export default MyTrashchart;