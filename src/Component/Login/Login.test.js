import { getAllByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe("<Login/>", () => {
    test("render email input", () => {
        render(<Login />);

        const inputEl = screen.getByTestId("email-input")
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
    })
    test('pass valid email to test email input field', () => {
        render(<Login />);

        const inputEl = screen.getByTestId("email-input");
        userEvent.type(inputEl, "test@mail.com");


        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
    test('pass invalid email to test input value', () => {
        render(<Login />);

        const inputEl = screen.getByTestId("email-input");
        userEvent.type(inputEl, "test");


        expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
        expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
    });
    test("render password input", () => {
        render(<Login />);

        const inputEl = screen.getByTestId("password-input")
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "password");
    });
    test('pass valid password to test password input field', () => {
        render(<Login />);

        const inputEl = screen.getByTestId("password-input");
        userEvent.type(inputEl, "12345678amma");


        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
    test('pass Invalid password to test password input field', () => {
        render(<Login />);

        const inputEl = screen.getByTestId("password-input");
        userEvent.type(inputEl, "sadjsa");


        expect(screen.getByTestId("error-msg")).toBeInTheDocument();
        expect(screen.getByTestId("error-msg").textContent).toEqual("Please enter a valid password")
    });

    test("render button", () => {
        render(<Login />);

        const inputEl = screen.getByTestId("button")
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "submit");
    });

    test("render submit as a text if button clicked", () => {
        render(<Login />);

        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        const outputElement = screen.getByText("Submit")
        expect(outputElement).toBeInTheDocument();

    })



});