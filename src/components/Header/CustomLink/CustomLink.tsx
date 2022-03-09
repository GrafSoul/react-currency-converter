import * as React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import type { LinkProps } from 'react-router-dom';

import classes from '../Header.module.scss';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <>
            <Link className={match ? classes.active : ''} to={to} {...props}>
                {children}
            </Link>
        </>
    );
};

export default CustomLink;
