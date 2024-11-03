const scrollToTop = (top?: number) => {
  window.scrollTo({ behavior: 'smooth', top });
};

const scrollToTarget = (sectionId: string, offset: number) => {
  const element = document.getElementById(sectionId);

  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    window.scrollTo({
      behavior: 'smooth',
      top: elementPosition - offset,
    });
  }
};

export const AppTool = {
  scrollToTarget,
  scrollToTop,
};
