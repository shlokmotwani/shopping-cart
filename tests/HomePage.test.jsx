import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import {HomePage} from '../src/assets/pages/HomePage';

describe('HomePage', () => {
  it('abc', ()=>{
    render(<HomePage />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByTestId("homepage-description")).toBeInTheDocument();
    expect(screen.getByTestId("homepage-image")).toBeInTheDocument();
  });


  it('renders homepage', () => {
    render(<HomePage />);
    expect(screen.getByRole("heading").textContent).toMatch(/ShopKart/i);
    expect(screen.getByTestId("homepage-description").textContent).toMatch(/Your one stop destination for all your needs./i);
    expect(screen.getByTestId("homepage-image")).toHaveAttribute('src');
    expect(screen.getByTestId("homepage-image")).toHaveAttribute('alt', 'Cart image');
  });
});