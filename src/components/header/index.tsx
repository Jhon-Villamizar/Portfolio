import Image from 'next/image';

const Header = () => (
  <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="text-center text-light">
            <h1 className="mt-5">Designer, Front-end Developer & Mentor</h1>
            <h5 className="mt-5 mb-5">I design and code beautifully simple things, and I love what I do.</h5>
            <div className="d-block pt-5">
              <Image src="/img/person.png" alt="avatar" width={150} height={150} />
            </div>
            <div className="d-block system-img">
              <Image src="/img/system2.1.png" alt="system" width={600} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default Header;
