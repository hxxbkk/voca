import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateWord() {
  const days = useFetch('http://localhost:3001/days');
  const history = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    // console.log(engRef.current.value); //current 속성을 이용하면 해당 요소에 접근할 수 있고 value는 input에 입력된 값을 얻을 수 있음
    // console.log(korRef.current.value);
    // console.log(dayRef.current.value);

    fetch(`http://localhost:3001/words/`, {
      method: 'POST',
      headers: {
        //콘텐트타입은 보내는 리소스의 타입을 의미, 평범한 문자열부터 html, 이미지 등 여러가지가 있을 수 있음, 여기서는 json 형태로 받을거임
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료 되었습니다');
        history(`/day/${dayRef.current.value}`);
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}></input>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
