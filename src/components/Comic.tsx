import { SyntheticEvent, useEffect, useState } from 'react';
import { Comic } from '../models/comic';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function ComicSearch() {
    const [comicData, setComicData] = useState<Comic[]>([])
    const [search, setSearch] = useState<string>("")

    useEffect(() => {
        fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=a849cdb769897453a29feaac677d4a13')
        .then(res => res.json())
        .then(payload => setComicData(payload.data as Comic[]))

    }, [])

    console.log(comicData)
    console.log('SEARCH', search)

    const theme = createTheme();

    if(comicData.length == 0) {
        return (
            <div>
                <h1> One moment...</h1>
            </div>
        )
    }     else {
        return (
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Character layout
                            </Typography>
        
                            <input
                                type="search"
                                onChange={(event: SyntheticEvent) => {
                                    setSearch((event.target as HTMLInputElement).value)
                                }}
                                placeholder="Filter"
                            />
                        </Container>
                    </Box>
                    <Container sx={{py: 2}} maxWidth="lg">
                        <Grid container spacing={4}>
                            {comicData.filter((val) => {
                                if (search === "") {
                                    return val;
                                } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                                    return val;
                                }
                            }).map((com, idx) => (
                                <Grid item key={idx} xs={12} sm={6} md={3}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                pt: '10.25%',
                                            }}
                                            image={com.images.small}
                                            alt={com.name}
                                        />
                                        <CardContent sx={{ flexGrow: 1}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {com.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Add</Button>
                                        </CardActions>    
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        )
    }
}






export default ComicSearch;