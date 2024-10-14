import { Link } from 'react-router-dom';
import dummy from '../db/data.json';

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {dummy.days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}> Day {day.day}</Link>
          {/* day.day는
          data.json의 days에 있는 day를 의미 */}
        </li>
      ))}
      <li></li>
    </ul>
  );
}
