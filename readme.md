# Mid-Module Two Assessment

This challenge is designed to assess the JavaScript skills you have gained so far.

There are 7 functions that need to be written. Each completed function (passes all the tests) will be worth 1 point.

A minium of 5 points must be attained in order to pass this assessment.

You may receive partial credit (0.5 points) for code that is close to passing the tests, but does not pass all the tests.

## Assessment Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

### Run tests individually

_After choosing a specific file to run,_ you can also specific which test you want to run, specifically. Add `.only` after either `test` or `describe` for the specific test you'd like to run.

```js
test.only("should return an array of everyone's name who is in the line, in order", () => {
```

This will either run the specific `test` or, in the case of adding `.only` to a `describe`, all of the tests for a specific function.

> **NOTE:** Don't forget to remove this after you get the test to pass!

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

The output will be printed to your terminal.

## Assessment instructions

### Existing files

This repository contains the following files that you may need to edit or want to take a look at:

- `movies.js`: This is the data that you can expect to be inserted into your function.
- `index.js`: This is where you will write your code. This is the only file you should need to edit. This file contains a variable, `exampleMovies`, that contains all of the movies from the `movies.js` file. You may use this variable if you'd like to run the `index.js` file from your command line.
- `__tests__/index.test.js`: All of the tests for the functions.
- `__tests__/fixtures/alternate-movies.js`: Another array of movies that the tests will make use of, in addition to those movies from the `movies.js` file.

### Tasks

After getting this repository running on your current machine, you will then need to do the following for each function:

- [ ] Complete the function so that the tests pass.
- [ ] Add and commit your changes.
- [ ] Push your code up to GitHub.

Please add and commit regularly. You _should not_ end up with a single additional commit for this assessment.

### Function descriptions

You will find examples and descriptions in both the `index.js` file and in the `__tests__/index.test.js` file. Note that for some functions you will need to use specific methods.

## Learning Objectives Assessed

The following learning objectives from Module 2 will be assessed in this assessment:

- Use `.map()` to solve code problems.
- Use `.filter()` to solve code problems.
- Use `.find()` to solve code problems.
- Use `.every()` to solve code problems.
- Use `.some()` to solve code problems.
- Throw errors with the throw keyword.
- Add default parameters to functions.
- Write functions using the arrow function expression syntax.
