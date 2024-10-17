import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList() {
  const days = useFetch('http://localhost:3001/days');

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
