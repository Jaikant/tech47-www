const parseFilepath = require('parse-filepath');
const path = require('path');
const slash = require('slash');
const createPaginatedPages = require('gatsby-paginate');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  //We check for fileAbsolutePath to skip contentful nodes only nodes on filesystem.
  if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath != null) {
    const fileNode = getNode(node.parent);
    try {
      const parsedFilePath = parseFilepath(fileNode.relativePath);
      if (parsedFilePath !== 'undefined') {
        const slug = `/${parsedFilePath.dir}`;
        createNodeField({ node, name: 'slug', value: slug });
      }
    } catch(error) {
      console.log("caught an Error!!!", error);
    }
    //Below check is needed for contentful. else it errors.
  }
};

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};
  console.log("creating posts");

  edges
    .forEach(({ node }) => {
      if (node.tags) {
        node.tags
          .forEach(tag => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });

  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const post = posts[tagName];
      createPage({
        path: `/tags/${tagName}`,
        component: tagTemplate,
        context: {
          posts,
          post,
          tag: tagName
        }
      })
    });
}
// image dimensions 268 * 0.75 = 201
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  new Promise((resolve, reject) => {

    //contentful fragment taken from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-contentful/src/fragments.js
    const contentfulPostTemplate = path.resolve(
      'src/templates/contentful-post-template.js'
    );
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(filter: {featured: {ne: "featured"}}) {
               edges {
                 node {
                   id
                   featured
                   title
                   tags
                   slug
                   createdAt
                   updatedAt(formatString: "MMMM DD YYYY")
                   description {
                     id
                   }
                   blog {
                     childMarkdownRemark {
                       timeToRead
                       excerpt(pruneLength: 200)
                     }
                   }
                   featuredImage {
                     title
                     resolutions(width: 350, height: 175, cropFocus: FACES) {
                       width
                       height
                       src
                       srcSet
                     }
                   }
                  author{
                    name
                    profilePicture{
                      resolutions(width:50,height:50){
                        src
                      }
                    }
                  }
                 }
               }
            }
            contentfulBlogPost(featured: {eq: "featured"}) {
               id
               title
               featured
               tags
               slug
               createdAt
               updatedAt(formatString: "MMMM DD YYYY")
               description {
                 id
               }
               blog {
                 childMarkdownRemark {
                   timeToRead
                   excerpt(pruneLength: 300)
                 }
               }
               featuredImage {
                 title
                 sizes(maxWidth: 716, maxHeight: 310, quality: 100) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                 }
               }
              author{
                    name
                    profilePicture{
                      resolutions(width:50,height:50){
                        src
                      }
                    }
                  }
             }
          }
        `
      ).then(contentful => {
          if (contentful.error) {
            console.log("error is ", contentful.error);
            reject(contentful.error);
          }
          const contentfulposts = contentful.data.allContentfulBlogPost.edges;
          if (contentful.data.contentfulBlogPost != null) {
            contentfulposts.unshift({ node : contentful.data.contentfulBlogPost});
          }
          createTagPages(createPage, contentfulposts);

          contentfulposts.forEach((post, index) => {

            createPaginatedPages({
              edges: contentfulposts,
              createPage: createPage,
              pageTemplate: "src/templates/blogcontentful.js",
              pageLength: 10,
              pathPrefix: "blog"
            });

            const prev = index === 0 ? false : contentfulposts[index - 1].node;
            const next = index === contentfulposts.length - 1 ? false : contentfulposts[index + 1].node;
            createPage({
              path: `blog/${post.node.slug}`,
              component: slash(contentfulPostTemplate),
              context: {
                slug: post.node.slug,
                prev: prev,
                next: next
              }
            });
          });
        }
      )
    );
  });

  // meetups
  new Promise((resolve, reject) => {

    //contentful fragment taken from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-contentful/src/fragments.js
    const contentfulPostTemplate = path.resolve(
      'src/templates/contentful-meetup-template.js'
    );
    resolve(
      graphql(
        `
          {
            allContentfulMeetUps(filter: {featured: {ne: "featured"}}) {
               edges {
                 node {
                   id
                   featured
                   title
                   tags
                   slug
                   createdAt
                   updatedAt(formatString: "MMMM DD YYYY")
                   description {
                     id
                   }
                   blog {
                     childMarkdownRemark {
                       timeToRead
                       excerpt(pruneLength: 200)
                     }
                   }
                   featuredImage {
                     title
                     resolutions(width: 350, height: 175, cropFocus: FACES) {
                       width
                       height
                       src
                       srcSet
                     }
                   }
                  author{
                    name
                    profilePicture{
                      resolutions(width:50,height:50){
                        src
                      }
                    }
                  }
                 }
               }
            }
            contentfulMeetUps(featured: {eq: "featured"}) {
               id
               title
               featured
               tags
               slug
               createdAt
               updatedAt(formatString: "MMMM DD YYYY")
               description {
                 id
               }
               blog {
                 childMarkdownRemark {
                   timeToRead
                   excerpt(pruneLength: 300)
                 }
               }
               featuredImage {
                 title
                 sizes(maxWidth: 716, maxHeight: 310, quality: 100) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                 }
               }
              author{
                    name
                    profilePicture{
                      resolutions(width:50,height:50){
                        src
                      }
                    }
                  }
             }
          }
        `
      ).then(contentful => {
          if (contentful.error) {
            console.log("error is ", contentful.error);
            reject(contentful.error);
          }
          const contentfulposts = contentful.data.allContentfulMeetUps.edges;
          if (contentful.data.contentfulMeetUps != null) {
            contentfulposts.unshift({ node : contentful.data.contentfulMeetUps});
          }
          createTagPages(createPage, contentfulposts);

          contentfulposts.forEach((post, index) => {

            createPaginatedPages({
              edges: contentfulposts,
              createPage: createPage,
              pageTemplate: "src/templates/blogcontentful.js",
              pageLength: 10,
              pathPrefix: "meetups"
            });

            const prev = index === 0 ? false : contentfulposts[index - 1].node;
            const next = index === contentfulposts.length - 1 ? false : contentfulposts[index + 1].node;
            createPage({
              path: `meetup/${post.node.slug}`,
              component: slash(contentfulPostTemplate),
              context: {
                slug: post.node.slug,
                prev: prev,
                next: next
              }
            });
          });
        }
      )
    );
  });

};
