import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';

const theme = createTheme({
    palette: {
        background: {
            paper: '#FFF3E0',
        },
        main: {
            secondary: '#4CAF50'
        }
    },
});

function Kudos() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const recipient = new FormData(event.Target);
}

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{bgcolor: 'background.paper', }}>
            <CssBaseline />
                
                 <Box
                    sx={{
                    bgcolor: 'background.paper',
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
                > 
              
                    
              <Avatar sx={{ m: 1, bgcolor: 'main.secondary' }}>
            <CelebrationRoundedIcon/>
          </Avatar>
            <Typography component="h1" variant="h5">
                Create Kudos
              </Typography>
              
        {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
        <FormControl >
        <InputLabel id="recipient-label">Recipient</InputLabel>
        <Select
            labelId="recipient-label"
            id="recipient-label"
            // value={recipient}
            label="Select Recipient"
            // onChange={handleChange}
        >
            <MenuItem value={'noah.cohen@frit.frg.org'}>Cohen, Noah</MenuItem>
            <MenuItem value={'kelly.kinney@mpls.frb.org'}>Kinney, Kelly</MenuItem>
        </Select>
        </FormControl>
                    
                    
                    {/* <TextField
                   margin="normal"
                   required
                   id="email"
                   hiddenLabel
                   name="recipient"
                   autoFocus
                 /> */}
                 <TextField
                   margin="normal"
                   required
                   name="kudos"
                    hiddenLabel
                    multiline
                    rows={3}
                  id="kudos"
                   color = "success"
                 />
                
                    
                    <Grid container>
                        
                        <Grid item xs>
            <Button
              type="submit"
               variant="contained"
              sx={{ mt: 3, mb: 2 }}
                            >Send Kudos</Button>
                            </Grid>
                
                        
                        <Grid item xs>
            <Button
              type="submit"
               variant="contained"
              sx={{ mt: 3, mb: 2 }}
                            >Reset Form</Button>        
                            </Grid>

                </Grid>
                            
              {/* </Box> */}
                </Box> 
                </Container>?
            </ThemeProvider> 
            
    )

}

export default Kudos;