import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  test('navigates to detail screen with no  warning', async () => {
    const { getByText, getByTestId, findByText } = render(<App />);

    const button = getByTestId('button');

    await waitFor(() =>
      expect(button.props.accessibilityState.disabled).toBe(false),
    );

    const buttonText = getByText('Go to detail');

    fireEvent.press(buttonText);

    await findByText('Detail screen');
  });
});
