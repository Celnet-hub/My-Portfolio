## Description

This portfolio was created using Gatsby.js for the frontend and Strapi for the backend.

## My Experiences
This project made me appreciate the ease of using GraphQl to query data from Strapi. Gatsby.js is an awesome static site generator. Looking forward to trying out others especially [Next.js](https://nextjs.org/).

## Setup Notes

1. Use main.css - less imports
2. Limit amount of components - better overview
3. React Icons was used. Goto [react icons](https://react-icons.github.io/react-icons/) for more.

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

4. Use constants to avoid repetition.

5. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
6. The Backend was created with Strapi. See Doc [here](https://strapi.io/documentation/v3.x/getting-started/introduction.html)