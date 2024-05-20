## The Travel Almanac Style Guide

This is an online style guide for the writers of the [Travel Almanac](https://www.travel-almanac.com/).

Client side, the application has been built with Nextjs and TypeScript. A user must be logged in to view the application. Auth has been handled using [NextAuth](https://github.com/nextauthjs/next-auth).

![Login handled using NextAuth](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507667/the-ta/login_yfzoj4.png)

Once logged in the user will be presented with the Common Words page of the application. All styling has been done using [Styled Components](https://github.com/styled-components/styled-components) and has been designed to reflect the format of the Travel Almanac's [online](https://www.travel-almanac.com/) publication.

![Commons Words Page 2](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507668/the-ta/words2_d7rvvy.png)

The user can navigate between letters of the alphabet to view the different associated words. The masonry layout of the cards has been done using [Masonic](https://github.com/jaredLunde/masonic).

![Commons Words Page](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507668/the-ta/words_ht3lv0.png)

Users can [search](https://github.com/alistairjoelquinn/travel-almanac-style-guide/blob/main/client/src/components/SearchResults.tsx) the site for a specific term and results across all pages will be displayed with the matching search term highlighted.

![User Search](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507667/the-ta/search_tagbfp.png)

Global state management is being managed with the [React Context API](https://github.com/alistairjoelquinn/travel-almanac-style-guide/blob/main/client/src/components/context/context.tsx) and [useReducer](https://github.com/alistairjoelquinn/travel-almanac-style-guide/blob/main/client/src/components/context/reducer.ts) hook. When the user navigates to a new page, additional data for this page is fetched from the CMS and added to global state. 

![Quick Formatting Page](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507668/the-ta/format_sjffsd.png)

The CMS has been built with [Sanity.io](https://github.com/sanity-io/sanity) and has a GraphQL API. Client side [data fetching](https://github.com/alistairjoelquinn/travel-almanac-style-guide/blob/main/client/src/components/context/actions.ts) is being done with [Apollo Client](https://github.com/apollographql/apollo-client).
