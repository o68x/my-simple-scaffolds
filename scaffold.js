module.exports = (config) => {
  console.log("Config:", config)
  return {
    default: {
      templates: ["node/duplicacy/ducplicacy.mjs"],
      output: ["."],
      data: {
        className: "myClassName",
        author: "My Name",
        name: "duplicacy"
      },
    },
  }
}
