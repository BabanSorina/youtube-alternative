import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => { setVideos(data.items) })

  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}> Search results for: <span style={{ color: "#F31503" }}> {searchTerm }videos</span></Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed;