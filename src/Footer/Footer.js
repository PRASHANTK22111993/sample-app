import React from 'react';
import Anchor from '../Anchor/Anchor';

const Footer = () => {
    return (<footer className="app-footer">
        <div className="app-footer-lsect">
            <h3>
                ThoughtWorks
            </h3>
        </div>
        <div className="app-footer-rsect">
            <Anchor href="https://www.google.com">Terms and Conditions</Anchor>
            <Anchor href="https://www.yahoo.com"> Help </Anchor>
        </div>
    </footer>);
};

export default Footer;