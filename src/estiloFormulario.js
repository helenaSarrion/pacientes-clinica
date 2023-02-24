import styled from 'styled-components'


const Form = styled.form`
  background-color: #fac8c8;
  padding: 3rem;
  border-radius: 1rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

export default Form;