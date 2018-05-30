export const BLOGS_QUERY = `
  query GetBlogs($first: Int!, $after: String) {
    shop {
      blogs(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            title
            url
          }
        }
      }
    }
  }
`

export const COLLECTIONS_QUERY = `
  query GetCollections($first: Int!, $after: String) {
    shop {
      collections(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            description
            descriptionHtml
            handle
            id
            image {
              altText
              id
              src
            }
            products(first: 250) {
              edges {
                node {
                  id
                }
              }
            }
            title
            updatedAt
          }
        }
      }
    }
  }
`
