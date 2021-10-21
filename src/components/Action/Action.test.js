import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Context from "../Context/Context";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When it recieves a 'test' text'", () => {
    test("Then it should display the text", () => {
      const text = "text";
      const className = "hang";
      const isDisabled = true;
      const call = jest.fn();

      const expectedText = "text";

      render(
        <Context.Provider value={{ call }}>
          <Action text={text} className={className} isDisabled={isDisabled} />
        </Context.Provider>
      );
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it recieves a false isDisabled'", () => {
    test("Then it shoud have an 'active' class", () => {
      const text = "Call";
      const className = "call";
      const expectedClassName = "active";
      const isDisabled = false;
      const call = jest.fn();

      render(
        <Context.Provider value={{ call }}>
          <Action text={text} className={className} isDisabled={isDisabled} />
        </Context.Provider>
      );
      const textElement = screen.getByText(text);

      expect(textElement).toHaveClass(expectedClassName);
    });
  });

  describe("When it recieves a 'hang' class and the element is clicked'", () => {
    test("Then it shoud call the hang function", () => {
      const text = "Hang";
      const className = "hang";

      const isDisabled = false;
      const hang = jest.fn();

      render(
        <Context.Provider value={{ hang }}>
          <Action text={text} className={className} isDisabled={isDisabled} />
        </Context.Provider>
      );
      const textElement = screen.getByText(text);
      userEvent.click(textElement);

      expect(hang).toHaveBeenCalled();
    });
  });
});
