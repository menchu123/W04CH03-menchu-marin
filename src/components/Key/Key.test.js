import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Context from "../Context/Context";
import Key from "./Key";

describe("Given an Key component", () => {
  describe("When it recieves a text 'test'", () => {
    test("Then it should display the text 'test'", () => {
      const text = "text";
      const getNumber = jest.fn();
      const deleteNumber = jest.fn();
      const isCalling = true;

      render(
        <Context.Provider value={{ getNumber, deleteNumber }}>
          <Key text={text} isCalling={isCalling} />
        </Context.Provider>
      );
      const textElement = screen.getByText(text);

      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it recieves a text 'delete'", () => {
    test("Then it should call the deleteNumber function", () => {
      const text = "delete";
      const getNumber = jest.fn();
      const deleteNumber = jest.fn();
      const isCalling = false;

      render(
        <Context.Provider value={{ getNumber, deleteNumber }}>
          <Key text={text} isCalling={isCalling} />
        </Context.Provider>
      );
      const textElement = screen.getByText(text);
      userEvent.click(textElement);

      expect(deleteNumber).toHaveBeenCalled();
    });
  });

  describe("When it recieves a text '1'", () => {
    test("Then it should call the getNumber function", () => {
      const text = "1";
      const getNumber = jest.fn();
      const deleteNumber = jest.fn();
      const isCalling = false;

      render(
        <Context.Provider value={{ getNumber, deleteNumber }}>
          <Key text={text} isCalling={isCalling} />
        </Context.Provider>
      );
      const textElement = screen.getByText(text);
      userEvent.click(textElement);

      expect(getNumber).toHaveBeenCalled();
    });
  });

  describe("When it receives true isCalling", () => {
    test("Then it should be disabled", () => {
      const text = "delete";
      const getNumber = jest.fn();
      const deleteNumber = jest.fn();
      const isCalling = true;

      render(
        <Context.Provider value={{ getNumber, deleteNumber, isCalling }}>
          <Key text={text} isCalling={isCalling} />
        </Context.Provider>
      );
      const button = screen.getByText(text);

      expect(button).toHaveAttribute("disabled");
    });
  });
});

export default Key;
