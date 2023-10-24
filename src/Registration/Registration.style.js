import styled from "styled-components";

export const Header = styled.h2`
    text-align: center;
`

export const ModContainer = styled.div`
    width: 600px;
    height: 600px;
`
export const FormContainer = styled.div`
    max-width: 40rem;
    padding: 2rem;
    padding-top: 0rem;
`
export const FormItems = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`
export const MandSpan = styled.span`
    color: red;
`

export const InputGroup = styled.div`
    display:flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`
export const Inputitem = styled.input`
    padding: 0.5rem;
    border: 1px solid gray;
    font-size: 1rem;
`
export const Button = styled.button`
    padding: 0.5rem;
    background-color: peachpuff;
    font-size: 1.2rem;
`
export const Select = styled.select`
    width: 100%;
    padding: 10px;
    padding-left: 2px;
    border: 1px solid gray;
    font-size: 1rem;
    color: dimgray;
`;

export const RadioGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 1rem;
`
export const CheckGroup = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 1rem;
    align-items: end;
`
export const ErrorMsg = styled.span`
    color: Red;
`
