# Instagram with HTML & SASS
An Instagram clone using SASS instead of CSS.

Let's start with some theory about SCSS and SASS.

## Theory in SCSS/SASS

<div>
  <ol>
    <li>What is SASS? What does SASS stand for?</li>
        <p><abbr title="Syntactically awesome style sheets">SASS</abbr> stands for Syntactically awesome style sheets</p>
    <li>What is a CSS pre-processor?</li>
    <p>It is a scripting language that extend the default capabilities of CSS, by giving tools regular CSS doesn't have, like variables, nesting, etc.</p>
    <li>What does a pre-processor have to do with SASS?</li>
      <p>A pre-processor is useful because it can help with the maintenance of CSS in medium-large sites, by giving the tools that can help building, editing, and organising the files and the code itself.</p>
    <li>Why use SASS?</li>
      <p><ul> 
        <li>It's CSS syntax friendly</li>
        <li>It offers variables for whatever you want</li>
        <li>It uses nested syntax</li>
        <li>It includes mixins </li>
        <li>You can divide and conquer (file and code organization)</li>
        <li>It has a large community and is well documented</li>
        <li>If you know SASS, you can customize Bootstrap 4 (and beyond)</li>
      </ul></p>
    <li>SASS has disadvantages? Which are?</li>
      <p><ul> 
        <li>The developer must have enough time to learn new features present in this preprocessor before using it.</li>
        <li>Using SASS may cause losing benefits of browser's built-in element inspector.</li>
        <li>Code has to be compiled.</li>
        <li>Difficult Troubleshooting.</li>
      </ul></p>
    <li>What is a SASS Variable? Explain why are useful</li>
      <p>Variables in SASS are like in any other programming language, a tool to store values and use them in different places. With that in mind, the application of that on styles are limitless, and really interesting.</p>
    <li>Explain the SASS variables property with an example.</li>
      <p>An example of a SASS variable could be: <code>$primary-color: #fafafa</code>. This variable can be called as a parameter of any of our styles later, avoiding to write unnecesary code, and making it easier to change recurrent values in every place they are used.</p>
    <li>What is a mixin? Why is it important? Give an example</li>
      <p>The tools of @mixin and @include makes it easy to re-use chunks of styles. Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes and to distribute collections of styles in libraries.</p>
    <li>What is SCSS? Give an example</li>
      <p>SCSS is a special type of file for SASS , a program written in Ruby that assembles CSS style sheets for a browser, and for information, SASS adds lots of additional functionality to CSS like variables, nesting and more which can make writing CSS easier and faster. Example of a condition build with SCSS syntax:
      <code>@if ($section != button) {
              height: map-get($map, height);
              width: map-get($map, width);
            }</code></p>
    <li>What is SASS? Give an example</li>
      <p>Sass is an extension to CSS, completely compatible with CSS, that uses a pre-processor of the code.</p>
    <li>What is the difference between .scss and .sass syntax.</li>
    <p>In SASS syntax we use  indentation rather than brackets. The SCSS syntax is full compliant with CSS' syntax.</p>
    <li>In which cases would we use SCSS? And in which cases would we use SASS?</li>
      <p>SASS syntax is deprecated by today standards of the community, despite it's still being updated. Therefore, the most common practice is to use SCSS syntax.</p>
    <li>Explain how traditional CSS and Preprocessed CSS workflows are different.</li>
      <p>In the preprocessed CSS you will always need to make a compilation before its use. By the atomization of the code in smaller files, the workflow is also affected in consciously divide the code, but, when is needed to review or change, it will be more accesible and easy to work with.</p>
    <li>Can we create functions with SASS? If it is true, give an example.</li>
      <p>Yes, we can *Obama intensifies*. Example:
      <code>@function invert($color, $amount: 100%) {
              $inverse: change-color($color, $hue: hue($color) + 180);
              @return mix($inverse, $color, $amount);
            }</code></p>
    <li>What is nesting? Is it useful? Give an example of nesting</li>
      <p>Nesting is a shortcut to creating CSS rules. So instead of writing so many lines of CSS just to be specific on the style we want to apply to an element, we simply nest it. Example:
      <code>
      nav {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        li { display: inline-block; }

        a {
          display: block;
          padding: 6px 12px;
          text-decoration: none;
        }
      }
  </code></p>
    <li>Difference between @use & @import? Give an example</li>
      <p>The new <code>@use</code> is similar to <code>@import</code>. but has some notable differences:
      <ul> 
        <li>The file is only imported once, no matter how many times you <code>@use</code> it in a project.</li>
        <li>Variables, mixins, and functions (what Sass calls "members") that start with an underscore (_) or hyphen (-) are considered private, and not imported.</li>
        <li>Members from the used file (buttons.scss in this case) are only made available locally, but not passed along to future imports.</li>
        <li>Similarly, <code>@extends</code> will only apply up the chain; extending selectors in imported files, but not extending files that import this one.</li>
        <li>All imported members are namespaced by default.</li>
      </ul>
