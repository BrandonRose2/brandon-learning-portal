/* Added: Rust, Dagster, Terraform */
G.push(
{ id:'rust', t:'Rust', cat:'Programming & Data', e:'🦀', lvl:'Advanced',
  tag:'Fast as C, but the compiler stops memory bugs before your code ever runs.',
  role:'The high-performance layer: speed-critical services, CLI tools, data engines and Python extensions where Python is too slow.',
  eli5:'Rust is like a very strict but helpful teacher. Before you are allowed to run your program, it checks that nobody borrows a toy without giving it back and that two kids never grab the same toy at once. Annoying at first, but nothing breaks later.',
  pro:'Rust is a compiled systems language with no garbage collector. Its <b>ownership</b> model (each value has one owner; references are <b>borrowed</b> immutably many times or mutably once) is checked at compile time by the <b>borrow checker</b>, eliminating null pointers, use-after-free and data races. Errors are values (<code>Result&lt;T, E&gt;</code>, <code>Option&lt;T&gt;</code>) handled with <code>match</code> and <code>?</code>. <b>Cargo</b> builds, tests and manages crates; <b>Tokio</b> powers async I/O; <b>PyO3/maturin</b> exposes Rust to Python (how Polars, Ruff and pydantic-core are built).',
  why:'Rust shows up more and more in data-infra, backend and AI-tooling roles (Polars, Ruff, uv and many vector databases are written in it). Even basic Rust signals you understand memory, types and performance, which sets you apart from Python-only candidates.',
  kw:['rust','rustlang','cargo','tokio','borrow checker','pyo3','axum','serde'],
  jobs:['Rust','Tokio / async Rust','systems programming','Python extensions (PyO3)','high-performance services'],
  res:'Built Rust tools and services with Cargo, Serde and Tokio, including a Python extension via PyO3 that sped up a hot data-processing path.',
  con:[['Ownership','Every value has exactly one owner. When the owner goes out of scope the value is freed. No garbage collector needed.'],
    ['Borrowing','<code>&amp;x</code> = shared (read-only) borrow, many allowed. <code>&amp;mut x</code> = exclusive borrow, only one at a time. The compiler enforces this.'],
    ['Result & Option','No exceptions or nulls. Functions return <code>Result&lt;T, E&gt;</code> or <code>Option&lt;T&gt;</code>; <code>?</code> passes errors up.'],
    ['Structs, enums & traits','Structs hold data, enums model "one of these" states, traits are shared behavior (like interfaces).'],
    ['Cargo & crates','<code>cargo new</code>, <code>cargo run</code>, <code>cargo test</code>. Libraries are crates from crates.io (serde, tokio, reqwest, axum).'],
    ['Async with Tokio','<code>async fn</code> + <code>.await</code> on the Tokio runtime for thousands of concurrent network tasks.']],
  ex:[['Data tools','Polars','The fast DataFrame library is Rust underneath, with a Python API on top.'],
    ['Dev tools','Ruff & uv','Python linter and package manager written in Rust: 10-100x faster than older tools.'],
    ['Backend','High-traffic APIs','Axum/Actix services handle heavy load on small servers, cutting cloud costs.'],
    ['Automation','CLI utilities','Ship one small binary that parses big CSV/JSON exports in seconds.']],
  link:[['python','PyO3 lets Python call Rust for speed-critical parts.'],['dagster','Dagster assets can call Rust-built tools like Polars.'],['docker','Rust compiles to a tiny binary that fits in a slim container.'],['api','Axum builds fast REST APIs.'],['json','Serde reads and writes JSON with strict types.'],['terminal','Cargo and Rust tools live in the terminal.']],
  code:{ i:'Install with <code>curl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code>, then <code>cargo new leads</code>, <code>cargo add serde --features derive</code>, <code>cargo add serde_json</code>. Put this in <code>src/main.rs</code> and run <code>cargo run</code>.', s:`use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
struct Lead {
    name: String,
    email: Option<String>,   // may be missing: no nulls, just Option
    budget: u32,
}

// Returns Result: either the leads or an error, never a crash
fn parse(raw: &str) -> Result<Vec<Lead>, serde_json::Error> {
    serde_json::from_str(raw)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let raw = r#"[{"name":"Ana","email":"ana@x.com","budget":2500},
                  {"name":"Ben","email":null,"budget":900}]"#;

    let leads = parse(raw)?;                      // ? = pass the error up
    let hot: Vec<&Lead> = leads.iter()            // borrow, don't move
        .filter(|l| l.budget >= 1000 && l.email.is_some())
        .collect();

    for l in &hot {
        println!("{} -> {}", l.name, l.email.as_deref().unwrap_or("-"));
    }
    println!("{} of {} leads are hot", hot.len(), leads.len());
    Ok(())
}`, n:'Read the JSON from a file passed as a command-line argument (std::env::args + std::fs::read_to_string), and print a friendly error if the file is missing.' },
  vid:[['Rust in 100 Seconds','Fireship','~2 min','The big idea fast.'],['Rust Crash Course','Traversy Media','~1.5 hr','Hands-on basics.'],['Rust Programming Course for Beginners','freeCodeCamp.org','~13 hr','Deep, full course.']],
  quiz:[['What does the borrow checker prevent?',['Slow code','Memory bugs and data races at compile time','Syntax errors only','Large binaries'],1,'Ownership and borrowing rules are checked before the program runs.'],
    ['How many mutable borrows of a value can exist at once?',['Unlimited','Two','Exactly one','Zero, ever'],2,'One &mut at a time, or many & reads, never both.'],
    ['How does Rust represent "might be missing"?',['null','undefined','Option<T>','Exceptions'],2,'Option is Some(value) or None.'],
    ['What does the ? operator do?',['Prints debug info','Returns the error early to the caller','Ignores errors','Makes code async'],1,'It unwraps Ok or returns the Err.']],
  fc:[['Ownership','Each value has one owner; freed when the owner goes out of scope'],['Borrow','A reference (&) to a value without taking ownership'],['Cargo','Rust\'s build tool and package manager'],['Crate','A Rust package/library'],['Result<T, E>','Either Ok(value) or Err(error)'],['Tokio','The main async runtime for Rust']],
  iv:[['Why would a team pick Rust over Python or Go?','When performance, low memory use and reliability matter: hot paths, infra tools, high-traffic services. The compiler catches memory and concurrency bugs up front. Trade-off: slower to learn and to write, so Python stays for glue and prototyping.'],
    ['Explain ownership and borrowing simply.','Every value has one owner and is freed when the owner ends. You can lend it out as many read-only borrows or one mutable borrow at a time. That rule, checked at compile time, removes whole classes of bugs without a garbage collector.'],
    ['How would you speed up a slow Python pipeline with Rust?','Profile first, find the hot function, rewrite just that part in Rust, expose it with PyO3 and build a wheel with maturin, then call it from Python. Or use an existing Rust-backed library like Polars before writing any Rust.']],
  links:[['The Rust Book (free)','https://doc.rust-lang.org/book/'],['Rustlings (small exercises)','https://github.com/rust-lang/rustlings'],['Rust by Example','https://doc.rust-lang.org/rust-by-example/']] },

{ id:'dagster', t:'Dagster', cat:'Programming & Data', e:'🐙', lvl:'Intermediate',
  tag:'Schedule, run and monitor data pipelines as a map of data assets.',
  role:'The data-pipeline layer: pulls data from APIs and scrapers, cleans it, loads it into databases and keeps it fresh on a schedule.',
  eli5:'Dagster is a chore chart for your data. It knows which jobs make which piles of data, which ones must happen first, and runs them on time. If something breaks, it shows you exactly which pile is stale.',
  pro:'Dagster is a Python data orchestrator built around <b>software-defined assets</b>: decorated functions (<code>@dg.asset</code>) that produce a table, file or model. Dependencies come from function parameters, giving a lineage graph. <b>Resources</b> inject connections (Postgres, S3, APIs), <b>schedules</b> and <b>sensors</b> trigger runs, <b>partitions</b> split work by date, and <b>asset checks</b> test data quality. The <b>Dagster UI</b> (run with <code>dagster dev</code>) shows lineage, runs, logs and freshness. Deploy with Dagster+ (managed) or self-host on Docker/Kubernetes.',
  why:'Data and analytics-engineering roles ask for an orchestrator (Dagster, Airflow or Prefect). Dagster is the modern pick, and it turns your scripts and automations into reliable, observable pipelines you can show off.',
  kw:['dagster','orchestration','data orchestration','data pipeline','etl','elt','assets','airflow','prefect'],
  jobs:['Dagster','data orchestration','ETL/ELT pipelines','Airflow/Prefect (similar)','data quality checks'],
  res:'Built Dagster asset pipelines with schedules, partitions and data-quality checks that load API and scraped data into PostgreSQL.',
  con:[['Assets','A piece of data you care about (a table, file, model) defined by a Python function with <code>@dg.asset</code>.'],
    ['Dependencies & lineage','Name an upstream asset as a parameter and Dagster draws the graph and runs things in order.'],
    ['Resources','Shared connections (database, API client) passed in, so you can swap prod for test easily.'],
    ['Schedules & sensors','Schedules run on a cron; sensors run when something happens (a new file lands, another job finishes).'],
    ['Partitions & backfills','Split data by day/month; rerun just the broken days instead of everything.'],
    ['Asset checks','Tests on the data itself: no nulls, row count above zero, values in range.']],
  ex:[['Property management','Nightly reporting','Pull Yardi/RealPage exports, clean them, load Postgres, refresh dashboards.'],
    ['E-commerce','Ad spend pipeline','Pull Meta, Google and TikTok spend daily and join it to Shopify orders for ROAS.'],
    ['AI','LLM data prep','Scrape, chunk and embed documents on a schedule for a RAG chatbot.'],
    ['Analytics','dbt + Dagster','Dagster runs dbt models as assets alongside Python steps.']],
  link:[['python','Dagster pipelines are plain Python.'],['postgresql','Common destination for loaded data.'],['web-scraping','Scrapers become scheduled assets.'],['api','Assets pull from REST APIs.'],['docker','Package and deploy Dagster code in containers.'],['automations','Dagster is automation for data, with monitoring.']],
  code:{ i:'<code>pip install dagster dagster-webserver pandas requests</code>. Save as <code>pipeline.py</code> and run <code>dagster dev -f pipeline.py</code>, then open http://localhost:3000 and click Materialize.', s:`import dagster as dg
import pandas as pd
import requests

@dg.asset
def raw_users() -> pd.DataFrame:
    """Pull users from a public API."""
    data = requests.get("https://jsonplaceholder.typicode.com/users", timeout=30).json()
    return pd.DataFrame(data)

@dg.asset
def clean_users(raw_users: pd.DataFrame) -> pd.DataFrame:
    """Depends on raw_users just by naming it as a parameter."""
    df = raw_users[["id", "name", "email"]].copy()
    df["email"] = df["email"].str.lower()
    return df

@dg.asset_check(asset=clean_users)
def emails_present(clean_users: pd.DataFrame) -> dg.AssetCheckResult:
    missing = int(clean_users["email"].isna().sum())
    return dg.AssetCheckResult(passed=missing == 0, metadata={"missing": missing})

daily = dg.ScheduleDefinition(
    name="daily_users",
    target=dg.AssetSelection.all(),
    cron_schedule="0 6 * * *",   # 6am every day
)

defs = dg.Definitions(assets=[raw_users, clean_users],
                      asset_checks=[emails_present],
                      schedules=[daily])`, n:'Add a third asset that writes clean_users to a PostgreSQL table using a resource for the connection string, so the password comes from an environment variable.' },
  vid:[['Dagster Essentials','Dagster University','~self-paced','Free official course.'],['Dagster tutorial for beginners','Dagster','~1 hr','Build your first asset pipeline.'],['Dagster vs Airflow','data engineering','~15 min','Understand the trade-offs.']],
  quiz:[['What is a Dagster asset?',['A server','A function that produces a piece of data you care about','A cron job only','A database'],1,'Assets are data products defined in code.'],
    ['How do you make asset B depend on asset A?',['Edit a YAML file','Name A as a parameter of B','Use a sensor','Run them in order manually'],1,'Parameter names create the dependency graph.'],
    ['Run a pipeline every day at 6am with a…',['Sensor','Schedule','Partition','Resource'],1,'Schedules use cron expressions.'],
    ['Reprocess only last Tuesday\'s data using…',['Partitions & backfills','A new repo','Docker','Asset checks'],0,'Partitions let you rerun just the slices you need.']],
  fc:[['Asset','A data product (table, file, model) defined in code'],['Resource','A shared connection injected into assets'],['Schedule','Cron-based trigger for runs'],['Sensor','Event-based trigger for runs'],['Partition','A slice of data, often by date'],['Asset check','A data-quality test on an asset']],
  iv:[['Dagster vs Airflow?','Airflow is task-centric: you define steps. Dagster is asset-centric: you define the data you want, and it tracks lineage, freshness and quality. Dagster also has easier local dev and testing. Airflow has the bigger install base, so knowing the concepts transfers.'],
    ['How do you make a pipeline reliable?','Idempotent assets, retries with backoff, partitions for backfills, asset checks for data quality, alerts on failure, secrets via environment variables, and code in Git with CI tests.'],
    ['Describe a pipeline you built.','Use STAR: e.g., nightly property-management exports were manual; I built Dagster assets that pull, clean and load them into Postgres with checks and alerts, cutting hours of manual work and catching bad data early.']],
  links:[['Dagster docs','https://docs.dagster.io/'],['Dagster University (free)','https://courses.dagster.io/'],['Dagster on GitHub','https://github.com/dagster-io/dagster']] },

{ id:'terraform', t:'Terraform & OpenTofu', cat:'Cloud & DevOps', e:'🏗', lvl:'Intermediate',
  tag:'Write your cloud setup as code, review it, and rebuild it with one command.',
  role:'The infrastructure layer: creates the servers, databases, buckets, DNS records and permissions your apps run on, from version-controlled files.',
  eli5:'Instead of clicking around the cloud website to build things, you write a shopping list: "one database, one storage bucket, one server". Terraform reads the list and builds exactly that. Change the list, and it changes only what\'s different.',
  pro:'Terraform (HashiCorp, BSL license) and <b>OpenTofu</b> (its open-source fork under the Linux Foundation, CLI <code>tofu</code>) use <b>HCL</b> to declare infrastructure. <b>Providers</b> talk to APIs (AWS, Azure, Cloudflare, GitHub). <code>init</code> downloads providers, <code>plan</code> diffs desired vs actual state, <code>apply</code> makes changes. <b>State</b> maps code to real resources and should live in a remote backend (S3 with locking), never in Git. <b>Variables</b>, <b>outputs</b> and <b>modules</b> make code reusable across dev/staging/prod.',
  why:'Infrastructure as Code is expected in almost every cloud, DevOps and platform job, and Terraform is the most-listed IaC tool. Knowing OpenTofu too shows you follow the ecosystem.',
  kw:['terraform','opentofu','tofu','infrastructure as code','iac','hcl','terraform cloud','hcp terraform'],
  jobs:['Terraform','OpenTofu','Infrastructure as Code (IaC)','Terraform modules','remote state & CI/CD for infra'],
  res:'Managed AWS infrastructure as code with Terraform/OpenTofu modules, remote state and plan-on-pull-request reviews in GitHub Actions.',
  con:[['Declarative','You describe the end result, not the steps. The tool figures out what to create, change or delete.'],
    ['Providers & resources','A provider (aws, cloudflare) exposes resources like <code>aws_s3_bucket</code> you declare in <code>.tf</code> files.'],
    ['init → plan → apply','<code>init</code> sets up, <code>plan</code> previews changes, <code>apply</code> does them. Always read the plan.'],
    ['State','A file mapping your code to real resources. Store it remotely (S3 + locking), never commit it: it can contain secrets.'],
    ['Variables, outputs, modules','Inputs, returned values, and reusable packages of resources for each environment.'],
    ['Terraform vs OpenTofu','Same HCL and workflow. OpenTofu is the open-source fork; most code works in both.']],
  ex:[['Startups','Repeatable environments','Spin up identical dev, staging and prod on AWS from the same modules.'],
    ['Web','DNS & CDN','Manage Cloudflare DNS records and rules in code instead of the dashboard.'],
    ['Data','Pipeline infra','Create the S3 buckets, RDS Postgres and IAM roles a Dagster deployment needs.'],
    ['Teams','Reviewed changes','Every infra change is a pull request with a plan posted by CI.']],
  link:[['aws','The most common Terraform provider.'],['azure','The azurerm provider manages Azure.'],['dns','Manage Cloudflare/Route 53 DNS as code.'],['git','Infra code lives in Git and goes through pull requests.'],['kubernetes','Provision clusters, then deploy to them.'],['dagster','Provision the buckets and database a pipeline needs.']],
  code:{ i:'Install with <code>brew install opentofu</code> (or <code>brew install hashicorp/tap/terraform</code>). Configure AWS credentials (<code>aws configure</code>). Save as <code>main.tf</code>, then run <code>tofu init</code>, <code>tofu plan</code>, <code>tofu apply</code> (swap <code>tofu</code> for <code>terraform</code> if you use it). Clean up with <code>tofu destroy</code>.', s:`terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

provider "aws" {
  region = var.region
}

variable "region" {
  type    = string
  default = "us-west-2"
}

variable "env" {
  type    = string
  default = "dev"
}

# A private bucket for pipeline exports
resource "aws_s3_bucket" "exports" {
  bucket_prefix = "exports-\${var.env}-"
  tags = { env = var.env, managed_by = "opentofu" }
}

resource "aws_s3_bucket_public_access_block" "exports" {
  bucket                  = aws_s3_bucket.exports.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

output "bucket_name" {
  value = aws_s3_bucket.exports.bucket
}`, n:'Move state to a remote S3 backend with locking, then turn the bucket into a module and call it twice for dev and prod.' },
  vid:[['Terraform in 100 Seconds','Fireship','~2 min','The core idea.'],['Terraform Course - Automate your AWS cloud infrastructure','freeCodeCamp.org','~2.5 hr','Hands-on with AWS.'],['Terraform explained in 15 mins','TechWorld with Nana','~15 min','Clear concepts.']],
  quiz:[['What does plan do?',['Deletes everything','Shows what will change before applying','Installs Terraform','Writes HCL for you'],1,'Always review the plan before apply.'],
    ['Where should state live for a team?',['Committed in Git','A remote backend like S3 with locking','On one laptop','In the Docker image'],1,'Remote state is shared and locked; it can contain secrets.'],
    ['OpenTofu is…',['A cloud provider','An open-source fork of Terraform','A Kubernetes tool','A database'],1,'Same workflow, CLI is tofu.'],
    ['Reuse the same setup for dev and prod with…',['Modules and variables','Copy-paste','Sensors','Branches only'],0,'Modules package resources; variables change per environment.']],
  fc:[['IaC','Infrastructure as Code: define servers/services in files'],['Provider','Plugin that talks to a platform API (aws, cloudflare)'],['State','Record mapping code to real resources'],['Plan','Preview of changes before apply'],['Module','Reusable bundle of resources'],['OpenTofu','Open-source fork of Terraform (CLI: tofu)']],
  iv:[['Why Infrastructure as Code?','Repeatable, reviewable, version-controlled infrastructure: no snowflake servers, easy rebuilds and audits, the same setup across environments, and changes reviewed in pull requests.'],
    ['How do you manage Terraform state safely?','Remote backend (S3 or HCP Terraform) with locking, encryption, restricted access, separate state per environment, never in Git, and use import/moved blocks instead of hand-editing it.'],
    ['How would you run Terraform in CI/CD?','On pull request: fmt, validate, plan, post the plan as a comment. On merge to main: apply with a short-lived role via OIDC, with manual approval for prod.']],
  links:[['OpenTofu docs','https://opentofu.org/docs/'],['Terraform tutorials (HashiCorp)','https://developer.hashicorp.com/terraform/tutorials'],['Terraform AWS provider docs','https://registry.terraform.io/providers/hashicorp/aws/latest/docs']] }
);
