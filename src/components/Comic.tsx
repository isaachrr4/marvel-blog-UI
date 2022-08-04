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
}






export default ComicSearch;