import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
const VideoCard = ({ video: { id: { videoId, channelId }, snippet } }) => {

    return (
        <Card sx={{ width: { xs: '100%', md: '280px' }, boxShadow: 'none', borderRadius: '0' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                    image={snippet?.thumbnails?.high?.url} />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1"
                        fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2"
                        fontWeight="bold" color="#fff">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard 