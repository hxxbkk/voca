import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

/*url을 포함된 값을 얻을때는 useParams 훅을 사용 */

export default function Day() {
  // dummy.words
  const { day } = useParams(); /* 들어오는 값이 문자라 숫자로 바꿈*/
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
