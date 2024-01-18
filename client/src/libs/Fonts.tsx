import { Global } from '@mantine/core';
import bold from '../fonts/Sora-Bold.ttf';
import light from '../fonts/Sora-Light.ttf';
import medium from '../fonts/Sora-Medium.ttf';
import regular from '../fonts/Sora-Regular.ttf';

export function Fonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Sora-Bold',
            src: `url('${bold}') format("ttf")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sora-Light',
            src: `url('${light}') format("ttf")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sora-Medium',
            src: `url('${medium}') format("ttf")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sora-Regular',
            src: `url('${regular}') format("ttf")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
