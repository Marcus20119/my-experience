const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToTarget = (sectionId: string, headerOffset: number) => {
  const element = document.getElementById(sectionId);

  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    window.scrollTo({
      behavior: 'smooth',
      top: elementPosition - headerOffset,
    });
  }
};

export const AppTool = {
  scrollToTop,
  scrollToTarget,
};
