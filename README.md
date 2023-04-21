# Gino's ComicBook Blog

This is webpage that holds my blog posts of specific Marvel story arcs. Users will have the ability to add their comments to any of the blog post I upload. It also has links to access issues by title as well as search for their favorite comic book character.

## Technologies

I had to create a Marvel developer account to get a public and private api key so that I could acces the free api Marvel offers. It does have a limit of 3000 calls in a 24 hour period. Also not all the data is available, in my case comic book issues were limited to 20 items. I also used Bing's AI generator to create my background image as well as the selfie in the About page.

## Approach

I wanted to stick with the topics that I felt most comfortable with (Hooks). I started out with my wireframing and made sure I knew what pages and components I needed. As well as making sure I knew what my Routes and Links were going to be. I refered to all of the homework assignments as templates for what I applied to the React project. I tried to make it as user friendly as possible and make it intuitive for any user who loves comics.

## Installation

If you desire to fork and clone this project just use the gitHub instructions. You will need to have your own Marvel developer api key as well as a hash key that you can create yourself. Marvel does not provide this hash key. The only dependecies I added was the react-router-dom to use the Routes and Link hooks.

Here is a link to my live webpage
[Github pages live link](https://gindogg878.github.io/comicbook-blog/)
[Netlify link]()

## Unresolved Issues

- I attempted to make the blog post interactive by having users create, edit, delete, comments to any specific blog post. The button to add a comment is unresponsive.
- I wanted to have the synopsis of each of the comic book issue available and displayed along side each issue but was unsuccesful retrieving the data from the api call.

## Future Goals

- Add a login functionality so users can post comments with a username assigned to the posts.
- Ability to store the post and comments in a local storage
- Add more data to the Issue page and Character page from the api.
