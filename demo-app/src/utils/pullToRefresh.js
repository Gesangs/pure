
export const scrollDisplay = () => {
  let num = 0;
  let currentTop = 0;
  const head = document.querySelector(".head");
  const foot = document.querySelector(".foot");
  const qiuqiu = document.querySelector(".qiuqiu");
  window.onscroll = () => {
    const scrollY = window.scrollY;
    // 判断滚动方向
    const direction = scrollY - currentTop;
    // 向上滚动隐藏头部尾部
    if (direction > 0) {
      num += 5;
      if (num > 55) {
        num = 55;
        foot.style.bottom = `-55px`;
        qiuqiu.style.bottom = `-68px`;
      }
    } else {
      // 向下滚动显示头部尾部
      num -= 10;
      if (num < 0) {
        num = 1;
        foot.style.bottom = `-3px`;
        qiuqiu.style.bottom = `75px`;
      }
    }

    head.style.top = `-${num}px`;
    // 记录这一次的滚动距离
    currentTop = scrollY;
  };
};

