import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import Image from 'next/image';

dayjs.extend(relativeTime);

type VideoProps = {
  title: string;
  thumb: string;
  _id: string;
  authorName: string;
  authorAvatar: string;
  views: number;
  updatedAt: Date;
}


const useStyles = makeStyles(() => ({
  img: {
    width: '100%',
  },
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

function VideoCard({ title, thumb, _id, views, authorAvatar, authorName, updatedAt }: VideoProps) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <Image
        width={500}
        height={300}
        alt={title}
        src={thumb}
        className={classes.img}
        layout="intrinsic"
        onClick={() =>
          router.push({
            pathname: '/video/[id]',
            query: { id: _id },
          })
        }
      />
      <Box display="flex" mt="1">
        <Box mr={2} >
          <Avatar alt={authorName} src={authorAvatar}>
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${views} • ${dayjs(updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCard;