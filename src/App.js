// import Profile from './components/Profile';
import Statistics from './components/Statistics';
import data from './data.json'
// import user from './user.json';

export default function App() {
  return <div>
      <div >
        <Statistics title="Upload stats" stats={data} />
      </div>

  </div>
}





