import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../store/actionCreators/base';
import Header from '../../components/common/Header';

import PropTypes from 'prop-types';

class HeaderContainer extends Component {
  handleRemove = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('remove');
  };

  render() {
    const { handleRemove } = this;
    const { match } = this.props;

    const { id } = match.params;

    return (
      <Header
        postId={id}
        onRemove={() => handleRemove('remove')}
      />
    );
  }
}

HeaderContainer.propTypes = {};

export default connect(
  (state) => ({}),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(HeaderContainer));
