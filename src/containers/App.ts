import App from '../components/App';
import { ReduxState } from '../model/state';
import { connect } from 'react-redux';
import { logout, setUser } from '../store/actions/User';
import { uiHideBanner } from '../store/actions/Ui';

const mapStateToProps = (state: ReduxState) => ({
    user: state.user.user,
    ui: state.ui,
    audio: state.audio,
    themeOptions: state.ui.themeOptions
});

const mapDispatchToProps = (dispatch: Function) => ({
    setUser: (user: firebase.User) => dispatch(setUser(user)),
    logout: () => dispatch(logout()),
    closeBanner: () => dispatch(uiHideBanner(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);