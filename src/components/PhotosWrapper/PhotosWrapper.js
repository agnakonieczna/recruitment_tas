//styles
import { Grid, ImgWithOverlay } from './PhotosWrapper.style';
//assets
import photo1 from '../../assets/pexels-daria-shevtsova-1030848.jpg';
import photo2 from '../../assets/pexels-drew-williams-3098619.jpg';
import photo3 from '../../assets/pexels-jacek-jan-skorupski-4418531.jpg';

const PhotoWrapper = () => {
  return (
    <Grid>
      <img src={photo1} alt='family' />
      <img src={photo2} alt='family' />
      <img src={photo3} alt='family' />
      <ImgWithOverlay>
        <img src={photo1} alt='family' />
      </ImgWithOverlay>
    </Grid>
  );
};

export default PhotoWrapper;
