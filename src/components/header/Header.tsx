import {AppBar, Box, Button, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div style={{marginBottom:'30px'}}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <NavLink to={'/'}>
                            <Button
                                style={{color: 'white'}}
                                size="large"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                Все котики
                            </Button>
                        </NavLink>
                        <NavLink to={'/fav'}>
                            <Button
                                style={{color: 'white'}}
                                size="large"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                Любимые котики
                            </Button>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;