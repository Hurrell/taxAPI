# Tax API

A simple API for calculating self employed tax in the UK :moneybag:

### Request

A Post request with JSON body, of the form:

```javascript
{
    "income": 110000.00,
    "expenses": 0.00,
    "age": 50,
    "married": false,
    "blind": false,
    "noNI": false,
    "deferClass2": false,
    "studentLoan": false,
    "taxYear": "2020/21"
    }
```

The only required item is income - otherwise defaults will be applied as in the example above.

### Response

JSON response, of the form:

```javascript
{
    "taxableIncome": 17500,
    "takeHome": 24496.4,
    "tax": 3500,
    "NI2": 158.6,
    "NI4": 1845,
    "studentLoan": 0,
    "totalOwedHMRC": 5503.6
}
```

### Options

**income**:

- Format: two decimal number.
- E.g. `24000.00`
- This is the only required item, and should be your total self employed tax income/turnover within the tax year.

**expenses**:

- Format: two decimal number.
- E.g. `4000.00`
- Your total tax deductable expenses within the tax year.

**age**:

- Format: Integer.
- E.g. `34`
- Currently only ages 18-70 and before retirement are supported.

**married**:

- Options: `true`, `false`.
- If you are married you may be eligible for an additional personal allowance. This tool does not correctly adjust for this at this time.

**blind**:

- Options: `true`, `false`.
- If you are registered as blind, an additional personal allowance is applied.

**noNI**:

- Options: `true`, `false`.
- This should be true if you are of retirement age and/or know that you do not need to pay national insurance of any form.

**deferClass2**:

- Options: `true`, `false`.
- If your profits are under a certain amount (£6,475 for 2020/21) you can elect to not pay your Class 2 National Insurance. It should be noted that there are benefits to continuing to pay this such as state pension eligibility.

**studentLoan**:

- Options: `false`, `"plan1"`, `"plan2"`.
- Student loans changed on 2012-09-01, select plan 2 if your course started after this date, plan 1 before it.

**taxYear**:

- Options: `"2020/21"`.
- Currently only the tax year 2020/21 is supported. Future updates will include past years. If ommitted the latest supported tax year will be selected.

### Current Scope

This is a work in progress, and while further additions are planned, this API:

- Only applies for the 2020/21 tax year.
- Does not provide correct figures if you are aged over 70 / retired.
- Does not correctly estimate marriage allowances.
- Does not take into account salaried income.

### Errors

Please make the owner aware of any errors or outdated info and this will be addressed as soon as possible.
