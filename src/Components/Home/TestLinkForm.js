import React, { useContext, useState } from 'react';
import { Typography } from '@mui/material';
import { OptionContext } from '../../Layout/Main';
import { AiFillWarning } from "react-icons/ai"
import ReCAPTCHA from 'react-google-recaptcha';

const TestLinkForm = () => {
    const { options } = useContext(OptionContext)
    const [btnDisabled, setBtnDisabled] = useState(false)

    const [ethHistory, setEthHistory] = useState(true);
    const [TestLinkHistory, setTestLinkHistory] = useState(false);

    const handleEthTab = () => {
        setEthHistory(true)
        setTestLinkHistory(false)
    }
    const handleTestTab = () => {
        setTestLinkHistory(true)
        setEthHistory(false)
    }

    let currentActive = "active-tab";

    const handleOnChange = (value) => {
        if (value) {
            setBtnDisabled(true)
        }
    }
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
                <div className='test-form-container'>
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
                    <form className='test-form'>
                        <div className='wallet-address'>
                            <label className='form-label'>Wallet Address</label>
                            <div className='wallet-input'>
                                <input type="text" name="walletAddress" placeholder='Your Wallet Address...' />
                            </div>
                        </div>
                        <div className='request-section'>
                            <label className='form-label'>Request Type</label>
                            <div className='req-fields'>
                                <div className='test-field'>
                                    <input
                                        type="text" name="testLink" placeholder='20 Test Link'
                                    />
                                </div>
                                <div className='ETH-field'>
                                    <input
                                        type="text" name="ETH" placeholder='0.5 ETH'
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_sitekey}
                                    onChange={handleOnChange}
                                />,
                            </div>
                            <div style={{ marginTop: "15px" }}>
                                <button disabled={!btnDisabled} className="req-btn">
                                    Request Link
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='req-history'>
                        <h5>Request History</h5>
                        <div className='req-tabs'>
                            <span
                                onClick={handleEthTab}
                                className={ethHistory ? currentActive : null}>
                                ETH Transaction History
                            </span>
                            <span
                                onClick={handleTestTab}
                                className={TestLinkHistory ? currentActive : null}>
                                TestLink Transaction History
                            </span>
                        </div>
                        <div className='history-table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Time</th>
                                        <th>Amount</th>
                                        <th>Hash</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>12:30 AM</td>
                                        <td>487</td>
                                        <td>4s8er5s5fe57rjmxnfuewrurks</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>12:30 AM</td>
                                        <td>487</td>
                                        <td>4s8er5s5fe57rjmxnfuewrurks</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>12:30 AM</td>
                                        <td>487</td>
                                        <td>4s8er5s5fe57rjmxnfuewrurks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestLinkForm;