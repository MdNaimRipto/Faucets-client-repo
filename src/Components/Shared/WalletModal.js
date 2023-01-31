import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f5f7fd',
    width: { xs: '75%', md: '450px' },
    height: { xs: "400px", md: "240px" },
    boxShadow: 24,
    padding: "14px 28px",
    borderRadius: "4px"
};

export default function WalletModal({ open, handleCloseModal }) {


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Typography id="transition-modal-title" variant="h6"
                                sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    fontSize: "1.5rem",
                                    fontFamily: "Varela Round,sans-serif"
                                }}
                            >
                                Connect your wallet
                            </Typography>
                            <button
                                onClick={handleCloseModal}
                                style={{
                                    cursor: "pointer",
                                    fontSize: "25px",
                                    padding: "5px 7px",
                                    background: "#fff",
                                    border: "none",
                                }}
                            >
                                x
                            </button>
                        </Box>
                        <Box sx={{
                            background: "#fff",
                            borderRadius: "3px",
                            lineHeight: "1.4",
                            position: "absolute",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "center",
                            alignItems: "center",
                            width: { xs: "84%", md: "92%" }
                        }}>
                            <Box sx={{
                                background: "#f5f7fd",
                                cursor: "pointer",
                                margin: "10px",
                                padding: "20px",
                                textAlign: "center",
                                width: "50%",
                            }}>
                                <img
                                    style={{
                                        width: "100px",
                                        height: "100px"
                                    }}
                                    src="https://faucets1.netlify.app/static/media/MetaMask_Fox.svg.d9c41a5680a1daaae624.png" alt="" />
                                <Typography variant='h3' sx={{
                                    fontSize: "1.10rem",
                                    color: "#9b1fe9",
                                    fontWeight: "bold",
                                    fontFamily: "Varela Round,sans-serif"
                                }}>
                                    MetaMask
                                </Typography>
                            </Box>
                            <Box sx={{
                                background: "#f5f7fd",
                                cursor: "pointer",
                                margin: "10px",
                                padding: "20px",
                                textAlign: "center",
                                width: "50%",
                            }}>
                                <img
                                    style={{
                                        width: "100px",
                                        height: "100px"
                                    }}
                                    src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg" alt="" />
                                <Typography variant='h3' sx={{
                                    fontSize: "1.10rem",
                                    color: "#9b1fe9",
                                    fontWeight: "bold",
                                    fontFamily: "Varela Round,sans-serif"
                                }}>
                                    WalletConnect
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}