function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.getInitialProps = (appContext) => {
  return {
    pageProps: {
      test: "hello",
    },
  };
};

export default App;
