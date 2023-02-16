import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoDetail = () => {
  const {id}=useParams();
  const [videoDetail,setVideoDetail]=useState(null);
  const [videoPlaylist,setVideoPlaylist]=useState(null);

  
  useEffect(()=>{
 fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=> setVideoDetail(data.items[0]))
 fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=> setVideoPlaylist(data.items))
  },[id]);
  
  if(!videoDetail?.snippet || !videoPlaylist) return "Loading...";
 const {snippet:{title,channelId,channelTitle},  statistics:{viewCount, likeCount}}=videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer className="react-player" controls url={`https://www.youtube.com/watch?v=${id}`}/>
          <Typography color="#fff" variant="h5" fontWeight="bold">{title}</Typography>
          <Stack direction= "row" justifyContent="space-between" sx={{color:'#fff'}} px={2} py={1}>

      <Link to={`/channel/${channelId}`}>
        <Typography variant={{sm:"subtitle1", md:"h6"}} color="#fff">{channelTitle}<CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }}/></Typography>
      </Link>
      <Stack direction="row" gap="20px" alignItems="center">
        <Typography color="#fff" variant="body1" sx={{opacity:0.7}}> {parseInt(viewCount).toLocaleString()} views </Typography>
        <Typography color="#fff" variant="body1" sx={{opacity:0.7}}> {parseInt(likeCount).toLocaleString()} likes</Typography>
      </Stack>
          </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems={"center"}>
        <Videos direction="column" videos={videoPlaylist} />
      </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetail;