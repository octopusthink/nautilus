A Page Title is a short line of text that describes the current page or screen. Every page or screen in your site or app should have **one** `<PageTitle>` component: no more, no less.

```jsx
<PageTitle noMargin>Super-groovy fantastico homepage!</PageTitle>
```

## Usage

Use a `<PageTitle>` to provide a visual indication and summary of the current page or screen.

Don't use a `<PageTitle>` for:
- Text describing only a portion of a page's content. Use `<Heading>` instead.
- Creating multiple `<h1>` components. There should only be one `<PageTitle>` on the page.

## Technical Implementation

You can think of `<PageTitle>` as a combination `<title>` and `<h1>` tag. It is used to describe the content of the entire page/screen available to the user, and should not change unless the user navigates away from the current view. **Every page you create** should have **one and only one** `<PageTitle>` component.

Use a `<PageTitle>` to introduce the user to the entirety of the content available in the current view. On a blog, for instance, your index view might use: `<PageTitle>My Posts</PageTitle>` and an individual post would use its post title: `<PageTitle>{post.title}</PageTitle>`.

 When using `<DocumentTitle>`, which uses `react-helmet`, the content inside `<PageTitle>` will be inserted into your page's `<title>` tag. If your `<PageTitle>` contains a link or other content aside from plain text, you should use the `documentTitle` prop to set the content that will be used by `<DocumentTitle>`:

 ```jsx inside Markdown
 const title = 'This title is linked';
 <PageTitle noMargin documentTitle={title}>
   <a href="/#/🛠 Function/Components/PageTitle">{title}</a>
 </PageTitle>
 ```

## Appearance

- Use a consistent style rules for `<PageTitle>`s across your site, even if you're doing creative art direction.
- Since a `<PageTitle>` is highest in hierarchy, it should be larger or have more emphasis than other `<Heading>`s.
- `<PageTitle>`s can use styling similar to `<Heading>`s, but doesn't need to. Since they are the highest in the hierarchy and only appear once per view, you can feel free to get a little creative with them. Highlight your brand, apply funky styles like gradients or skews, use hand-lettering effects, or art-direct each one with different typography and special styling.

## Voice & Tone

- Keep the title short and descriptive of the page's content.
- `<PageTitle>` can use Sentence case or Title Case, depending on your personal tastes and the formality of your site or app. Whichever you pick, be consistent throughout!
- If the page is for editorial content (eg. a blog post or other piece of prose), the title of said prose is appropriate (even if it's long).
- If the page is for an app, something short and descriptive like `Manage Account` is appropriate.
- Avoiding describing nested content or actions. `Manage Account: Update your Credit Card Information and Change your Email` would be better split into separate `<Heading>` sections for each action.

## Accessibility

For accessibility reasons, it's important that `<PageTitle>` exists to describe the purpose of the page to a user of assistive technology. It's also useful for search engine crawlers.

- Every page or screen in your site or app should have **one** `<PageTitle>` component.
- Don't use more than **one** `<PageTitle>` component on a single page or screen.
- Your `<PageTitle>` should *only* be the title of your site on your homepage. On all other pages, the `<PageTitle>` should describe the content of that page.
