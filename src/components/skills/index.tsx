import Image from 'next/image';

const Skills = () => (
  <div className="container">
    <div className="row align-items-start flot-table">
      <div className="col-md-12">
      <div className="card big-border bg-dark">
        <div className="card-body p-4">
          <div className="row">
            <div className="col-md-4">
              <div className="text-center text-light">
                <div className="mt-5">
                  <Image src="/img/front2.png" alt="avatar" width={90} height={90} />
                </div>
                <h4 className="my-4">Frontend Developer</h4>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p className="text-blue mt-5">Languages I speak:</p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p className="text-blue mt-5">Design Tools:</p>
                <ul className="list-style">
                  <li>Balsamiq Mockups</li>
                  <li>Figma</li>
                  <li>Invision</li>
                  <li>Marvel</li>
                  <li>Pen & Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                  <li>Zeplin</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center text-light">
                <div className="mt-5">
                  <Image src="/img/back2.png" alt="avatar" width={90} height={90} />
                </div>
                <h4 className="my-4">Backend Developer</h4>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p className="text-blue mt-5">Languages I speak:</p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p className="text-blue mt-5">Design Tools:</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center text-light">
                <div className="mt-5">
                  <Image src="/img/full.png" alt="avatar" width={90} height={90} />
                </div>
                <h4 className="my-4">Fullstck Developer</h4>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p className="text-blue mt-5">Languages I speak:</p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p className="text-blue mt-5">Design Tools:</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  </div>
);

export default Skills;
