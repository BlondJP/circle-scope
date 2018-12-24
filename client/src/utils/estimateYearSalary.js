/**
 * @param float tjm
 * @param int vacationWeeks
 * @param int unSoldDays
 * @param float amountOfExpenditure
 */
const estimateYearSalary = (tjm, vacationWeeks, unSoldDays, amountOfExpenditure) => {
    const daysInYear = 304 // => 2018 example
    const workedDays = daysInYear - (5 * vacationWeeks) - unSoldDays
    const turnover = tjm * workedDays
    const earnings = turnover - amountOfExpenditure
    const annualSalary = earnings / 1.47
    return Math.trunc(annualSalary)
  }

export default estimateYearSalary;
