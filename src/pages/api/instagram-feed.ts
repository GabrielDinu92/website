import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const accessToken = 'IGQVJVSF9qUi1TU1FYalFVbm1sZAk5OUlJfTGNMaHJwT2dZAaWl3VkliSldSdm1lNG83TzVTT0FwNFlCQUN5TDUzWTRxVmdqMktkNHIyMXR2OGZAOZA3gycG95OXUtSm5uenlUTEhjMHV3OTE2VFNvVjlUdgZDZD';
  try {
    const response = await axios.get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`
    );
    const mediaData = response.data.data;

    const fetchedPosts = mediaData.map((media: any) => ({
      id: media.id,
      imageUrl: media.images.standard_resolution.url,
      caption: media.caption ? media.caption.text : '',
    }));

    res.status(200).json({ posts: fetchedPosts });
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    res.status(500).json({ error: 'Error fetching Instagram feed' });
  }
}