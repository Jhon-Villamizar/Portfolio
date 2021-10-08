import Image from 'next/image';

const Header = () => (
  <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="text-center mt-5 text-light">
            <h1 className="mt-5">Designer, Front-end Developer & Mentor</h1>
            <h5 className="mt-5 mb-5">I design and code beautifully simple things, and I love what I do.</h5>
            <div className="d-block pt-2">
              <Image src="/img/person.png" alt="avatar" width={150} height={150} />
            </div>
            <div className="d-block system-img">
              <Image src="/img/system.png" alt="system" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default Header;
