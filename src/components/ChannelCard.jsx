import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({ channelDetail , marginTop}) => {
    return (
        <Box
            sx={{
                width: { md: '280px', xs: '100%' },
                height:"326px",
                boxShadow: 'none',
                borderRadius: '20px',
                display:"flex",
                justifyContent:'center',
                alignItems:'center',
                margin:"auto",
                marginTop:marginTop
            }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`} >
                <CardContent sx={{
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', textAlign: 'center', color: '#fff'
                }}>
                    <CardMedia 
                    sx={{borderRadius:'50%',height:"180px", width:"180px", mb:2, border: " 1px solid #e3e3e3"}}
                    alt={channelDetail?.snippet?.title}
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />

                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
                        </Typography>
                    )}
                </CardContent>

            </Link>
        </Box>
    )
}

export default ChannelCard