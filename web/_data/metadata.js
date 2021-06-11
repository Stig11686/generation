const groq = require('groq')
const client = require('../utils/sanityClient')
module.exports =  async function() {
  return await client.fetch(groq`
    *[_type == "siteSettings"]{
      ...,
      author->
    }[0]
  `)
}
