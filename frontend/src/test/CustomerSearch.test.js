import { render, screen } from '@testing-library/react';
import CustomerSearch from "../components/CustomerSearch.js"

test("Customer Search Component",()=>{
    render(<CustomerSearch/>)
    const linkElement= screen.getByTestId("Customer-Search")
    expect(linkElement).toBeInTheDocument()
})
test("Customer Search Component text",()=>{
    render(<CustomerSearch/>)
    const linkElement= screen.getByTestId("Customer-Search")
    expect(linkElement).toHaveTextContent('')
})