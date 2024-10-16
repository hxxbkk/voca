import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Word from './Word';

/*url을 포함된 값을 얻을때는 useParams 훅을 사용 */

export default function Day() {
  // dummy.words
  const { day } = useParams(); /* 들어오는 값이 문자라 숫자로 바꿈*/
  //const wordList = dummy.words.filter((word) => word.day === Number(day));
  const [words, setWords] = useState([]);

  useEffect(() => {
    /*api 비동기 통신 위해서 fetch 이용 */
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
