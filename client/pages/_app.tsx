import {FC} from "react";
import 'antd/dist/antd.css';

import '../styles/globals.scss'

const MyApp: FC<{Component: any, pageProps: any}> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp