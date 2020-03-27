export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e7e444259d4515f9aed7afc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-87279x1b',
                  apiId: 'a12062f9-51b5-4048-b0ca-9691b3d14aee'
                },
                {
                  buildHookId: '5e7e444245bf989162addac7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qupvp5cc',
                  apiId: '76bb03b1-7ce5-49de-876b-b9c24386bf98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sujinjoshi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qupvp5cc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
