import defaultAvatarImg from '../images/default-avatar.png';
import noImage from '../images/no-image.jpg';

// Helper function for User avatar image
export const getAvatarUrl = (avatarUrl) => {
  return avatarUrl ? `${process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : ''}${avatarUrl}` : defaultAvatarImg;
}

// Helper  function for Post picture image
export const getImageUrl = (imageUrl) => {
  return imageUrl ? `${process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : ''}${imageUrl}` : noImage;
}
