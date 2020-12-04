import ResultTitle from "Components/ResultTitle";
import SubButtonGroupContainer from "Containers/SubButtonGroupContainer";
import React from "react";

const Result = () => {
  return (
    <>
      <ResultTitle />
      <SubButtonGroupContainer />
      <table>
        <tr>
          <td style={{ borderTop: "1px solid red", width: "10rem" }}>1</td>
          <td>2td</td>
          <td>3td</td>
        </tr>
        <tr>
          <td style={{ borderTop: "1px solid blue" }}>1td</td>
          <td>2td</td>
          <td>3td</td>
        </tr>
        <tr>
          <td style={{ borderTop: "1px solid blue" }}>1td</td>
          <td>2td</td>
          <td>3td</td>
        </tr>
        <tr>
          <td style={{ borderTop: "1px solid blue" }}>1td</td>
          <td>2td</td>
          <td>3td</td>
        </tr>
        <tr>
          <td style={{ borderTop: "1px solid blue" }}>1td</td>
          <td>2td</td>
          <td>3td</td>
        </tr>
      </table>
    </>
  );
};

export default Result;
