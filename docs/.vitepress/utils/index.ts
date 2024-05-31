import qrcode from 'qrcode';

export const getLightOrDark = () => {
  const htmlClass = document.documentElement.getAttribute('class') || '';
  const dark = htmlClass?.indexOf('dark') > -1;
  return dark ? 'dark' : 'light';
};
export const createWX = async (mode) => {
  const text = 'https://u.wechat.com/EE0f1Oj5_LIpUuy6mmdPwiY';
  const color =
    mode === 'dark'
      ? { dark: '#fffff5db', light: '#1c1a1e' }
      : {
          dark: '#3c3c43',
          light: '#fff',
        };
  const base64 = await qrcode.toDataURL(text, {
    margin: 1,
    width: 200,
    height: 200,
    color,
  });
  return base64;
};
