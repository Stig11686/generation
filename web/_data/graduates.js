const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generateGrad (grad) {
  return {
    ...grad,
    bio: BlocksToMarkdown(grad.bio, { serializers, ...client.config() })
  }
}

async function getGrads () {
  const filter = groq`*[_type == "graduates"]{name, job, slug, image, "imageUrl": image.asset->url, bio, "excerpt": excerpt[0].children[0].text, twitter, linkedin, github}`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const grads = docs.map(generateGrad)
  const reducedGrads = overlayDrafts(hasToken, grads)
  
  return reducedGrads

  
}

module.exports = getGrads