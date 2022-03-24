import { FC } from 'react';
import logo from '../../assets/img/JV.png';

const Nav: FC = () => (
  <div
    className="
    flex flex-col min-h-screen
    bg-primaryBgSoft
    divide-y divide-divider"
  >
    <div className="flex flex-col justify-center my-5 text-center">
      <img
        src={logo}
        alt="JV"
        className="w-20 h-20 cursor-pointer my-0 mx-auto"
        onClick={() => {
          console.log('click Home');
        }}
        aria-hidden="true"
      />
      <h1 className="text-xl mt-2 px-1.5 text-name">Jhon Villamizar</h1>
      <p className="text-xs">Software Developer</p>
    </div>
    <div className="flex flex-col divide-y divide-divider text-center">
      <div
        onClick={() => {
          console.log('click About');
        }}
        aria-hidden="true"
        className="cursor-pointer py-5"
      >
        <h3 className="text-lg">About</h3>
      </div>
      <div
        onClick={() => {
          console.log('click Skills');
        }}
        aria-hidden="true"
        className="cursor-pointer py-5"
      >
        <h3 className="text-lg">Skills</h3>
      </div>
      <div
        onClick={() => {
          console.log('click Work');
        }}
        aria-hidden="true"
        className="cursor-pointer py-5"
      >
        <h3 className="text-lg">Work</h3>
      </div>
      <div
        onClick={() => {
          console.log('click Contact');
        }}
        aria-hidden="true"
        className="cursor-pointer py-5"
      >
        <h3 className="text-lg">Contact</h3>
      </div>
      <div
        onClick={() => {
          console.log('click about');
        }}
        aria-hidden="true"
        className="cursor-pointer py-5"
      >
        <h3 className="text-lg">About</h3>
      </div>
      <div className="cursor-pointer pt-5">
        <p>logos</p>
      </div>
    </div>
  </div>
);

export default Nav;
