import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateDay() {
  const days = useFetch('http://localhost:3001/days');
  const history = useNavigate();
  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: 'POST',
      headers: {
        //콘텐트타입은 보내는 리소스의 타입을 의미, 평범한 문자열부터 html, 이미지 등 여러가지가 있을 수 있음, 여기서는 json 형태로 받을거임
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료 되었습니다');
        history(`/`);
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
