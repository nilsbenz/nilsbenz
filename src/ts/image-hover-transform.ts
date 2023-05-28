const images = document.querySelectorAll('.hover-transform');
const imageCenters = Array(images).map(() => ({ x: 0, y: 0 }));
const root = document.documentElement;

const calculateImageCenters = () => {
  images.forEach((image, index) => {
    const { top, left } = image.getBoundingClientRect();
    imageCenters[index] = {
      x: left + root.scrollLeft + image.clientWidth / 2,
      y: top + root.scrollTop + image.clientHeight / 2,
    };
  });
};

calculateImageCenters();
window.addEventListener('resize', calculateImageCenters);

images.forEach((image, index) => {
  const animateTo = ({
    translateX,
    translateY,
  }: {
    translateX: number;
    translateY: number;
  }) => {
    image.animate(
      {
        transform: `translateX(${translateX}px) translateY(${translateY}px)`,
      },
      {
        duration: 300,
        fill: 'forwards',
      }
    );
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    let translateX = (clientX + root.scrollLeft - imageCenters[index].x) / 16;
    let translateY = (clientY + root.scrollTop - imageCenters[index].y) / 16;
    animateTo({ translateX, translateY });
  };

  image.addEventListener('mouseenter', () => {
    document.addEventListener('mousemove', handleMouseMove);
  });

  image.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', handleMouseMove);
    animateTo({ translateX: 0, translateY: 0 });
  });
});
