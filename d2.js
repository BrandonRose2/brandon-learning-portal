/* Full Stack + Programming & Data */
G.push(
{ id:'react', t:'React.js', cat:'Full Stack', e:'⚛️', lvl:'Intermediate',
  tag:'The most in-demand library for building modern web interfaces.',
  role:'Builds the interactive front end of SaaS dashboards, web apps and headless stores, with the same model reused in React Native.',
  eli5:'React lets you build a website out of LEGO bricks called components. Make a "ProductCard" brick once, then snap it in 100 times with different products.',
  pro:'React is a component-based UI library. Components are functions returning <b>JSX</b>; <b>props</b> pass data in, <b>state</b> (<code>useState</code>) holds changing data, and <b>effects</b> (<code>useEffect</code>) sync with the outside world. React re-renders efficiently when state changes. Frameworks like <b>Next.js</b> add routing, server rendering and APIs.',
  why:'React/Next.js is the most-requested front-end skill in remote job listings, and React knowledge transfers directly to React Native mobile jobs.',
  kw:['react','react.js','reactjs','next.js','nextjs','jsx','redux','hooks'],
  jobs:['React','Next.js','TypeScript + React','hooks / state management','component libraries'],
  res:'Built reusable React components and pages (Next.js) consuming REST APIs, with responsive Tailwind styling.',
  con:[['Components & JSX','<code>function ProductCard({ title, price }) { return &lt;div&gt;{title}: ${price}&lt;/div&gt; }</code>: UI as functions.'],
    ['Props','Data passed from parent to child, like function arguments. Read-only.'],
    ['State (useState)','Data that changes (cart count, form input). Updating it re-renders the UI automatically.'],
    ['Effects (useEffect)','Run code after render: fetching API data, subscriptions, timers.'],
    ['Lists & keys','<code>products.map(p =&gt; &lt;Card key={p.id} … /&gt;)</code>: keys help React track items.'],
    ['Next.js','React framework: file-based routing, server components, API routes, SEO-friendly rendering. Common for SaaS & e-commerce.']],
  ex:[['SaaS','Analytics dashboard','Charts, filters and tables that update instantly without page reloads.'],
    ['E-commerce','Headless Shopify','Shopify Hydrogen and many custom storefronts are React-based.'],
    ['Social / media','Facebook & Instagram web','Meta created React; their web apps run on it.'],
    ['Internal tools','Reporting portals','A React front end over your Yardi/RealPage data API makes a fast internal app.']],
  link:[['javascript','React is JavaScript; strong JS = easy React.'],['tailwind','The standard way to style React components today.'],['api','Components fetch data from APIs.'],['nodejs','Node powers React tooling and often the backend.'],['react-native','Same concepts, mobile apps.'],['full-stack','React is the "front" in most full-stack roles.']],
  code:{ i:'Paste into <code>https://react.new</code> (free online sandbox) replacing <code>App.js</code>. A live product list with a cart counter.', s:`import { useState, useEffect } from 'react';

function ProductCard({ product, onAdd }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 12, padding: 12 }}>
      <img src={product.image} alt={product.title} style={{ height: 80 }} />
      <h4>{product.title.slice(0, 40)}</h4>
      <b>{'$' + product.price}</b>
      <button onClick={onAdd}>Add to cart</button>
    </div>
  );
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(r => r.json())
      .then(setProducts);
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui', padding: 20 }}>
      <h1>🛒 Cart: {cart}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={() => setCart(cart + 1)} />
        ))}
      </div>
    </main>
  );
}`, n:'Add a search box that filters products as you type (another <code>useState</code> + <code>.filter()</code>).' },
  vid:[['React in 100 Seconds','Fireship','~2 min','The mental model.'],['React Course - Beginner\'s Tutorial for React JavaScript Library','freeCodeCamp.org (Bob Ziroll)','~12 hr','Project-based, very beginner friendly.'],['React Tutorial for Beginners','Programming with Mosh','~1.5 hr','Modern hooks + TypeScript.'],['Next.js App Router course','Vercel OR JavaScript Mastery','varies','Next step once React clicks.']],
  quiz:[['Which hook stores data that changes and triggers re-render?',['useEffect','useState','useRef','useMemo'],1,'useState returns [value, setter]; calling the setter re-renders.'],
    ['Props are…',['Mutable global variables','Read-only inputs passed from parent to child','CSS properties','Database rows'],1,'Props flow down; children don\'t modify them.'],
    ['Why give list items a <code>key</code>?',['Styling','So React can track items efficiently between renders','Security','SEO'],1,'Stable keys let React update the right DOM nodes.'],
    ['Next.js adds…',['A database','Routing, server rendering & API routes on top of React','A CSS framework','Mobile support'],1,'It\'s a full framework built on React.']],
  fc:[['Component','A reusable function that returns UI (JSX)'],['JSX','HTML-like syntax inside JavaScript'],['useEffect','Run side effects (fetching, timers) after render'],['Lifting state up','Move shared state to the closest common parent'],['Server components','Next.js components that render on the server: less JS shipped']],
  iv:[['Explain state vs props.','Props are inputs from a parent, read-only. State is data the component owns and changes over time. When either changes, the component re-renders.'],
    ['How do you fetch data in React?','useEffect + fetch for simple cases, with loading and error states. In production I prefer a library like TanStack Query for caching and retries, or server components / server actions in Next.js.'],
    ['How do you keep a React app performant?','Avoid unnecessary re-renders (split components, memo where measured), lazy-load routes, virtualize long lists, optimize images, and profile with React DevTools.']],
  links:[['react.dev official tutorial','https://react.dev/learn'],['Full Stack Open (free, Univ. of Helsinki)','https://fullstackopen.com/en/']] },

{ id:'full-stack', t:'Full Stack Development', cat:'Full Stack', e:'🥞', lvl:'Intermediate → Advanced',
  tag:'Owning a feature end to end: UI, API, database, deployment.',
  role:'The skill of connecting every layer of the Big Picture map into one working product.',
  eli5:'A full-stack developer can build the whole lemonade stand: paint the sign (front end), mix the lemonade (back end), keep the recipe book (database) and set it up on the street (deployment).',
  pro:'Full-stack engineers work across the <b>presentation</b> layer (React/Next.js), the <b>application</b> layer (Node/Python APIs, auth, business logic), the <b>data</b> layer (Postgres/MySQL, caching) and <b>infrastructure</b> (Git, CI/CD, Docker, cloud). Common stacks: MERN, PERN, Next.js + Postgres, Django/FastAPI + React.',
  why:'Startups and remote teams love full-stack people because one person can ship a whole feature. It\'s one of the most posted remote engineering titles.',
  kw:['full stack','full-stack','fullstack','mern','pern','end-to-end'],
  jobs:['Full-Stack Engineer','MERN/PERN','Next.js + Postgres','REST APIs','CI/CD'],
  res:'Shipped end-to-end features across React front end, Node.js/Python APIs and PostgreSQL, deployed via Docker and CI/CD.',
  con:[['The layers','UI → API → business logic → database → infrastructure. Know how a request flows through all of them.'],
    ['Auth','Sign-up/login, sessions or JWTs, password hashing, OAuth ("Sign in with Google"). Often via Clerk, Auth0 or Supabase.'],
    ['Data modeling','Designing tables and relations that match the business (users, orders, subscriptions).'],
    ['Environments','Local → staging → production, with environment variables for secrets and config.'],
    ['CI/CD','Tests and deploys run automatically on every push (GitHub Actions).'],
    ['Observability','Logs, error tracking (Sentry) and metrics so you know when production breaks.']],
  ex:[['SaaS','Subscription app','React UI, Node API, Postgres, Stripe billing, deployed on AWS: classic full stack.'],
    ['E-commerce','Custom storefront + backend','Headless Shopify front end with a custom API for loyalty points.'],
    ['Property mgmt','Your reporting portal','Pulling Yardi/RealPage data, storing it, and serving dashboards is a full-stack system.'],
    ['Agencies','Client MVPs','One full-stack dev builds a client\'s whole MVP in weeks.']],
  link:[['react','Front-end layer.'],['nodejs','Common API/back-end layer.'],['postgresql','Common data layer.'],['docker','Package the stack consistently.'],['git','Collaboration and CI/CD.'],['aws','Where it all runs.'],['api','The contract between front and back.']],
  code:{ i:'The shape of a minimal full-stack app: one Express API + one HTML page calling it. Run with <code>npm i express</code> then <code>node server.js</code>, open http://localhost:3000.', s:`// server.js
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));   // serves public/index.html

const leads = [];                     // swap for Postgres later

app.post('/api/leads', (req, res) => {
  const { name, email } = req.body;
  if (!email) return res.status(400).json({ error: 'email required' });
  const lead = { id: leads.length + 1, name, email, at: new Date() };
  leads.push(lead);
  res.status(201).json(lead);
});

app.get('/api/leads', (req, res) => res.json(leads));
app.listen(3000, () => console.log('http://localhost:3000'));

/* public/index.html
<form id="f"><input name="name"><input name="email"><button>Send</button></form>
<script>
f.onsubmit = async e => {
  e.preventDefault();
  const body = Object.fromEntries(new FormData(f));
  const r = await fetch('/api/leads', { method:'POST',
    headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
  alert(JSON.stringify(await r.json()));
};
</script> */`, n:'Swap the array for PostgreSQL, add a React page listing leads, push to GitHub and deploy to Railway or Render.' },
  vid:[['Full Stack Web Development roadmap','roadmap.sh OR Traversy Media','~20 min','What to learn and in what order.'],['MERN Stack Tutorial','Traversy Media OR freeCodeCamp','~3 hr','Build a complete app.'],['How to build a full stack app with Next.js and Postgres','Vercel OR Fireship','varies','Modern stack walkthrough.']],
  quiz:[['Which is NOT typically part of the stack?',['React UI','Node API','Postgres DB','Printer drivers'],3,'The stack = UI, API, data, infra.'],
    ['Where should API keys and DB passwords live?',['In front-end code','In environment variables / secrets manager','In README','In Git commits'],1,'Never ship secrets to the browser or Git.'],
    ['CI/CD stands for…',['Code Integration / Code Delivery','Continuous Integration / Continuous Delivery','Cloud Instance / Cloud Database','Client Interface / Client Data'],1,'Automated testing and deploying on every change.'],
    ['HTTP 201 means…',['Created','Moved','Forbidden','Timeout'],0,'201 Created: typical response to a successful POST.']],
  fc:[['MERN','MongoDB, Express, React, Node'],['PERN','Postgres, Express, React, Node'],['JWT','JSON Web Token: signed token proving who a user is'],['Staging','Production-like environment for testing before release'],['Observability','Logs, metrics & traces to understand production behavior']],
  iv:[['Describe a feature you built end to end.','Use STAR plus the layers: the problem, the data model, API endpoints, UI, how I tested and deployed it, and the measurable result (e.g., "cut report time from 2 hours to 5 minutes").'],
    ['How do you decide what goes in the front end vs back end?','Security and business rules (pricing, permissions, validation of record) live on the back end; presentation and instant feedback on the front end; validate on both.'],
    ['How would you design auth for a new SaaS?','Use a proven provider (Clerk/Auth0/Supabase Auth), hash passwords if self-hosting, HTTP-only cookies, role-based access checks on every API route, rate-limit login, and add 2FA.']],
  links:[['roadmap.sh full stack','https://roadmap.sh/full-stack'],['Full Stack Open','https://fullstackopen.com/en/']] },

{ id:'nodejs', t:'Node.js', cat:'Full Stack', e:'🟩', lvl:'Intermediate',
  tag:'JavaScript on the server: APIs, webhooks, bots and tools.',
  role:'A popular back-end "brain": receives webhooks, serves APIs, talks to databases and third-party services.',
  eli5:'JavaScript used to live only inside web browsers. Node.js let it move out and work on servers too, answering requests, saving data and sending texts.',
  pro:'Node.js is a JavaScript runtime built on Chrome\'s V8 engine with a non-blocking, event-driven I/O model, great for I/O-heavy work (APIs, webhooks, real-time). The ecosystem: <b>npm</b> packages, <b>Express/Fastify/NestJS</b> frameworks, <code>package.json</code> for dependencies and scripts.',
  why:'Node is a top back-end skill for remote roles because companies can hire one-language (JS/TS) teams. Shopify apps, Slack bots, Twilio integrations and many SaaS backends are Node.',
  kw:['node','node.js','nodejs','express','express.js','npm','nestjs','fastify'],
  jobs:['Node.js','Express','REST API development','npm','serverless functions'],
  res:'Built Node.js/Express APIs and webhook handlers integrating Shopify, Twilio and Slack.',
  con:[['Runtime vs browser','Same language, different environment: Node has file system and network access, no DOM.'],
    ['npm & package.json','<code>npm install express</code> adds a dependency; package.json tracks them plus scripts like <code>npm run dev</code>.'],
    ['Express routes','<code>app.get(\'/orders\', handler)</code>: map URLs + HTTP methods to functions.'],
    ['Async I/O','Node handles thousands of connections by never waiting idle; use async/await everywhere.'],
    ['Environment variables','<code>process.env.TWILIO_TOKEN</code>: secrets live outside code (.env files locally).'],
    ['Middleware','Functions that run on every request: parsing JSON, auth checks, logging.']],
  ex:[['E-commerce','Shopify webhook receiver','Node endpoint receives orders/create and triggers fulfillment + SMS.'],
    ['Messaging','Slack bot','Slack\'s Bolt framework for Node answers slash commands.'],
    ['Real-time','Chat & live dashboards','WebSockets in Node push updates instantly.'],
    ['Serverless','AWS Lambda functions','Small Node functions run on demand, pay per use.']],
  link:[['javascript','Same language on the server.'],['api','Node is a go-to for building APIs.'],['twilio','Twilio\'s Node SDK sends SMS from your server.'],['slack','Build Slack bots with Bolt for Node.'],['docker','Containerize Node apps for deployment.'],['react','Often paired as the backend of a React app.']],
  code:{ i:'Install Node (<code>brew install node</code>), then: <code>mkdir hooks && cd hooks && npm init -y && npm i express</code>. Save as <code>index.js</code>, run <code>node index.js</code>.', s:`const express = require('express');
const app = express();
app.use(express.json());

// Simple API-key middleware
function requireKey(req, res, next) {
  if (req.get('x-api-key') !== process.env.API_KEY) {
    return res.status(401).json({ error: 'bad key' });
  }
  next();
}

// Pretend this is a Shopify "orders/create" webhook
app.post('/webhooks/orders', requireKey, async (req, res) => {
  const { id, total_price, customer } = req.body;
  console.log('New order', id, total_price, customer?.email);
  // TODO: save to Postgres, text via Twilio, post to Slack
  res.sendStatus(200);           // acknowledge fast!
});

app.get('/health', (req, res) => res.json({ ok: true }));
app.listen(3000, () => console.log('Listening on :3000'));

// Test from another terminal:
// API_KEY=secret node index.js
// curl -X POST localhost:3000/webhooks/orders -H "x-api-key: secret" \
//   -H "Content-Type: application/json" -d '{"id":1,"total_price":"89.00"}'`, n:'Add a POST to Slack using an incoming-webhook URL from the Slack topic, triggered by each order.' },
  vid:[['Node.js Ultimate Beginner\'s Guide in 7 Easy Steps','Fireship','~16 min','Fast, practical first project.'],['Node.js and Express.js - Full Course','freeCodeCamp.org','~8 hr','Comprehensive reference course.'],['Node.js Crash Course','Traversy Media','~1.5 hr','Core modules + building a server.']],
  quiz:[['What is npm?',['A database','Node\'s package manager','A browser','A CSS tool'],1,'npm installs and manages packages.'],
    ['Where should a Twilio auth token live?',['Hard-coded in index.js','In an environment variable','In package.json','In the URL'],1,'Keep secrets in env vars, never in code or Git.'],
    ['Node is especially good at…',['Heavy video encoding','I/O-heavy work like APIs and webhooks','GPU training','Spreadsheets'],1,'Its non-blocking I/O handles many concurrent connections.'],
    ['Express middleware is…',['A database driver','A function that runs between request and route handler','A CSS file','A testing tool'],1,'Used for parsing, auth, logging, etc.']],
  fc:[['V8','Google\'s JS engine that Node runs on'],['package.json','Project manifest: dependencies, scripts, metadata'],['Express','Minimal, popular Node web framework'],['process.env','Object holding environment variables in Node'],['Webhook handler','Endpoint that receives event POSTs from another service']],
  iv:[['Why respond 200 quickly to webhooks?','Senders retry on timeouts, causing duplicates. Acknowledge fast, then process async (queue/job). Also make handlers idempotent using the event ID.'],
    ['How do you handle errors in an Express API?','Try/catch in async handlers or a wrapper, a centralized error middleware, consistent JSON error shapes, correct status codes, logging, and never leaking stack traces to clients.'],
    ['Node vs Python for a backend?','Both are great. Node suits JS/TS teams and real-time I/O; Python suits data/AI-heavy work. I pick based on team skills and the libraries the problem needs.']],
  links:[['Node.js official Learn','https://nodejs.org/en/learn'],['Express docs','https://expressjs.com/']] },

{ id:'python', t:'Python', cat:'Programming & Data', e:'🐍', lvl:'Beginner → Intermediate',
  tag:'The language of automation, data and AI. Readable, powerful, everywhere.',
  role:'The go-to "brain" language for automation scripts, scrapers, data pipelines and AI/LLM apps.',
  eli5:'Python is a programming language that reads almost like English. You can tell the computer "for each file in this folder, rename it" and it does it, so you never have to do boring stuff by hand again.',
  pro:'Python is a high-level, dynamically typed language with a massive ecosystem: <b>requests/httpx</b> (APIs), <b>pandas</b> (data), <b>FastAPI/Django/Flask</b> (web), <b>BeautifulSoup/Playwright</b> (scraping), and the AI stack (OpenAI/Anthropic SDKs, LangChain). Modern tooling: <b>uv</b> (packages/venvs), <b>ruff</b> (lint), <b>mypy</b> (types), <b>pytest</b> (tests); asyncio for concurrency.',
  why:'Python dominates AI, data and automation job listings, the fastest-growing remote categories. It\'s also the easiest first "real" language.',
  kw:['python','pandas','fastapi','django','flask','pytest','numpy','asyncio','python3'],
  jobs:['Python','pandas','FastAPI/Django','scripting & automation','pytest'],
  res:'Automated reporting and data workflows in Python (pandas, requests), saving hours of manual work each week.',
  con:[['Syntax basics','Indentation defines blocks. Lists <code>[]</code>, dicts <code>{}</code>, f-strings <code>f"Hi {name}"</code>.'],
    ['Functions & modules','<code>def total(rows):</code> … and <code>import</code> to reuse code and libraries.'],
    ['Virtual envs & uv','Each project gets isolated packages: <code>uv init</code>, <code>uv add requests</code>, <code>uv run app.py</code>.'],
    ['Working with APIs','<code>requests.get(url, headers=…).json()</code> turns any API into Python data.'],
    ['pandas','Spreadsheet superpowers: load CSV/Excel, filter, group, pivot, export, in a few lines.'],
    ['FastAPI','Build typed, auto-documented APIs quickly. A favorite for AI back ends.']],
  ex:[['Property mgmt','Report automation','Pull Yardi/RealPage exports, clean them with pandas, email a formatted summary every Monday.'],
    ['E-commerce','Inventory sync','Script compares supplier CSV vs Shopify inventory via API and updates stock.'],
    ['AI','LLM apps','Python + Claude API classifies support tickets and drafts replies.'],
    ['Marketing','Ad reporting','Pull Meta + Google Ads spend daily into one sheet with ROAS calculated.']],
  link:[['web-scraping','Python is the #1 scraping language.'],['llms','Most AI/LLM tooling is Python-first.'],['api','requests/httpx call APIs; FastAPI builds them.'],['automations','Write custom automation steps when no-code isn\'t enough.'],['postgresql','psycopg / SQLAlchemy talk to Postgres.'],['json','json.loads / json.dumps handle API data.']],
  code:{ i:'On your Mac: <code>brew install uv</code>, then <code>uv init report && cd report && uv add pandas</code>. Save as <code>main.py</code> and run <code>uv run main.py</code>.', s:`import pandas as pd

# Pretend this came from a CSV export: pd.read_csv("orders.csv")
orders = pd.DataFrame([
    {"order": 1, "channel": "tiktok", "spend": 20, "revenue": 89},
    {"order": 2, "channel": "google", "spend": 35, "revenue": 140},
    {"order": 3, "channel": "tiktok", "spend": 15, "revenue": 45},
    {"order": 4, "channel": "meta",   "spend": 50, "revenue": 210},
])

report = (orders.groupby("channel")
          .agg(spend=("spend", "sum"), revenue=("revenue", "sum"), orders=("order", "count"))
          .assign(roas=lambda d: (d.revenue / d.spend).round(2))
          .sort_values("roas", ascending=False))

print(report)
report.to_csv("roas_by_channel.csv")
print(f"Best channel: {report.index[0]} at {report.roas.iloc[0]}x ROAS")`, n:'Read a real CSV export from work with <code>pd.read_csv()</code> and recreate one manual report automatically.' },
  vid:[['Python in 100 Seconds','Fireship','~2 min','Quick orientation.'],['Python Tutorial - Python Full Course for Beginners','Programming with Mosh','~6 hr','The classic beginner course.'],['Automate the Boring Stuff with Python','Al Sweigart','course','Automation-first approach; the free book is excellent.'],['FastAPI Course for Beginners','freeCodeCamp.org','~1 hr+','Build real APIs.']],
  quiz:[['What defines a code block in Python?',['Curly braces','Indentation','Semicolons','BEGIN/END'],1,'Python uses indentation instead of braces.'],
    ['Best library for tabular data?',['requests','pandas','flask','pytest'],1,'pandas DataFrames are spreadsheet-like tables.'],
    ['Why use a virtual environment?',['Faster CPU','Isolate each project\'s package versions','Run on Windows','Encrypt code'],1,'Prevents dependency conflicts between projects.'],
    ['<code>f"Hi {name}"</code> is a…',['Format string (f-string)','Function','Comment','File path'],0,'f-strings embed variables in text.']],
  fc:[['dict','Key/value data structure: {"name": "Maya"}'],['pip vs uv','Both install packages; uv is a much faster modern all-in-one tool'],['DataFrame','pandas table with rows/columns'],['FastAPI','Modern, fast, typed Python web API framework'],['pytest','Python\'s standard testing framework']],
  iv:[['Tell me about something you automated with Python.','STAR: the manual process and how long it took, how I scripted it (APIs, pandas, scheduling), error handling, and the time saved per week.'],
    ['How do you structure a Python project?','uv-managed project with pyproject.toml, src/ package, tests/ with pytest, ruff + mypy in CI, .env for secrets, and a README with run instructions.'],
    ['List vs tuple vs dict vs set?','List: ordered and mutable. Tuple: ordered and immutable. Dict: key/value lookup. Set: unique items with fast membership checks.']],
  links:[['Official Python tutorial','https://docs.python.org/3/tutorial/'],['Automate the Boring Stuff (free book)','https://automatetheboringstuff.com/']] },

{ id:'mysql', t:'MySQL', cat:'Programming & Data', e:'🐬', lvl:'Beginner → Intermediate',
  tag:'The classic relational database behind WordPress, WooCommerce and countless apps.',
  role:'A data layer that stores orders, users and records in tables you query with SQL.',
  eli5:'MySQL is a super-organized set of spreadsheets that many programs can read and write at the same time without making a mess.',
  pro:'MySQL is an open-source relational database (owned by Oracle; MariaDB is a fork). Data lives in tables with types and keys; you use <b>SQL</b> to <code>SELECT</code>, <code>JOIN</code>, <code>GROUP BY</code>. The InnoDB engine provides transactions and row locking. Common on LAMP stacks, WordPress/WooCommerce, and managed as AWS RDS/Aurora or PlanetScale.',
  why:'SQL is listed in a huge share of data, analyst, back-end and ops jobs, and MySQL is one of the two dominant open-source databases. The SQL skills transfer directly to Postgres.',
  kw:['mysql','sql','mariadb','relational database','database','databases','aurora'],
  jobs:['SQL','MySQL','query optimization','database design','reporting queries'],
  res:'Wrote SQL queries and designed MySQL tables to power reporting and application features.',
  con:[['Tables & data types','<code>INT</code>, <code>VARCHAR</code>, <code>DECIMAL(10,2)</code> for money, <code>DATETIME</code>, <code>JSON</code>.'],
    ['CRUD','<code>INSERT</code>, <code>SELECT</code>, <code>UPDATE</code>, <code>DELETE</code>: the four basic operations.'],
    ['JOINs','<code>INNER JOIN</code> (matches only), <code>LEFT JOIN</code> (keep all left rows). How related tables combine.'],
    ['GROUP BY & aggregates','<code>SUM</code>, <code>COUNT</code>, <code>AVG</code> per group: revenue per channel, units per property.'],
    ['Indexes','Make lookups fast; check with <code>EXPLAIN</code>.'],
    ['MySQL vs Postgres','Both relational. MySQL: simple, very common in web hosting. Postgres: richer features (JSONB, extensions). SQL is ~90% the same.']],
  ex:[['E-commerce','WooCommerce stores','WordPress + WooCommerce store everything in MySQL.'],
    ['Data','Price tracker','Scraped prices land in a MySQL table; SQL finds changes day over day.'],
    ['Big tech','Scale','Large platforms have famously scaled MySQL with sharding.'],
    ['Reporting','BI dashboards','Metabase/Looker Studio connect to MySQL for live dashboards.']],
  link:[['postgresql','Sister database: same SQL fundamentals.'],['web-scraping','Store scraped data for analysis.'],['python','Python + SQL is a data analyst\'s core combo.'],['aws','AWS RDS/Aurora run managed MySQL.'],['full-stack','The data layer in LAMP/WordPress stacks.']],
  code:{ i:'Install: <code>brew install mysql && brew services start mysql</code>, then <code>mysql -u root</code>. Or use a free online SQL playground.', s:`CREATE DATABASE shop; USE shop;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  qty INT NOT NULL,
  channel VARCHAR(20),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO products (name, price) VALUES ('Linen Throw', 89.00), ('Soy Candle', 24.00);
INSERT INTO orders (product_id, qty, channel) VALUES
  (1,1,'tiktok'),(2,3,'meta'),(1,2,'google'),(2,1,'tiktok');

-- Revenue by channel
SELECT o.channel, SUM(o.qty * p.price) AS revenue, COUNT(*) AS orders
FROM orders o JOIN products p ON p.id = o.product_id
GROUP BY o.channel
ORDER BY revenue DESC;`, n:'Add a <code>customers</code> table and find customers who ordered more than once (GROUP BY + HAVING).' },
  vid:[['SQL Explained in 100 Seconds','Fireship','~2 min','Relational thinking in a nutshell.'],['MySQL Tutorial for Beginners [Full Course]','Programming with Mosh','~3 hr','The standard MySQL course.'],['MySQL Full Course for free','Bro Code','~3 hr','Friendly and hands-on.']],
  quiz:[['Keep ALL customers even if they have no orders. Use…',['INNER JOIN','LEFT JOIN from customers','CROSS JOIN','No join'],1,'LEFT JOIN keeps every row from the left table.'],
    ['Filter groups after aggregation with…',['WHERE','HAVING','ORDER BY','LIMIT'],1,'WHERE filters rows before grouping; HAVING filters groups.'],
    ['Best type for money?',['FLOAT','DECIMAL(10,2)','VARCHAR','INT always'],1,'DECIMAL avoids floating-point rounding errors.'],
    ['A foreign key…',['Encrypts data','Links a row to a row in another table','Speeds up the server','Is a password'],1,'It enforces relationships between tables.']],
  fc:[['CRUD','Create, Read, Update, Delete'],['PRIMARY KEY','Unique identifier for each row'],['HAVING','Filter applied after GROUP BY'],['EXPLAIN','Shows how the database will run a query'],['MariaDB','Community fork of MySQL']],
  iv:[['A query is slow. How do you fix it?','Run EXPLAIN, check for full scans, add or adjust indexes on filtered/joined columns, avoid SELECT *, check for N+1 queries from the app, and consider caching or summary tables.'],
    ['INNER vs LEFT JOIN?','INNER returns only matching rows in both tables; LEFT returns all rows from the left table, with NULLs where there\'s no match.'],
    ['MySQL or Postgres for a new project?','Usually Postgres for its richer features (JSONB, extensions, strict standards); MySQL if the stack expects it (WordPress) or the team knows it. The SQL skills transfer.']],
  links:[['SQLBolt (interactive lessons)','https://sqlbolt.com/'],['MySQL docs: Tutorial','https://dev.mysql.com/doc/refman/8.0/en/tutorial.html']] },

{ id:'postgresql', t:'PostgreSQL', cat:'Programming & Data', e:'🐘', lvl:'Beginner → Intermediate',
  tag:'The most-loved open-source database. Powers Supabase, Neon, RDS and most new apps.',
  role:'The default modern data layer: orders, users, leads, events. Plus JSONB and pgvector for AI search.',
  eli5:'Postgres is like MySQL\'s super-powered cousin. Same organized spreadsheets, but it can also store messy notes (JSON), map locations and even help AI find similar things.',
  pro:'PostgreSQL is an advanced open-source relational database: ACID transactions, rich types (<code>jsonb</code>, arrays, <code>timestamptz</code>), CTEs and window functions, Row-Level Security, and extensions such as <b>PostGIS</b> (geo) and <b>pgvector</b> (embeddings). Managed by Supabase, Neon, AWS RDS/Aurora, Railway and others.',
  why:'Postgres is the default for most new startups and SaaS. Supabase made it the backbone of the "vibe coding" and AI app wave. Knowing it signals modern-stack readiness.',
  kw:['postgres','postgresql','supabase','neon','pgvector','sql','rds','psql'],
  jobs:['PostgreSQL','Supabase','SQL','data modeling','pgvector'],
  res:'Designed PostgreSQL schemas and SQL reports (JOINs, CTEs, indexes) for operational dashboards.',
  con:[['Keys & relations','Primary keys identify rows; foreign keys link units → properties → leases.'],
    ['Transactions (ACID)','<code>BEGIN … COMMIT</code>: all changes succeed or none do. No half-processed payments.'],
    ['Indexes & EXPLAIN ANALYZE','Find what\'s slow and fix it with the right index.'],
    ['CTEs & window functions','<code>WITH</code> for readable steps; <code>ROW_NUMBER() OVER(…)</code> for rankings and running totals.'],
    ['JSONB','Store webhook payloads raw and still query inside them.'],
    ['pgvector','Store AI embeddings for semantic search and RAG without a separate vector DB.']],
  ex:[['Property mgmt','Reporting portal','Occupancy, delinquency and lease expirations from related tables.'],
    ['SaaS','Multi-tenant apps','Row-Level Security keeps each customer\'s data isolated.'],
    ['E-commerce','Order store','Webhook JSON saved in jsonb, key fields in columns.'],
    ['AI','RAG chatbot','pgvector finds the 5 most relevant policy docs for each question.']],
  link:[['mysql','Same SQL foundation.'],['llms','pgvector powers retrieval for LLM apps.'],['nodejs','Node backends use pg / Prisma / Drizzle.'],['python','psycopg, SQLAlchemy, pandas.read_sql.'],['aws','RDS/Aurora host managed Postgres.'],['json','jsonb stores & queries JSON.']],
  code:{ i:'<code>brew install postgresql@16 && brew services start postgresql@16</code>, then <code>psql postgres</code>. Or create a free Supabase project and use its SQL editor.', s:`CREATE TABLE properties (id serial PRIMARY KEY, name text NOT NULL);
CREATE TABLE units (
  id serial PRIMARY KEY,
  property_id int NOT NULL REFERENCES properties(id),
  unit_no text, rent numeric(10,2), occupied boolean DEFAULT false
);
INSERT INTO properties (name) VALUES ('Oak Terrace'), ('Valley View');
INSERT INTO units (property_id, unit_no, rent, occupied) VALUES
 (1,'101',2400,true),(1,'102',2500,false),(1,'103',2450,true),
 (2,'A1',2100,true),(2,'A2',2150,true);

-- Occupancy + rent roll per property
SELECT p.name, count(*) AS units,
       round(100.0 * avg(u.occupied::int), 1) AS occupancy_pct,
       sum(u.rent) FILTER (WHERE u.occupied) AS rent_roll
FROM properties p JOIN units u ON u.property_id = p.id
GROUP BY p.name ORDER BY occupancy_pct DESC;

-- Rank units by rent within each property (window function)
SELECT unit_no, rent,
       rank() OVER (PARTITION BY property_id ORDER BY rent DESC) AS rent_rank
FROM units;

-- Store raw webhook JSON and query inside it
CREATE TABLE events (id serial PRIMARY KEY, payload jsonb);
INSERT INTO events (payload) VALUES ('{"type":"order","total":89,"channel":"tiktok"}');
SELECT payload->>'channel' AS channel, (payload->>'total')::numeric AS total FROM events;`, n:'Add a <code>leases</code> table and query leases expiring in the next 60 days. Then try <code>EXPLAIN ANALYZE</code>.' },
  vid:[['PostgreSQL in 100 Seconds','Fireship','~2.5 min','Fast overview.'],['Learn PostgreSQL Tutorial - Full Course for Beginners','freeCodeCamp.org (Amigoscode)','4h 19m','The classic hands-on course.','https://www.youtube.com/watch?v=qw--VYLpxG4'],['Database Indexing Explained (with PostgreSQL)','Hussein Nasser','~18 min','How indexes change query speed.'],['Supabase in 100 Seconds','Fireship','~2 min','Postgres as a full backend.']],
  quiz:[['Which column type stores queryable JSON in Postgres?',['text','jsonb','blob','varchar'],1,'jsonb is binary JSON: indexable and queryable.'],
    ['Which extension adds AI vector search?',['PostGIS','pgvector','pg_cron','uuid-ossp'],1,'pgvector stores embeddings and runs similarity search.'],
    ['ACID transactions guarantee…',['Faster queries','All-or-nothing changes','Free hosting','Encryption'],1,'Atomicity: every step commits or none does.'],
    ['<code>rank() OVER (PARTITION BY …)</code> is a…',['Trigger','Window function','Index','View'],1,'Window functions compute across related rows without collapsing them.']],
  fc:[['CTE','WITH clause: a named temporary result for readable queries'],['Window function','Calculation across related rows (rank, running total)'],['Row-Level Security','Policies limiting which rows each user can see'],['EXPLAIN ANALYZE','Runs a query and shows the real plan and timing'],['Supabase','Hosted Postgres + auth + APIs + storage']],
  iv:[['How would you model leases, units and tenants?','properties 1→many units; units 1→many leases over time; leases many↔many tenants via a lease_tenants join table; date ranges on leases; indexes on foreign keys and dates.'],
    ['When would you use jsonb vs normal columns?','Columns for fields you filter/join on and validate; jsonb for variable or raw payloads (webhooks, settings). I often store both: key fields extracted plus the raw JSON.'],
    ['How do you keep a production DB safe?','Least-privilege roles, automated backups with tested restores, migrations in version control, connection pooling, monitoring slow queries, no direct prod edits.']],
  links:[['Official PostgreSQL tutorial','https://www.postgresql.org/docs/current/tutorial.html'],['PostgreSQL Exercises','https://pgexercises.com/']] },

{ id:'web-scraping', t:'Web Scraping & Parsing', cat:'Programming & Data', e:'🕷️', lvl:'Intermediate',
  tag:'Turn websites into structured data: prices, listings, leads, research.',
  role:'Collects outside data (competitors, markets, listings) that feeds your databases, AI and decisions.',
  eli5:'Scraping is sending a robot to read a website and copy the important bits (prices, names, ratings) into a neat spreadsheet for you, every day.',
  pro:'Scraping = fetch (HTTP client or headless browser) + parse (HTML/JSON) + store. Static pages: <b>requests/httpx + BeautifulSoup</b> with CSS selectors. JS-rendered sites: <b>Playwright</b>/Selenium, or call the site\'s hidden JSON API seen in the Network tab. At scale: rate limits, retries, rotating proxies, scheduling. Respect robots.txt, terms of service and privacy law.',
  why:'Data collection appears across data engineering, growth, e-commerce intelligence, lead gen and AI (training/RAG data) roles. It\'s also a fantastic portfolio project.',
  kw:['scraping','web scraping','scraper','scrapers','crawler','crawling','beautifulsoup','playwright','selenium','puppeteer','parsing','data extraction','apify'],
  jobs:['Web scraping','BeautifulSoup / Playwright','data extraction','ETL','browser automation'],
  res:'Built Python scrapers (requests, BeautifulSoup, Playwright) to collect and normalize market data into a database on a schedule.',
  con:[['Inspect first','Dev tools: find the element\'s CSS selector, or the JSON API in the Network tab (often easier than parsing HTML).'],
    ['Fetch','<code>httpx.get(url, headers={"User-Agent": …})</code> for static pages; Playwright for JS-heavy sites.'],
    ['Parse','BeautifulSoup: <code>soup.select(".price")</code>. Clean text, convert to numbers/dates.'],
    ['Store & schedule','Save to CSV/DB; run daily with cron or a workflow tool; compare with yesterday.'],
    ['Be polite & legal','Respect robots.txt and ToS, throttle requests, avoid personal data, prefer official APIs when they exist.']],
  ex:[['E-commerce','Competitor pricing','Track 200 competitor SKUs nightly; alert when a price drops below yours.'],
    ['Real estate','Rental comps','Collect listing rents in your submarket to set pricing.'],
    ['Sales','Lead lists','Extract public business directories into a CRM (check the source\'s terms).'],
    ['AI','RAG knowledge base','Crawl your own help docs into chunks for an LLM assistant.']],
  link:[['python','The standard scraping language.'],['html','You parse HTML structure with selectors.'],['json','Many sites expose hidden JSON APIs, which are easier to parse.'],['mysql','Store snapshots and compare over time.'],['llms','LLMs can parse messy pages into structured JSON.'],['automations','Schedule scrapers and route results.']],
  code:{ i:'<code>uv add httpx beautifulsoup4</code>. This scrapes a site built for practice.', s:`import httpx, csv
from bs4 import BeautifulSoup

URL = "https://books.toscrape.com/catalogue/category/books/travel_2/index.html"
html = httpx.get(URL, headers={"User-Agent": "learning-bot/1.0"}, timeout=20).text
soup = BeautifulSoup(html, "html.parser")

rows = []
for card in soup.select("article.product_pod"):
    title = card.h3.a["title"]
    price = float(card.select_one(".price_color").text.replace("£", ""))
    rating = card.select_one("p.star-rating")["class"][1]   # e.g. "Three"
    rows.append({"title": title, "price": price, "rating": rating})

rows.sort(key=lambda r: r["price"])
with open("travel_books.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=rows[0].keys()); w.writeheader(); w.writerows(rows)

print(f"Saved {len(rows)} books. Cheapest: {rows[0]['title']} at £{rows[0]['price']}")`, n:'Follow the "next" link to scrape all pages, then load results into MySQL and send a daily Slack summary.' },
  vid:[['Beautiful Soup 4 Tutorial - Web Scraping in Python','Tech With Tim','~25 min','Clear, beginner-friendly.'],['Web Scraping with Python - Beautiful Soup Crash Course','freeCodeCamp.org','~1 hr','Full walkthrough.'],['Scraping with Playwright Python','John Watson Rooney','~20 min','Modern scraping for JS sites and hidden APIs.']],
  quiz:[['A site loads prices with JavaScript after the page loads. Best first move?',['Give up','Check the Network tab for a JSON API, or use Playwright','Use requests on the HTML only','Email the site'],1,'Hidden JSON APIs or a headless browser handle JS-rendered data.'],
    ['BeautifulSoup is used to…',['Send emails','Parse HTML','Host websites','Train models'],1,'It parses HTML/XML and lets you select elements.'],
    ['Responsible scraping includes…',['Max requests per second','Respecting robots.txt/ToS and throttling','Bypassing logins','Collecting personal data'],1,'Be polite, legal and ethical.'],
    ['Where do you find an element\'s CSS selector?',['Browser dev tools Inspect','Terminal','DNS','Package.json'],0,'Right-click → Inspect.']],
  fc:[['CSS selector','Pattern to find elements: .price, #title, article h3 a'],['Headless browser','A real browser with no window, controlled by code'],['robots.txt','File stating which paths bots may crawl'],['Rate limiting','Throttling requests to avoid overloading a site'],['ETL','Extract, Transform, Load: the data pipeline pattern']],
  iv:[['How would you build a reliable daily scraper?','Prefer an API; otherwise robust selectors, retries with backoff, timeouts, validation of parsed fields, alerts when the page structure changes, idempotent storage, scheduling, and logging.'],
    ['How do you handle a JavaScript-rendered site?','Look for the underlying JSON endpoint first; if none, use Playwright to render, wait for selectors, then extract. Cache and throttle.'],
    ['What legal/ethical considerations apply?','ToS, robots.txt, copyright, personal data laws (CCPA/GDPR), no circumventing logins or paywalls, and reasonable request rates.']],
  links:[['Books to Scrape (practice site)','https://books.toscrape.com/'],['BeautifulSoup docs','https://www.crummy.com/software/BeautifulSoup/bs4/doc/']] },

{ id:'llms', t:'LLMs (Large Language Models)', cat:'Programming & Data', e:'🤖', lvl:'Beginner → Advanced',
  tag:'Claude, GPT, Gemini: how they work and how to build real products with them.',
  role:'The AI layer: drafts copy, reads documents, classifies leads, extracts data and powers agents across the whole stack.',
  eli5:'An LLM read a gigantic library and got really good at guessing the next word. That turns out to be enough to write, summarize, answer questions and even write code, though it can still confidently guess wrong.',
  pro:'LLMs are transformer neural networks trained on huge text corpora to predict tokens, then tuned with human feedback. Building with them means <b>prompting</b> (system prompts, examples), <b>context</b> (tokens and limits), <b>tool use / function calling</b>, <b>structured output</b> (JSON), <b>RAG</b> (retrieve your docs via embeddings, then answer), <b>agents</b> (multi-step tool loops), and <b>evals</b> to measure quality. Key risks: hallucination, prompt injection, cost and latency.',
  why:'"AI" and "LLM" are in a fast-growing share of remote listings across engineering, ops, marketing and support. People who can turn LLMs into reliable workflows are among the most sought-after hires right now.',
  kw:['llm','llms','large language model','large language models','ai','gpt','chatgpt','openai','claude','anthropic','gemini','prompt engineering','rag','langchain','generative ai','genai','ai agents','agents','embeddings','mcp'],
  jobs:['LLM / GenAI','prompt engineering','RAG','AI agents','OpenAI / Anthropic APIs'],
  res:'Built LLM-powered workflows (Claude/OpenAI APIs) for drafting, classification and data extraction with structured JSON outputs.',
  con:[['Tokens & context window','Models read and write tokens (~¾ of a word). The context window caps how much fits at once. Cost is per token.'],
    ['Prompting','Clear role, task, context, examples and output format. Specific beats clever.'],
    ['Structured output','Ask for JSON matching a schema so code and automations can use the result.'],
    ['RAG','Embed your documents, retrieve the most relevant chunks, put them in the prompt. Grounded answers on your data.'],
    ['Tool use & agents','The model calls functions (search, database, send SMS) in a loop to finish multi-step tasks. MCP standardizes tool connections.'],
    ['Evals & safety','Test prompts on real examples; guard against hallucinations, prompt injection and leaking private data.']],
  ex:[['Property mgmt','Lead responder','Reads an inquiry, checks availability, drafts a personal reply with tour slots.'],
    ['E-commerce','Ad & product copy','Generates 20 hook variations and SEO product descriptions in the brand voice.'],
    ['Support','Ticket triage','Classifies tickets by urgency and topic and drafts a first response.'],
    ['Ops','Document extraction','Pulls fields from leases or invoices into JSON for the database.']],
  link:[['python','Most AI tooling is Python-first.'],['api','You call LLMs through REST APIs with API keys.'],['json','Structured outputs and tool calls are JSON.'],['postgresql','pgvector stores embeddings for RAG.'],['automations','LLM steps inside n8n/Zapier/Make workflows.'],['meta-ads','Generate and iterate ad creative variations.'],['web-scraping','Scrape → clean → feed to RAG.']],
  code:{ i:'Get an API key at console.anthropic.com, then <code>uv add anthropic</code> and <code>export ANTHROPIC_API_KEY=…</code>. Check the docs for the current model name.', s:`import json, anthropic

client = anthropic.Anthropic()        # reads ANTHROPIC_API_KEY from env

inquiry = """Hi! I'm looking for a 2 bedroom near Ventura Blvd, budget around
$3,000, need to move by Dec 15 and I have a small dog. - Jordan (818) 555-0142"""

msg = client.messages.create(
    model="claude-sonnet-4-5",          # use a current model from the docs
    max_tokens=400,
    system="You extract rental lead data. Reply with JSON only.",
    messages=[{"role": "user", "content":
        "Extract name, phone, bedrooms, budget, move_by (YYYY-MM-DD), pets, "
        "and a 2-sentence friendly reply offering a tour.\\n\\n" + inquiry}],
)

lead = json.loads(msg.content[0].text)
print(json.dumps(lead, indent=2))
# -> save to Postgres, text lead["reply"] via Twilio, post to Slack`, n:'Add validation (retry if the JSON doesn\'t parse), then wire it into the AI lead-response capstone project.' },
  vid:[['Intro to Large Language Models','Andrej Karpathy','~1 hr','The best plain-English explanation from an OpenAI co-founder.'],['Large Language Models explained briefly','3Blue1Brown','~8 min','Beautiful visual intuition.'],['Deep Dive into LLMs like ChatGPT','Andrej Karpathy','~3.5 hr','The full picture: training to tools.'],['Prompt engineering overview','Anthropic','varies','Practical prompting from the makers of Claude.']],
  quiz:[['RAG stands for…',['Random Answer Generation','Retrieval-Augmented Generation','Rapid API Gateway','Recursive Agent Graph'],1,'Retrieve relevant docs, then generate an answer grounded in them.'],
    ['A "hallucination" is…',['A UI bug','A confident but false output','A slow response','An API key leak'],1,'Models can invent facts; grounding and evals reduce it.'],
    ['Best way to make LLM output usable by code?',['Ask nicely','Request JSON matching a schema and validate it','Use a bigger font','Lower the price'],1,'Structured outputs + validation make results reliable.'],
    ['Prompt injection is…',['A faster prompt','Malicious text in inputs that tries to hijack the model\'s instructions','A database index','A Python package'],1,'Treat untrusted text (emails, web pages) as data, not instructions.']],
  fc:[['Token','Chunk of text the model processes (~¾ word)'],['Context window','Max tokens the model can consider at once'],['Embedding','Vector of numbers representing meaning, used for similarity search'],['Tool use / function calling','Model requests a function call with JSON arguments'],['Evals','Systematic tests measuring output quality']],
  iv:[['How would you build a reliable LLM feature for production?','Define the task and success criteria, build an eval set from real examples, prompt with clear instructions and examples, use structured outputs, add retrieval if facts are needed, validate and retry, log everything, monitor cost and latency, and keep a human in the loop for risky actions.'],
    ['RAG vs fine-tuning?','RAG adds fresh or private knowledge at query time and is cheaper and easier to update. Fine-tuning changes behavior or style. Most business use cases start with RAG + good prompting.'],
    ['How do you reduce hallucinations?','Ground answers in retrieved sources, ask the model to cite or say "I don\'t know", constrain output formats, use evals, and verify critical facts with code or tools.']],
  links:[['Anthropic docs (Claude)','https://docs.claude.com/'],['Hugging Face LLM course (free)','https://huggingface.co/learn/llm-course']] }
);
