import React, { PureComponent } from 'react';

class Standings extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="standings">
        <h1>Standings</h1>
        <div className="standings-table">
          <div className="row">
            <div className="title">Team</div>
            <div className="title">Points</div>
          </div>
          <div className="row">
            <div className="cell">Aston Villa</div>
            <div className="cell">10</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Standings;
