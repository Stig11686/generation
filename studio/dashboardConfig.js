export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60bde6afcba5884ca5a85951',
                  title: 'Sanity Studio',
                  name: 'generation-studio',
                  apiId: '84e9cfdd-4688-440f-8c70-953c2d2d9024'
                },
                {
                  buildHookId: '60bde6afe8ad18108a5cef33',
                  title: 'Blog Website',
                  name: 'generation-web',
                  apiId: 'ba133cd3-ddcc-4511-9b7a-79a811caa6d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Stig11686/generation',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://generation-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
