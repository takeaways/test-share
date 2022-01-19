import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y2 p-5 dark">
      <details className="select-none open:text-white open:bg-indigo-400">
        <summary>what is your fav. food</summary>
        <span className="selection:bg-indigo-400">피자</span>
      </details>

      <ul className="list-decimal portrait:bg-indigo-400 marker:text-teal-500">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>

      <input
        type="file"
        className="file:border-0 file:rounded-xl file:px-5  file:bg-purple-500 file:text-white  file:transition-colors file:cursor-wait file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 dark:bg-red-400"
      />
    </div>
  );
};

export default Home;
