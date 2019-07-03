import React from 'react';
import Anchor from '../Anchor/Anchor';

const SideNav = () => {
    return (
        <section>
            <nav>
                <ul>
                    <li>
                        <Anchor href="/dashboard" >Dashboard</Anchor>
                    </li>
                    <li>
                        <Anchor href="/dashboard" >Projects</Anchor>
                    </li>
                    <li>
                        <Anchor href="/dashboard" >Profile</Anchor>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default SideNav;
