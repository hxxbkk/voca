import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    /*api 비동기 통신 위해서 fetch 이용 */
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}
