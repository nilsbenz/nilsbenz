const image = document.querySelector('#portrait');
let root = document.documentElement;

if (image) {
  let imageCenter = { x: 0, y: 0 };

  const calculateImageCenter = () => {
    const { top, left } = image.getBoundingClientRect();
    imageCenter = {
      x: left + image.clientWidth / 2,
      y: top + image.clientHeight / 2,
    };
  };

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
    let translateX = (clientX + root.scrollLeft - imageCenter.x) / 16;
    let translateY = (clientY + root.scrollTop - imageCenter.y) / 16;
    animateTo({ translateX, translateY });
  };

  calculateImageCenter();

  window.addEventListener('resize', calculateImageCenter);

  image.addEventListener('mouseenter', () => {
    document.addEventListener('mousemove', handleMouseMove);
  });

  image.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', handleMouseMove);
    animateTo({ translateX: 0, translateY: 0 });
  });
}
