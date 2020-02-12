import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { teamRequest } from '../../actions/index';

class Team extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team">
        <h1>{this.props.team.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => { console.log(state); return {
  state: state.teams.teams
}};

export default connect(mapStateToProps, { teamRequest })(Team);