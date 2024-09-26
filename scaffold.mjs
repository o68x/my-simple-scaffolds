/** @type {import('simple-scaffold').ScaffoldConfigFile} */
export default (config) => ({
  default: {
    templates: ["project/scaffold/**/*"],
    output: ["src/components"],
    data: {
      className: "myClassName",
      author: "My Name",
      name: "duplicacy.mjs"
    },
  },
})
