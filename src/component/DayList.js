import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DayList() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    /*api 비동기 통신 위해서 fetch 이용 */
    fetch('http://localhost:3001/days')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  });

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}> Day {day.day}</Link>
            {/* day.day는
          data.json의 days에 있는 day를 의미 */}
          </li>
        ))}
        <li></li>
      </ul>
    </>
  );
}
