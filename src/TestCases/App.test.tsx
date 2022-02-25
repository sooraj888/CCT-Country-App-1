import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Error from "./../utility/Error";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import InputCountryName from "../pages/InputCountryName";
import CountryDetailsCard from "../components/CountryDetailsCard";
import NavigationBar from "../components/NavigationBar";

describe("", () => {
  test("", () => {
    render(<div></div>);
  });
});

describe("test on Error component", () => {
  test("rendering Error component", () => {
    render(
      <BrowserRouter>
        <Error></Error>
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on Error component", () => {
  test("finding text inside Error component", () => {
    render(
      <BrowserRouter>
        <Error></Error>
      </BrowserRouter>
    );

    const elemetText = screen.getByText(/Somthing Went Worng.../);
    expect(elemetText).toBeInTheDocument();
  });
});

describe("test on Error component", () => {
  test("test to finde existence any button", () => {
    render(
      <BrowserRouter>
        <Error></Error>
      </BrowserRouter>
    );
    const elemet = screen.getByRole("button");
    expect(elemet).toBeInTheDocument();
  });
});

describe("test on Error component", () => {
  test("test to find total number of buttons", () => {
    render(
      <BrowserRouter>
        <Error></Error>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("button");
    expect(elemet.length).toBe(1);
  });
});

describe("test on PageNotFound component", () => {
  test("rendering PageNotFound component", () => {
    render(
      <BrowserRouter>
        <PageNotFound></PageNotFound>
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on PageNotFound component", () => {
  test("finding text inside PageNotFound component", () => {
    render(
      <BrowserRouter>
        <PageNotFound></PageNotFound>
      </BrowserRouter>
    );

    const elemetText = screen.getByText(/Page Not Found/);
    expect(elemetText).toBeInTheDocument();
  });
});

describe("test on PageNotFound component", () => {
  test("test to finde existence any button", () => {
    render(
      <BrowserRouter>
        <PageNotFound></PageNotFound>
      </BrowserRouter>
    );
    const elemet = screen.getByRole("button");
    expect(elemet).toBeInTheDocument();
  });
});

describe("test on PageNotFound component", () => {
  test("test to find total number of buttons", () => {
    render(
      <BrowserRouter>
        <PageNotFound></PageNotFound>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("button");
    expect(elemet.length).toBe(1);
  });
});

describe("test on InputCountryName component", () => {
  test("rendering InputCountryName component", () => {
    render(
      <BrowserRouter>
        <InputCountryName></InputCountryName>
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on InputCountryName component", () => {
  test("finding placeHolder text inside InputCountryName component", () => {
    render(
      <BrowserRouter>
        <InputCountryName></InputCountryName>
      </BrowserRouter>
    );

    const elemetText = screen.getByPlaceholderText(/Enter Country Name/);
    expect(elemetText).toBeInTheDocument();
  });
});

describe("test on InputCountryName component", () => {
  test("test to finde existence any button", () => {
    render(
      <BrowserRouter>
        <InputCountryName></InputCountryName>
      </BrowserRouter>
    );
    const elemet = screen.getByRole("button");
    expect(elemet).toBeInTheDocument();
  });
});

describe("test on InputCountryName component", () => {
  test("test to find total number of buttons", () => {
    render(
      <BrowserRouter>
        <InputCountryName></InputCountryName>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("button");
    expect(elemet.length).toBe(1);
  });
});

describe("test on InputCountryName component", () => {
  test("test to find total number of textbox element", () => {
    render(
      <BrowserRouter>
        <InputCountryName></InputCountryName>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("textbox");
    expect(elemet.length).toBe(1);
  });
});

describe("testing on NavigationBar component ", () => {
  test("rendering html of NavigationBar component ", () => {
    render(<NavigationBar />);
    screen.debug();
  });

  test("finding existence of given text", () => {
    render(<NavigationBar />);

    expect(screen.getByText(/Country/)).toBeInTheDocument();
  });
  test("finding total number of banner ", () => {
    render(<NavigationBar />);

    expect(screen.getAllByRole("banner").length).toBe(1);
  });
});

let dummyData = {
  population: "138000000",
  name: { common: "india" },
  capital: "Dheli",
};

//warring
// describe("test on CountryDetailsCard component", () => {
//   test("rendering CountryDetailsCard with prop ", () => {
//     render(
//       <BrowserRouter>
//         <CountryDetailsCard countryData={dummyData} />
//       </BrowserRouter>
//     );
//     screen.debug();
//   });
// });

describe("test on CountryDetailsCard component", () => {
  test("rendering CountryDetailsCard with prop ", () => {
    render(
      <BrowserRouter>
        <CountryDetailsCard countryData={dummyData} />
      </BrowserRouter>
    );
    expect(screen.getByText(/138000000/)).toBeInTheDocument();
    expect(screen.getByText(/india/)).toBeInTheDocument();
    expect(screen.getByText(/dheli/i)).toBeInTheDocument();
  });
});
