import React from "react";
import "./recipe.css";

import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <img src="NYT.png" alt="NYT logo" height="75" width="75"/>
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>{props.byline}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
            Go to article!
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);
