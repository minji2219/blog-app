import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/posts">post</Link>
          </li>
          <li>
            <Link to="/posts/:id">post detail</Link>
          </li>
          <li>
            <Link to="/posts/new">post new</Link>
          </li>
          <li>
            <Link to="/posts/edit/:id">post edit</Link>
          </li>
          <li>
            <Link to="/posts/profile">profile</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/posts" element={<h1>post</h1>} />
        <Route path="/posts/:id" element={<h1>post detail</h1>} />
        <Route path="/posts/new" element={<h1>post new</h1>} />
        <Route path="/posts/edit/:id" element={<h1>post edit</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
        {/* 위의 경로가 아닌 다른 경로로 들어올땐 메인 페이지로 replace해주기 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
