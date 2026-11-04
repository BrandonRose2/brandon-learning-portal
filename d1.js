/* Web Foundations */
G.push(
{ id:'html', t:'HTML', cat:'Web Foundations', e:'🧱', lvl:'Beginner',
  tag:'The skeleton of every web page, email template and Shopify theme.',
  role:'The structure layer of anything people see in a browser: stores, landing pages, dashboards, even emails.',
  eli5:'HTML is like labeling boxes when you move. You put a sticker on each thing: "this is a title", "this is a picture", "this is a button". The browser reads the stickers and knows how to show everything.',
  pro:'HyperText Markup Language defines the structure and meaning of a document. The browser parses it into the <b>DOM</b> (Document Object Model), a tree that CSS styles and JavaScript manipulates. Semantic elements (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;button&gt;</code>) carry meaning for screen readers and search engines.',
  why:'Every web, Shopify, email-marketing and no-code job assumes it. Clean semantic HTML directly affects SEO rankings and accessibility compliance (ADA lawsuits are real for e-commerce brands).',
  kw:['html','html5','semantic html','markup','dom'],
  jobs:['HTML/CSS','HTML5','semantic markup','accessibility (WCAG)','email templates'],
  res:'Built responsive, semantic HTML pages and templates that improved accessibility and SEO scores.',
  con:[['Elements, tags & attributes','<code>&lt;a href="/pricing"&gt;Pricing&lt;/a&gt;</code>: the tag says what it is; attributes like <code>href</code>, <code>src</code>, <code>alt</code>, <code>class</code> add details.'],
    ['Document structure','<code>&lt;head&gt;</code> holds metadata (title, description, links to CSS); <code>&lt;body&gt;</code> holds what users see.'],
    ['Semantic HTML','Use the element that matches the meaning: <code>&lt;button&gt;</code> for actions, <code>&lt;nav&gt;</code> for menus, <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> in order. Google and screen readers depend on it.'],
    ['Forms','<code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;select&gt;</code> collect data: lead forms, checkouts, signups. They usually send data to an API.'],
    ['The DOM','The live tree the browser builds from HTML. JavaScript reads and changes it to make pages interactive.'],
    ['Meta tags','<code>&lt;title&gt;</code>, <code>&lt;meta name="description"&gt;</code> and Open Graph tags control how pages look in Google results and social shares.']],
  ex:[['E-commerce','Shopify product pages','Shopify themes are HTML + Liquid templates. Editing a product template to add a size chart is an HTML job.'],
    ['Marketing','Email campaigns','Klaviyo and Constant Contact emails are table-based HTML; knowing it lets you fix broken layouts.'],
    ['Real estate','Listing landing pages','A single-property page with photos, a details list and an inquiry form is pure HTML structure.'],
    ['Accessibility','ADA compliance','Proper <code>alt</code> text, labels and headings keep a brand out of accessibility lawsuits.']],
  link:[['web-design','Design decides how it should look; HTML gives it a structure to style.'],['tailwind','Tailwind classes go right on your HTML elements to style them.'],['javascript','JavaScript reads and changes the HTML (the DOM) to make it interactive.'],['seo','Headings, titles, meta tags and alt text in your HTML are SEO signals.'],['shopify','Shopify themes are HTML + Liquid; you will edit HTML inside them.'],['web-scraping','Scrapers read the HTML of other sites to extract data.']],
  code:{ i:'Save this as <code>index.html</code>, double-click it, and it opens in your browser. Change text and refresh.', s:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Oak Terrace Apartments | Sherman Oaks</title>
  <meta name="description" content="Modern 1 & 2 bedroom apartments near Ventura Blvd.">
</head>
<body>
  <header><nav><a href="#units">Units</a> · <a href="#contact">Contact</a></nav></header>
  <main>
    <h1>Oak Terrace Apartments</h1>
    <img src="pool.jpg" alt="Resort-style pool at sunset">
    <section id="units">
      <h2>Available units</h2>
      <ul><li>Unit 102: 1 bed, $2,500/mo</li><li>Unit 210: 2 bed, $3,100/mo</li></ul>
    </section>
    <form id="contact">
      <label>Email <input type="email" name="email" required></label>
      <button type="submit">Schedule a tour</button>
    </form>
  </main>
</body>
</html>`, n:'Add a second page (<code>about.html</code>) and link them. Then run your page through a free accessibility checker such as WAVE.' },
  vid:[['HTML in 100 Seconds','Fireship','~2 min','Lightning-fast overview to frame everything.'],['HTML Tutorial for Beginners: HTML Crash Course','Programming with Mosh','~1 hr','Clear, structured crash course with good habits.'],['Learn HTML – Full Tutorial for Beginners','freeCodeCamp.org','~4 hr','Deep dive. Use as a reference and skip around.']],
  quiz:[['Which element is best for a clickable action that submits or opens something?',['<code>&lt;div onclick&gt;</code>','<code>&lt;button&gt;</code>','<code>&lt;span&gt;</code>','<code>&lt;b&gt;</code>'],1,'A real <code>&lt;button&gt;</code> is keyboard-accessible and announced correctly by screen readers.'],
    ['What does the <code>alt</code> attribute on an image do?',['Sets the image size','Describes the image for screen readers & SEO','Adds a tooltip animation','Lazy-loads it'],1,'Alt text describes images for blind users and helps Google understand them.'],
    ['Where does the page &lt;title&gt; go?',['In &lt;body&gt;','In &lt;footer&gt;','In &lt;head&gt;','In the CSS file'],2,'Metadata like title and description lives in <code>&lt;head&gt;</code>.'],
    ['What is the DOM?',['A database','The browser\'s live tree of the page that JS can change','A CSS framework','A hosting service'],1,'The Document Object Model is the in-memory tree built from your HTML.']],
  fc:[['What does HTML stand for?','HyperText Markup Language'],['Semantic HTML','Using elements that match meaning (<code>nav</code>, <code>main</code>, <code>button</code>) instead of generic <code>div</code>s'],['&lt;head&gt; vs &lt;body&gt;','Head = metadata (title, description, CSS links). Body = visible content.'],['Why use only one &lt;h1&gt;?','It signals the main topic of the page to users and search engines'],['Open Graph tags','Meta tags controlling the preview card when a link is shared on social media']],
  iv:[['What is semantic HTML and why does it matter?','It\'s choosing elements by meaning: <code>header</code>, <code>nav</code>, <code>main</code>, <code>button</code>. It improves accessibility (screen readers understand the page), SEO (Google understands structure) and maintainability. Example: I replaced clickable divs with buttons so the form worked with a keyboard.'],
    ['How would you make a page accessible?','Proper heading order, alt text, labeled form fields, real buttons and links, enough color contrast, keyboard navigation, and a test with an automated checker plus a screen reader.'],
    ['What happens when a browser loads an HTML page?','It downloads the HTML, parses it into the DOM, fetches linked CSS/JS/images, builds the render tree, lays it out and paints it. JavaScript can then modify the DOM.']],
  links:[['MDN: HTML basics','https://developer.mozilla.org/en-US/docs/Learn/HTML'],['freeCodeCamp Responsive Web Design (free cert)','https://www.freecodecamp.org/learn/']] },

{ id:'web-dev', t:'Web Development', cat:'Web Foundations', e:'🌐', lvl:'Beginner',
  tag:'How websites and web apps are built, from the browser to the server and back.',
  role:'The umbrella skill: front end (what users see) plus back end (servers, data) working together over HTTP.',
  eli5:'A website is like a restaurant. The dining room (front end) is what guests see. The kitchen (back end) cooks the food. The waiter (HTTP) carries orders back and forth.',
  pro:'Web development spans the <b>front end</b> (HTML, CSS, JavaScript running in the browser), the <b>back end</b> (server code in Node.js, Python, etc., plus databases) and the <b>protocol</b> between them: HTTP requests and responses, usually carrying JSON. Add hosting, DNS and deployment and you have a full web system.',
  why:'"Web developer" is still one of the largest categories of remote job. Even non-dev roles (marketing ops, e-commerce, automation) prefer people who understand how sites work end to end.',
  kw:['web development','web developer','frontend','front-end','front end','backend','back-end','website','websites','web app','web applications','css','http'],
  jobs:['Frontend Developer','Web Developer','HTML/CSS/JS','responsive design','HTTP/REST'],
  res:'Developed and maintained responsive websites and internal web tools, from front-end UI to server integration.',
  con:[['Front end vs back end','Front end runs in the browser (HTML/CSS/JS). Back end runs on a server (APIs, databases, business logic).'],
    ['HTTP request/response','The browser sends a request (<code>GET /products</code>), the server replies with a status code (200, 404, 500) and data.'],
    ['CSS','Cascading Style Sheets control layout, color, fonts and responsiveness (flexbox, grid, media queries).'],
    ['Static vs dynamic sites','Static = same files for everyone (fast, cheap). Dynamic = generated per user from a database (accounts, carts).'],
    ['Responsive design','One site that adapts to phone, tablet and desktop. Over 60% of e-commerce traffic is mobile.'],
    ['Browser dev tools','Right-click → Inspect: see HTML, tweak CSS live, read console errors and watch network requests. Your #1 debugging tool.']],
  ex:[['Property mgmt','Resident portal','Residents log in (back end checks the password), see their balance (database) and pay rent (payment API).'],
    ['E-commerce','Online store','Product grid (front end) loads inventory from an API; checkout posts the order to the server.'],
    ['SaaS','Web dashboard','Charts in the browser are drawn from JSON the back end calculates.'],
    ['Agencies','Client websites','Agencies hire remote devs to build marketing sites on WordPress, Webflow or custom code.']],
  link:[['html','The structure layer of every page you build.'],['javascript','The language of the front end and (with Node) the back end.'],['api','Front end and back end talk through APIs.'],['full-stack','Full stack = doing both sides of web development.'],['dns','DNS is how users find your site by name.'],['web-design','Design decisions you implement as a developer.']],
  code:{ i:'Open any website, press <b>Cmd+Option+I</b> (Mac), click the <b>Console</b> tab and paste this. You just talked to an API from the browser, like a front end does.', s:`// Fetch fake product data from a public test API
fetch('https://fakestoreapi.com/products?limit=3')
  .then(res => res.json())
  .then(products => {
    products.forEach(p => console.log(p.title, '$' + p.price));
  });

// Now open the Network tab and run it again:
// you'll see the HTTP request, status 200 and the JSON response.`, n:'Build a one-page site that fetches those products and displays them as cards (HTML + CSS + JS together).' },
  vid:[['100+ Web Development Things you Should Know','Fireship','~13 min','A fast map of the whole web dev world.'],['How the Web Works','Fireship OR web dev simplified','~10 min','Requests, servers, DNS and browsers in plain terms.'],['The Odin Project / web development roadmap','Traversy Media','~30 min','What to learn in what order.']],
  quiz:[['A 404 status code means…',['Server crashed','Not found','Success','Unauthorized'],1,'404 = the requested resource doesn\'t exist. 500 = server error, 401 = unauthorized, 200 = OK.'],
    ['Which runs in the user\'s browser?',['PostgreSQL','The front end (HTML/CSS/JS)','Docker','Cron jobs'],1,'Front-end code runs on the user\'s device; back-end code runs on servers.'],
    ['Responsive design means…',['The site loads fast','The layout adapts to screen size','It responds to emails','It uses React'],1,'Responsive layouts reflow for phones, tablets and desktops.'],
    ['Best first tool to debug a broken page?',['Reinstall the OS','Browser dev tools (Console & Network)','Call the host','Delete CSS'],1,'Dev tools show errors, failing requests and the live DOM.']],
  fc:[['Front end','Code that runs in the browser: HTML, CSS, JavaScript'],['Back end','Code that runs on a server: APIs, business logic, databases'],['HTTP 200 / 404 / 500','OK / Not found / Server error'],['CSS flexbox & grid','Layout systems for arranging elements in rows/columns'],['Static vs dynamic site','Same files for all vs. generated per request from data']],
  iv:[['Walk me through what happens when I type a URL and press Enter.','DNS resolves the domain to an IP; the browser opens a TLS connection; sends an HTTP GET; the server (maybe via CDN) returns HTML; the browser parses it, requests CSS/JS/images, builds the DOM and renders. JS may then call APIs for more data.'],
    ['How do you debug a page that works on desktop but breaks on mobile?','Reproduce it with dev tools device mode, check media queries and fixed widths, test on a real device, check console errors (Safari remote inspector for iOS), then fix with flexible layouts.'],
    ['What\'s the difference between front end and back end?','Front end is the interface in the browser; back end handles data, auth and business logic on the server. They communicate over HTTP, usually with JSON APIs.']],
  links:[['MDN Learn web development','https://developer.mozilla.org/en-US/docs/Learn'],['The Odin Project (free full curriculum)','https://www.theodinproject.com/'],['roadmap.sh frontend','https://roadmap.sh/frontend']] },

{ id:'web-design', t:'Web Design', cat:'Web Foundations', e:'🎨', lvl:'Beginner',
  tag:'Making sites that look good, feel easy, and turn visitors into customers.',
  role:'Decides the look, layout and flow that convert visitors into leads and buyers.',
  eli5:'Web design is arranging a store so people find what they want fast and feel good buying it. Clear signs, nice lighting, the checkout right where you expect it.',
  pro:'Web design covers <b>UI</b> (visual: typography, color, spacing, components) and <b>UX</b> (flow, usability, information architecture). Core tools: Figma for mockups, design systems for consistency, and conversion-rate optimization (CRO) for measuring which designs perform.',
  why:'Design quality directly moves conversion rate, the number every e-commerce and SaaS company obsesses over. Devs who "get" design and marketers who can mock up pages are rare and valued.',
  kw:['web design','ui','ux','ui/ux','figma','wireframe','wireframes','design system','accessibility','wcag','landing page','landing pages','cro','conversion rate'],
  jobs:['UI/UX','Figma','landing page design','CRO / A-B testing','design systems'],
  res:'Designed conversion-focused landing pages and UI in Figma, improving clarity and lead capture.',
  con:[['Visual hierarchy','Size, contrast and placement tell eyes where to go first: headline → benefit → call to action.'],
    ['Typography & spacing','1–2 fonts, consistent sizes, generous whitespace. Spacing on a 4/8px scale looks "professional".'],
    ['Color & contrast','A primary brand color, one accent for CTAs, neutral grays. Text needs 4.5:1 contrast (WCAG).'],
    ['UX & user flows','Map the steps a user takes (ad → landing page → form → thank-you) and remove friction at each step.'],
    ['Figma & wireframes','Sketch low-fidelity boxes first, then high-fidelity mockups, then prototype clicks, all before code.'],
    ['CRO & A/B testing','Show version A to half your visitors and B to the rest; keep the winner. Design becomes data-driven.']],
  ex:[['E-commerce','Product page','Big photos, price, reviews, sticky add-to-cart. Small layout tweaks can lift sales 10%+.'],
    ['Ads','Ad landing pages','The page must match the ad\'s promise ("message match") or paid traffic bounces.'],
    ['SaaS','Onboarding flow','Fewer steps to the "aha moment" means more trial-to-paid conversions.'],
    ['Property mgmt','Listing site','Filter by beds/price, photo gallery, one-tap "Schedule tour".']],
  link:[['html','You design it; HTML structures it.'],['tailwind','Tailwind turns design decisions (spacing, color) into utility classes fast.'],['shopify','Shopify themes are design systems you customize.'],['google-analytics','Analytics tells you if the design actually converts.'],['meta-ads','Ad creative and landing-page design must match.'],['app-dev','Mobile apps need the same UI/UX thinking.']],
  code:{ i:'Paste into an <code>.html</code> file: a hero section that applies hierarchy, spacing and one strong CTA.', s:`<section style="font-family:system-ui;max-width:640px;margin:80px auto;text-align:center;padding:0 20px">
  <p style="color:#6d28d9;font-weight:700;letter-spacing:.08em">NEW IN SHERMAN OAKS</p>
  <h1 style="font-size:44px;line-height:1.1;margin:8px 0">Live 5 minutes from Ventura Blvd</h1>
  <p style="font-size:18px;color:#555;margin:16px 0 28px">
    Modern 1 & 2 bedrooms with in-unit laundry. First month free.
  </p>
  <a href="#tour" style="background:#6d28d9;color:#fff;padding:14px 28px;
     border-radius:10px;text-decoration:none;font-weight:700">Book a tour</a>
  <p style="font-size:13px;color:#888;margin-top:14px">★★★★★ 4.8 from 120 residents</p>
</section>`, n:'Recreate the hero of a site you admire in Figma (free), then build it. Try two headline versions and ask 5 people which they\'d click.' },
  vid:[['Web Design for Beginners','Flux Academy','~20 min','Principles of layout, hierarchy and process.'],['UI Design Tutorial for Beginners Figma','DesignCourse','~30 min','Hands-on Figma, from blank canvas to a polished UI.'],['7 rules for creating gorgeous UI','Kevin Powell OR Erik Kennedy','~15 min','Practical rules you can apply today.']],
  quiz:[['What is "message match"?',['Matching fonts','Landing page echoes the ad\'s promise','Responsive images','Email subject lines'],1,'When the page matches the ad, visitors trust it and convert.'],
    ['Minimum contrast ratio for normal text (WCAG AA)?',['2:1','3:1','4.5:1','10:1'],2,'4.5:1 for body text, 3:1 for large text.'],
    ['A/B testing is…',['Testing in two browsers','Showing two versions to split traffic and comparing results','Alpha & beta releases','Accessibility testing'],1,'Split traffic, measure conversions, keep the winner.'],
    ['Low-fidelity wireframes are for…',['Final colors','Structure & layout before visuals','Writing code','SEO'],1,'Wireframes settle layout cheaply before investing in visuals.']],
  fc:[['UI vs UX','UI = how it looks. UX = how it works & feels to use.'],['CTA','Call to action: the one thing you want the visitor to do'],['Visual hierarchy','Using size, color and position to guide attention'],['Figma','Collaborative browser-based design and prototyping tool'],['CRO','Conversion rate optimization: improving % of visitors who act']],
  iv:[['How do you approach designing a landing page?','Start with the goal and audience, write the copy first, wireframe the hierarchy (headline, proof, CTA), design in Figma, build, then A/B test the headline and CTA using analytics.'],
    ['How do you balance aesthetics and conversion?','Beauty supports trust, but clarity converts. I keep one primary CTA, strong hierarchy and fast load times, then let A/B tests settle debates instead of opinions.'],
    ['How do you ensure accessibility in design?','Contrast checks, readable font sizes, focus states, never relying on color alone, alt text, and testing with keyboard and screen reader.']],
  links:[['Laws of UX','https://lawsofux.com/'],['Figma Learn','https://help.figma.com/hc/en-us/categories/360002051613']] },

{ id:'tailwind', t:'Tailwind CSS', cat:'Web Foundations', e:'💨', lvl:'Beginner',
  tag:'Style anything fast with small utility classes, right in your HTML.',
  role:'The fast styling layer for modern React apps, landing pages and SaaS dashboards.',
  eli5:'Instead of writing a long recipe for how a button should look, you stick on little labels: "blue", "rounded", "bold". Each label does one small thing.',
  pro:'Tailwind is a <b>utility-first CSS framework</b>: classes like <code>p-4</code>, <code>text-lg</code>, <code>bg-violet-600</code>, <code>md:flex</code> map to single CSS rules. A build step scans your files and ships only the classes you use. Responsive (<code>md:</code>), state (<code>hover:</code>) and dark mode (<code>dark:</code>) are prefixes.',
  why:'Tailwind is the default styling choice in most new React/Next.js and SaaS codebases, and nearly every AI coding tool outputs it. Listing it signals you can work in a modern front-end stack.',
  kw:['tailwind','tailwindcss','tailwind css','shadcn'],
  jobs:['Tailwind CSS','utility-first CSS','responsive UI','shadcn/ui','design systems'],
  res:'Built responsive, consistent UI components with Tailwind CSS, speeding up front-end delivery.',
  con:[['Utility classes','<code>flex items-center gap-4 p-6 rounded-xl shadow</code>: layout and style without writing CSS files.'],
    ['Responsive prefixes','<code>grid-cols-1 md:grid-cols-3</code>: one column on phones, three on tablets and up. Mobile-first.'],
    ['States & dark mode','<code>hover:bg-violet-700</code>, <code>focus:ring</code>, <code>dark:bg-gray-900</code>.'],
    ['Design tokens','A built-in scale for spacing, colors and fonts keeps designs consistent; customize it in the config/theme.'],
    ['Component libraries','shadcn/ui, Flowbite and Tailwind UI give you prebuilt components you can copy and edit.']],
  ex:[['SaaS','Admin dashboards','Cards, tables and sidebars built in hours instead of days.'],
    ['Startups','Landing pages','Rapid iteration on hero sections during A/B tests.'],
    ['AI tools','Generated UIs','v0, Replit Agent and Claude output Tailwind by default, so you need to read and tweak it.'],
    ['E-commerce','Headless storefronts','Custom Shopify Hydrogen/Next.js stores are commonly styled with Tailwind.']],
  link:[['html','Tailwind classes live on HTML elements.'],['react','The most common pairing: React components styled with Tailwind.'],['web-design','Tailwind\'s scale enforces good spacing & type habits.'],['replit','AI app builders output Tailwind; knowing it lets you customize.']],
  code:{ i:'No install needed: this uses the Tailwind CDN (fine for learning). Save as an .html file and open it.', s:`<script src="https://cdn.tailwindcss.com"></script>
<div class="min-h-screen bg-slate-950 grid place-items-center p-6">
  <div class="max-w-sm w-full rounded-2xl bg-slate-900 p-6 shadow-xl ring-1 ring-white/10">
    <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">Best seller</span>
    <h2 class="mt-2 text-2xl font-bold text-white">Linen Throw Blanket</h2>
    <p class="mt-1 text-slate-400">Breathable, pre-washed, ships free.</p>
    <div class="mt-4 flex items-center justify-between">
      <span class="text-3xl font-extrabold text-white">$89</span>
      <button class="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white
                     hover:bg-violet-500 active:scale-95 transition">Add to cart</button>
    </div>
  </div>
</div>`, n:'Make it a responsive grid of 3 cards (<code>grid md:grid-cols-3 gap-6</code>) and add a <code>dark:</code> variant.' },
  vid:[['Tailwind in 100 Seconds','Fireship','~2 min','Why utility-first works.'],['Tailwind CSS Crash Course','Traversy Media','~1.5 hr','Build real layouts step by step.'],['Tailwind CSS Tutorial','The Net Ninja','playlist','Bite-size lessons, great for practice.']],
  quiz:[['What does <code>md:flex</code> mean?',['Flex only on medium screens and up','Medium font','Flex on mobile only','Disable flex'],0,'Prefixes apply from that breakpoint upward (mobile-first).'],
    ['Why is Tailwind\'s production CSS small?',['It uses images','The build only ships classes you used','It\'s written in Rust','It compresses HTML'],1,'It scans your files and generates only the CSS you need.'],
    ['Which applies a style on mouse hover?',['<code>on:hover</code>','<code>hover:bg-blue-600</code>','<code>:hover-blue</code>','<code>mouse-blue</code>'],1,'State variants are prefixes like <code>hover:</code>, <code>focus:</code>.'],
    ['"Utility-first" means…',['Utility bills','Small single-purpose classes composed in HTML','Only Bootstrap components','No CSS at all'],1,'Compose small classes instead of writing custom CSS per component.']],
  fc:[['p-4','Padding of 1rem (16px) on all sides'],['text-slate-400','Text color from the slate palette, shade 400'],['grid-cols-3','CSS grid with 3 equal columns'],['shadcn/ui','Copy-paste React components built on Tailwind'],['Mobile-first','Unprefixed classes = mobile; prefixes add larger-screen rules']],
  iv:[['Tailwind vs traditional CSS: pros and cons?','Pros: speed, consistency via design tokens, no naming fights, tiny production CSS. Cons: busy markup, learning the class names. Fix that by extracting repeated patterns into components.'],
    ['How do you keep Tailwind code maintainable?','Reusable components (React), the theme config for brand tokens, Prettier\'s Tailwind plugin for class ordering, and avoiding arbitrary values except when needed.'],
    ['How do you make a layout responsive in Tailwind?','Design mobile-first with unprefixed classes, then add <code>sm:</code>/<code>md:</code>/<code>lg:</code> variants for larger screens, e.g. <code>flex-col md:flex-row</code>.']],
  links:[['Tailwind docs','https://tailwindcss.com/docs'],['Tailwind Play (online playground)','https://play.tailwindcss.com/']] },

{ id:'javascript', t:'JavaScript', cat:'Web Foundations', e:'⚡', lvl:'Beginner → Intermediate',
  tag:'The programming language of the web: browsers, servers, apps and automations.',
  role:'The behavior layer in the browser and, through Node.js, a full back-end language. The one language that runs everywhere.',
  eli5:'If HTML is the skeleton and CSS is the clothes, JavaScript is the muscles: it makes things move, react to clicks, and fetch new information.',
  pro:'JavaScript (standardized as ECMAScript) is a dynamic, single-threaded language with an <b>event loop</b> for async work (Promises, <code>async/await</code>). It manipulates the DOM in browsers and runs servers in Node.js. <b>TypeScript</b> adds static types on top and is the industry default for larger codebases.',
  why:'It\'s the most-used programming language in the world and appears in the majority of web, full-stack, Shopify, automation (Zapier/n8n code steps) and React Native job listings.',
  kw:['javascript','js','es6','typescript','ecmascript','vanilla js'],
  jobs:['JavaScript (ES6+)','TypeScript','async/await','DOM manipulation','npm'],
  res:'Wrote JavaScript/TypeScript to build interactive UI features and integrate third-party APIs.',
  con:[['Variables & types','<code>const</code> (default), <code>let</code> (changes). Strings, numbers, booleans, arrays <code>[]</code>, objects <code>{}</code>.'],
    ['Functions & arrow functions','<code>const total = (a, b) =&gt; a + b;</code> Functions are values you can pass around.'],
    ['Array methods','<code>.map()</code> transform, <code>.filter()</code> keep some, <code>.reduce()</code> combine. Used constantly on API data.'],
    ['DOM & events','<code>document.querySelector()</code> finds elements; <code>addEventListener(\'click\', fn)</code> reacts to users.'],
    ['Async: Promises & async/await','Network calls take time. <code>await fetch(url)</code> pauses the function, not the page.'],
    ['TypeScript','Adds types (<code>price: number</code>) so editors catch bugs before runtime. Most jobs expect it.']],
  ex:[['E-commerce','Cart drawer','Click "Add to cart" → JS updates the cart count and slides open a drawer without a page reload.'],
    ['Automation','Zapier/n8n code steps','Small JS snippets reshape JSON between apps (e.g., split a full name into first/last).'],
    ['Analytics','Tracking events','GA4 and Meta Pixel events are fired with JS: <code>gtag(\'event\',\'purchase\',…)</code>.'],
    ['Mobile','React Native apps','The same JS skills build iOS and Android apps.']],
  link:[['html','JS reads and changes the HTML DOM.'],['nodejs','Node runs JavaScript on servers.'],['react','React is a JavaScript library for building UIs.'],['json','JSON is literally "JavaScript Object Notation".'],['api','<code>fetch()</code> is how JS calls APIs.'],['google-analytics','Tracking events are fired with JavaScript.'],['react-native','Write mobile apps in JS.']],
  code:{ i:'Paste into your browser console (Cmd+Option+J in Chrome). It processes order data the way real dashboards do.', s:`const orders = [
  { id: 1, customer: 'Maya',  total: 89,  channel: 'tiktok' },
  { id: 2, customer: 'Leo',   total: 140, channel: 'google' },
  { id: 3, customer: 'Ana',   total: 45,  channel: 'tiktok' },
  { id: 4, customer: 'Sam',   total: 210, channel: 'meta'   },
];

// Revenue by ad channel
const byChannel = orders.reduce((acc, o) => {
  acc[o.channel] = (acc[o.channel] || 0) + o.total;
  return acc;
}, {});
console.table(byChannel);

// Big orders only, formatted
orders
  .filter(o => o.total > 100)
  .map(o => o.customer + ': $' + o.total)
  .forEach(line => console.log(line));

// Async: fetch real JSON
async function getUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await res.json();
  console.log('Fetched:', user.name, user.email);
}
getUser();`, n:'Add average order value per channel, then build a tiny page with a button that runs <code>getUser()</code> and shows the result.' },
  vid:[['JavaScript in 100 Seconds','Fireship','~2 min','The 10,000-foot view.'],['JavaScript Tutorial for Beginners','Programming with Mosh','~1 hr','Best structured intro.'],['Learn JavaScript - Full Course for Beginners','freeCodeCamp.org','~3.5 hr','Thorough; pair with javascript.info.'],['The JavaScript Event Loop','Lydia Hallie OR Philip Roberts','~15 min','The concept that makes async click.']],
  quiz:[['Which keeps only items matching a condition?',['<code>.map()</code>','<code>.filter()</code>','<code>.reduce()</code>','<code>.push()</code>'],1,'filter returns a new array of items that pass the test.'],
    ['What does <code>await</code> do?',['Freezes the whole browser','Pauses the async function until the Promise resolves','Deletes a variable','Imports a file'],1,'Only that async function pauses; the page stays responsive.'],
    ['Best default for declaring a variable?',['<code>var</code>','<code>let</code>','<code>const</code>','<code>global</code>'],2,'Use const unless you must reassign, then let. Avoid var.'],
    ['TypeScript adds…',['Faster runtime','Static types checked before running','A new browser','CSS support'],1,'TS compiles to JS but catches type errors in your editor.']],
  fc:[['.map()','Transform every item into a new array'],['.reduce()','Combine an array into one value (sum, object, etc.)'],['Promise','An object representing a future result of async work'],['Event listener','Code that runs when something happens (click, submit, scroll)'],['Event loop','How single-threaded JS handles async tasks without blocking']],
  iv:[['Explain async/await and why it matters.','Network calls are slow, so JS uses Promises to avoid blocking. async/await lets you write that code top-to-bottom. I wrap awaits in try/catch to handle failed API calls gracefully.'],
    ['== vs ===?','=== compares value and type with no coercion; == coerces types (<code>"5" == 5</code> is true). I always use ===.'],
    ['How do you approach debugging JS?','Reproduce, read the console error and stack trace, use breakpoints in dev tools, inspect network calls, isolate the smallest failing case, fix, and add a test if the codebase has them.']],
  links:[['javascript.info (best free textbook)','https://javascript.info/'],['MDN JavaScript Guide','https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide']] },

{ id:'json', t:'JSON', cat:'Web Foundations', e:'🧾', lvl:'Beginner',
  tag:'The universal data format every API, webhook and automation speaks.',
  role:'The "envelope" data travels in between every system: APIs, webhooks, configs, LLM outputs.',
  eli5:'JSON is a neat way of writing a list on a sticky note so any computer can read it: the name of each thing, a colon, then its value.',
  pro:'JavaScript Object Notation is a text format of <b>objects</b> <code>{"key": value}</code> and <b>arrays</b> <code>[…]</code> with strings, numbers, booleans and null. Language-independent; every language parses it (<code>JSON.parse</code>, Python <code>json.loads</code>). JSON Schema validates structure; Postgres <code>jsonb</code> stores it.',
  why:'Every API, webhook, Zapier/n8n step and LLM tool call uses JSON. Reading and reshaping it is a core skill for automation, integration and data jobs.',
  kw:['json','json schema','jsonb','payload','payloads'],
  jobs:['JSON','REST/JSON APIs','webhook payloads','data mapping','JSON Schema'],
  res:'Parsed and transformed JSON payloads from APIs and webhooks to connect systems and automate data flows.',
  con:[['Objects & arrays','<code>{"name":"Maya","tags":["vip","tiktok"]}</code>. Keys are always double-quoted strings.'],
    ['Nesting & paths','Data nests: <code>order.customer.address.city</code>. Automation tools let you map these paths into fields.'],
    ['Parse & stringify','Text → object: <code>JSON.parse()</code>. Object → text: <code>JSON.stringify()</code>.'],
    ['Common errors','Trailing commas, single quotes and missing brackets break JSON. Use a validator/formatter.'],
    ['JSON Schema & structured output','Define the shape you expect; LLMs can be forced to return JSON that matches it.']],
  ex:[['E-commerce','Shopify webhook','A new order arrives as JSON with line items, customer and totals.'],
    ['Automation','Zapier/n8n mapping','You map <code>customer.email</code> from one app\'s JSON into another app\'s field.'],
    ['AI','LLM structured output','Ask Claude to extract lead info and return <code>{"name":…,"budget":…,"move_in":…}</code>.'],
    ['DevOps','Config files','<code>package.json</code>, VS Code settings, AWS policies are all JSON.']],
  link:[['api','APIs send and receive JSON.'],['javascript','JSON comes from JS syntax; JS parses it natively.'],['automations','Automation tools map JSON fields between apps.'],['llms','LLMs can return structured JSON for automations.'],['postgresql','Postgres <code>jsonb</code> columns store and query JSON.']],
  code:{ i:'Paste into the browser console or a Node file.', s:`const webhookBody = '{"id":5531,"total_price":"129.00","customer":{"first_name":"Maya","email":"maya@example.com"},"line_items":[{"title":"Linen Throw","quantity":1},{"title":"Candle","quantity":2}]}';

const order = JSON.parse(webhookBody);           // text -> object
console.log(order.customer.first_name);          // Maya
console.log(order.line_items.length + ' items');

// Reshape it for a Slack message / CRM
const slim = {
  orderId: order.id,
  email: order.customer.email,
  total: Number(order.total_price),
  items: order.line_items.map(i => i.quantity + 'x ' + i.title).join(', ')
};
console.log(JSON.stringify(slim, null, 2));      // object -> pretty text`, n:'Open <code>https://jsonplaceholder.typicode.com/users</code> in your browser and write the path to the 3rd user\'s company name.' },
  vid:[['Learn JSON in 10 Minutes','Web Dev Simplified','~12 min','Everything you need, fast.'],['JSON Explained','IBM Technology OR Fireship','~5 min','Why JSON won over XML.'],['Working with JSON in Python','Corey Schafer','~20 min','Load, modify, save JSON in Python.']],
  quiz:[['Which is valid JSON?',['<code>{name: "Maya"}</code>','<code>{\'name\': \'Maya\'}</code>','<code>{"name": "Maya"}</code>','<code>{"name": "Maya",}</code>'],2,'Keys need double quotes; no trailing commas.'],
    ['JSON.parse() converts…',['Object → text','Text → object','XML → JSON','JSON → CSV'],1,'parse reads text into data; stringify does the reverse.'],
    ['Path to city in <code>{"customer":{"address":{"city":"LA"}}}</code>?',['customer.city','address.city','customer.address.city','city'],2,'Follow each nesting level.'],
    ['Square brackets [ ] hold…',['An object','An array (list)','A comment','A string'],1,'[] = ordered list; {} = key/value object.']],
  fc:[['JSON','JavaScript Object Notation: text format for structured data'],['Object vs array','{} key/value pairs vs [] ordered list'],['Payload','The JSON data body sent in an API request or webhook'],['JSON.stringify(x, null, 2)','Convert to pretty-printed JSON text'],['jsonb','Postgres binary JSON column type: indexable, queryable']],
  iv:[['How would you integrate two systems that use different JSON shapes?','Map fields from source to target, handle missing/nullable fields, normalize types (dates, numbers as strings), validate against a schema, log failures, and keep the mapping in code or the automation tool so it\'s versioned.'],
    ['JSON vs XML vs CSV?','JSON: nested, lightweight, web default. XML: verbose, still in older enterprise and SOAP systems. CSV: flat tables for spreadsheets. I choose based on what the consumer needs.'],
    ['How do you debug a malformed JSON error?','Run it through a formatter/validator, look for trailing commas, unescaped quotes or truncation, and log the raw body before parsing.']],
  links:[['json.org spec','https://www.json.org/json-en.html'],['JSONPlaceholder (practice API)','https://jsonplaceholder.typicode.com/']] },

{ id:'dns', t:'DNS', cat:'Web Foundations', e:'📇', lvl:'Beginner',
  tag:'The internet\'s phone book: how names like brandon-rose.com find servers and inboxes.',
  role:'Connects your domain to your website, store, email and verification records. The first step of every visit.',
  eli5:'Computers find each other by number addresses, like phone numbers. DNS is the contacts app: you type a name and it looks up the number for you.',
  pro:'The Domain Name System resolves names to IPs through recursive resolvers, root, TLD and authoritative nameservers, with answers cached by <b>TTL</b>. Key records: <b>A/AAAA</b> (IP), <b>CNAME</b> (alias), <b>MX</b> (mail), <b>TXT</b> (verification, SPF/DKIM/DMARC), <b>NS</b> (who\'s authoritative).',
  why:'Launching any site, Shopify store, SaaS or email domain means DNS work. Misconfigured email DNS (SPF/DKIM/DMARC) kills deliverability. Every IT, DevOps and web role expects it.',
  kw:['dns','domain','domains','cloudflare','cname','nameserver','nameservers','spf','dkim','dmarc','mx record'],
  jobs:['DNS management','Cloudflare','SPF/DKIM/DMARC','domain setup','CDN'],
  res:'Managed DNS (A, CNAME, MX, TXT) in Cloudflare for websites and custom email, including SPF/DKIM/DMARC deliverability setup.',
  con:[['A & AAAA records','Point a name to an IPv4/IPv6 address: <code>yourbrand.com → 23.227.38.65</code>.'],
    ['CNAME','Alias one name to another: <code>www → shops.myshopify.com</code>.'],
    ['MX records','Tell the world which servers receive your email (iCloud, Google Workspace…).'],
    ['TXT: SPF, DKIM, DMARC','Prove which servers may send email for your domain. Without them, mail lands in spam.'],
    ['TTL & propagation','Answers are cached for the TTL. "Propagation" is just caches expiring around the world.'],
    ['Nameservers & Cloudflare','NS records decide who hosts your DNS. Cloudflare adds a CDN, SSL and DDoS protection.']],
  ex:[['E-commerce','Connect a domain to Shopify','Add an A record to Shopify\'s IP and a CNAME for www.'],
    ['Email','Custom domain mail','Your iCloud+ custom-domain mail on Cloudflare uses MX + SPF/DKIM TXT records.'],
    ['Marketing','Domain verification','Meta, Google Search Console and TikTok verify you own the domain via a TXT record.'],
    ['SaaS','Subdomains','<code>app.</code>, <code>api.</code>, <code>docs.</code> each point to different services.']],
  link:[['shopify','Pointing your domain to a Shopify store is pure DNS.'],['network-security','DNS is attacked (spoofing, hijacking) and also protects (Cloudflare).'],['aws','AWS Route 53 is Amazon\'s DNS service.'],['meta-ads','Domain verification for ads uses DNS TXT records.'],['web-dev','DNS is step one of every page load.']],
  code:{ i:'Open Terminal on your Mac and look up real records.', s:`# Where does the site live?
dig +short brandon-rose.com A

# Who handles its email?
dig +short brandon-rose.com MX

# Verification & email-auth records
dig +short brandon-rose.com TXT

# Which nameservers are authoritative? (Cloudflare?)
dig +short brandon-rose.com NS

# Trace the full lookup chain: root -> .com -> authoritative
dig +trace shopify.com`, n:'Look at your Cloudflare dashboard and identify every record type and what it\'s for. Then check your SPF/DMARC with a free online checker.' },
  vid:[['DNS Explained in 100 Seconds','Fireship','~2 min','The core idea, instantly.'],['DNS as Fast As Possible / How DNS works','PowerCert Animated Videos','~10 min','Clear animated walk-through of records.'],['SPF DKIM DMARC explained','Cloudflare OR Google Workspace','~10 min','Why email lands in spam and how DNS fixes it.']],
  quiz:[['Which record routes email?',['A','CNAME','MX','AAAA'],2,'MX = mail exchanger.'],
    ['www.yourbrand.com should alias to your Shopify domain. Use…',['MX','CNAME','TXT','NS'],1,'CNAME aliases one hostname to another.'],
    ['SPF, DKIM and DMARC live in…',['A records','TXT records','MX records','Cookies'],1,'They\'re published as TXT records.'],
    ['Why might a DNS change take time to show up?',['Servers are slow','Cached answers expire based on TTL','DNS is manual','Browsers block it'],1,'Resolvers cache records for the TTL duration.']],
  fc:[['A record','Hostname → IPv4 address'],['CNAME','Hostname → another hostname (alias)'],['MX','Mail servers for the domain'],['TTL','How long resolvers may cache a record'],['DMARC','Policy telling receivers what to do with mail failing SPF/DKIM']],
  iv:[['Customers say emails from our domain go to spam. What do you check?','SPF includes every sender (Shopify, Klaviyo, Google), DKIM is enabled and signing, DMARC exists (start p=none and monitor), no blacklisting, a consistent from-domain, then test with mail-tester.'],
    ['Walk through DNS resolution.','Browser/OS cache → recursive resolver → root server → TLD (.com) server → authoritative nameserver, which returns the record. Each layer caches by TTL.'],
    ['How would you migrate a domain to a new host with no downtime?','Lower the TTL a day ahead, set up the new host and test it, switch the records, keep the old host live until traffic moves, then raise the TTL again.']],
  links:[['Cloudflare Learning: What is DNS?','https://www.cloudflare.com/learning/dns/what-is-dns/'],['How DNS Works (comic)','https://howdns.works/']] },

{ id:'seo', t:'SEO', cat:'Web Foundations', e:'🔎', lvl:'Beginner → Intermediate',
  tag:'Earn free, compounding traffic from Google (and now AI search).',
  role:'The free traffic engine in the Attract layer: content and technical health that keep sending visitors without paying per click.',
  eli5:'Google is a giant librarian. SEO is making your book easy to find: a clear title, good content people love, and other books recommending yours.',
  pro:'Search Engine Optimization has three pillars: <b>technical</b> (crawlability, speed/Core Web Vitals, sitemaps, structured data), <b>on-page</b> (search intent, titles, headings, internal links) and <b>off-page</b> (backlinks, brand mentions). Increasingly <b>AEO/GEO</b>: being cited in AI answers (Google AI Overviews, ChatGPT, Perplexity).',
  why:'SEO appears in marketing, e-commerce, content and web dev listings. Paid ads stop when budget stops; SEO compounds, so companies value people who can do both.',
  kw:['seo','search engine optimization','search console','keyword research','organic traffic','organic','backlinks','core web vitals','schema markup','aeo','geo'],
  jobs:['SEO','Google Search Console','keyword research','technical SEO','content strategy'],
  res:'Improved organic search traffic through keyword research, on-page optimization and technical SEO fixes tracked in Search Console and GA4.',
  con:[['Search intent','Match what the searcher wants: info ("how to…"), commercial ("best…"), transactional ("buy…"), local ("near me").'],
    ['Keyword research','Find terms with demand you can realistically rank for (Search Console, Google Keyword Planner, Ahrefs, Semrush).'],
    ['On-page basics','Unique title tag (~60 chars), meta description, one H1, descriptive URLs, internal links, image alt text.'],
    ['Technical SEO','Indexable pages, XML sitemap, fast load (Core Web Vitals), mobile-friendly, no broken links, canonical tags.'],
    ['Structured data','JSON-LD schema (Product, Review, FAQ) can earn rich results with stars and prices in Google.'],
    ['Backlinks & authority','Links from reputable sites act like votes. Earn them with useful content, PR and partnerships.']],
  ex:[['E-commerce','Collection pages','"Linen throw blankets" collection page optimized for that keyword ranks and sells with zero ad spend.'],
    ['Local business','Google Business Profile','A barbershop ranks in the map pack for "barber Encino" with reviews and NAP consistency.'],
    ['SaaS','Content marketing','"How to calculate rent roll" blog post → free tool → trial signups.'],
    ['Property mgmt','Neighborhood pages','"Apartments in Sherman Oaks" pages capture renters searching for that area.']],
  link:[['html','Titles, headings, alt text and meta tags are HTML.'],['google-analytics','GA4 + Search Console measure organic results.'],['google-ads','Paid search and SEO share keyword research.'],['shopify','Shopify has built-in SEO fields for products & collections.'],['llms','AI search (AEO) and AI-assisted content are reshaping SEO.'],['web-dev','Site speed and structure are developer-owned SEO factors.']],
  code:{ i:'Add this JSON-LD to a product page\'s HTML so Google can show price and rating. Test it with Google\'s Rich Results Test.', s:`<head>
  <title>Linen Throw Blanket | Breathable & Pre-Washed | YourBrand</title>
  <meta name="description" content="Soft, breathable linen throw. Free shipping & 30-day returns.">
  <link rel="canonical" href="https://yourbrand.com/products/linen-throw">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Linen Throw Blanket",
    "image": "https://yourbrand.com/img/linen-throw.jpg",
    "offers": { "@type": "Offer", "price": "89.00", "priceCurrency": "USD",
                "availability": "https://schema.org/InStock" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "126" }
  }
  </script>
</head>`, n:'Set up Google Search Console for a site you control (verify via DNS TXT!) and find the 10 queries you already appear for.' },
  vid:[['SEO for Beginners: Rank #1 In Google','Ahrefs','~30 min','Ahrefs\' practical, no-fluff intro.'],['SEO Starter Guide / How Google Search works','Google Search Central','~10 min','Straight from Google.'],['Technical SEO for beginners','Ahrefs OR Moz','~20 min','Crawling, indexing, speed, schema.']],
  quiz:[['A search for "buy linen throw" shows which intent?',['Informational','Transactional','Navigational','Local'],1,'The searcher wants to purchase.'],
    ['Which tool shows the queries your site already appears for?',['GA4 only','Google Search Console','Meta Ads Manager','Notion'],1,'Search Console reports queries, impressions, clicks and positions.'],
    ['JSON-LD schema helps by…',['Speeding up servers','Earning rich results like stars and prices','Blocking bots','Buying ads'],1,'Structured data helps Google display enhanced results.'],
    ['Backlinks act as…',['Spam','Votes of authority from other sites','Internal links','Ads'],1,'Quality links from reputable sites boost authority.']],
  fc:[['Search intent','What the searcher actually wants: info, commercial, transactional, local'],['Title tag','The clickable headline in Google results (~60 chars)'],['Core Web Vitals','Google\'s speed/stability metrics (LCP, INP, CLS)'],['Canonical tag','Tells Google the preferred URL among duplicates'],['AEO / GEO','Optimizing to be cited in AI-generated answers']],
  iv:[['How would you grow organic traffic for a Shopify store?','Fix technical basics (indexing, speed, duplicate collection URLs via canonicals), map keywords to collections and products, write unique descriptions, add Product schema, build buying-guide content that links internally, earn links via PR/collabs, and track in Search Console + GA4.'],
    ['SEO vs paid search: when do you use each?','Paid is instant and great for testing and high-intent terms; SEO compounds for long-term efficient traffic. Use paid data (which keywords convert) to prioritize SEO content.'],
    ['How is AI changing SEO?','AI Overviews and chat answers reduce some clicks, so content must be clearly structured, authoritative and quotable. Brand mentions and original data matter more, and you track visibility in AI answers as well as rankings.']],
  links:[['Google SEO Starter Guide','https://developers.google.com/search/docs/fundamentals/seo-starter-guide'],['Ahrefs SEO course (free)','https://ahrefs.com/academy/seo-training-course']] }
);
