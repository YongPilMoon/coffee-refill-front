import React, {Component} from 'react';
import Footer from 'components/common/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/actionCreators/base';
import PropTypes from 'prop-types';

class FooterContainer extends Component {
  handleLoginClick = async () => {
    const { BaseActions, logged } = this.props;
    if(logged) {
      try {
        BaseActions.logout();
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
      return
    }
    BaseActions.showModal('login');
    BaseActions.initializeLoginModal();
  }

  render() {
    const { handleLoginClick } = this;
    const { logged } = this.props;
    return (
      <Footer onLoginClick={handleLoginClick} logged={logged}/>
    );
  }
}

FooterContainer.propTypes = {};

export default connect(
  (state) => ({
    logged: state.base.get('logged')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(FooterContainer);
