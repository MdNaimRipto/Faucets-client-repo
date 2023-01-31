import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Button, FormControl, Select } from '@mui/material';
import WalletModal from './WalletModal';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { OptionContext } from '../../Layout/Main';

function ResponsiveAppBar() {
    const [age, setAge] = React.useState('')
    const [selectItems, setSelectItems] = React.useState([])
    const { setOptions } = React.useContext(OptionContext)

    React.useEffect(() => {
        fetch('SelectItem.json')
            .then(res => res.json())
            .then(data => setSelectItems(data))
    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        setOptions(event.target.value)
    };

    return (
        <AppBar
            sx={{
                backgroundColor: "#eee",
                boxShadow: "none",
                borderBottom: "1px solid #eee",
                padding: { xs: "15px 4px", md: "5px 4px" }
            }}
            position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters
                    sx={{
                        padding: "0px",
                        height: "0px"
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Link to="/"
                            style={{
                                fontWeight: 600,
                                fontSize: '25px',
                                color: '#9b1fe9',
                                textDecoration: 'none',
                                fontFamily: 'sans-serif',
                            }}
                        >Faucets</Link>
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <Link to="/"
                            style={{
                                fontWeight: 600,
                                fontSize: '25px',
                                color: '#9b1fe9',
                                textDecoration: 'none',
                                fontFamily: 'sans-serif'
                            }}
                        >Faucets</Link>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: "flex-end",
                            alignItems: "center"
                        }}>

                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                size="small"
                                sx={{
                                    color: "#6d7380",
                                    border: "1px solid #ddd",
                                    borderRadius: "3px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    padding: "1px 0px",
                                    textTransform: "capitalize",
                                    background: "transparent"
                                }}
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>
                                    <span>Select An Option</span>
                                </MenuItem>
                                {
                                    selectItems.map(item => (
                                        <MenuItem key={item.id} value={item.name}>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center"
                                            }}>
                                                <div
                                                    style={{
                                                        width: "16px",
                                                        marginRight: "8px",
                                                        marginBottom: "-2px"
                                                    }}
                                                >
                                                    <img style={{ width: "100%" }} src={item.icon} alt="" />
                                                </div>
                                                <span>{item.name}</span>
                                            </div>
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <Button
                            onClick={handleOpen}
                            sx={{
                                color: "#9b1fe9",
                                border: "2px solid #9b1fe9",
                                borderRadius: "3px",
                                fontSize: "14px",
                                fontWeight: 600,
                                marginTop: "16px",
                                marginLeft: "10px",
                                marginBottom: "16px",
                                textTransform: "capitalize",
                                background: "transparent",
                                display: { xs: "none", md: "flex" }

                            }}
                        >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path><path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"></path></svg>
                            <span style={{
                                marginLeft: "5px"
                            }}>Connect Wallet</span>
                        </Button>
                        <Button
                            onClick={handleOpen}
                            sx={{
                                color: "#9b1fe9",
                                fontSize: "24px",
                                margin: "16px 0px",
                                padding: 0,
                                background: "transparent",
                                display: { xs: "flex", md: "none" },
                                minWidth: "40px"

                            }}
                        >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path><path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"></path></svg>
                        </Button>
                    </Box>

                    <Box>
                        <IconButton
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            sx={{
                                backgroundColor: "#eee",
                                border: "1px solid #eee",
                                borderRadius: "50%",
                                boxShadow: "0 4px 10px -9px #6d7380",
                                justifyContent: "center",
                                padding: "5px",
                                marginLeft: { sx: "0px", md: "16px" },
                            }}
                        >
                            <AccountCircleOutlinedIcon
                                sx={{
                                    fontSize: "30px",
                                    width: "30px",
                                    height: "30px",
                                    color: "rgb(109 115 128)"
                                }}
                            />
                        </IconButton>
                        <Menu
                            sx={{
                                top: "65px",
                                right: "15px",
                                maxWidth: "none",
                                width: "240px"
                            }}
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem
                                sx={{
                                    width: "160px",
                                    color: "#6d7380",
                                    display: "block",
                                    fontSize: "15px!important",
                                    padding: "5px 10px",
                                    fontFamily: "Varela Round,sans-serif",
                                    fontWeight: "semibold"
                                }}
                            >
                                <Link to="">
                                    Login
                                </Link>
                            </MenuItem>
                            <MenuItem
                                sx={{
                                    width: "160px",
                                    color: "#6d7380",
                                    display: "block",
                                    fontSize: "15px!important",
                                    padding: "5px 10px",
                                    fontFamily: "Varela Round,sans-serif",
                                    fontWeight: "semibold"
                                }}
                            >Register</MenuItem>
                            <MenuItem
                                sx={{
                                    width: "160px",
                                    color: "#6d7380",
                                    display: "block",
                                    fontSize: "15px!important",
                                    padding: "5px 10px",
                                    fontFamily: "Varela Round,sans-serif",
                                    fontWeight: "semibold"
                                }}
                                onClick={handleClose}>Faq</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
                <WalletModal open={open} handleCloseModal={handleCloseModal} />
            </Container>
        </AppBar >
    );
}
export default ResponsiveAppBar;