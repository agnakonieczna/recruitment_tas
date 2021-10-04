//styles
import { ImgSectionTwo, ImgText } from './ImgWrapper.style';
//assets
import photo4 from '../../assets/pexels-jill-wellington-3309886.jpg';

const ImgWrapper = () => {
  return (
    <ImgSectionTwo>
      <img src={photo4} alt='family' />
      <ImgText>
        Budowa domów z drewna <br /> Budowa bram wjazdowych <br /> Wykończenie wnętrz <br />
        Altany ogrodowe <br /> Kamienne elementy architektury <br /> Remonty
      </ImgText>
    </ImgSectionTwo>
  );
};

export default ImgWrapper;