</p>
    <li>How can we import other CSS/SASS files in SASS? Give an example</li>
      <p>CSS files are already code-compatible with SASS. All you need to do is make the extension .scss, and, if needed, implement the code in your workflow, if the project is already built.</p>
    <li>Explain the concept of inheritance in SASS.</li>
      <p>Sass allows us to inherit properties from other selectors to reduce the amount of code we have to type and/or combining we have to do.</p>
    <li>Why use @extend? Give an example</li>
      <p>The <code>@extend</code> directive lets you share a set of CSS properties from one selector to another, so it saves time and requires less code.</p>
  </ol>
</div>

## Links and bibliography

### Theory bibliography
<ul> 
  <li>SASS website: <a href="https://sass-lang.com/guide"></a>https://sass-lang.com/guide</li>
  <li>Mugo web: <a href="https://www.mugo.ca/Blog/7-benefits-of-using-SASS-over-conventional-CSS"></a>https://www.mugo.ca/Blog/7-benefits-of-using-SASS-over-conventional-CSS</li>
  <li>Mobio Solutions: <a href="https://mobiosolutions.com/what-is-sass-css-advantages-disadvantages-of-using-sass-css"></a>https://mobiosolutions.com/what-is-sass-css-advantages-disadvantages-of-using-sass-css</li>
  <li>Stack Overflow: <a href="https://stackoverflow.com/questions/62757419/whats-the-difference-between-import-and-use-scss-rules"></a>https://stackoverflow.com/questions/62757419/whats-the-difference-between-import-and-use-scss-rules</li>
  <li>Koder HQ: <a href="https://www.koderhq.com/tutorial/sass/inheritance"></a>https://www.koderhq.com/tutorial/sass/inheritance</li>
</ul>


### Reset style
<ul> 
  <li>Normalize CSS (not as a library, but code): <a href="https://necolas.github.io/normalize.css"></a>https://necolas.github.io/normalize.css</li>
</ul>

### APIs
<ul>
  <li>Random user: <a href="https://randomuser.me"></a>https://randomuser.me</li>
  <li>Lorem Picsum: <a href="https://picsum.photos/"></a>https://picsum.photos/</li>
</ul>

### Icons
<ul>
  <li>Hero icons: <a href="https://heroicons.com">https://heroicons.com</a></li>
  <li>Flaticon: <a href="https://www.flaticon.es">https://www.flaticon.es</a></li>
</ul>

### Other resources
<ul>
  <li>Gradient borders in CSS: <a href="https://css-tricks.com/gradient-borders-in-css">https://css-tricks.com/gradient-borders-in-css</a></li>
  <!-- <li>Flaticon: <a href="https://www.flaticon.es">https://www.flaticon.es</a></li> -->
</ul>

### Useful information
<p>I have find useful this information below:</p>
<p>ADD OPACITY TO HEX COLOR:</p>
<p>Opacity %   255 Step        2 digit HEX prefix<br>
0%          0.00            00<br>
5%          12.75           0C<br>
10%         25.50           19<br>
15%         38.25           26<br>
20%         51.00           33<br>
25%         63.75           3F<br>
30%         76.50           4C<br>
35%         89.25           59<br>
40%         102.00          66<br>
45%         114.75          72<br>
50%         127.50          7F<br>
55%         140.25          8C<br>
60%         153.00          99<br>
65%         165.75          A5<br>
70%         178.50          B2<br>
75%         191.25          BF<br>
80%         204.00          CC<br>
85%         216.75          D8<br>
90%         229.50          E5<br>
95%         242.25          F2<br>
100%        255.00          FF
</p>