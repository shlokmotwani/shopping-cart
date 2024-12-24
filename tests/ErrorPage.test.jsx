import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorPage } from '../src/assets/pages/ErrorPage';

describe('ErrorPage', () => {
    it('renders oops text', ()=>{
        render(<ErrorPage />);
        expect(screen.getByRole("heading").textContent).toMatch(/Oops! You have reached an invalid page!!!/);
    })
});