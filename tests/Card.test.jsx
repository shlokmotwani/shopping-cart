import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Card } from "../src/assets/components/Card";

describe('Card', ()=>{
    const item = {
        id: 100,
        title: "Zara Jacket",
        description: "Made with premium luxury denim fabric",
        thumbnailURL: "https://www.dummywebsite/dummy-product.png",
        price: 500
    };
    const handleAdd = vi.fn();

    it('renders card component', ()=>{
        render(<Card item={item} handleAdd={handleAdd}/>);

        expect(screen.getByTestId('product-card')).toBeInTheDocument();
        expect(screen.getByTestId('product-title')).toBeInTheDocument();
        expect(screen.getByTestId('product-description')).toBeInTheDocument();
        expect(screen.getByTestId('product-price')).toBeInTheDocument();
        expect(screen.getByTestId('product-qty')).toBeInTheDocument();

    })
})