import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { OptionContext } from '../../Layout/Main';
import { AiFillWarning } from "react-icons/ai"

const TestLinkForm = () => {
    const { options } = useContext(OptionContext)
    return (
        <div>
            <Typography variant='h2' sx={{
                color: "#fff",
                fontSize: "16px",
                backgroundColor: "#9b1fe9",
                padding: "25px 0px",
                fontFamily: "sans-serif",
                fontWeight: "500"
            }}>
                Notice here
            </Typography>
            <div style={{
                textAlign: "start",
                marginTop: "",
                padding: "0px 30px",
                margin: "48px 0px"
            }}>
                <h2 className='testForm-title'>Request testnet LINK</h2>
                <p className='testForm-info'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                <div className='test-form'>
                    <div className='form-warning'>
                        <AiFillWarning style={{
                            fontSize: "20px",
                            color: "rgb(155, 31, 233)"
                        }} />
                        <p>
                            Your wallet is connected to
                            <span className='options'>{options}</span>,
                            so you are requesting
                            <span className='options'>{options}</span> Link/ETH.
                        </p>
                    </div>
                    <form>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default TestLinkForm;