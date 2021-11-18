import { Paper } from "@mui/material"

const Footer = () => {

    return (
        <Paper elevation={5} style={{ 
            margin: 0,
	        padding: 0,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '40px',
            background: '#f1f1f19f'
        }}>
            <div style={{ textAlign: 'center', color: '#8d8d8d9f' }}>
                <p style={{ paddingTop: '10px'}}>
                    Copyright © 2021 Lapel Inc. All Rights Reserved.
                </p>
            </div>
        </Paper>
    )

}

export default Footer