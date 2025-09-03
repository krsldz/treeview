module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.js(x)?$": "babel-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
};
