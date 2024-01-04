import { render, screen } from '@testing-library/react'; // The testing library
import { BrowserRouter } from 'react-router-dom'; // Need this to render without errors
import HomePage from './HomePage'; // The page we'll be testing

// My first test!
// This simple test searches to see if the text 'dashboard' is present on the page

test('searches if dashboard text is present on page', () => {
    // Arrange
    render( // you need to wrap components that use 'use-navigate' in a router context during the testing
        <BrowserRouter> 
            <HomePage />
        </BrowserRouter>
    );

    // Act 
    // ...Nothing

    // Assert
    const dashBoardTextElement = screen.getByText('dashboard', {exact: false}); // search for 'dashboard text'
    expect(dashBoardTextElement).toBeInTheDocument(); // Is text present?
});

