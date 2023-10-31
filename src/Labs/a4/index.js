import React from "react";
import ReduxExamples from "./ReduxExamples";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";


function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples></ReduxExamples>
      <Add a={1} b={2} />
      <ClickEvent></ClickEvent>
      <PassingFunctions theFunction={sayHello} />
      <EventObject></EventObject>
      <Counter></Counter>
      <BooleanStateVariables></BooleanStateVariables>
      <StringStateVariables></StringStateVariables>
      <DateStateVariable></DateStateVariable>
      <ObjectStateVariable></ObjectStateVariable>
      <ArrayStateVariable></ArrayStateVariable>
      <ParentStateComponent></ParentStateComponent>
    </div>
  );
}
export default Assignment4;