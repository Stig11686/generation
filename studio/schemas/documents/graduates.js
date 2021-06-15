export default {
    name: 'graduates',
    type: 'document',
    title: 'Graduates',
    fieldsets: [
        {name: 'social', title: 'Social media handles', descripton: 'Enter just the username of your social media accounts'}
    ],
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'job',
        type: 'string',
        title: 'Job Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the person',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      },
      {
        name: 'bio',
        type: 'bioPortableText',
        title: 'Biography'
      },
      {
        name: 'excerpt',
        type: 'bioPortableText',
        title: 'Excerpt'
      },
      {
        title: 'Twitter',
        name: 'twitter',
        type: 'string',
        fieldset: 'social'
      },
      {
        title: 'LinkedIn',
        name: 'linkedin',
        type: 'string',
        fieldset: 'social'
      },
      {
        title: 'GitHub',
        name: 'github',
        type: 'string',
        fieldset: 'social'
      }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'slug.current',
        media: 'image'
      }
    }
  }