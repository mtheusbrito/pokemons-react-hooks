import styled from "styled-components";
export const List = styled.div`
  display: flex; //the flex stylings here
  flex-wrap: wrap;
`;

export const Item = styled.div`
  /* width: 200px;
  height: 200px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  a{
    min-width: 86px;
    border-radius:3px;
    padding: 5px 10px;
    text-decoration:none;
    font-size: 12px;
    background: #434897;
    text-transform: capitalize;
    color: white;
    text-align: center;
  }
`;

export const Button = styled.button`
    border-radius:3px;
    padding: 5px 10px;
    text-decoration:none;
    font-size: 12px;
    background: #901717;
    text-transform: capitalize;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 18px 5px;
     min-width: 86px;
`;
