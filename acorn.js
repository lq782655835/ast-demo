const {Parser} = require("acorn")

const MyParser = Parser.extend(
  require("acorn-jsx")(),
)
const ast = MyParser.parse("<div>123</div>")
console.log(JSON.stringify(ast))