import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Registration from './Registration';

describe("<Registration/>", () => {
    test("render Fullname input", () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("Fullname")
        expect(inputEl).toBeInTheDocument();

    })
    test("render email input", () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("email-id")
        userEvent.type(inputEl, "test@mail.com")
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");

    })
    test("render valid email input", () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("email-id")
        userEvent.type(inputEl, "test@mail.com")

        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    })
    test("render Invalid email input", () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("email-id")
        userEvent.type(inputEl, "test")

        expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
        expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
    })
    test("render phonenumber input", () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("Phonenumber-id")
        userEvent.type(inputEl, "1234567")

        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "number")
    })
    test("render password", () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("Password-id")
        userEvent.type(inputEl, "amma12345")

        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "password")
    })
    test("render Correct Password", () => {
        render(<Registration />);

        const inputEl = screen.getAllByTestId("Password-id")
        userEvent.type(inputEl, "amma12345")

        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    })


    test('pass Invalid password to test password input field', () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("Password-id");
        userEvent.type(inputEl, "sadjsa");


        expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
        expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid password")
    });

    test('pass Valid Confirmpassword to test password input field', () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("Password-ids");
        userEvent.type(inputEl, "amma12345");


        expect(screen.queryByTestId("error-msgs")).not.toBeInTheDocument();

    });

    test('pass Invalid Confirmpassword to test password input field', () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("Password-ids");
        userEvent.type(inputEl, "dsfsfsf232");


        expect(screen.getByTestId("error-msgs")).toBeInTheDocument();
        expect(screen.getByTestId("error-msgs")
            .textContent).toEqual("Please enter a Confirm password");

    });
    test("render button", () => {
        render(<Registration />);

        const inputEl = screen.getByTestId("button")
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "submit");
    });

})