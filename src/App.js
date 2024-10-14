import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          {/*리액트 라우터 돔에서 다이나믹한 url을 처리할때는 콜론으로 처리하면 됨 */}
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
