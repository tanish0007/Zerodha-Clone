import React from 'react';
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../src/landing_page/home/Hero";

describe("Hero Component", () => {
    test("renders hero image", ()=> {
        render(<Hero />);
        const heroImg = screen.getByAltText('An image');
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAttribute("src", 'media/homeHero.png');
    });
});