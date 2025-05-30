import React from 'react';
import Profiles from '../components/Profiles';

export default function Home() {
  return (
    <div>  
      <Profiles />

      <div className="container tech text-center">
        <div className="row flex-row flex-nowrap overflow-auto">
          <div className="col-4 col-md-2">
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Tech" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2">
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Tech" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2">
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Tech" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2">
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Tech" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2">
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Tech" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2">
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Tech" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
