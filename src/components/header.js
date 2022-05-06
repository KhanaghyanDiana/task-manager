import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { TemporaryDrawer } from './drawer';
import { handleChangeStyles } from '../home/styleChangeHelper';

export default function ButtonAppBar() {
    return (
        <div sx={{ flexGrow: 1 }} onClick={e => handleChangeStyles(e, null, "orange")}>
            <header position="static" style={{ background: "transparent", boxShadow: 'none' }} >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Task Manager
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <TemporaryDrawer
                            button={<MenuIcon />}
                        />
                    </IconButton>
                </Toolbar>
            </header>


        </div >
    );
}