import { render, screen } from '@testing-library/react'; // The testing library
import { BrowserRouter } from 'react-router-dom'; // Need this to render without errors
import HomePage from './HomePage'; // The page we'll be testing



// Mock the isMobileDevice function to simulate a mobile environment
jest.mock('../utilities/deviceDetection', () => ({
    isMobileDevice: () => true
}));


describe('HomePage testing:', () => {
    // This simple test searches to see if the text 'dashboard' is present on the page
    test('Test 1: Searches if dashboard text is present on page', () => {
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


    test('Test 2: Renders mobile-specific elements', () => {
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        );

        // Add assertions for mobile-specific elements
        // Example: Expect to find a mobile-specific text or element
        // under desktop "Wareneingang" appears x3 (causing duplication error fail)
        // under mobile, it only appears once, so should pass test if mobile view rendered
        const mobileElement = screen.getByText('Wareneingang'); 
        expect(mobileElement).toBeInTheDocument();
    });
});
