/* APIs & Automation + Tools & Business */
G.push(
{ id:'api', t:'APIs, REST, API Keys & Integration', cat:'APIs & Automation', e:'🔌', lvl:'Beginner → Intermediate',
  tag:'How software talks to software, and how you plug any app into any other.',
  role:'The connector of the whole map: front ends, Shopify, Twilio, Slack, LLMs and databases all talk through APIs.',
  eli5:'An API is a restaurant menu for a computer. You don\'t go into the kitchen; you order "GET me the orders from today" and the kitchen sends back exactly that. An API key is your membership card proving you\'re allowed to order.',
  pro:'An Application Programming Interface is a contract for requesting data and actions. <b>REST</b> APIs use HTTP <b>methods</b> (GET read, POST create, PUT/PATCH update, DELETE) on <b>resources</b> (<code>/orders/123</code>), with <b>status codes</b> and JSON bodies. Auth: <b>API keys</b> (simple secret in a header), <b>OAuth 2.0</b> (user-granted tokens), JWTs. <b>Webhooks</b> are reverse APIs: the service calls <i>you</i> when events happen. Integration = mapping, auth, pagination, rate limits, retries, idempotency.',
  why:'"API integration" appears in automation, solutions engineering, back-end, marketing ops and RevOps listings alike. It\'s arguably the single most transferable technical skill on this list.',
  kw:['api','apis','rest','restful','rest api','api key','api keys','endpoint','endpoints','webhook','webhooks','integration','integrations','oauth','graphql','postman','sdk'],
  jobs:['REST APIs','API integrations','webhooks','OAuth 2.0','Postman'],
  res:'Integrated third-party REST APIs and webhooks (auth, pagination, retries) to sync data between business systems.',
  con:[['Endpoints & methods','<code>GET /customers</code>, <code>POST /customers</code>, <code>PATCH /customers/42</code>, <code>DELETE /customers/42</code>.'],
    ['Status codes','2xx success (200, 201), 4xx your mistake (400 bad input, 401 no auth, 403 forbidden, 404, 429 rate limited), 5xx their problem.'],
    ['API keys','A secret string sent in a header (<code>Authorization: Bearer sk_…</code>). Never put it in front-end code or Git; rotate it if it leaks.'],
    ['OAuth 2.0','User clicks "Connect your Google account", you receive a scoped token. Used for acting on behalf of users.'],
    ['Webhooks','Push instead of poll: Shopify POSTs to your URL when an order happens. Verify signatures; respond fast.'],
    ['Pagination, rate limits, idempotency','Loop through pages, back off on 429s, and use idempotency keys so retries don\'t duplicate charges.']],
  ex:[['E-commerce','Order sync','Shopify webhook → your API → ShipStation API creates the shipment.'],
    ['Payments','Stripe','Create customers & subscriptions with Stripe\'s REST API; handle its webhooks for payment events.'],
    ['Property mgmt','PMS data','Pull resident and ledger data from a property-management system\'s API for your reports.'],
    ['AI','LLM APIs','Claude and OpenAI are REST APIs authenticated with API keys.']],
  link:[['json','APIs speak JSON.'],['nodejs','Build APIs with Express.'],['python','Call APIs with httpx; build them with FastAPI.'],['automations','No-code tools are friendly wrappers around APIs.'],['twilio','Twilio is an API for SMS & voice.'],['network-security','API keys, OAuth and rate limits are security topics.'],['shopify','Shopify Admin API + webhooks.']],
  code:{ i:'Run in Terminal. These hit free public test APIs, no key required. Then compare with the authenticated example.', s:`# GET a resource
curl -s https://jsonplaceholder.typicode.com/users/1

# POST (create) with a JSON body and see the 201 response code
curl -s -i -X POST https://jsonplaceholder.typicode.com/posts \\
  -H "Content-Type: application/json" \\
  -d '{"title":"New lead","body":"Maya wants a tour","userId":1}'

# Query parameters (filtering)
curl -s "https://jsonplaceholder.typicode.com/posts?userId=1" | head -c 300

# Typical authenticated API call (API key in a header, from env var):
# export STRIPE_KEY=sk_test_...
# curl https://api.stripe.com/v1/customers -u "$STRIPE_KEY:"

# Same thing in Python:
# import httpx, os
# r = httpx.get("https://api.example.com/v1/orders",
#               headers={"Authorization": f"Bearer {os.environ['API_KEY']}"},
#               params={"limit": 50})
# r.raise_for_status(); data = r.json()`, n:'Install Postman or Bruno (free), make a collection of these requests, then try a real API with a test key (Stripe test mode, Twilio trial).' },
  vid:[['RESTful APIs in 100 Seconds','Fireship','~2 min','The essentials.'],['APIs for Beginners - How to use an API (Full Course)','freeCodeCamp.org','~2.5 hr','Excellent: keys, Postman, webhooks, SDKs.'],['What is a REST API?','IBM Technology','~10 min','Clear whiteboard explanation.'],['OAuth 2.0 explained','ByteByteGo','~10 min','How "Sign in with Google" works.']],
  quiz:[['Your API call returns 429. What does it mean?',['Not found','Too many requests: slow down/back off','Server crashed','Success'],1,'Rate limited. Retry with exponential backoff.'],
    ['Which method creates a new resource?',['GET','POST','DELETE','HEAD'],1,'POST creates; GET reads; PATCH updates; DELETE removes.'],
    ['Where should an API key NEVER be?',['Env variable','Secrets manager','Front-end JavaScript / public GitHub repo','Server config'],2,'Anything in the browser or a public repo is effectively public.'],
    ['A webhook is…',['A polling loop','The service calling your URL when an event happens','A type of database','An API key'],1,'Push-based events, the backbone of real-time automation.']],
  fc:[['REST','Resource-based API style over HTTP verbs and URLs'],['401 vs 403','401 = not authenticated; 403 = authenticated but not allowed'],['Idempotency key','Unique ID so retrying a request doesn\'t double-execute it'],['OAuth scope','The specific permissions a token grants'],['Pagination','Fetching large results page by page (cursor/offset)']],
  iv:[['Walk me through integrating a new third-party API.','Read the docs, get sandbox credentials, test endpoints in Postman, design the field mapping, implement with auth, pagination, rate-limit handling, retries and idempotency, store secrets safely, log and alert on failures, then document it.'],
    ['Polling vs webhooks?','Polling asks repeatedly ("anything new?"), which is simple but wasteful and delayed. Webhooks push events instantly, but you must expose an endpoint, verify signatures, handle retries and duplicates. I use webhooks plus periodic reconciliation.'],
    ['An API key leaked in a GitHub commit. What do you do?','Revoke/rotate it immediately, check usage logs for abuse, remove it from history (but assume it\'s compromised anyway), move secrets to env vars/secret manager, and add secret scanning to CI.']],
  links:[['MDN: HTTP overview','https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview'],['roadmap.sh API design','https://roadmap.sh/api-design']] },

{ id:'automations', t:'Automations', cat:'APIs & Automation', e:'⚙️', lvl:'Beginner → Intermediate',
  tag:'Zapier, Make, n8n and code: make work happen while you sleep.',
  role:'The glue layer: triggers in one app fire actions in others, turning the whole stack into one self-running system.',
  eli5:'Automation is setting up dominoes. When one thing happens (a new order), it knocks over the next (send a text), and the next (tell the team), with no one pushing them.',
  pro:'Automations follow <b>trigger → (filter/transform) → actions</b>. No/low-code platforms: <b>Zapier</b> (easiest, most apps), <b>Make</b> (visual, cheaper at volume), <b>n8n</b> (open-source, self-hostable, strong AI nodes), <b>Power Automate</b> (Microsoft shops). Code-based: Python/Node scripts, cron, GitHub Actions, serverless functions. Good automations handle errors, retries, deduplication, logging and alerting.',
  why:'Automation Specialist, RevOps, Marketing Ops and AI Automation Engineer are booming remote titles. It\'s also the core of your planned consulting business.',
  kw:['automation','automations','automate','automated','zapier','make.com','integromat','n8n','workflow','workflows','rpa','power automate','no-code','low-code'],
  jobs:['Zapier / Make / n8n','workflow automation','RevOps / Marketing Ops','process improvement','AI agents & automation'],
  res:'Designed and maintained automated workflows (Zapier/Make/n8n + APIs) that removed manual data entry and sped up response times.',
  con:[['Trigger','The event that starts it: new form submission, new Shopify order, schedule (every Monday 8am), incoming webhook.'],
    ['Actions','What happens next: create CRM contact, send SMS, post to Slack, add Notion row, call an LLM.'],
    ['Filters, routers & formatters','Only continue if total > $100; branch by channel; reformat dates and names.'],
    ['Data mapping','Drag fields from earlier steps (JSON) into later ones.'],
    ['Error handling','Retries, error paths, alerts to Slack, and logs. Silent failures are the #1 automation killer.'],
    ['When to code it','High volume, complex logic or cost at scale → Python/Node scripts or self-hosted n8n.']],
  ex:[['Property mgmt','Lead routing','Web inquiry → LLM qualifies → Twilio text → assign leasing agent in Slack → log in a sheet.'],
    ['E-commerce','Post-purchase flow','Order → thank-you SMS → review request after delivery → VIP tag if order > $200.'],
    ['Agencies','Client reporting','Every Monday, pull ad metrics from Meta & Google APIs → Google Sheet → email PDF.'],
    ['Ops','Onboarding','New hire in HR tool → create Google/Slack/Notion accounts → welcome checklist.']],
  link:[['api','Every automation step is an API call under the hood.'],['json','You map JSON fields between steps.'],['twilio','SMS/voice actions.'],['slack','Alerts and approvals in Slack.'],['notion','Log and track in Notion databases.'],['llms','AI steps for classify / draft / extract.'],['python','Code steps when no-code hits its limits.']],
  code:{ i:'A code-based automation: a Python script you could run on a schedule (cron, n8n, GitHub Actions). It checks new leads and posts hot ones to Slack.', s:`import os, httpx
from datetime import datetime, timedelta, timezone

SLACK_WEBHOOK = os.environ["SLACK_WEBHOOK_URL"]   # from Slack: Incoming Webhooks

def fetch_new_leads():
    # Replace with your CRM/form API call. Fake data for the demo:
    return [
        {"name": "Jordan", "budget": 3200, "move_in_days": 10, "source": "tiktok"},
        {"name": "Priya",  "budget": 1800, "move_in_days": 90, "source": "google"},
    ]

def is_hot(lead):                                   # the "filter" step
    return lead["budget"] >= 2500 and lead["move_in_days"] <= 30

def notify(lead):                                   # the "action" step
    text = (f":fire: Hot lead: *{lead['name']}*, budget \${lead['budget']}, "
            f"moving in {lead['move_in_days']} days (via {lead['source']})")
    r = httpx.post(SLACK_WEBHOOK, json={"text": text}, timeout=10)
    r.raise_for_status()                            # surface errors loudly

if __name__ == "__main__":
    hot = [l for l in fetch_new_leads() if is_hot(l)]
    for lead in hot:
        notify(lead)
    print(f"{datetime.now(timezone.utc):%Y-%m-%d %H:%M} checked leads, {len(hot)} hot")`, n:'Rebuild the same flow in n8n or Zapier (form → filter → Slack), and compare: which is easier to maintain? Which is cheaper at 10,000 runs/month?' },
  vid:[['n8n Tutorial for Beginners','n8n OR Nate Herk','~30 min','Self-hostable automation with AI nodes.'],['Zapier Tutorial for Beginners','Zapier OR Kevin Stratvert','~20 min','The most common tool in job listings.'],['Make.com Tutorial for Beginners','Make OR Nick Saraev','~30 min','Visual scenarios, routers, iterators.'],['Automate the Boring Stuff with Python','Al Sweigart','course','When you outgrow no-code.']],
  quiz:[['Every automation starts with a…',['Action','Trigger','Filter','Report'],1,'Trigger = the event that kicks it off.'],
    ['Best way to avoid silent automation failures?',['Hope','Error paths + alerts + logs','Run it less often','Use more Zaps'],1,'Alert a human (e.g., Slack) when steps fail.'],
    ['Which tool is open-source and self-hostable?',['Zapier','n8n','Power Automate','IFTTT'],1,'n8n can run on your own server.'],
    ['A "router" in Make does what?',['Hosts websites','Branches the flow into multiple paths','Encrypts data','Schedules runs'],1,'Routers split data into different paths by conditions.']],
  fc:[['Trigger → Action','The basic shape of every automation'],['Zapier','Easiest no-code automation; 7,000+ app integrations'],['n8n','Open-source workflow automation, self-hostable, strong for AI agents'],['Deduplication','Preventing the same record being processed twice'],['Cron','Time-based scheduler for running jobs on Linux']],
  iv:[['Tell me about an automation you built and its impact.','STAR: the manual process (who did it, how long), the trigger/actions/tools, edge cases handled, and the result in hours saved or response time cut. Bring a screenshot or Loom.'],
    ['How do you decide between Zapier, Make, n8n and custom code?','Volume and cost, complexity of logic, data sensitivity (self-host?), who maintains it, and available integrations. Prototype in no-code, move hot paths to code when they scale.'],
    ['How do you make automations reliable?','Idempotency/dedup keys, retries, error branches, alerts, logging, rate-limit awareness, test data, documentation, and an owner for each workflow.']],
  links:[['n8n docs & templates','https://docs.n8n.io/'],['Zapier Learn','https://zapier.com/learn']] },

{ id:'twilio', t:'Twilio', cat:'APIs & Automation', e:'📲', lvl:'Intermediate',
  tag:'Send texts, make calls and verify users with a few lines of code.',
  role:'The communications API: SMS confirmations, lead follow-ups, 2FA codes and voice bots inside your automations.',
  eli5:'Twilio lets your program have its own phone. It can text people, call them, or listen for replies, all automatically.',
  pro:'Twilio is a CPaaS (communications platform as a service): REST APIs + SDKs for <b>Programmable Messaging</b> (SMS/MMS/WhatsApp), <b>Voice</b> (calls, IVR via TwiML), <b>Verify</b> (OTP/2FA) and SendGrid (email). Inbound messages hit your webhook. US business texting requires <b>A2P 10DLC</b> registration and opt-in/opt-out compliance (TCPA).',
  why:'Twilio skills show up in automation, customer engagement, healthcare/real estate tech and back-end roles. It\'s a common tool in lead response and appointment reminders, which businesses happily pay for.',
  kw:['twilio','sms','text messaging','voice','ivr','sendgrid','whatsapp','2fa','otp','10dlc'],
  jobs:['Twilio','SMS/voice integration','A2P 10DLC','SendGrid','customer messaging'],
  res:'Integrated Twilio SMS into lead-response and notification workflows, including inbound reply handling and opt-out compliance.',
  con:[['Account SID & Auth Token','Your API credentials. Keep them in environment variables.'],
    ['Sending SMS','POST to the Messages API with from, to and body. Costs about a cent per segment.'],
    ['Inbound webhooks','When someone replies, Twilio POSTs to your URL; respond with TwiML or JSON.'],
    ['TwiML','XML instructions for calls/messages: <code>&lt;Say&gt;</code>, <code>&lt;Gather&gt;</code>, <code>&lt;Dial&gt;</code>.'],
    ['Compliance','A2P 10DLC registration, explicit opt-in, STOP handling, quiet hours. Fines are real.']],
  ex:[['Property mgmt','Instant lead reply','New inquiry → personalized text within 60 seconds with tour times.'],
    ['E-commerce','Order updates','Confirmation, shipped and delivered texts; abandoned-cart reminders (with consent).'],
    ['Healthcare/services','Appointment reminders','Reply C to confirm, R to reschedule. Cuts no-shows.'],
    ['Security','2FA','Twilio Verify sends one-time codes on login.']],
  link:[['api','Twilio is a REST API with webhooks.'],['automations','The SMS step in many workflows.'],['nodejs','Twilio\'s Node SDK.'],['python','Twilio\'s Python SDK.'],['llms','LLM drafts the text; Twilio sends it.'],['network-security','Verify for 2FA; guard credentials.']],
  code:{ i:'Sign up for a free trial (it verifies your own phone). <code>uv add twilio</code>, set the env vars, run it, and your phone buzzes.', s:`import os
from twilio.rest import Client

client = Client(os.environ["TWILIO_ACCOUNT_SID"], os.environ["TWILIO_AUTH_TOKEN"])

msg = client.messages.create(
    from_=os.environ["TWILIO_NUMBER"],      # your Twilio number, e.g. +18185550100
    to=os.environ["MY_CELL"],               # trial: must be a verified number
    body="Hi Jordan! Thanks for your interest in Oak Terrace 🏡 "
         "Tours are open Thu 4pm or Sat 11am. Reply 1 or 2 to book. Reply STOP to opt out.",
)
print("Sent:", msg.sid, msg.status)

# Inbound replies: in the Twilio console, set your number's "A message comes in"
# webhook to https://your-server/sms. Your endpoint reads request.form["Body"]
# ("1" or "2"), books the tour, and replies with TwiML:
# <Response><Message>Booked! See you Thursday at 4pm.</Message></Response>`, n:'Build the inbound /sms endpoint (Flask/FastAPI or Express) and test it with ngrok exposing localhost.' },
  vid:[['Send SMS with Python and Twilio','Twilio Developers','~10 min','Official quickstart walkthrough.'],['Twilio SMS Node.js tutorial','Twilio Developers OR Web Dev Simplified','~15 min','Same thing in JavaScript.'],['Build an AI SMS assistant with Twilio','Twilio OR Tech With Tim','~30 min','LLM + Twilio together.']],
  quiz:[['When a customer replies to your Twilio number, Twilio…',['Ignores it','POSTs it to your configured webhook URL','Emails you','Deletes it'],1,'Inbound messages go to your webhook.'],
    ['US business texting at scale requires…',['A2P 10DLC registration','A Shopify plan','DNS MX records','Nothing'],0,'Carriers require brand/campaign registration.'],
    ['TwiML is…',['A database','XML instructions for calls/messages','A CSS framework','A Python library'],1,'Tells Twilio what to do: say, gather, dial, message.'],
    ['Required in marketing texts?',['Emojis','Opt-out instructions like "Reply STOP"','Links','Images'],1,'Consent and opt-out are legal requirements.']],
  fc:[['CPaaS','Communications Platform as a Service'],['Account SID / Auth Token','Twilio API credentials'],['Twilio Verify','Managed one-time-passcode/2FA API'],['A2P 10DLC','US registration for business texting on local numbers'],['ngrok','Tunnel exposing localhost so webhooks can reach it']],
  iv:[['How would you build an SMS appointment reminder system?','Store appointments in a DB; a scheduled job finds reminders due and sends them via Twilio; an inbound webhook parses replies (C/R/STOP) and updates records; log message status callbacks; handle opt-outs and quiet hours; register 10DLC.'],
    ['How do you keep Twilio costs and compliance in check?','Keep messages short (segments), dedupe sends, honor opt-outs automatically, rate-limit, monitor usage alerts, and keep consent records.'],
    ['How do you secure a Twilio webhook?','Validate the X-Twilio-Signature header with your auth token, use HTTPS, and never trust the payload blindly.']],
  links:[['Twilio Docs: Messaging quickstarts','https://www.twilio.com/docs/messaging/quickstart'],['TwilioQuest (free learning game)','https://www.twilio.com/quest']] },

{ id:'slack', t:'Slack', cat:'APIs & Automation', e:'💬', lvl:'Beginner',
  tag:'Where remote teams live, and a platform you can build bots and alerts on.',
  role:'The notification and command center: automations report here, teams approve things here, bots answer questions here.',
  eli5:'Slack is a group chat for work, split into rooms by topic. You can also invite robots into the rooms to post updates and answer questions.',
  pro:'Slack is a messaging platform with a developer API: <b>Incoming Webhooks</b> (post messages to a channel), the <b>Web API</b> (<code>chat.postMessage</code>, users, files), the <b>Events API</b> (react to messages/mentions), <b>slash commands</b>, interactive <b>Block Kit</b> UIs (buttons, forms) and <b>Workflow Builder</b> (no-code). Apps are typically built with the <b>Bolt</b> framework (JS/Python).',
  why:'Nearly every remote company runs on Slack, so remote etiquette (async updates, threads) is an expected soft skill. Slack bots and alerts are standard deliverables for automation and internal-tools roles.',
  kw:['slack','slack bot','slack api','slack app','block kit','bolt'],
  jobs:['Slack','async communication','Slack bots / integrations','internal tools','Workflow Builder'],
  res:'Built Slack integrations (webhooks, Bolt app) delivering real-time alerts and approval buttons for operational workflows.',
  con:[['Channels, threads & async','Public channels by topic, threads for discussion, status updates written for people in other time zones.'],
    ['Incoming webhooks','A secret URL; POST JSON <code>{"text": …}</code> and it appears in a channel. The simplest integration.'],
    ['Block Kit','Rich messages with sections, fields, buttons and menus. Design them in Block Kit Builder.'],
    ['Bolt apps','Respond to slash commands (<code>/leads today</code>), mentions and button clicks.'],
    ['Workflow Builder','No-code forms and multi-step workflows inside Slack.']],
  ex:[['E-commerce','Big order alerts','#sales gets a message with order value, items and customer for every $200+ order.'],
    ['DevOps','Incident alerts','Monitoring posts to #alerts; on-call acknowledges with a button.'],
    ['Property mgmt','Lead routing','New lead posted with "Claim" buttons; first agent to click owns it.'],
    ['Marketing','Daily KPI digest','8am message: yesterday\'s spend, revenue and ROAS by channel.']],
  link:[['automations','The most common "notify the team" action.'],['api','Slack Web API & webhooks.'],['nodejs','Bolt for JavaScript.'],['llms','AI bots answering questions in Slack.'],['notion','Pair: Slack for talk, Notion for docs.']],
  code:{ i:'In Slack: create an app at api.slack.com/apps → Incoming Webhooks → add to a channel → copy the URL. Then run this in Terminal.', s:`# Simplest possible message
curl -X POST -H 'Content-type: application/json' \\
  --data '{"text":"🚀 Hello from my automation!"}' \\
  "$SLACK_WEBHOOK_URL"

# Rich Block Kit message (design yours at app.slack.com/block-kit-builder)
curl -X POST -H 'Content-type: application/json' "$SLACK_WEBHOOK_URL" --data '{
  "blocks": [
    {"type":"header","text":{"type":"plain_text","text":"🛍 New order: $214.00"}},
    {"type":"section","fields":[
      {"type":"mrkdwn","text":"*Customer:*\\nMaya R."},
      {"type":"mrkdwn","text":"*Source:*\\nTikTok Spark Ad"},
      {"type":"mrkdwn","text":"*Items:*\\n2x Linen Throw"},
      {"type":"mrkdwn","text":"*Ship by:*\\nTomorrow"}]},
    {"type":"context","elements":[{"type":"mrkdwn","text":"Order #5531 · Shopify"}]}
  ]}'`, n:'Build a Bolt app with a <code>/kpis</code> slash command that replies with today\'s numbers from your database.' },
  vid:[['Build a Slack bot with Bolt','Slack Developers','~20 min','Official intro to building apps.'],['Slack Workflow Builder tutorial','Slack','~10 min','No-code automations inside Slack.'],['How to use Slack effectively for remote work','Slack OR Keep Productive','~15 min','Etiquette that makes you look senior.']],
  quiz:[['Easiest way to post automated messages to a channel?',['Email the channel','Incoming Webhook URL','Screenshot','RSS'],1,'POST JSON to the webhook URL.'],
    ['Block Kit is for…',['Blocking users','Building rich interactive message layouts','Encryption','Billing'],1,'Sections, fields, buttons, menus.'],
    ['Good remote Slack etiquette:',['DM "hi" and wait','Reply in threads; write complete async messages','Use @channel often','Only use voice'],1,'Complete messages + threads respect everyone\'s time.'],
    ['Bolt is…',['A Slack theme','Slack\'s framework for building apps','A database','A hosting service'],1,'Available for JS, Python and Java.']],
  fc:[['Incoming webhook','Secret URL that posts messages into a channel'],['Slash command','/command that triggers your app'],['Events API','Slack sends your app events like messages/mentions'],['Block Kit','JSON-based UI framework for Slack messages'],['Async communication','Writing updates that don\'t need an instant reply']],
  iv:[['How do you communicate effectively on a remote team?','Over-communicate context in writing, use threads, post async status updates, write clear asks with deadlines, use the right channel (not DMs) so knowledge is shared, and summarize decisions.'],
    ['Describe a Slack integration you\'d build for an ops team.','A daily KPI digest plus real-time exception alerts (failed payments, hot leads) with action buttons that call our API, so people act without leaving Slack.'],
    ['How do you avoid alert fatigue?','Only alert on actionable items, batch low-priority items into digests, route to the right channel, include context and links, and review/prune alerts monthly.']],
  links:[['Slack API docs','https://api.slack.com/'],['Block Kit Builder','https://app.slack.com/block-kit-builder']] },

{ id:'notion', t:'Notion', cat:'APIs & Automation', e:'🗂', lvl:'Beginner',
  tag:'Docs, wikis, project boards and databases in one place, with an API.',
  role:'The team\'s brain: SOPs, project tracking and lightweight databases that automations can read and write.',
  eli5:'Notion is a magic notebook where each page can be a document, a to-do board, a table, or all three, and the whole team shares it.',
  pro:'Notion combines block-based docs with relational <b>databases</b> (properties, views: table/board/calendar/timeline, relations and rollups, formulas). It\'s used for wikis, SOPs, CRMs and project management. The <b>Notion API</b> lets integrations create and query pages and databases; Notion AI adds summarization and Q&A across the workspace.',
  why:'Remote teams document everything, and Notion is a top tool for it. Showing that you can build clean SOPs, project systems and API automations stands out in ops, PM and automation roles.',
  kw:['notion','notion api','knowledge base','wiki','sop','sops','documentation','project management'],
  jobs:['Notion','documentation / SOPs','project management','knowledge base','Notion API'],
  res:'Built Notion workspaces (wikis, SOPs, project and CRM databases) and automated updates through the Notion API.',
  con:[['Blocks & pages','Everything is a block (text, heading, toggle, embed); pages nest inside pages.'],
    ['Databases & views','One database, many views: table for detail, board for status, calendar for dates.'],
    ['Properties, relations & rollups','Select, date, person, number fields; relate Projects ↔ Tasks; roll up % complete.'],
    ['Templates','Reusable page/database templates for SOPs, meeting notes, client onboarding.'],
    ['Notion API','Create a page per order or lead; query a database for overdue tasks.']],
  ex:[['E-commerce','Fulfillment board','Each order becomes a card: To pack → Shipped → Delivered.'],
    ['Agencies','Client portal','A shared page per client with deliverables, timelines and reports.'],
    ['Property mgmt','Maintenance tracker','Work orders by property/unit with status, vendor and cost rollups.'],
    ['Personal','Job search CRM','Applications database: company, role, stage, follow-up date, notes.']],
  link:[['automations','Notion is a common destination step.'],['api','Notion REST API with an integration token.'],['slack','Slack for conversation, Notion for the record.'],['llms','Notion AI and RAG over your docs.'],['saas','Notion itself is a textbook PLG SaaS.']],
  code:{ i:'Create an integration at notion.so/my-integrations, share a database with it, then run this (<code>uv add httpx</code>). Your DB needs Name (title), Stage (select) and Follow up (date) properties.', s:`import os, httpx

NOTION_TOKEN = os.environ["NOTION_TOKEN"]
DB_ID = os.environ["NOTION_DB_ID"]          # from the database URL
H = {"Authorization": f"Bearer {NOTION_TOKEN}",
     "Notion-Version": "2022-06-28", "Content-Type": "application/json"}

# Add a job application to your Job Search CRM database
page = {
  "parent": {"database_id": DB_ID},
  "properties": {
    "Name":      {"title": [{"text": {"content": "Acme Co: AI Automation Engineer"}}]},
    "Stage":     {"select": {"name": "Applied"}},
    "Follow up": {"date": {"start": "2026-11-10"}},
  },
}
r = httpx.post("https://api.notion.com/v1/pages", headers=H, json=page)
r.raise_for_status()
print("Created:", r.json()["url"])

# Query: everything still in "Applied"
q = httpx.post(f"https://api.notion.com/v1/databases/{DB_ID}/query", headers=H,
               json={"filter": {"property": "Stage", "select": {"equals": "Applied"}}})
print(len(q.json()["results"]), "applications awaiting response")`, n:'Wire the Job Decoder results into this: save each decoded job, its match score and study plan as a Notion page.' },
  vid:[['Notion Tutorial for Beginners','Thomas Frank','~30 min','The best Notion teacher on YouTube.'],['Notion databases explained','Thomas Frank OR Notion','~20 min','Relations, rollups, views.'],['Notion API tutorial','Notion OR Thomas Frank','~20 min','Automate Notion with code.']],
  quiz:[['One database shown as a Kanban board and a calendar is…',['Two databases','Two views of one database','A template','A relation'],1,'Views are different lenses on the same data.'],
    ['Rollups need…',['A formula only','A relation to another database','The API','A template'],1,'Rollups summarize properties across related pages.'],
    ['For an integration to access a database you must…',['Make it public','Share the database with the integration','Email Notion','Use Zapier'],1,'Integrations only see pages explicitly shared with them.'],
    ['An SOP is…',['A Slack bot','A Standard Operating Procedure doc','A database type','A Notion plan'],1,'Step-by-step instructions for a recurring process.']],
  fc:[['Block','The basic unit of Notion content'],['Relation','Link between two databases'],['Rollup','Aggregate a property across related pages'],['View','A filtered/sorted layout (table, board, calendar…)'],['Integration token','Secret used to call the Notion API']],
  iv:[['How do you document processes for a remote team?','Write SOPs in a consistent template (purpose, owner, steps, screenshots or Loom, edge cases), organize them in a searchable wiki, link from where work happens, and review quarterly.'],
    ['How would you set up project tracking in Notion?','Projects and Tasks databases related to each other, status/owner/due properties, rollups for % complete, board view per team and a "My tasks" filtered view, plus Slack reminders.'],
    ['When would Notion NOT be the right tool?','Heavy relational data, high-volume transactions or complex permissions belong in a real database or purpose-built app. Notion is for knowledge and lightweight tracking.']],
  links:[['Notion Help & Learn','https://www.notion.com/help/guides'],['Notion API docs','https://developers.notion.com/']] },

{ id:'saas', t:'SaaS', cat:'Tools & Business', e:'💼', lvl:'Beginner',
  tag:'Software as a Service: the business model behind most remote employers.',
  role:'The business model that turns your built systems into recurring revenue. Also how most of your future employers make money.',
  eli5:'Instead of buying a program once, you rent it every month and use it in your browser. The company keeps improving it, and you keep paying as long as it\'s useful.',
  pro:'SaaS delivers software over the internet on a subscription. Economics run on <b>MRR/ARR</b>, <b>churn</b>, <b>CAC</b> (cost to acquire a customer), <b>LTV</b> (lifetime value; aim for LTV:CAC ≥ 3), <b>NRR</b> (net revenue retention), activation and expansion. Go-to-market: <b>product-led growth</b> (free trial/freemium) vs <b>sales-led</b>. Technical traits: multi-tenancy, billing (Stripe), onboarding, uptime.',
  why:'Most remote jobs are at SaaS companies. Speaking the language (MRR, churn, activation, PLG) in interviews shows business sense, and it\'s the model for any product you build or consult on.',
  kw:['saas','software as a service','subscription','b2b','b2b saas','mrr','arr','churn','plg','product-led','startup','startups'],
  jobs:['B2B SaaS','MRR/ARR & churn','product-led growth','customer success','startup experience'],
  res:'Worked in a SaaS context on features and workflows tied to activation, retention and recurring revenue metrics.',
  con:[['MRR / ARR','Monthly / annual recurring revenue: the scoreboard.'],
    ['Churn & retention','% of customers or revenue lost each month. 5% monthly churn loses roughly half your customers a year.'],
    ['CAC, LTV, payback','How much it costs to win a customer vs. how much they pay over time; how fast you earn the CAC back.'],
    ['PLG vs sales-led','Self-serve trials (Notion, Slack) vs demos and contracts (enterprise).'],
    ['Activation','The "aha moment" when a new user gets value. The biggest driver of retention.'],
    ['Multi-tenancy & billing','One app serving many customers securely; subscriptions, upgrades and invoices via Stripe.']],
  ex:[['Property mgmt','Yardi, RealPage, AppFolio','The tools you use daily are vertical SaaS.'],
    ['E-commerce','Shopify, Klaviyo','Shopify is SaaS for merchants; apps on top are SaaS too.'],
    ['Collaboration','Slack, Notion','Classic product-led growth: free team plans that expand.'],
    ['Micro-SaaS','Niche tools','A single dev\'s $5k MRR tool, e.g. automated rent-comp reports for small landlords.']],
  link:[['full-stack','How SaaS products get built.'],['api','SaaS products integrate via APIs (and sell API access).'],['google-analytics','Track activation and conversion funnels.'],['seo','A major SaaS acquisition channel.'],['notion','A model PLG SaaS to study.'],['ecommerce','The other big online business model.']],
  code:{ i:'Paste into your browser console: a tiny SaaS metrics calculator. Change the inputs and see how churn changes everything.', s:`const saas = {
  customers: 200,
  pricePerMonth: 49,
  monthlyChurn: 0.04,        // 4% of customers cancel each month
  cac: 300,                  // ad + sales cost per new customer
  grossMargin: 0.85,
};

const mrr = saas.customers * saas.pricePerMonth;
const arr = mrr * 12;
const avgLifetimeMonths = 1 / saas.monthlyChurn;
const ltv = saas.pricePerMonth * saas.grossMargin * avgLifetimeMonths;
const paybackMonths = saas.cac / (saas.pricePerMonth * saas.grossMargin);

console.table({
  MRR: '$' + mrr.toLocaleString(),
  ARR: '$' + arr.toLocaleString(),
  'Avg lifetime (months)': avgLifetimeMonths.toFixed(1),
  LTV: '$' + ltv.toFixed(0),
  'LTV:CAC': (ltv / saas.cac).toFixed(1) + 'x  (healthy ≥ 3x)',
  'CAC payback (months)': paybackMonths.toFixed(1),
});`, n:'Model what happens to LTV:CAC if you halve churn vs. halve CAC. Which lever is worth more?' },
  vid:[['How to Get and Evaluate Startup Ideas','Y Combinator','~30 min','YC Startup School classic.'],['SaaS metrics explained MRR churn LTV CAC','ChartMogul OR Baremetrics','~15 min','The numbers every SaaS runs on.'],['Product-led growth explained','ProductLed OR Lenny\'s Podcast','~20 min','How self-serve SaaS grows.']],
  quiz:[['200 customers × $50/month = MRR of…',['$1,000','$10,000','$120,000','$2,000'],1,'MRR = customers × monthly price.'],
    ['A healthy LTV:CAC ratio is roughly…',['0.5x','1x','3x or more','100x'],2,'Below ~3x, growth usually isn\'t efficient.'],
    ['Product-led growth means…',['Only enterprise sales','Users discover and adopt the product themselves (trial/freemium)','No marketing','Hardware products'],1,'The product drives acquisition and expansion.'],
    ['Churn measures…',['New signups','Customers/revenue lost over a period','Server errors','Ad clicks'],1,'Lower churn = compounding growth.']],
  fc:[['MRR','Monthly Recurring Revenue'],['Churn','% of customers or revenue lost per period'],['LTV','Lifetime Value of a customer'],['CAC','Customer Acquisition Cost'],['NRR','Net Revenue Retention: revenue kept + expanded from existing customers']],
  iv:[['How would you reduce churn for a SaaS product?','Find why people leave (cancel surveys, usage data), improve onboarding to reach activation faster, add health scores and proactive outreach, ship the features churned users needed, and offer annual plans and pause options.'],
    ['What metrics would you watch for a new feature?','Adoption (% of active users using it), activation/retention lift for adopters vs non-adopters, support tickets, and impact on conversion or expansion revenue.'],
    ['Why do you want to work at a SaaS company?','Fast iteration, measurable impact through metrics, automation-minded culture, and remote-friendly teams, all of which match how I already work.']],
  links:[['Y Combinator Startup School (free)','https://www.startupschool.org/'],['Stripe Atlas guides (SaaS business)','https://stripe.com/guides']] },

{ id:'replit', t:'Replit', cat:'Tools & Business', e:'🌀', lvl:'Beginner',
  tag:'Code, run, deploy and AI-build apps entirely in the browser.',
  role:'The rapid-prototype workbench: go from idea to a live URL in minutes, then graduate to VS Code and GitHub.',
  eli5:'Replit is a whole computer for coding that lives in your web browser. You type, click Run, and your app is live. There\'s even an AI helper that can build it with you.',
  pro:'Replit is a cloud IDE + hosting platform: instant environments for 50+ languages, built-in database/key-value store, secrets manager, one-click <b>Deployments</b>, multiplayer editing, and <b>Replit Agent</b>, an AI that scaffolds full-stack apps from prompts. It fits the "vibe coding" workflow alongside tools like Cursor, Lovable, Bolt and v0.',
  why:'Prototyping speed is a selling point for consultants and automation roles, and AI-assisted building is now an expected skill. The key differentiator: you can read, debug and harden what the AI generates.',
  kw:['replit','vibe coding','cursor','lovable','bolt.new','v0','ai coding','prototype','prototyping','mvp'],
  jobs:['rapid prototyping','AI-assisted development','MVPs','Replit / Cursor','internal tools'],
  res:'Rapidly prototyped and deployed internal tools and MVPs using AI-assisted development (Replit Agent / Cursor), then hardened them for production.',
  con:[['Repls / Apps','Each project is a cloud workspace with files, a shell and a run button.'],
    ['Secrets','Store API keys safely (not in code); they become environment variables.'],
    ['Deployments','Autoscale, static, reserved VM or scheduled deployments, each with its own URL.'],
    ['Replit Agent','Describe an app; the agent plans, writes code, installs packages and iterates.'],
    ['Vibe coding responsibly','Review the code, test edge cases, check security (auth, secrets, input validation), and commit to Git.']],
  ex:[['Consulting','Client demos','Show a working lead-capture prototype in the first meeting.'],
    ['Ops','Internal tools','Quick dashboards over a database or API for a team.'],
    ['Learning','Practice','Zero setup: perfect for running these portal\'s code samples.'],
    ['Startups','MVP validation','Ship v0 to 10 users before investing in full infrastructure.']],
  link:[['llms','Replit Agent is an LLM coding agent.'],['vscode','Graduate to VS Code/Cursor for larger projects.'],['git','Connect Repls to GitHub for version control.'],['saas','Validate SaaS ideas quickly.'],['tailwind','AI builders output Tailwind; knowing it lets you customize.']],
  code:{ i:'Try this prompt in Replit Agent (or Cursor / Claude). Then read every file it produces and ask it to explain anything unclear.', s:`Build a "Rent Comp Tracker" web app.

Stack: Python FastAPI backend + simple HTML/Tailwind frontend, SQLite (or Replit DB).

Features:
1. Form to add a comp: address, beds, baths, sqft, rent, source URL, date.
2. Table of comps with filters by beds and a "rent per sqft" column.
3. Summary cards: median rent by bedroom count.
4. "Export CSV" button.
5. Store any API keys in Replit Secrets, never in code.

Quality bar:
- Validate inputs (rent > 0, beds 0-6).
- Include a README explaining how to run it.
- Add 3 pytest tests for the rent-per-sqft calculation.
Start with a plan, then build step by step.`, n:'Ask the agent to add login, then review the auth code yourself against the Network Security guide. Push it to GitHub.' },
  vid:[['Replit Agent tutorial','Replit','~15 min','Official walkthrough of building with the agent.'],['Replit tutorial for beginners','Replit OR freeCodeCamp','~20 min','The IDE, secrets and deployments.'],['Vibe coding explained, and how to do it well','Y Combinator OR Fireship','~15 min','Using AI builders without shipping a mess.']],
  quiz:[['Where should API keys go in Replit?',['In main.py','Replit Secrets (env vars)','A public README','A comment'],1,'Secrets are injected as environment variables.'],
    ['Biggest risk of "vibe coding"?',['Too fast','Shipping code you don\'t understand: security holes & bugs','Too cheap','No colors'],1,'Review, test and harden AI-written code.'],
    ['Replit Agent is…',['A human contractor','An AI that builds apps from prompts','A database','A browser'],1,'An LLM agent with tools for coding and running.'],
    ['Best next step after a prototype works?',['Never touch it','Put it in Git, add tests, review security','Delete it','Email the code'],1,'Version control and hardening make it real.']],
  fc:[['Cloud IDE','Coding environment that runs in the browser'],['Deployment','Publishing an app to a live URL'],['Vibe coding','Building mainly by prompting AI'],['MVP','Minimum Viable Product: smallest version that tests the idea'],['Replit Secrets','Encrypted env vars for keys']],
  iv:[['How do you use AI coding tools responsibly?','I use them for scaffolding and boilerplate, but I read and understand every change, write or keep tests, check security (auth, secrets, injection), keep commits small in Git and verify behavior myself.'],
    ['Tell me about a prototype you built quickly.','STAR: the problem, why speed mattered, the tool (Replit/Cursor), what I validated with users, and what I changed before production.'],
    ['When would you NOT use an AI app builder?','For security-critical systems, complex existing codebases, or when compliance requires controlled infrastructure. There I\'d use AI inside my editor with careful review instead.']],
  links:[['Replit Docs','https://docs.replit.com/'],['Replit 100 Days of Code (free)','https://replit.com/learn/100-days-of-python']] },

{ id:'vscode', t:'Visual Studio Code', cat:'Tools & Business', e:'🧑‍💻', lvl:'Beginner',
  tag:'The editor most developers live in. Master it and you work 2x faster.',
  role:'Your main workbench: write code, run the terminal, use Git, debug and pair with AI, all in one window.',
  eli5:'VS Code is a super-smart notepad for code. It colors your code so it\'s easy to read, spots mistakes, finishes your typing and has add-ons for almost anything.',
  pro:'Visual Studio Code is Microsoft\'s free, extensible editor: IntelliSense, integrated terminal, Git UI, debugger, <b>extensions</b> (Python, ESLint, Prettier, Tailwind IntelliSense, Docker), <b>settings.json</b>, multi-cursor editing, Remote-SSH/Dev Containers, and AI assistants (GitHub Copilot, Claude Code). Forks like Cursor build on it.',
  why:'It\'s the most-used editor among developers. Fluency (shortcuts, debugging, extensions) is visible in pair-programming interviews and take-home tests.',
  kw:['vs code','vscode','visual studio code','ide','cursor','copilot','github copilot'],
  jobs:['VS Code','debugging','GitHub Copilot / AI assistants','developer tooling','Dev Containers'],
  res:'Configured an efficient VS Code workflow (debugger, linting/formatting, Git, AI assistants) to ship and review code faster.',
  con:[['Command Palette','<b>Cmd+Shift+P</b>: run any command by name. The one shortcut to rule them all.'],
    ['Quick Open & search','<b>Cmd+P</b> jump to file; <b>Cmd+Shift+F</b> search the whole project.'],
    ['Multi-cursor','<b>Cmd+D</b> selects the next match; <b>Option+click</b> adds cursors. Edit many lines at once.'],
    ['Integrated terminal & Git','<b>Ctrl+`</b> opens the terminal; the Source Control tab stages, commits and diffs.'],
    ['Debugger','Set breakpoints, step through code, inspect variables. Better than print statements.'],
    ['Extensions & settings','Prettier (format on save), ESLint/Ruff, Python, Tailwind IntelliSense, Docker, GitLens.']],
  ex:[['Daily dev','Full-stack work','Front end, back end and terminal in split panes of one window.'],
    ['Remote','Remote-SSH','Edit code directly on an Ubuntu server as if it were local.'],
    ['Teams','Shared settings','<code>.vscode/</code> folder with recommended extensions and format-on-save for consistency.'],
    ['AI','Pair programming','Copilot/Claude suggest code; you review and accept.']],
  link:[['git','Built-in Git UI and diffs.'],['terminal','Integrated terminal.'],['python','Python extension: run, debug, test.'],['docker','Dev Containers extension.'],['ubuntu','Remote-SSH into Linux servers.'],['replit','Replit for quick starts, VS Code for serious projects.']],
  code:{ i:'Cmd+Shift+P → "Preferences: Open User Settings (JSON)" and merge these in. Then install the recommended extensions.', s:`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[python]": { "editor.defaultFormatter": "charliermarsh.ruff" },
  "editor.fontSize": 14,
  "editor.minimap.enabled": false,
  "editor.bracketPairColorization.enabled": true,
  "editor.linkedEditing": true,
  "files.autoSave": "onFocusChange",
  "terminal.integrated.fontSize": 13,
  "git.autofetch": true,
  "workbench.startupEditor": "none"
}

// Must-have extensions (Extensions tab, search by name):
//  Prettier · ESLint · Python · Ruff · Tailwind CSS IntelliSense
//  GitLens · Docker · Remote - SSH · Error Lens · REST Client`, n:'Learn 5 shortcuts this week: Cmd+P, Cmd+Shift+P, Cmd+D, Option+↑/↓ (move line), F12 (go to definition). Set a breakpoint and debug one of your Python scripts.' },
  vid:[['VS Code in 100 Seconds','Fireship','~2 min','Overview.'],['25 VS Code Productivity Tips and Speed Hacks','Fireship','~11 min','Shortcuts that make you faster.'],['Visual Studio Code Tutorial for Beginners','freeCodeCamp.org OR Programming with Mosh','~1 hr','Comprehensive.']],
  quiz:[['Shortcut to run any command by name?',['Cmd+P','Cmd+Shift+P','Cmd+D','Ctrl+`'],1,'The Command Palette.'],
    ['Cmd+D does…',['Delete line','Select next occurrence (multi-cursor)','Duplicate file','Debug'],1,'Add the next match to your selection.'],
    ['Best way to find why a variable is wrong mid-function?',['Guess','Set a breakpoint and inspect in the debugger','Reinstall VS Code','Rename the file'],1,'Breakpoints pause execution so you can inspect state.'],
    ['Remote-SSH lets you…',['Send emails','Edit files on a remote server as if local','Host websites','Run Docker only'],1,'Great for Ubuntu servers.']],
  fc:[['Cmd+P','Quick open a file by name'],['Cmd+Shift+P','Command Palette'],['Ctrl+`','Toggle integrated terminal'],['F12','Go to definition'],['settings.json','Your editor configuration as JSON']],
  iv:[['Walk me through your development setup.','VS Code (or Cursor) with format-on-save, linters, the debugger, GitLens, integrated terminal, Dev Containers or uv/npm per project, plus an AI assistant I review carefully. Consistent tooling means fewer bugs.'],
    ['How do you debug a tricky issue?','Reproduce, read the error, set breakpoints, inspect variables, narrow the failing input, check recent Git changes (blame/diff), fix, then add a test.'],
    ['How do teams keep code style consistent?','Shared formatter/linter configs in the repo, format-on-save, pre-commit hooks, CI checks, and recommended extensions in .vscode/extensions.json.']],
  links:[['VS Code docs: Getting started','https://code.visualstudio.com/docs/getstarted/getting-started'],['VS Code keyboard shortcuts (Mac PDF)','https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf']] }
);
