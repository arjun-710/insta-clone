import './App.scss';
import FollowerSection from './pages/FollowerSection/FollowerSection';
import Navbar from './pages/Navbar/Navbar';
import PostSection from './pages/PostSection/PostSection';
import StorySection from './pages/StorySection/StorySection';

function App() {
  return (
    <div className="App">
      <div className="App__container" id="container">
        <Navbar />
        <StorySection />
        <PostSection />
        <FollowerSection />
      </div>

    </div>
  );
}

export default App;
