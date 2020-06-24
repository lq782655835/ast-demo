const compiler = require('vue-template-compiler')

const ast = compiler.compile('<div v-test></div>', {
    directives: {
      test (node, directiveMeta) {
        // transform node based on directiveMeta
      }
    }
  })

console.log(ast)