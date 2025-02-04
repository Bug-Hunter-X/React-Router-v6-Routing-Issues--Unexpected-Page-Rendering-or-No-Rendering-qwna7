```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
export default App;
```
This code uses `react-router-dom` v6.  A common mistake is to forget that `Routes` needs to be a child of `BrowserRouter`.  This code snippet is correct, but if `Routes` were outside the `BrowserRouter` or if the paths were incorrect, it would lead to unexpected routing behavior, such as the pages not rendering or always rendering the same page.  Another potential issue is improper nesting of routes which can cause path matching problems.  For example, if you had two paths `/about` and `/about/contact` and nested them incorrectly, one route might always take precedence over the other unexpectedly.