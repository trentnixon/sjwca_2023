import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { MantineProviderWrapper } from '@/utils/MantineTheme';
import Layout from '@/components/layout/Layout';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
    <MantineProviderWrapper>
    
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </MantineProvider>
      </MantineProviderWrapper>
    </>
  );
}