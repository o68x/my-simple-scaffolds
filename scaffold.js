module.exports = (config) => ({
  default: {
    templates: ["node/duplicacy/ducplicacy.mjs"],
    output: ["."],
    data: {
      className: "myClassName",
      author: "My Name",
      name: "duplicacy"
    },
  },
})