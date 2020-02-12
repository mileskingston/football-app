import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { standingsRequest } from '../../actions/index';
import { removeFc } from '../../utils/string-utils';

class Standings extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="standings">
        <h1>League Standings</h1>
        <table className="standings-table">
          <thead>
            <tr>
              <th className="standings-title" />
              <th className="standings-title align-left">Team</th>
              <th className="standings-title">
                <span className="desktop">Played</span>
                <span className="mobile">Pl</span>
              </th>
              <th className="standings-title">
                <span className="desktop">Won</span>
                <span className="mobile">W</span>
              </th>
              <th className="standings-title">
                <span className="desktop">Draw</span>
                <span className="mobile">D</span>
              </th>
              <th className="standings-title">
                <span className="desktop">Lose</span>
                <span className="mobile">L</span>  
              </th>
              <th className="standings-title desktop">For</th>
              <th className="standings-title desktop">Against</th>
              <th className="standings-title">GD</th>
              <th className="standings-title">
                <span className="desktop">Points</span>
                <span className="mobile">Pts</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {this.props.standings
              .sort((a, b) => a.rank - b.rank)
              .map(team =>
                <tr key={team.team.id}>
                  <td className="standings-cell">{team.position}</td>
                  <td className="standings-cell align-left">{removeFc(team.team.name)}</td>
                  <td className="standings-cell">{team.playedGames}</td>
                  <td className="standings-cell">{team.won}</td>
                  <td className="standings-cell">{team.draw}</td>
                  <td className="standings-cell">{team.lost}</td>
                  <td className="standings-cell desktop">{team.goalsFor}</td>
                  <td className="standings-cell desktop">{team.goalsAgainst}</td>
                  <td className="standings-cell">{team.goalDifference}</td>
                  <td className="standings-cell">{team.points}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  standings: state.standings.standings
});

export default connect(mapStateToProps, { standingsRequest })(Standings);
