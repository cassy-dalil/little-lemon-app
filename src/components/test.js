import { render, screen } from "@testing-library/react";
import Form from './Form';

test('Renders the Form heading'), () => {
    render(<Form />);
    const headingElement = screen.getByTestId("Book Now");
    expect(headingElement).toBeInTheDocument();
}

screen.getByText("Form");