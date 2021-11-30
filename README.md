## The Travel Almanac Style Guide

This is an online style guide for the writers of the [Travel Almanac](https://www.travel-almanac.com/). It can be found [here](https://travel-almanac-style-guide.vercel.app/).

Client side, the application has been built with Nextjs and TypeScript. A user must be logged in to view the application. Auth has been handled using [NextAuth](https://github.com/nextauthjs/next-auth).

![Login handled using NextAuth](/img/login.png)

Once Logged in the user will be presented with the Common Words page of the application. All styling has been done using [Styled Components](https://github.com/styled-components) and been been designed to reflect the format of the Travel Almanac's [online](https://www.travel-almanac.com/) publication.

![Commons Words Page](/img/words.png)

The user can navigate between letters of the alphabet to view the different associated words. The masonry layout of the cards has been done using [Masonic](https://github.com/jaredLunde/masonic).

![Commons Words Page 2](/img/words2.png)

Users can search the site for a specific term and results across all pages will be displayed with the matching search term highlighted.

![User Search](/img/search.png)

When the application loads, only the data for the requested page is fetched and stored in state. Data fetching for the other pages can happen one of 2 ways. Either on a page by page basis as the user navigates, or all at once if the user searches the site. This is the only scenario where all data is fetched in order to avoid unnecessarily requesting data.