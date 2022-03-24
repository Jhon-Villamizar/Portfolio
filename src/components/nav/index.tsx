import { FC } from 'react';
import logo from '../../assets/img/JV.png';

const Nav: FC = () => (
  <div
    className="
    flex flex-col h-full
    bg-primaryBold
    divide-y divide-primaryBg"
  >
    <div className="flex justify-center my-5">
      <img
        src={logo}
        alt="JV"
        className="w-20 h-20 cursor-pointer"
        onClick={() => { console.log('click image'); }}
        aria-hidden="true"
      />
    </div>
    <div>
      <ul>
        <li
          onClick={() => { console.log('click about'); }}
          aria-hidden="true"
          className="cursor-pointer"
        >
          <h3>About</h3>
        </li>
      </ul>
      <h1>Nav</h1>
    </div>
  </div>
);

export default Nav;
