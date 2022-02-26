import {FC} from "react";
import 'antd/dist/antd.css';
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.scss'

const MyApp: FC<{Component: any, pageProps: any}> = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp