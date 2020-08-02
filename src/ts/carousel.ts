import Flickity from 'flickity';

const flkty = new Flickity('.videos-carousel', {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  prevNextButtons: true,
  pageDots: false,
});
