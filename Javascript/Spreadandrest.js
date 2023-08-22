function printData(...rest) {
  rest.foreach((elem) => {
    console.log("you sent: " + elem);
  });
  const [firstElement] = [...rest];
  console.log("first element: " + firstElement);
}
printData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
