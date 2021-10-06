import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <div className="row mt-3 mx-5">
    <div className="col-md-6">
      <Link href="/">
        <a className="mx-2 text-decoration-none"><Image src="/img/development.png" height={80} width={80} alt="logo" className="p-2"/></a>
      </Link>

    </div>
    <div className="col-md-6">
      <div className="text-end my-2">
        <Link href="/about">
          <a className="mx-2 text-decoration-none">About</a>
        </Link>
        <Link href="/contact">
          <a className="btn btn-outline-secondary">Contact Me!</a>
        </Link>
      </div>
      </div>
  </div>

);

export default Navbar;
