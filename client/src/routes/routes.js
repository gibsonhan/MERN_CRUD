import App from '../containers/App';
import Auth from '../modules/Auth';
import Test from '../components/test/Test';
import Landing from '../pages/landing/Landing';
import Register from '../components/register/Register';
import CompanyList from '../pages/company/CompanyList';

const routes = {
    component: App,
    childRoutes: [
        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, Test);
                } else {
                    callback(null, Landing);
                }
            }
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();
                //Change URL to /
                replace('/');
            }
        },
        {
            path: '/companies',
            component: CompanyList
        }

    ]
};

export default routes;
