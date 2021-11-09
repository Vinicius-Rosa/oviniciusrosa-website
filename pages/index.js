import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { HomeScreen } from 'views/Home.screen'
import LoadingScreen from 'views/Loading.screen';

export default function Home() {
  const [pageLoading, setPageLoading] = React.useState(true);
  React.useEffect(() => {
    const finishLoading = () => {
      setTimeout(() => {
        setPageLoading(false);
      }, 1000);
    };

    window.addEventListener("load", finishLoading)
  }, []);

  return <>
    {pageLoading && <LoadingScreen />}
    <HomeScreen />
  </>
}
