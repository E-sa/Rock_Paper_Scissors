function calculate(randomNumber, chose) {
  //win conditions
  if (
    (randomNumber === 1 && chose === "paper") ||
    (randomNumber === 2 && chose === "sci") ||
    (randomNumber === 3 && chose === "rock")
  ) {
    return "win";
  }

  //even conditions
  else if (
    (randomNumber === 1 && chose === "rock") ||
    (randomNumber === 2 && chose === "paper") ||
    (randomNumber === 3 && chose === "sci")
  ) {
    return "even";
    //lose condition
  } else {
    return "lose";
  }
}

export default calculate;
