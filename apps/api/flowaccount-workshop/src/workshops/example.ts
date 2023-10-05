import * as bankStatement from '../bankStatements.json'
import * as expenseStatements from '../expenseStatements.json';

export function example() {
  const matchingElements = [];


  bankStatement.forEach((element1) => {

    expenseStatements.forEach((element2) => {
      // Check if elements match exactly
      if (element1.amount === element2.amount) {
        // Add the matching element to the result array
        matchingElements.push([element1, element2]);
      }
    });
  });

  console.log("Matching elements:", matchingElements);

}


