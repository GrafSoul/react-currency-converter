/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
    it('Footer renders', () => {
        render(<Footer />);
        expect(screen.getByText('GrafSoul')).toBeInTheDocument();
    });

    it('Footer snapshot', () => {
        const footer = render(<Footer />);
        expect(footer).toMatchSnapshot();
    });
});
