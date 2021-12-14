import Layout from '@/layouts/Page';

export default function Page() {
  return (
    <article>
      <p>
        A design system is not just a collection of design artifacts; it’s a philosophy. To create a great user
        experience, product teams should understand not only what they need to build but also why they need to build it.{' '}
      </p>
      <p>
        What is a design system? A design system is a collection of reusable functional elements–components and
        patterns–guided by clear standards that product teams use to create a consistent experience across a range of
        products.
      </p>
      <h2>Design tokens</h2>
      <p>
        Design system tokens are the style values of UI elements such as color, typography, spacing, shadows, etc., that
        are used across products and capable of being converted to a format for any platform (web, mobile, desktop).
        Tokens are building blocks of the design system—think of them as sub atoms, the smallest pieces of style values
        that allow designers to create styles for a product.
      </p>
      <p>$blue-400 = #2680EB;</p>
      <p>$button-cta-background-color = $blue-400;</p>

      <h3>Criteria for creating tokens</h3>
      <p>
        When does a style option become a token? Having clear criteria for when to create tokens is helpful. “X times
        used” criteria is a simple yet effective way to decide which options should be tokenized. If a style is used in
        only one place, you probably don’t need to create a token.
      </p>

      <h3>Naming conventions</h3>
      <p>
        A design system’s strength comes from knowing how to apply options to context. It’s essential to ensure the
        correct token is used on the correct property. Different teams will indeed name things differently. That’s why
        it’s crucial to define clear naming conventions before you start working on tokens.
      </p>

      <p>
        Here is a recommended approach for naming: [Category]-[Type]-[Item]-[State]. If you follow this approach, you
        will have something like this: color-background-ctabutton-active
      </p>

      <p>
        When a designer needs a color for an active call-to-action button, they should be able to look through a
        collection of tokens and select one that matches their needs.
      </p>

      <h3>Scales</h3>
      <p>
        Scales like t-shirt sizing (XS, S, M, L, XL, XXL) or progressions (2, 4, 8, 16, 32) can be very helpful when you
        need to apply tokens for different scenarios. For example, you might have a default font size for body text and
        rely on t-shirt sizing when you need to adjust it to different screen sizes.
      </p>

      <h3>JSON token data</h3>
      <p>
        JSON is an excellent format for encoding value pairs. With tokens in JSON, you can adjust design options for
        multiple preprocessors—SASS, LESS, or Stylus.
      </p>

      <ul>
        <li>https://atomicdesign.bradfrost.com/</li>
        <li>https://xd.adobe.com/ideas/principles/design-systems/</li>
        <li>https://xd.adobe.com/ideas/principles/design-systems/what-are-design-tokens/</li>
      </ul>
    </article>
  );
}

Page.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
