const getProfit = (userData) => {
  return userData.income - userData.expenses;
};

const getPersonalAllowance = (userData) => {
  // Currently only works for 2020-21
  //Needs updating to account for additional allowances.
  let allowance = 12500; // 2020-21

  // Reduce personal allowance for high earners.
  if (userData.profit > 100000) {
    allowance -= (userData.profit - 100000) / 2;
  }

  // Add allowance for people registered as Blind.
  if (userData.blind) {
    allowance += 2500;
  }

  return allowance;
};

const getTaxableIncome = (userData) => {
  //Needs updating to account for different tax years.

  let profit = userData.income - userData.expenses;

  let personalAllowance = getPersonalAllowance(userData);

  if (profit > personalAllowance) {
    return profit - personalAllowance;
  } else {
    return 0;
  }
};

const getTax = (userData) => {
  // Currently only works for 2020-21

  let taxableIncome = getTaxableIncome(userData);

  let tax = 0;

  if (taxableIncome > 150000) {
    tax += (taxableIncome - 150000) * 0.45;
    taxableIncome = 150000;
  }
  if (taxableIncome > 37500) {
    tax += (taxableIncome - 37500) * 0.4;
    taxableIncome = 37500;
  }
  if (taxableIncome > 0) {
    tax += taxableIncome * 0.2;
  }
  return tax;
};

const getNI2 = (userData) => {
  // Currently only applies for 2020-21

  if (userData.noNI) return 0;

  let profits = userData.income - userData.expenses;

  let class2;
  if (profits <= 6475 && userData.deferCLass2) {
    class2 = 0;
  } else {
    class2 = 3.05 * 52;
  }

  return class2;
};

const getNI4 = (userData) => {
  // Currently only applies for 2020-21

  if (userData.noNI) return 0;

  let profits = userData.income - userData.expenses;

  let class4 = 0;
  if (profits > 50000) {
    class4 += (profits - 50000) * 0.02;
    profits = 50000;
  }
  if (profits > 9500) {
    class4 += (profits - 9500) * 0.09;
  }

  return class4;
};

const getStudentLoan = (userData) => {
  if (userData.studentLoan === false) return 0;

  let profits = userData.income - userData.expenses;

  if (userData.studentLoan == "plan1") {
    if (profits > 19390) {
      return (profits - 19390) * 0.09;
    } else {
      return 0;
    }
  }
  if (userData.studentLoan == "plan2") {
    if (profits > 26575) {
      return (profits - 26575) * 0.09;
    } else {
      return 0;
    }
  }
  return 0;
};

const getTotalOwedHMRC = (userData) => {
  let total = 0;

  total += getTax(userData);
  total += getNI2(userData);
  total += getNI4(userData);
  total += getStudentLoan(userData);

  return total;
};

const getTakeHome = (userData) => {
  return userData.income - userData.expenses - getTotalOwedHMRC(userData);
};

module.exports = {
  getProfit,
  getNI2,
  getNI4,
  getStudentLoan,
  getTakeHome,
  getTax,
  getTaxableIncome,
  getTotalOwedHMRC,
};
