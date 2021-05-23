import A from './components/A';
import B from './components/B';
import { render } from 'react-dom';

export default function App() {
  return (
    <div id="apprr">
      <A />
      <button
        onClick={() => {
          render(<B />, document.getElementById('apprr'));
        }}
      >
        render
      </button>
    </div>
  );
}
