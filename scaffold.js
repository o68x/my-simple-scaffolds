module.exports = (config) => {
  console.log("Config:", config)
  return {
    duplicacy: {
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
