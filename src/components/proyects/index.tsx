import Image from 'next/image';

const Proyects = () => (
  <div className="container container-sections">
    <div className="row">
      <div className="col-md-12">
        <div className="text-center text-light">
          <h3>My Recent Work</h3>
          <p>Here are a few design projects I’ve worked on recently. Want to see more? Email me.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-dark text-white">
                <Image src="/img/chatbot2.png" alt="avatar" width={800} height={533} />
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark text-white">
                {/* <Image src="/img/front2.png" alt="avatar" width={90} height={90} /> */}
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark text-white">
                {/* <Image src="/img/front2.png" alt="avatar" width={90} height={90} /> */}
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Proyects;
