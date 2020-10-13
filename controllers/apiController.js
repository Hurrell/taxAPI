const {
  getProfit,
  getNI2,
  getNI4,
  getStudentLoan,
  getTakeHome,
  getTax,
  getTaxableIncome,
  getTotalOwedHMRC,
} = require("../tools/selfEmployed");

apiController = (userData) => {
  //Take in info
  console.log(userData);
  userData.profit = getProfit(userData);
  //Do calculations

  //   let taxableIncome = userData.income - userData.expenses - personalAllowance;
  //   if (taxableIncome <= 0) {
  //     return {
  //       taxableIncome: 0,
  //       takeHome: 0,
  //       tax: 0,
  //       NI: 0,
  //       studentLoan: 0,
  //     };
  //   }

  // return info
  let response = {
    taxableIncome: getTaxableIncome(userData),
    takeHome: getTakeHome(userData),
    tax: getTax(userData),
    NI2: getNI2(userData),
    NI4: getNI4(userData),
    studentLoan: getStudentLoan(userData),
    totalOwedHMRC: getTotalOwedHMRC(userData),
  };

  return response;
};

module.exports = apiController;
