A Page Title is a piece of text that describes the current page or screen's content.

You can think of `<PageTitle>` as a combination `<title>` and `<h1>` tag; it is used to describe the content of the entire page/screen available to the user, and should not change unless the user navigates away from the current view. **Every page you create should have one and only one `<PageTitle>` component.**

```jsx
<PageTitle>My Homepage</PageTitle>
```

## Usage

Use a `<PageTitle>` to introduce the user to the entirety of the content available in the current view. On a blog, for instance, your index view might use: `<PageTitle>My Posts</PageTitle>` and an individual post would use its post title: `<PageTitle>{post.title}</PageTitle>`.

<!-- TODO for @tofumatt: implement this feature. -->
When using `<DocumentTitle>`, which uses `react-helmet`, the content inside `<PageTitle>` will be inserted into your page's `<title>` tag. If your `<PageTitle>` contains a link or other content aside from plain text, you should use the `documentTitle` prop to set the content that will be used by `<DocumentTitle>`:

```jsx inside Markdown
const title = 'This title is linked';
<PageTitle documentTitle={title}>
  <a href="/#/🛠 Function/Components/PageTitle">{title}</a>
</PageTitle>
```

Don't use a `<PageTitle>` for:
- Text describing only part of a page's content. Use `<Heading>` instead.
- Creating multiple `<h1>` components. There should only be one `<PageTitle>` on the page.

## Appearance

- TODO for @sarahmonster.

## Variations

TODO for @sarahmonster.

## Voice & Tone

A page title should ideally be very short and describe the content available to the user on the page. If the page is for editorial content (eg. a blog post or other piece of prose), the title of said prose is appropriate (even if it's long). If the page is for an app, something short and descriptive like `<PageTitle>Manage Account</PageTitle>` is appropriate. Avoiding describing nested content or actions; `<PageTitle>Manage Account: Update your Credit Card Information and Change your Email</PageTitle>` would be better split into separate `<Heading>` sections for each action.

## Accessibility

For accessibility reasons, it's important that `<PageTitle>` exists to describe the purpose of the page to a user of assistive technology. It's also useful for search engine crawlers.

- Always use a single `<PageTitle>` tag per page.
