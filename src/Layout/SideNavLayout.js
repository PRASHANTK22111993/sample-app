import React, { Fragment } from 'react';
import SideNav from '../SideNav/SideNav';

const SideNavLayout = (WrappedComponent) => (props) => {
    return (
        <Fragment>
            <div>
                <SideNav />
            </div>
            <div>
                <WrappedComponent {...props} />
            </div>
        </Fragment>
    );
}

export default SideNavLayout;
