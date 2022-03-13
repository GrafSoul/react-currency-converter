/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';
import ConverterForm from './ConverterForm';

import classes from '../Converter.module.scss';

describe('ConverterForm component', () => {
    it('ConverterForm renders', () => {
        render(
            <ConverterForm
                classes={classes}
                textForConvert={''}
                isReady={false}
                changeText={() => {}}
                handleSubmit={() => {}}
            />,
        );
        expect(screen.getByText(/Введите текст по шаблону/i)).toBeInTheDocument();
    });

    it('ConverterForm snapshot', () => {
        const converterForm = render(
            <ConverterForm
                classes={classes}
                textForConvert={''}
                isReady={false}
                changeText={() => {}}
                handleSubmit={() => {}}
            />,
        );
        expect(converterForm).toMatchSnapshot();
    });
});
