import React from "react";
import styled from "styled-components";

const List = styled.div`
  background-color: ${(props) => props.theme.theme.backgroundColor};
  color: ${(props) => props.theme.theme.color};
`;

export default function ToDoList() {
  return (
    <List>
      <li>Lista 1</li>
      <li>Lista 2</li>
      <li>Lista 3</li>
    </List>
  );
}
