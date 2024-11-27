# Create website with Hugo

# Host on GitHub Pages

Tutorial: https://gohugo.io/hosting-and-deployment/hosting-on-github/

# Shortcodes

## Email address protection

You should always use the `email` shortcode in the *Markdown (.md)* to **protect email addresses from being easily crawled by bots**. Here's how to use it:

To display `info@example.com`, use the following:

```html
{{< email user="info" domain="example.com" >}}
```

Parameters Explanation:  
- user: The username part of the email address (the part before the @).
- domain: The domain part of the email address (the part after the @).

Hugo will render the following HTML:

```html
<a href="#" data-email="aW5mb0BleGFtcGxlLmNvbQ==">
    info&#64;example.com
</a>
```

Using `&#64;` instead of `@` helps protect email addresses from being scraped by bots. Bots look for the `@` symbol to collect emails, but encoding it as `&#64;` makes it harder for them to recognize while still showing correctly to users.

The `data-content` attribute contains the Base64 encoded email address `aW5mb0BleGFtcGxlLmNvbQ==`, which corresponds to `info@example.com`.

A JavaScript code listens for the page load, decodes the Base64 content, and sets the href attribute to a `mailto:` link with the decoded email.