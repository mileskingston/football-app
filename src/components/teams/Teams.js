import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { teamsRequest } from '../../actions/index';

class Teams extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="teams">
        <h1>Teams</h1>
        <div className="teams__list">
          {this.props.teams
            .map(team =>
              <div className="team" key={team.id}>
                {team.name}
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams.teams
});

export default connect(mapStateToProps, { teamsRequest })(Teams);