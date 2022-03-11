/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';

describe('NotFound component', () => {
    it('NotFound renders', () => {
        render(<NotFound />);
        expect(screen.getByText('Ошибка 404 - Страница не найдена!')).toBeInTheDocument();
    });

    it('NotFound snapshot', () => {
        const notFound = render(<NotFound />);
        expect(notFound).toMatchSnapshot();
    });
});
