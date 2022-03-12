const {
  getAllMovieTitles,
  checkIfAnyMovieHasRating,
  findById,
  filterByGenre,
  checkMinMetascores,
  getAllMoviesReleasedAtOrBeforeYear,
  getRottenTomatoesScoreByMovie,
} = require("..");

const movies = require("../movies");
const alternative = require("./fixtures/alternative-movies");

describe("getAllMovieTitles()", () => {
  test("should use the `.map()` method", () => {
    const text = getAllMovieTitles.toString();
    expect(text).toMatch(/\.map\(.*\)/s);
  });
  test("should throw an error if there are no movies", () => {
    const actual = () => getAllMovieTitles([]);
    expect(actual).toThrow();
  });
  test("should return all of the movie titles in an array", () => {
    const actual = getAllMovieTitles(movies);
    const expected = [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getAllMovieTitles(alternative);
    const expected = ["Black Panther", "Wonder Woman", "Jaws", "Skyfall"];
    expect(actual).toEqual(expected);
  });
});

describe("checkIfAnyMovieHasRating()", () => {
  test("should use the `.some()` method", () => {
    const text = checkIfAnyMovieHasRating.toString();
    expect(text).toMatch(/\.some\(.*\)/s);
  });
  test("should throw an error if there are no movies", () => {
    const actual = () => checkIfAnyMovieHasRating([]);
    expect(actual).toThrow();
  });
  test("should return `true` if any movie in the list has the given rating", () => {
    const rating = "G";
    const actual = checkIfAnyMovieHasRating(movies, rating);
    const expected = true;
    expect(actual).toEqual(expected);
  });
  test("should return `false` if any movie in the list has the given rating", () => {
    const rating = "R";
    const actual = checkIfAnyMovieHasRating(movies, rating);
    const expected = false;
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const rating = "PG-13";
    const actual = checkIfAnyMovieHasRating(alternative, rating);
    const expected = true;
    expect(actual).toEqual(expected);
  });
  test("if no rating is passed, the default should be 'G'", () => {
    expect(checkIfAnyMovieHasRating(movies)).toEqual(true);
    expect(checkIfAnyMovieHasRating(alternative)).toEqual(false);
  });
});

describe("findById()", () => {
  test("should use the `.find()` method", () => {
    const text = findById.toString();
    expect(text).toMatch(/\.find\(.*\)/s);
  });
  test("should throw an error if there are no movies", () => {
    const actual = () => findById([]);
    expect(actual).toThrow();
  });
  test("should return the entire movie based on the IMDB ID", () => {
    const id = "tt0892769";
    const actual = findById(movies, id);
    expect(actual.imdbID).toEqual("tt0892769");
    expect(actual.title).toEqual("How to Train Your Dragon");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg"
    );
  });
  test("should dynamically change depending on the IMDB ID inputted", () => {
    const id = "tt1979376";
    const actual = findById(movies, id);
    expect(actual.imdbID).toEqual("tt1979376");
    expect(actual.title).toEqual("Toy Story 4");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SX300.jpg"
    );
  });
  test("should dynamically change depending on the movies inputted", () => {
    const id = "tt1074638";
    const actual = findById(alternative, id);
    expect(actual.imdbID).toEqual("tt1074638");
    expect(actual.title).toEqual("Skyfall");
    expect(actual.poster).toEqual(
      "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg"
    );
  });
  test("should return `null` if the movie cannot be found", () => {
    const id = "tt1074638";
    const actual = findById(movies, id);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("filterByGenre()", () => {
  test("should use the `.filter()` method", () => {
    const text = filterByGenre.toString();
    expect(text).toMatch(/\.filter\(.*\)/s);
  });
  test("should throw an error if there are no movies", () => {
    const actual = () => filterByGenre([]);
    expect(actual).toThrow();
  });
  test("should return all movies that include the specified genre", () => {
    const genre = "Mystery";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[2], // Coco
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the genre inputted", () => {
    const genre = "Fantasy";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[0], // Toy Story 4
      movies[1], // Inside Out
      movies[2], // Coco
      movies[5], // How to Train Your Dragon
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const genre = "Action";
    const actual = filterByGenre(alternative, genre);
    const expected = [
      alternative[0], // Black Panther
      alternative[1], // Wonder Woman
      alternative[3], // Skyfall
    ];
    expect(actual).toEqual(expected);
  });
  test("should be case-insensitive", () => {
    const genre = "FANTASY";
    const actual = filterByGenre(movies, genre);
    const expected = [
      movies[0], // Toy Story 4
      movies[1], // Inside Out
      movies[2], // Coco
      movies[5], // How to Train Your Dragon
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if no movies match the genre", () => {
    const genre = "Horror";
    const actual = filterByGenre(movies, genre);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("checkMinMetascores()", () => {
  test("should use the `.every()` method", () => {
    const text = checkMinMetascores.toString();
    expect(text).toMatch(/\.every\(.*\)/s);
  });
  test("should throw an error if there are no movies", () => {
    const actual = () => filterByGenre([]);
    expect(actual).toThrow();
  });
  test("should return true if all movies have a minimum metascore of at least 60", () => {
    const minMetaScore = 60;
    const actual = checkMinMetascores(alternative, minMetaScore);
    const expected = true;
    expect(actual).toEqual(expected);
  });
  test("should return false if all movies have a minimum metascore of at least 90", () => {
    const minMetaScore = 90;
    const actual = checkMinMetascores(alternative, minMetaScore);
    const expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("getAllMoviesReleasedAtOrBeforeYear()", () => {
  test("should use the `.filter()` method", () => {
    const text = filterByGenre.toString();
    expect(text).toMatch(/\.filter\(.*\)/s);
  });
  test("should throw an error if there are no movies", () => {
    const actual = () => filterByGenre([]);
    expect(actual).toThrow();
  });
  test("should return all movies where the `released` date is equal to or less than the year given", () => {
    const year = 2000;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [
      movies[7], // The Lion King
      movies[8], // Fantasia
      movies[9], // James and the Giant Peach
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the year inputted", () => {
    const year = 1950;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [
      movies[8], // Fantasia
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const year = 2017;
    const actual = getAllMoviesReleasedAtOrBeforeYear(alternative, year);
    const expected = [
      alternative[1], // Wonder Woman
      alternative[2], // Jaws
      alternative[3], // Skyfall
    ];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if no movies were released at or before the given year", () => {
    const year = 1940;
    const actual = getAllMoviesReleasedAtOrBeforeYear(movies, year);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("getRottenTomatoesScoreByMovie()", () => {
  test("should use the `.map()` method", () => {
    const text = getRottenTomatoesScoreByMovie.toString();
    expect(text).toMatch(/\.map\(.*\)/s);
  });
  test("should use the `.find()` method", () => {
    const text = getRottenTomatoesScoreByMovie.toString();
    expect(text).toMatch(/\.find\(.*\)/s);
  });
  test("should throw an error if there are no movies", () => {
    const actual = () => getRottenTomatoesScoreByMovie([]);
    expect(actual).toThrow();
  });
  test("should an array of objects, where the key is the movie title and the value is the Rotten Tomatoes score", () => {
    const actual = getRottenTomatoesScoreByMovie(movies);
    const expected = [
      { "Toy Story 4": "97%" },
      { "Inside Out": "98%" },
      { Coco: "97%" },
      { "Incredibles 2": "93%" },
      { Moana: "95%" },
      { "How to Train Your Dragon": "99%" },
      { Paddington: "97%" },
      { "The Lion King": "93%" },
      { Fantasia: "95%" },
      { "James and the Giant Peach": "91%" },
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the movies inputted", () => {
    const actual = getRottenTomatoesScoreByMovie(alternative);
    const expected = [
      { "Black Panther": "96%" },
      { "Wonder Woman": "93%" },
      { Jaws: "98%" },
      { Skyfall: "92%" },
    ];
    expect(actual).toEqual(expected);
  });
});
