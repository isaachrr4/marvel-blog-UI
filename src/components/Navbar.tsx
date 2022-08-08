import { AppBar, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user";

interface INavbarProps {
    currentUser: User | undefined,
    setCurrentUser: (nextUser: User | undefined) => void 
}

function Navbar(props: INavbarProps) {

    const navigate = useNavigate();

    const logoutText = "Logout";

    function logout() {
        props.setCurrentUser(undefined);
        navigate("/");
    }

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography variant="h5" color="inherit">
                    <List component="nav">
                        <ListItem>
                            <Typography variant="h5" color="inherit">MarvelFinder</Typography>
                            {
                                props.currentUser
                                ?
                                <>
                                    <ListItemText inset>
                                        <Typography variant="h6" color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Typography>
                                    </ListItemText>
                                    <ListItemText inset>
                                        <Typography variant="h6" color="inherit" onClick={logout}>{logoutText}</Typography>
                                    </ListItemText>
                                    { 
                                    props.currentUser.userAuthRole === 1
                                    ?
                                    <ListItemText inset>
                                        <Typography variant="h6" color="inherit" onClick={() => {navigate("/search")}}>Search</Typography>
                                    </ListItemText>
                                    :
                                    <>
                                    </>
                                    }
                                    <ListItemText inset>
                                        <Typography variant="h6" color="inherit">
                                            {props.currentUser.username}
                                        </Typography>
                                    </ListItemText>
                                </>
                                :
                                <>
                                    <ListItemText inset>
                                        <Typography variant="h6" color="inherit" onClick={() => navigate('/')}>Login</Typography>
                                    </ListItemText>
                                    <ListItemText inset>
                                        <Typography variant="h6" color="inherit">
                                            <Link to="/register">Register</Link>
                                        </Typography>
                                    </ListItemText>
                                </>
                            }
                        </ListItem>
                    </List>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;