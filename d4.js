/* E-commerce & Ads */
G.push(
{ id:'ecommerce', t:'E-commerce', cat:'E-commerce & Ads', e:'🛒', lvl:'Beginner → Intermediate',
  tag:'How online stores actually make money: traffic × conversion × order value × repeat.',
  role:'The business model tying the Attract layer (ads, SEO) to the store (Shopify), the back end (orders, automations) and the numbers (analytics).',
  eli5:'E-commerce is a store on the internet. To make money you need people to visit, a reason to buy, a smooth checkout, and happy customers who come back.',
  pro:'E-commerce revenue = <b>sessions × conversion rate × average order value (AOV)</b>, compounded by repeat purchase (<b>LTV</b>). Profitability depends on <b>unit economics</b>: COGS, shipping, payment fees, returns and CAC. Channels: DTC site (Shopify), marketplaces (Amazon, TikTok Shop, Walmart), wholesale. Ops: inventory, 3PL fulfillment, customer service. Retention: email/SMS (Klaviyo, Postscript), loyalty, subscriptions.',
  why:'E-commerce Manager, Growth Marketer, Marketplace Specialist and Shopify roles are heavily remote. Employers want people who understand both the numbers and the tech stack behind the store.',
  kw:['ecommerce','e-commerce','dtc','d2c','online store','marketplace','amazon seller','aov','cart','checkout','conversion rate','klaviyo','fulfillment','3pl','retention'],
  jobs:['E-commerce Manager','DTC growth','conversion rate optimization','email/SMS retention (Klaviyo)','marketplace management'],
  res:'Managed e-commerce growth levers (conversion rate, AOV, retention flows) and reported on unit economics and channel performance.',
  con:[['The revenue equation','Traffic × Conversion rate × AOV. Improving each by 10% grows revenue ~33%.'],
    ['Unit economics','Price − COGS − shipping − fees − returns = contribution margin. Then subtract CAC to see true profit per order.'],
    ['Break-even ROAS','1 ÷ contribution margin %. At 40% margin you need 2.5x ROAS just to break even on ads.'],
    ['Retention & LTV','Email/SMS flows (welcome, abandoned cart, post-purchase, win-back) drive 20–40% of revenue for healthy DTC brands.'],
    ['Channels','DTC website, Amazon, TikTok Shop, Walmart, wholesale. Multi-channel means more reach but more ops complexity.'],
    ['Ops','Inventory forecasting, 3PL fulfillment, returns, customer service. Bad ops kills good marketing.']],
  ex:[['DTC brand','Linen home goods','Shopify store + Meta/TikTok ads + Klaviyo flows + 3PL. The classic modern stack.'],
    ['Marketplace','Amazon FBA seller','Amazon handles fulfillment; seller optimizes listings and Sponsored Products ads.'],
    ['Social commerce','TikTok Shop','Creators sell through affiliate videos and LIVE streams; checkout never leaves TikTok.'],
    ['Subscription','Coffee / supplements','Recurring orders boost LTV, which allows higher CAC.']],
  link:[['shopify','The platform most DTC stores run on.'],['meta-ads','The biggest paid acquisition channel for DTC.'],['tiktok-ads','Social commerce & TikTok Shop.'],['google-analytics','Measure the funnel and attribution.'],['automations','Order, fulfillment and retention automations.'],['seo','Free compounding traffic.'],['saas','Compare: recurring-revenue cousin.']],
  code:{ i:'Paste into your browser console: an e-commerce unit-economics + break-even ROAS calculator.', s:`const product = {
  price: 89, cogs: 28, shipping: 8,
  paymentFeePct: 0.029, paymentFeeFixed: 0.30,
  returnRate: 0.05,
};

const fees = product.price * product.paymentFeePct + product.paymentFeeFixed;
const returnsCost = product.price * product.returnRate;
const contribution = product.price - product.cogs - product.shipping - fees - returnsCost;
const marginPct = contribution / product.price;
const breakEvenROAS = 1 / marginPct;

console.table({
  'Contribution / order': '$' + contribution.toFixed(2),
  'Contribution margin': (marginPct * 100).toFixed(1) + '%',
  'Break-even ROAS': breakEvenROAS.toFixed(2) + 'x',
  'Max CAC to break even': '$' + contribution.toFixed(2),
});

// Revenue equation: what does +10% on each lever do?
const base = { sessions: 20000, cvr: 0.025, aov: 95 };
const rev = b => b.sessions * b.cvr * b.aov;
console.log('Base revenue: $' + rev(base).toLocaleString());
console.log('+10% each:   $' + rev({ sessions: 22000, cvr: 0.0275, aov: 104.5 }).toLocaleString());`, n:'Plug in a real product you\'d sell. What ROAS must your ads hit? What AOV bundle would lower it?' },
  vid:[['How to start an ecommerce business','Shopify','~20 min','Official end-to-end overview.'],['Ecommerce unit economics explained','Common Thread Collective OR Taylor Holiday','~20 min','Contribution margin, MER and profitable growth.'],['Email marketing flows for ecommerce Klaviyo','Klaviyo OR Chase Dimond','~20 min','The retention flows that print money.']],
  quiz:[['Revenue = sessions × conversion rate × …',['CPM','AOV','CTR','Churn'],1,'Average order value.'],
    ['Contribution margin is 40%. Break-even ROAS is…',['1.4x','2.5x','4x','0.4x'],1,'1 ÷ 0.40 = 2.5x.'],
    ['Which flow recovers people who left items in their cart?',['Welcome','Abandoned cart','Win-back','Sunset'],1,'Abandoned-cart flows are typically the highest-earning automation.'],
    ['A 3PL is…',['An ad network','A third-party logistics/fulfillment provider','A payment processor','A theme'],1,'They store, pack and ship your inventory.']],
  fc:[['AOV','Average Order Value = revenue ÷ orders'],['CVR','Conversion rate = orders ÷ sessions'],['COGS','Cost of Goods Sold'],['MER','Marketing Efficiency Ratio = total revenue ÷ total ad spend'],['LTV','Lifetime value: total profit from a customer over time']],
  iv:[['Revenue is flat. How do you diagnose it?','Break it into sessions × CVR × AOV × repeat rate by channel and device, check tracking integrity, look at funnel drop-off (product page → cart → checkout), ad performance, stock-outs and site speed, then test fixes on the biggest leak first.'],
    ['How do you know if ad spend is profitable?','Know contribution margin and break-even ROAS, look at blended MER and new-customer CAC (not just platform ROAS, which over-credits), and factor in LTV for repeat products.'],
    ['How would you grow AOV?','Bundles, quantity breaks, free-shipping thresholds just above current AOV, post-purchase upsells and cross-sells on product pages, A/B tested.']],
  links:[['Shopify blog: ecommerce guides','https://www.shopify.com/blog'],['Klaviyo Academy (free courses)','https://academy.klaviyo.com/']] },

{ id:'shopify', t:'Shopify', cat:'E-commerce & Ads', e:'🛍', lvl:'Beginner → Intermediate',
  tag:'The platform behind millions of online stores, and a huge freelance/remote job market.',
  role:'The storefront and order system: products, checkout and payments, plus webhooks and APIs that feed the rest of your stack.',
  eli5:'Shopify is a store-in-a-box. You add your products and pick a design, and it handles the shopping cart, payments and order list for you.',
  pro:'Shopify is a hosted commerce platform: products/variants, collections, inventory, checkout and Shopify Payments. Themes use <b>Liquid</b> templating and Online Store 2.0 sections. Developers extend it with the <b>Admin GraphQL API</b>, <b>webhooks</b> (orders/create…), <b>apps</b> (Remix-based), <b>Shopify Functions</b> (custom discounts/checkout logic) and <b>Hydrogen</b> for headless React storefronts. Ecosystem: Klaviyo, Recharge, Gorgias, ShipStation.',
  why:'Shopify Expert, Store Manager and Shopify Developer roles are among the most common remote e-commerce postings, and agencies hire freelancers constantly.',
  kw:['shopify','shopify plus','liquid','shopify app','shopify apps','hydrogen','shopify theme','shopify developer'],
  jobs:['Shopify / Shopify Plus','Liquid theme development','Shopify apps & integrations','store management','Shopify Admin API'],
  res:'Built and managed Shopify stores: theme customization in Liquid, app integrations and order-webhook automations.',
  con:[['Products, variants & collections','A product (T-shirt) has variants (size/color), grouped into collections (manual or automated rules).'],
    ['Themes & Liquid','<code>{{ product.title }}</code> outputs data; <code>{% for %}</code> loops. Sections/blocks let merchants rearrange pages.'],
    ['Apps','Install for reviews, subscriptions, upsells, email. Each adds JS, so audit them for speed.'],
    ['Admin API & webhooks','GraphQL to read/write products and orders; webhooks to react to events in real time.'],
    ['Checkout & Payments','Shopify\'s checkout is highly optimized (Shop Pay). Customize with Checkout Extensibility on Plus.'],
    ['Sales channels','Sell via Facebook/Instagram, Google, TikTok Shop and Amazon from one admin.']],
  ex:[['DTC brands','Store launch','Theme setup, product pages, policies, payments, domain (DNS!), pixels.'],
    ['Agencies','Theme customization','Add a size chart, bundle builder or custom landing page section in Liquid.'],
    ['Ops','Order automations','Shopify Flow or webhooks: tag VIPs, alert low inventory, route to 3PL.'],
    ['Developers','Custom apps','A private app syncing inventory with a warehouse system via the Admin API.']],
  link:[['ecommerce','The business Shopify serves.'],['html','Liquid templates are HTML + logic.'],['dns','Connect your domain to Shopify.'],['api','Admin GraphQL API & webhooks.'],['meta-ads','Pixels/CAPI and catalog sync for ads.'],['tiktok-ads','TikTok Shop and pixel integration.'],['google-analytics','GA4 tracking on your store.']],
  code:{ i:'Two sides of Shopify dev: a Liquid snippet (Online Store → Themes → Edit code) and an Admin GraphQL query (run it in the free GraphiQL app on a dev store from a Shopify Partner account).', s:`{% comment %} snippets/free-shipping-bar.liquid {% endcomment %}
{% assign threshold = 7500 %}   {%- comment -%} cents {%- endcomment -%}
{% assign remaining = threshold | minus: cart.total_price %}
<div class="free-ship-bar">
  {% if remaining > 0 %}
    You're {{ remaining | money }} away from FREE shipping 🚚
  {% else %}
    🎉 You've unlocked free shipping!
  {% endif %}
</div>

# ---- Admin GraphQL API: last 5 orders with customer + total ----
query {
  orders(first: 5, reverse: true) {
    edges {
      node {
        name
        createdAt
        totalPriceSet { shopMoney { amount currencyCode } }
        customer { firstName email }
        lineItems(first: 5) { edges { node { title quantity } } }
      }
    }
  }
}`, n:'Create a free Shopify Partner dev store, add the bar to your cart drawer, then register an orders/create webhook pointing to your Node endpoint.' },
  vid:[['Shopify Tutorial for Beginners','Shopify OR Wholesale Ted','~1 hr','Complete store setup.'],['Shopify Liquid tutorial for beginners','Coding with Jan','~1 hr','Theme development fundamentals.'],['Build a Shopify app','Shopify Developers','varies','Official app development path.']],
  quiz:[['Shopify themes are written in…',['PHP','Liquid (plus HTML/CSS/JS)','Ruby only','Python'],1,'Liquid is Shopify\'s templating language.'],
    ['Best way to react instantly when an order is placed?',['Check admin every hour','Subscribe to the orders/create webhook','Email export','Scrape the store'],1,'Webhooks push events in real time.'],
    ['A product\'s sizes and colors are…',['Collections','Variants','Tags','Apps'],1,'Each combination is a variant with its own SKU and inventory.'],
    ['Too many apps can…',['Improve SEO','Slow down the storefront','Lower fees','Add free traffic'],1,'Each app may inject scripts. Audit for speed.']],
  fc:[['Liquid','Shopify\'s template language: {{ output }} {% logic %}'],['Variant','Specific version of a product (size/color) with its own SKU'],['Shopify Flow','No-code automation inside Shopify (Plus/Advanced)'],['Hydrogen','Shopify\'s React framework for headless storefronts'],['Shop Pay','Shopify\'s accelerated checkout; boosts conversion']],
  iv:[['A Shopify store\'s conversion rate dropped. What do you check?','Tracking accuracy, recent theme/app changes, site speed, checkout errors, stock-outs, traffic-mix shifts (a new ad channel), mobile UX, then segment by device and source.'],
    ['How would you customize a theme safely?','Duplicate the theme, edit in a dev copy, use sections/blocks so merchants can manage it, version theme code with GitHub integration, test on mobile, then publish.'],
    ['How do you integrate Shopify with other systems?','Admin GraphQL API for reads/writes, webhooks for events (verify the HMAC), respect rate limits, use idempotency, and build an app or middleware for mapping.']],
  links:[['Shopify Dev docs','https://shopify.dev/docs'],['Shopify Academy (free)','https://www.shopifyacademy.com/']] },

{ id:'meta-ads', t:'Meta Ads (Facebook & Instagram)', cat:'E-commerce & Ads', e:'📘', lvl:'Intermediate',
  tag:'The largest paid-social engine for e-commerce: reach billions, optimize for purchases.',
  role:'The biggest paid traffic source in the Attract layer for most DTC brands, fed by pixel/CAPI data from your store.',
  eli5:'You pay Facebook and Instagram to show your product to people who are likely to buy. Their computer watches who buys and finds more people like them.',
  pro:'Meta Ads Manager structure: <b>Campaign</b> (objective, e.g. Sales) → <b>Ad set</b> (budget, audience, placements, optimization event) → <b>Ad</b> (creative + copy). Delivery is driven by Meta\'s algorithm optimizing to <b>Pixel</b> + <b>Conversions API (CAPI)</b> events. Modern playbook: broad targeting or Advantage+ campaigns, many creative variations, product catalog for dynamic ads, and retargeting. Key metrics: CPM, CTR, CPC, CPA, ROAS, frequency.',
  why:'Paid Social / Media Buyer / Growth Marketer roles are heavily remote and in demand. Technical skills (CAPI setup, tracking, automated reporting) set you apart from pure marketers.',
  kw:['meta ads','facebook ads','instagram ads','meta','facebook','instagram','ads manager','paid social','media buyer','media buying','conversions api','capi','facebook pixel','meta pixel'],
  jobs:['Meta Ads Manager','paid social / media buying','Pixel & Conversions API','creative testing','ROAS optimization'],
  res:'Planned and optimized Meta (Facebook/Instagram) ad campaigns with Pixel + Conversions API tracking and structured creative testing.',
  con:[['Campaign → Ad set → Ad','Objective at the top, targeting and budget in the middle, creative at the bottom.'],
    ['Pixel + Conversions API','Browser pixel plus server-side CAPI events (deduplicated by event_id) give Meta better data, which means better optimization.'],
    ['Audiences','Broad (let the algorithm find buyers), custom (site visitors, customers), lookalikes. Today creative is the real targeting.'],
    ['Advantage+ campaigns','Meta\'s automated sales campaigns: you supply creatives and budget, it handles audience and placements.'],
    ['Creative testing','Hooks in the first 3 seconds, UGC, angles (problem, demo, testimonial). Test many and scale winners.'],
    ['Metrics','CPM (cost per 1,000 views), CTR, CPC, CPA (cost per purchase), ROAS, frequency (ad fatigue).']],
  ex:[['DTC','Prospecting + retargeting','Broad Advantage+ campaign for new buyers; catalog ads retarget product viewers.'],
    ['Local','Property leasing','Lead ads with an instant form for "2BR in Sherman Oaks". Leads flow to your CRM via API/Zapier.'],
    ['Apps','App installs','Optimize for installs or in-app purchases via the SDK.'],
    ['Agencies','Client reporting','Marketing API pulls spend and ROAS into automated weekly reports.']],
  link:[['ecommerce','Know break-even ROAS before you spend.'],['shopify','Shopify\'s Facebook & Instagram app syncs catalog + CAPI.'],['google-analytics','Cross-check platform ROAS against GA4.'],['llms','Generate hook and copy variations fast.'],['web-design','Landing page must match the ad.'],['api','The Marketing API & Conversions API.']],
  code:{ i:'A server-side Conversions API "Purchase" event (what Shopify or your backend sends). Get a token in Events Manager and check Meta\'s docs for the current API version. Email/phone must be SHA-256 hashed.', s:`curl -X POST "https://graph.facebook.com/v21.0/$PIXEL_ID/events?access_token=$CAPI_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": [{
      "event_name": "Purchase",
      "event_time": 1793750000,
      "event_id": "order_5531",
      "action_source": "website",
      "event_source_url": "https://yourbrand.com/checkout/thank-you",
      "user_data": {
        "em": ["<sha256 of lowercase email>"],
        "client_ip_address": "203.0.113.7",
        "client_user_agent": "Mozilla/5.0 ..."
      },
      "custom_data": { "currency": "USD", "value": 129.00,
                       "content_ids": ["linen-throw"], "content_type": "product" }
    }],
    "test_event_code": "TEST123"
  }'

# event_id matches the browser Pixel event so Meta deduplicates them.
# Use test_event_code + Events Manager > Test Events to verify.`, n:'Plan a $30/day test: 1 Advantage+ campaign, 6 creatives (3 hooks × 2 formats). Define your kill rule (e.g., CPA > 1.5× target after 2× target CPA spent).' },
  vid:[['Facebook Ads Tutorial for Beginners','Ben Heath','~1 hr','Up-to-date, practical Ads Manager walkthrough.'],['Meta Ads creative strategy for ecommerce','Common Thread Collective OR Foxwell Digital','~30 min','Creative is the targeting now.'],['Facebook Conversions API setup','Meta for Business OR Measureschool','~20 min','Server-side tracking explained.']],
  quiz:[['Where do you set budget & audience in Meta?',['Campaign only','Ad set level (or campaign with Advantage budgets)','Ad level','Pixel'],1,'Ad sets hold audience, placements, optimization and often budget.'],
    ['Why send Conversions API events in addition to the Pixel?',['It\'s cheaper','Server events survive ad blockers/iOS limits: better data and optimization','Required by Shopify','To spam users'],1,'Redundant server-side signal improves match rates; dedupe with event_id.'],
    ['Rising frequency + falling CTR usually means…',['Tracking broke','Creative fatigue','Better targeting','Lower CPMs'],1,'People have seen the ad too often. Refresh creative.'],
    ['ROAS of 3.0 means…',['$3 spent per $1 revenue','$3 revenue per $1 ad spend','3% conversion rate','3 purchases'],1,'Return on ad spend = revenue ÷ spend.']],
  fc:[['CPM','Cost per 1,000 impressions'],['CPA','Cost per acquisition (e.g., per purchase)'],['CAPI','Conversions API: server-side events to Meta'],['Lookalike audience','People similar to a seed list (e.g., customers)'],['Advantage+','Meta\'s AI-automated campaign types']],
  iv:[['How would you launch Meta ads for a new Shopify product?','Confirm Pixel + CAPI with deduplication, know break-even ROAS, start a broad/Advantage+ sales campaign with 4–6 diverse creatives, set clear kill and scale rules, retarget viewers with catalog ads, review daily but avoid over-editing during learning, and validate in GA4/Shopify.'],
    ['Platform ROAS says 4x but the bank account disagrees. Why?','Attribution windows and view-through credit over-count, other channels share credit, returns and discounts aren\'t reflected. Use blended MER, new-customer CAC, holdout or incrementality tests, and post-purchase surveys.'],
    ['How do you structure creative testing?','Test one variable family at a time (hook, angle, format), give each enough spend to judge, keep a backlog of ideas from reviews and comments, and recycle winning angles into new formats.']],
  links:[['Meta Blueprint (free courses)','https://www.facebookblueprint.com/'],['Meta Conversions API docs','https://developers.facebook.com/docs/marketing-api/conversions-api/']] },

{ id:'google-ads', t:'Google & YouTube Ads', cat:'E-commerce & Ads', e:'🎯', lvl:'Intermediate',
  tag:'Capture buyers who are already searching, then reach them on YouTube, Shopping and Gmail.',
  role:'High-intent traffic in the Attract layer: search, Shopping and YouTube campaigns, measured against GA4.',
  eli5:'When someone types "buy linen blanket" into Google, you can pay to be the first answer. You can also show video ads on YouTube to people interested in your stuff.',
  pro:'Google Ads campaign types: <b>Search</b> (keywords, ad copy, Quality Score), <b>Shopping</b> (product feed from <b>Merchant Center</b>), <b>Performance Max</b> (AI across Search, Shopping, YouTube, Display, Gmail, Maps), <b>Demand Gen</b> (YouTube/Discover/Gmail visuals), <b>YouTube video</b> (in-stream, Shorts) and Display. <b>Smart Bidding</b> (Target ROAS/CPA) optimizes to conversions from the Google tag/GA4 with Enhanced Conversions. The Google Ads API exposes data through GAQL queries.',
  why:'PPC / SEM Specialist and Paid Search Manager are classic remote roles. Search is the highest-intent channel, and YouTube is the second-largest search engine.',
  kw:['google ads','adwords','ppc','sem','paid search','youtube ads','performance max','pmax','merchant center','google shopping','search ads','smart bidding','quality score'],
  jobs:['Google Ads / PPC','Performance Max','Google Merchant Center','YouTube Ads','keyword research & bidding'],
  res:'Managed Google Ads (Search, Shopping/Performance Max, YouTube) with conversion tracking and Smart Bidding to hit ROAS targets.',
  con:[['Keywords & match types','Broad, phrase, exact. Negative keywords block irrelevant searches ("free", "jobs").'],
    ['Quality Score','Ad relevance + expected CTR + landing-page experience. Higher QS means lower CPCs.'],
    ['Merchant Center & Shopping','Product feed (title, price, image, GTIN) powers Shopping ads and free listings. Feed quality = performance.'],
    ['Performance Max','One campaign, all Google inventory, AI-driven. Feed it good assets, audience signals and accurate conversions.'],
    ['YouTube ads','In-stream skippable, Shorts, Demand Gen. Hook in 5 seconds; strong for prospecting and retargeting.'],
    ['Smart Bidding & conversions','Target ROAS/CPA need accurate conversion data (Google tag, Enhanced Conversions, GA4 import).']],
  ex:[['E-commerce','Shopping/PMax','Product feed from Shopify\'s Google & YouTube app powers Shopping ads with price and photo.'],
    ['Property mgmt','Search leasing ads','"apartments for rent sherman oaks" → ad → listing page with tour form.'],
    ['SaaS','Competitor keywords','Bid on "[competitor] alternative" with a comparison landing page.'],
    ['Brand','YouTube storytelling','A 30-second demo video to cold audiences, then retarget viewers on Search.']],
  link:[['seo','Shared keyword research; paid data guides SEO.'],['google-analytics','GA4 conversions feed Smart Bidding.'],['shopify','Shopify\'s Google & YouTube channel syncs your feed.'],['ecommerce','Know your target ROAS from unit economics.'],['web-design','Landing-page experience affects Quality Score.'],['api','Google Ads API + GAQL for reporting automation.']],
  code:{ i:'A Google Ads Query Language (GAQL) report, used in the Google Ads API or Google Ads Scripts, to find wasted spend.', s:`-- Search terms that spent money but never converted (last 30 days)
SELECT
  search_term_view.search_term,
  campaign.name,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions
FROM search_term_view
WHERE segments.date DURING LAST_30_DAYS
  AND metrics.conversions = 0
  AND metrics.cost_micros > 20000000      -- spent more than $20
ORDER BY metrics.cost_micros DESC
LIMIT 50

-- cost_micros / 1,000,000 = dollars.
-- Add the irrelevant terms as negative keywords. Automate this weekly
-- with a Google Ads Script that emails/Slacks you the list.`, n:'Open the Google Ads Keyword Planner (free with an account) and build a keyword list + negatives for one product. Estimate CPCs.' },
  vid:[['Google Ads Tutorial for beginners','Surfside PPC','~1 hr','Clear, practical, up to date.'],['Performance Max explained','Google Ads OR Solutions 8','~20 min','How PMax works and how to feed it.'],['YouTube Ads tutorial','Think Media OR Surfside PPC','~30 min','Video ad structure and targeting.']],
  quiz:[['Which campaign type needs a Merchant Center product feed?',['Search','Shopping / Performance Max','YouTube in-stream only','Display only'],1,'Shopping placements are built from your product feed.'],
    ['Negative keywords…',['Lower Quality Score','Block irrelevant searches from triggering ads','Increase bids','Are required by law'],1,'E.g., add "free" or "jobs" for a store.'],
    ['Quality Score is based on…',['Budget size','Expected CTR, ad relevance, landing-page experience','Account age','Number of ads'],1,'Higher QS lowers cost per click.'],
    ['Smart Bidding works best when…',['There\'s no conversion tracking','Conversion data is accurate and plentiful','Budgets change hourly','Keywords are all exact'],1,'The algorithm learns from conversion signals.']],
  fc:[['PPC','Pay-per-click advertising'],['Match types','Broad / phrase / exact: how closely searches must match keywords'],['Performance Max','AI campaign across all Google channels'],['Merchant Center','Hosts your product feed for Shopping'],['Target ROAS','Smart Bidding strategy aiming for a revenue/spend ratio']],
  iv:[['How would you structure Google Ads for a Shopify store?','Branded Search (protect brand), PMax/Shopping driven by a clean feed, non-brand Search on high-intent terms, YouTube/Demand Gen for prospecting; accurate conversions with Enhanced Conversions; negatives and search-term reviews weekly.'],
    ['CPCs are rising. What do you do?','Improve Quality Score (tighter ad groups, better landing pages), add negatives, test bidding strategies, shift to better-converting terms, and check for new competitors in auction insights.'],
    ['How do you report on paid search performance?','Spend, conversions, CPA/ROAS by campaign and search term vs targets; GA4 cross-check; insights and next actions, not just numbers. Automate the data pull.']],
  links:[['Google Skillshop (free certifications)','https://skillshop.withgoogle.com/'],['Google Ads Help Center','https://support.google.com/google-ads/']] },

{ id:'tiktok-ads', t:'TikTok Shop & TikTok Ads', cat:'E-commerce & Ads', e:'🎵', lvl:'Intermediate',
  tag:'Entertainment-first commerce: creators, short video and in-app checkout.',
  role:'The discovery engine in the Attract layer: creator videos and ads that sell inside TikTok (TikTok Shop) or drive traffic to your store.',
  eli5:'On TikTok, people watch fun videos and can buy the product shown right there without leaving the app. Brands pay creators to make videos and pay TikTok to show them to more people.',
  pro:'Two connected systems. <b>TikTok Shop</b>: in-app storefront, product listings, the <b>affiliate program</b> (creators earn commission), LIVE shopping, fulfillment rules, and Shop-specific ads (e.g., GMV Max). <b>TikTok Ads Manager</b>: campaign → ad group → ad; <b>Spark Ads</b> boost organic or creator posts; Smart+ automation; the <b>TikTok Pixel + Events API</b> for website conversions. Creative must be native: hook in 1–2 seconds, vertical, sound-on, UGC style.',
  why:'TikTok Shop Manager, Creator/Affiliate Manager and Paid Social roles focused on TikTok are growing fast. Brands need people who understand both creators and the ad and analytics side.',
  kw:['tiktok','tiktok shop','tiktok ads','spark ads','ugc','creator','creators','influencer','affiliate','live shopping','short-form video'],
  jobs:['TikTok Shop','TikTok Ads Manager','creator / affiliate management','UGC & short-form creative','Spark Ads'],
  res:'Ran TikTok Shop and TikTok Ads programs: creator affiliate outreach, Spark Ads and pixel/Events API tracking.',
  con:[['TikTok Shop basics','Seller Center: list products, set shipping/fulfillment SLAs, manage orders, returns and shop health score.'],
    ['Affiliate creators','Creators add your product to their showcase and earn commission. Free samples + outreach = scalable sales.'],
    ['Spark Ads','Boost a creator\'s organic post as an ad, keeping its social proof (likes, comments).'],
    ['LIVE shopping','Real-time selling streams with pinned products, flash deals and host scripts.'],
    ['Pixel + Events API','For off-TikTok stores: track ViewContent, AddToCart and CompletePayment browser- and server-side.'],
    ['Native creative','Hook fast, show the product in use, trend-aware audio, captions, clear CTA. "Don\'t make ads, make TikToks."']],
  ex:[['Beauty/home','Viral affiliate product','100 creators get samples; 5 videos go viral; GMV spikes, and Spark Ads amplify the winners.'],
    ['DTC','Traffic to Shopify','Ads drive to the Shopify store with pixel + Events API tracking purchases.'],
    ['Local','Real estate tours','Short apartment-tour videos + lead-gen ads targeting nearby renters.'],
    ['Brands','LIVE events','Weekly LIVE with exclusive bundles creates urgency.']],
  link:[['ecommerce','A fast-growing marketplace channel.'],['shopify','The TikTok sales channel app syncs catalog and pixel.'],['meta-ads','Same performance principles, different creative culture.'],['llms','Generate hooks and scripts, analyze comments at scale.'],['google-analytics','Track TikTok traffic via UTMs in GA4.'],['automations','Automate creator outreach and sample tracking.']],
  code:{ i:'Browser-side TikTok Pixel events (installed via the TikTok channel app or base code). Pair with server-side Events API using the same event_id for deduplication.', s:`// After the TikTok base pixel code loads (ttq is defined):

// Product page view
ttq.track('ViewContent', {
  contents: [{ content_id: 'linen-throw', content_name: 'Linen Throw', price: 89, quantity: 1 }],
  value: 89, currency: 'USD'
});

// Add to cart
ttq.track('AddToCart', {
  contents: [{ content_id: 'linen-throw', quantity: 1, price: 89 }],
  value: 89, currency: 'USD'
});

// Purchase on the thank-you page
ttq.track('CompletePayment', {
  contents: [{ content_id: 'linen-throw', quantity: 2, price: 89 }],
  value: 178, currency: 'USD'
}, { event_id: 'order_5531' });   // same id as your Events API call

// Verify with the TikTok Pixel Helper Chrome extension + Events Manager > Test events.`, n:'Write 10 hooks for one product (use an LLM to brainstorm, then edit for authenticity). Draft a creator outreach DM + sample offer.' },
  vid:[['TikTok Shop tutorial for sellers','TikTok Shop Academy OR Ecommerce creators','~30 min','Seller Center setup and affiliate program.'],['TikTok Ads Tutorial for beginners','Ben Heath OR Ad Hustler','~30 min','Ads Manager walkthrough.'],['How to make TikTok ads that convert','TikTok for Business','~15 min','Native creative principles from TikTok.']],
  quiz:[['Spark Ads let you…',['Run ads without creative','Boost existing organic/creator posts as ads','Advertise on Google','Skip the pixel'],1,'Keeps the original post\'s engagement and authenticity.'],
    ['TikTok Shop affiliates are paid by…',['Hourly wage','Commission on sales they drive','Ad CPM','Followers count only'],1,'Creators earn a % of GMV they generate.'],
    ['The most important part of a TikTok ad is…',['The logo','The first 1–2 seconds (hook)','The end card','Hashtags'],1,'Lose the hook, lose the viewer.'],
    ['GMV stands for…',['Gross Merchandise Value','Google Media Video','General Marketing Variable','Gross Margin Value'],0,'Total sales value through the shop.']],
  fc:[['TikTok Shop','In-app commerce: browse, buy and check out inside TikTok'],['Spark Ads','Boosting organic/creator posts as paid ads'],['UGC','User-generated content: authentic customer/creator videos'],['GMV','Gross merchandise value (total sales)'],['Events API','TikTok\'s server-side conversion tracking']],
  iv:[['How would you launch a product on TikTok Shop?','List with strong images and pricing, seed samples to 50–100 matched creators with a clear brief and commission, track which videos convert, amplify winners with Spark/Shop ads, run LIVE sessions, and watch shop health metrics (shipping times, returns).'],
    ['How is TikTok creative different from Meta?','It must feel native: lo-fi, creator-led, trend-aware, sound-on, with a hook in the first second. Polished brand ads underperform, and refresh cadence is faster.'],
    ['How do you measure TikTok\'s true impact?','Pixel + Events API, UTMs into GA4, post-purchase "how did you hear about us" surveys, blended MER, and watching branded search lift. TikTok often drives demand captured elsewhere.']],
  links:[['TikTok Academy (ads)','https://ads.tiktok.com/business/en-US/academy'],['TikTok Shop Seller University','https://seller-us.tiktok.com/university/']] },

{ id:'other-ads', t:'Other Ad Platforms', cat:'E-commerce & Ads', e:'📣', lvl:'Intermediate',
  tag:'Amazon, Pinterest, Microsoft, Snapchat, Reddit, retail media and more.',
  role:'Diversified reach in the Attract layer: marketplace, visual-search, B2B and niche-community channels beyond Meta, Google and TikTok.',
  eli5:'Besides Facebook, Google and TikTok, there are lots of other places to show ads: Amazon (people ready to buy), Pinterest (people planning), Bing, Snapchat, Reddit. Smart brands test a few so they don\'t depend on one.',
  pro:'<b>Amazon Ads</b>: Sponsored Products/Brands/Display, measured by <b>ACoS</b> (ad spend ÷ ad sales) and TACoS. <b>Pinterest</b>: visual planning intent, strong for home/fashion/food, with shopping catalogs. <b>Microsoft Advertising</b>: Bing/Edge/Copilot search, can import Google campaigns, often lower CPCs and older/higher-income audiences. <b>Snapchat</b> and <b>Reddit</b> reach younger and community-driven audiences. Also: <b>retail media</b> (Walmart Connect, Instacart), <b>affiliate</b> networks (ShareASale/Impact), <b>influencer</b> deals and <b>CTV</b>. Each has its own pixel/CAPI to install.',
  why:'Brands want channel diversification, and Amazon Ads specialists in particular are in strong remote demand. Knowing the landscape makes you a more strategic growth hire.',
  kw:['amazon ads','amazon advertising','sponsored products','acos','pinterest','pinterest ads','microsoft ads','bing ads','microsoft advertising','snapchat','snapchat ads','reddit ads','retail media','affiliate marketing','influencer marketing','programmatic','ctv'],
  jobs:['Amazon Ads (ACoS/TACoS)','Pinterest Ads','Microsoft Advertising','multi-channel paid media','affiliate / influencer programs'],
  res:'Expanded paid acquisition beyond core channels (Amazon, Pinterest, Microsoft Ads) with consistent tracking and efficiency targets.',
  con:[['Amazon Ads','Sponsored Products (keyword/product targeting) → Sponsored Brands → Display. Optimize ACoS against your margin.'],
    ['ACoS & TACoS','ACoS = ad spend ÷ ad-attributed sales. TACoS = ad spend ÷ total sales (shows organic lift).'],
    ['Pinterest','Users plan purchases weeks ahead; long content shelf life; catalog/Shopping ads.'],
    ['Microsoft Advertising','Import Google campaigns in minutes; often cheaper clicks; LinkedIn profile targeting for B2B.'],
    ['Snap & Reddit','Gen Z reach (Snap); niche subreddit communities (Reddit) where authenticity wins.'],
    ['Affiliate, influencer & retail media','Commission-based partners, creator deals, and ads inside retailer sites (Walmart Connect).']],
  ex:[['Marketplace','Amazon launch','Sponsored Products auto campaign to harvest keywords → manual exact campaigns for winners.'],
    ['Home decor','Pinterest','Seasonal boards + shopping ads 6–8 weeks before holidays.'],
    ['B2B SaaS','Microsoft + LinkedIn targeting','Search ads targeted by job function and company size.'],
    ['Niche product','Reddit','Ads in hobby subreddits with an honest founder-voice post.']],
  link:[['meta-ads','Same funnel thinking; different platform cultures.'],['google-ads','Microsoft Ads imports Google Search campaigns.'],['ecommerce','Margins set your ACoS/ROAS targets.'],['google-analytics','UTMs to compare all channels in one place.'],['automations','Automate cross-channel spend reporting.']],
  code:{ i:'Paste into your browser console: a cross-channel scorecard comparing platforms on one standard, against your break-even.', s:`const breakEvenROAS = 2.5;               // from the E-commerce calculator
const channels = [
  { name: 'Meta',      spend: 3000, revenue: 8400 },
  { name: 'Google',    spend: 2000, revenue: 7000 },
  { name: 'TikTok',    spend: 1200, revenue: 2600 },
  { name: 'Amazon',    spend: 900,  revenue: 3600 },
  { name: 'Pinterest', spend: 400,  revenue: 760  },
  { name: 'Microsoft', spend: 300,  revenue: 1050 },
];

const rows = channels.map(c => ({
  channel: c.name,
  ROAS: +(c.revenue / c.spend).toFixed(2),
  'ACoS %': +((c.spend / c.revenue) * 100).toFixed(1),
  verdict: c.revenue / c.spend >= breakEvenROAS * 1.3 ? '🚀 scale'
         : c.revenue / c.spend >= breakEvenROAS ? '✅ hold'
         : '⚠️ fix or cut',
})).sort((a, b) => b.ROAS - a.ROAS);
console.table(rows);

const tot = channels.reduce((t, c) => ({ s: t.s + c.spend, r: t.r + c.revenue }), { s: 0, r: 0 });
console.log('Blended MER: ' + (tot.r / tot.s).toFixed(2) + 'x');`, n:'Remember platform-reported revenue overlaps. Compare against Shopify totals and GA4. Build this as a Google Sheet fed by an automation.' },
  vid:[['Amazon PPC for beginners','Jungle Scout OR Helium 10','~30 min','Sponsored Products structure and ACoS.'],['Pinterest Ads tutorial','Pinterest Business OR Kate Ahl','~20 min','Planning-intent advertising.'],['Microsoft Advertising tutorial','Microsoft Advertising','~20 min','Import Google campaigns and optimize.']],
  quiz:[['ACoS = ?',['Sales ÷ spend','Ad spend ÷ ad-attributed sales','Clicks ÷ impressions','Profit ÷ revenue'],1,'Lower ACoS = more efficient. It\'s the inverse of ROAS.'],
    ['Which platform lets you import Google Ads campaigns directly?',['Pinterest','Microsoft Advertising','Snapchat','Amazon'],1,'Microsoft Advertising has a Google import tool.'],
    ['Pinterest users are typically…',['Ready to buy this second','Planning purchases ahead (discovery/planning intent)','Searching for jobs','B2B buyers'],1,'Great for seasonal and aspirational categories.'],
    ['Why diversify ad channels?',['It\'s free','Reduce dependence/risk and reach new audiences','Platforms require it','Better SEO'],1,'One algorithm change shouldn\'t sink the business.']],
  fc:[['ACoS','Advertising Cost of Sales = ad spend ÷ ad sales'],['TACoS','Total ACoS = ad spend ÷ total sales'],['Retail media','Ads on retailer sites (Amazon, Walmart Connect, Instacart)'],['UTM parameters','URL tags identifying source/medium/campaign for analytics'],['CTV','Connected TV ads (streaming apps)']],
  iv:[['How would you decide which new ad channel to test next?','Where does our audience spend attention and buying intent? Check product fit (visual → Pinterest; marketplace demand → Amazon), budget needed for learning, creative requirements and tracking feasibility. Run a fixed-budget test with clear success metrics.'],
    ['Amazon ACoS is 45% but margin is 35%. What now?','Ads are unprofitable on an attributed basis. Check TACoS for organic halo, cut or lower bids on non-converting terms, add negatives, improve listing conversion (images, reviews, price), focus on exact-match winners.'],
    ['How do you compare performance across many platforms?','Normalize with UTMs into GA4, compare to Shopify revenue, use blended MER and new-customer CAC, and treat platform-reported numbers as directional.']],
  links:[['Amazon Ads Learning Console (free)','https://advertising.amazon.com/library'],['Microsoft Advertising Learning Lab','https://about.ads.microsoft.com/en/resources/training']] },

{ id:'google-analytics', t:'Google Analytics (GA4)', cat:'E-commerce & Ads', e:'📊', lvl:'Beginner → Intermediate',
  tag:'The scoreboard: who came, from where, what they did, and what made money.',
  role:'The measurement layer: tracks every channel in the Attract layer and every step of the store funnel, so decisions use data.',
  eli5:'Google Analytics is a counter that watches your website: how many people came, where they came from, which pages they looked at and whether they bought something.',
  pro:'GA4 is <b>event-based</b>: every interaction is an event with parameters (<code>purchase</code> with value, items, transaction_id). Install via gtag.js or <b>Google Tag Manager</b>. Core pieces: data streams, recommended e-commerce events, key events (conversions), <b>UTM</b>-based traffic attribution, Explorations (funnels, paths, segments), audiences for ads, BigQuery export, consent mode. Report in Looker Studio dashboards.',
  why:'"GA4" and "analytics" are in nearly every marketing, e-commerce, growth and product listing. Implementation skills (GTM, event design, debugging) are scarce and valued.',
  kw:['google analytics','ga4','analytics','google tag manager','gtm','conversion tracking','looker studio','utm','utms','attribution','tracking','bigquery'],
  jobs:['GA4','Google Tag Manager','conversion tracking','Looker Studio dashboards','attribution & UTMs'],
  res:'Implemented GA4 + Google Tag Manager e-commerce tracking and built Looker Studio dashboards for channel and funnel performance.',
  con:[['Events & parameters','Everything is an event: page_view, view_item, add_to_cart, begin_checkout, purchase, each with details.'],
    ['Key events (conversions)','Mark the events that matter (purchase, generate_lead) for reporting and ad optimization.'],
    ['UTM parameters','<code>?utm_source=tiktok&amp;utm_medium=paid_social&amp;utm_campaign=linen_launch</code> attribute traffic correctly.'],
    ['Google Tag Manager','Manage all tags (GA4, Meta, TikTok pixels) without code deploys; triggers and variables.'],
    ['Explorations','Funnel exploration shows where people drop off between product → cart → checkout → purchase.'],
    ['Looker Studio & BigQuery','Free dashboards; raw event export for SQL analysis.']],
  ex:[['E-commerce','Funnel leak','Funnel shows 70% drop at shipping step → test free-shipping threshold.'],
    ['Ads','Channel comparison','UTMs reveal TikTok drives cheap sessions but Google drives buyers.'],
    ['Lead gen','Form tracking','generate_lead events by source → which channel brings tour bookings.'],
    ['SaaS','Activation','Track signup → key action → upgrade to find the activation bottleneck.']],
  link:[['seo','Organic traffic analysis with Search Console linked.'],['google-ads','Import GA4 key events to Google Ads.'],['meta-ads','Validate platform ROAS against GA4.'],['tiktok-ads','UTMs tag TikTok traffic.'],['javascript','gtag/dataLayer events are JavaScript.'],['shopify','Shopify\'s Google channel installs GA4.'],['ecommerce','Funnel and AOV analysis.']],
  code:{ i:'The GA4 e-commerce purchase event via gtag.js (Shopify\'s Google app does this for you; custom sites push it on the thank-you page). Verify in GA4 → Admin → DebugView.', s:`<!-- GA4 base tag in <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>

<!-- On the order confirmation page -->
<script>
  gtag('event', 'purchase', {
    transaction_id: 'order_5531',      // prevents double counting
    value: 178.00,
    currency: 'USD',
    shipping: 0,
    coupon: 'WELCOME10',
    items: [{ item_id: 'linen-throw', item_name: 'Linen Throw',
              price: 89.00, quantity: 2, item_category: 'Blankets' }]
  });
</script>

<!-- Tag every ad link with UTMs, e.g.:
https://yourbrand.com/products/linen-throw?utm_source=tiktok&utm_medium=paid_social&utm_campaign=linen_launch -->`, n:'Explore the free Google Merchandise Store GA4 demo account: build a funnel exploration from view_item to purchase and find the biggest drop.' },
  vid:[['Google Analytics 4 Tutorial for Beginners','Analytics Mania OR Measureschool','~1 hr','Setup through reports.'],['GA4 ecommerce tracking with Google Tag Manager','Measureschool','~30 min','Implementation deep dive.'],['Looker Studio tutorial','Google OR Measureschool','~30 min','Build the dashboard your boss wants.']],
  quiz:[['In GA4, a purchase is tracked as…',['A pageview only','An event with parameters (value, items, transaction_id)','A session','A cookie'],1,'GA4 is fully event-based.'],
    ['Why include transaction_id?',['SEO','Prevent duplicate purchase counting','Faster loading','Required by Shopify'],1,'GA4 dedupes purchases with the same ID.'],
    ['utm_medium=paid_social tells GA4…',['The ad\'s cost','The traffic type/channel','The product','The browser'],1,'Source/medium/campaign classify traffic.'],
    ['GTM is used to…',['Host websites','Manage tracking tags without code deploys','Send SMS','Write SQL'],1,'Tags, triggers and variables in one container.']],
  fc:[['Event','Any tracked interaction in GA4'],['Key event','An event marked as a conversion'],['UTM','URL parameters labeling traffic source/medium/campaign'],['DebugView','Real-time view for testing GA4 events'],['Funnel exploration','Report showing step-by-step drop-off']],
  iv:[['How would you set up tracking for a new Shopify store?','Install GA4 via Shopify\'s Google channel or GTM, verify e-commerce events in DebugView, mark key events, link Google Ads and Search Console, standardize UTMs for all campaigns, set up consent mode, and build a Looker Studio dashboard.'],
    ['GA4 and Meta report different revenue. Why?','Different attribution models and windows, view-through credit, ad blockers, consent, cross-device behavior and duplicate events. I reconcile to the backend source of truth (Shopify) and use each tool for what it\'s good at.'],
    ['What would you put on an e-commerce dashboard?','Revenue, orders, AOV and CVR trends; sessions and conversion by channel; funnel drop-off; new vs returning; top products; spend and MER from ad platforms, with annotations for launches.']],
  links:[['Google Skillshop: GA4 courses','https://skillshop.withgoogle.com/'],['GA4 demo account','https://support.google.com/analytics/answer/6367342']] }
);
