/* Cloud & DevOps + Mobile */
G.push(
{ id:'git', t:'Git & GitHub', cat:'Cloud & DevOps', e:'🐙', lvl:'Beginner',
  tag:'Version control and collaboration. Every tech job expects it on day one.',
  role:'The source of truth for all your code, the trigger for CI/CD deploys and your public portfolio.',
  eli5:'Git is an unlimited "undo" and save-point system for code. GitHub is the website where you store those save points and work on them with a team.',
  pro:'Git is a distributed version control system: <b>commits</b> snapshot changes, <b>branches</b> isolate work, <b>merge/rebase</b> combine it. GitHub adds remote hosting, <b>pull requests</b> with code review, Issues/Projects, <b>GitHub Actions</b> (CI/CD) and security scanning. Standard flow: branch → commit → push → PR → review → merge → auto-deploy.',
  why:'Listed or assumed in virtually every technical job. Your GitHub profile is also your portfolio, and hiring managers do click it.',
  kw:['git','github','gitlab','bitbucket','version control','pull request','pull requests','ci/cd','github actions','code review'],
  jobs:['Git / GitHub','pull requests & code review','GitHub Actions (CI/CD)','branching strategies','version control'],
  res:'Managed code with Git/GitHub using branches, pull requests and GitHub Actions CI/CD for automated testing and deployment.',
  con:[['Repo, commit, push','<code>git add</code> stages, <code>git commit -m</code> snapshots, <code>git push</code> uploads to GitHub.'],
    ['Branches','<code>git switch -c feature/lead-form</code>: work in isolation; main stays deployable.'],
    ['Pull requests','Propose merging a branch; teammates review, comment and approve. The heart of remote collaboration.'],
    ['Merge conflicts','When two branches edit the same lines, you choose the right version, then commit.'],
    ['.gitignore & secrets','Never commit <code>.env</code>, keys or <code>node_modules</code>. Add them to .gitignore.'],
    ['GitHub Actions','YAML workflows run tests, lint, build Docker images and deploy on every push.']],
  ex:[['Teams','Code review','Every change goes through a PR with checks passing before merge.'],
    ['DevOps','Auto-deploy','Merge to main → Actions builds and deploys to AWS.'],
    ['Portfolio','Your GitHub','Pinned repos with READMEs, screenshots and live links impress recruiters.'],
    ['Shopify','Theme version control','Shopify\'s GitHub integration syncs theme code.']],
  link:[['terminal','Git is a command-line tool first.'],['vscode','VS Code\'s Source Control panel.'],['docker','Actions build and push Docker images.'],['aws','Deploy from GitHub to the cloud.'],['network-security','Secret scanning and protected branches.'],['full-stack','Every full-stack workflow runs through Git.']],
  code:{ i:'Run in Terminal on your Mac (Git comes with Xcode Command Line Tools). Create an empty repo on GitHub first.', s:`# one-time setup
git config --global user.name "Brandon Rose"
git config --global user.email "ai@brandon-rose.com"

# start a project
mkdir lead-bot && cd lead-bot
git init
echo "# Lead Bot" > README.md
printf ".env\\nnode_modules/\\n__pycache__/\\n" > .gitignore
git add . && git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:BrandonRose2/lead-bot.git
git push -u origin main

# daily feature flow
git switch -c feature/sms-reply
# ...edit files...
git status && git diff
git add -p                         # stage hunks interactively
git commit -m "Add Twilio SMS reply to new leads"
git push -u origin feature/sms-reply
# -> open a Pull Request on GitHub, review, merge

git switch main && git pull        # stay up to date
git log --oneline --graph -10      # see history`, n:'Add <code>.github/workflows/ci.yml</code> that runs your tests on every push. Pin your 3 best repos with great READMEs.' },
  vid:[['Git Explained in 100 Seconds','Fireship','~2 min','The mental model.'],['Git and GitHub for Beginners - Crash Course','freeCodeCamp.org','~1 hr','Hands-on essentials.'],['Git Tutorial for Beginners','Programming with Mosh','~1 hr','Clean explanations of core commands.'],['GitHub Actions Tutorial','TechWorld with Nana','~30 min','CI/CD basics.']],
  quiz:[['Command to create and switch to a new branch?',['git branch -d x','git switch -c x','git push x','git init x'],1,'switch -c creates and checks out the branch.'],
    ['Where should <code>.env</code> with API keys go?',['Committed to main','In .gitignore (never committed)','In README','In a PR comment'],1,'Keep secrets out of Git entirely.'],
    ['A pull request is…',['Downloading code','A proposal to merge changes, with review','Deleting a branch','A Git config'],1,'PRs are how teams review and merge code.'],
    ['GitHub Actions is used for…',['Hosting DNS','CI/CD automation: tests, builds, deploys','Design','Email'],1,'Workflows run on repo events.']],
  fc:[['Commit','A saved snapshot of changes with a message'],['Branch','An independent line of development'],['Merge conflict','Competing edits to the same lines needing manual resolution'],['git pull','Fetch + merge remote changes into your branch'],['CI/CD','Automated test/build (CI) and deploy (CD) pipelines']],
  iv:[['Describe your Git workflow on a team.','Short-lived feature branches from main, small focused commits, push, open a PR with a clear description, CI must pass, address review comments, squash-merge, auto-deploy, delete the branch.'],
    ['How do you resolve a merge conflict?','Pull latest main, open the conflicted files, understand both changes (talk to the author if needed), edit to the correct combined result, run tests, commit the resolution.'],
    ['Merge vs rebase?','Merge preserves history with a merge commit; rebase replays commits for a linear history. Rebase your local branch, never rewrite shared history.']],
  links:[['Pro Git book (free)','https://git-scm.com/book/en/v2'],['GitHub Skills (interactive)','https://skills.github.com/']] },

{ id:'terminal', t:'Terminal & Command Line', cat:'Cloud & DevOps', e:'⌨️', lvl:'Beginner',
  tag:'Talk to your computer directly. Faster, scriptable, and required for servers.',
  role:'The control panel for everything technical: Git, package installs, servers, Docker, cloud CLIs and automation scripts.',
  eli5:'Instead of clicking icons, you type short commands to tell the computer exactly what to do. It\'s like texting your computer, and it can do things clicking can\'t.',
  pro:'A terminal runs a <b>shell</b> (zsh on macOS, bash on most Linux) that interprets commands. Core skills: navigating the filesystem, file ops, <b>pipes</b> (<code>|</code>) and redirection (<code>&gt;</code>), searching (<code>grep</code>, <code>find</code>), permissions, environment variables, processes, SSH, package managers (Homebrew), and writing shell scripts and aliases.',
  why:'Every dev, DevOps, data and automation job assumes command-line comfort. Interviews and take-homes often happen partly in a terminal.',
  kw:['terminal','command line','cli','bash','shell','zsh','shell scripting','command-line'],
  jobs:['command line / CLI','bash / shell scripting','SSH','Homebrew','scripting & automation'],
  res:'Used the command line daily for Git, package management, SSH server administration and shell-scripted automation.',
  con:[['Navigation','<code>pwd</code> where am I, <code>ls -la</code> list, <code>cd</code> move, <code>~</code> = home.'],
    ['Files','<code>mkdir</code>, <code>touch</code>, <code>cp</code>, <code>mv</code>, <code>rm</code> (no trash can: be careful), <code>cat</code>, <code>less</code>.'],
    ['Pipes & redirection','<code>cat leads.csv | grep tiktok | wc -l</code> chains tools; <code>&gt;</code> writes to a file.'],
    ['Env vars & PATH','<code>export API_KEY=…</code>; PATH decides where commands are found. Persist in <code>~/.zshrc</code>.'],
    ['Processes','<code>ps</code>, <code>top</code>, Ctrl+C to stop, <code>kill</code>, <code>&amp;</code> for background.'],
    ['Homebrew & SSH','<code>brew install</code> anything on your Mac; <code>ssh user@server</code> into Linux machines.']],
  ex:[['Data','Quick CSV analysis','Count leads per source in a 50k-row file in one line, without Excel.'],
    ['DevOps','Server admin','SSH into Ubuntu, check logs, restart services.'],
    ['Dev','Project setup','<code>uv init</code>, <code>npm create</code>, <code>git clone</code>: every project starts in the terminal.'],
    ['Automation','Batch renaming','Rename 500 listing photos to a consistent pattern with one loop.']],
  link:[['ubuntu','Linux servers are run from the terminal.'],['git','Git\'s native interface.'],['docker','Docker is CLI-driven.'],['aws','The AWS CLI.'],['vscode','Integrated terminal in VS Code.'],['dns','<code>dig</code> DNS lookups.']],
  code:{ i:'Open Terminal (Cmd+Space → "Terminal"). Try these one by one.', s:`pwd                         # where am I?
cd ~/Desktop && mkdir -p practice && cd practice

# make a fake leads CSV
printf "name,source,budget\\nMaya,tiktok,3200\\nLeo,google,2400\\nAna,tiktok,1800\\nSam,meta,3500\\n" > leads.csv
cat leads.csv

# count leads per source (pipes!)
tail -n +2 leads.csv | cut -d, -f2 | sort | uniq -c | sort -rn

# leads with budget over 3000
awk -F, 'NR>1 && $3 > 3000 {print $1, $3}' leads.csv

# find text across files
grep -rn "tiktok" .

# handy alias: add to ~/.zshrc, then run: source ~/.zshrc
# alias gs="git status"
# alias ll="ls -la"

# loop: rename photos
# for f in *.jpeg; do mv "$f" "listing-$f"; done`, n:'Learn <code>man</code> pages (<code>man grep</code>), set up 5 aliases, and write a tiny <code>backup.sh</code> script that zips a folder with today\'s date.' },
  vid:[['Bash in 100 Seconds','Fireship','~2 min','What a shell is.'],['60 Linux Commands you NEED to know','NetworkChuck','~10 min','Fast and fun.'],['Command Line Crash Course','freeCodeCamp.org','~1 hr','Solid foundation.']],
  quiz:[['What does <code>|</code> (pipe) do?',['Deletes files','Sends one command\'s output into the next command','Comments a line','Runs as admin'],1,'Pipes chain small tools into powerful one-liners.'],
    ['Which command shows your current directory?',['ls','cd','pwd','whoami'],2,'pwd = print working directory.'],
    ['<code>rm -rf folder</code>…',['Moves to Trash','Permanently deletes recursively, no undo','Renames','Lists files'],1,'Be very careful with it.'],
    ['Where would you persist an alias on macOS?',['~/.zshrc','/etc/hosts','package.json','.gitignore'],0,'zsh loads ~/.zshrc on startup.']],
  fc:[['pwd / ls / cd','Where am I / what\'s here / go there'],['grep','Search text by pattern'],['> vs >>','Overwrite file vs append to file'],['PATH','List of folders where the shell looks for commands'],['sudo','Run a command as administrator']],
  iv:[['How comfortable are you on the command line?','Daily use: Git, package managers, SSH into Linux servers, reading logs with tail/grep, small shell scripts and cron jobs. I prefer scripting repeatable tasks over clicking.'],
    ['How would you find which process is using port 3000?','<code>lsof -i :3000</code> (macOS/Linux) or <code>ss -ltnp | grep 3000</code> on Linux, then stop it gracefully or kill the PID.'],
    ['How do you safely run a destructive command?','Dry run first (e.g., echo the commands or list matches), double-check paths, avoid wildcards at the root, have backups, and use version control.']],
  links:[['The Missing Semester (MIT, free)','https://missing.csail.mit.edu/'],['Linux Journey','https://linuxjourney.com/']] },

{ id:'ubuntu', t:'Ubuntu & Linux', cat:'Cloud & DevOps', e:'🐧', lvl:'Beginner → Intermediate',
  tag:'The operating system the internet runs on. Servers, containers, cloud.',
  role:'The server OS under your deployments: cloud VMs, Docker containers and Kubernetes nodes are almost always Linux.',
  eli5:'Your Mac runs macOS. Most of the computers that run websites run Linux, and Ubuntu is the most popular friendly version. You control it mostly by typing commands.',
  pro:'Ubuntu is a Debian-based Linux distribution (LTS releases supported for 5+ years). Server admin essentials: <b>apt</b> package management, users/groups and <b>permissions</b> (<code>chmod</code>, <code>chown</code>, sudo), <b>systemd</b> services (<code>systemctl</code>), logs (<code>journalctl</code>, /var/log), networking and the <b>ufw</b> firewall, SSH key auth, cron, Nginx as reverse proxy, and unattended security updates.',
  why:'DevOps, cloud, back-end and IT roles require Linux. Even app developers SSH into servers to debug. Running your own Ubuntu VPS is a great portfolio builder.',
  kw:['ubuntu','linux','debian','server administration','vps','nginx','systemd','sysadmin','red hat','rhel','centos'],
  jobs:['Linux / Ubuntu','server administration','Nginx','systemd','SSH & security hardening'],
  res:'Provisioned and secured Ubuntu servers (SSH keys, ufw, Nginx, systemd) to host web apps and scheduled jobs.',
  con:[['apt','<code>sudo apt update &amp;&amp; sudo apt upgrade</code>; <code>apt install nginx</code>.'],
    ['Users & permissions','rwx for owner/group/others: <code>chmod 600 key.pem</code>, <code>chown app:app /srv/app</code>. Least privilege.'],
    ['systemd services','Run your app as a service that restarts on crash and on boot: <code>systemctl enable --now myapp</code>.'],
    ['Logs','<code>journalctl -u myapp -f</code>, <code>tail -f /var/log/nginx/error.log</code>.'],
    ['Firewall & SSH','<code>ufw allow OpenSSH; ufw allow 80,443/tcp; ufw enable</code>. Key-only SSH, no root login.'],
    ['Nginx & cron','Nginx proxies port 80/443 to your app; cron schedules scripts (<code>0 7 * * *</code> = daily 7am).']],
  ex:[['Hosting','$5 VPS','A DigitalOcean/Hetzner Ubuntu box runs your Node app behind Nginx with free SSL.'],
    ['Automation','Scheduled scrapers','Cron runs the price tracker nightly and posts to Slack.'],
    ['Cloud','EC2 instances','Most AWS EC2 instances run Ubuntu or Amazon Linux.'],
    ['Containers','Docker base images','<code>FROM ubuntu</code> / Debian-based images are everywhere.']],
  link:[['terminal','Linux is administered via the shell.'],['docker','Containers are Linux under the hood.'],['aws','EC2 VMs usually run Linux.'],['network-security','Hardening servers: SSH, firewall, updates.'],['nodejs','Run Node apps as systemd services.'],['dns','Point your domain at the server\'s IP.']],
  code:{ i:'Practice safely in a free Ubuntu VM (UTM or Multipass on your Mac: <code>brew install multipass && multipass launch --name lab && multipass shell lab</code>).', s:`# update & essentials
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx git curl ufw

# firewall: allow SSH + web only
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable && sudo ufw status

# create a non-root app user
sudo adduser --system --group app

# run a script as a systemd service: /etc/systemd/system/leadbot.service
sudo tee /etc/systemd/system/leadbot.service > /dev/null <<'EOF'
[Unit]
Description=Lead Bot
After=network.target
[Service]
User=app
WorkingDirectory=/srv/leadbot
ExecStart=/usr/bin/python3 /srv/leadbot/main.py
Restart=always
EnvironmentFile=/srv/leadbot/.env
[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now leadbot
sudo systemctl status leadbot
journalctl -u leadbot -f            # live logs (Ctrl+C to exit)

# schedule a nightly job: crontab -e
# 0 2 * * * /srv/scraper/run.sh >> /var/log/scraper.log 2>&1`, n:'Rent a $5 VPS, point a subdomain at it (DNS A record), serve a page through Nginx, and add free HTTPS with certbot.' },
  vid:[['Linux in 100 Seconds','Fireship','~2 min','Why Linux runs the world.'],['Introduction to Linux – Full Course for Beginners','freeCodeCamp.org','~6 hr','Comprehensive reference.'],['Linux for Hackers / Linux basics','NetworkChuck','series','Fun and energetic.']],
  quiz:[['Install software on Ubuntu with…',['brew','apt','npm only','winget'],1,'apt is Debian/Ubuntu\'s package manager.'],
    ['Keep an app running after crashes and reboots using…',['A terminal tab','systemd service with Restart=always','cron every second','screen saver'],1,'systemd supervises long-running services.'],
    ['<code>chmod 600 secret.pem</code> means…',['Everyone can read','Owner read/write only','Executable by all','Delete it'],1,'6 = rw for owner, 0 for group and others.'],
    ['Safest SSH setup?',['Password + root login','Key-based auth, root login disabled','No firewall','Port 22 open to all with password'],1,'Keys + no root + firewall + updates.']],
  fc:[['LTS','Long-Term Support release (5+ years of updates)'],['sudo','Run a command with admin privileges'],['systemctl','Control systemd services (start/stop/enable/status)'],['journalctl','Read systemd logs'],['ufw','Uncomplicated Firewall on Ubuntu']],
  iv:[['A web app on a Linux server is down. How do you troubleshoot?','SSH in; <code>systemctl status</code> the service; read journalctl and Nginx error logs; check disk (df -h), memory (free -m), CPU (top); confirm ports with ss; check recent deploys; restart; then find the root cause and add monitoring.'],
    ['How do you harden a new Ubuntu server?','Updates + unattended-upgrades, non-root sudo user, SSH keys only, root login off, ufw allowing only needed ports, fail2ban, least-privilege service users, secrets in protected env files, backups.'],
    ['What does Nginx do in front of an app?','Reverse proxy: terminates TLS, serves static files, compresses, rate-limits, and forwards requests to the app on a local port.']],
  links:[['Ubuntu tutorials','https://ubuntu.com/tutorials'],['Linux Journey','https://linuxjourney.com/']] },

{ id:'docker', t:'Docker', cat:'Cloud & DevOps', e:'🐳', lvl:'Intermediate',
  tag:'Package an app with everything it needs so it runs the same everywhere.',
  role:'The packaging step between your code and the cloud: build once, then run identically on your Mac, a server, AWS or Kubernetes.',
  eli5:'Docker puts your app in a lunchbox with everything it needs: its food, fork and napkin. Wherever you take the lunchbox, it works exactly the same.',
  pro:'Docker builds <b>images</b> from a <b>Dockerfile</b> (layered, cached) and runs them as isolated <b>containers</b> sharing the host kernel. Images are pushed to registries (Docker Hub, GitHub Container Registry, AWS ECR). <b>Docker Compose</b> defines multi-container apps (app + Postgres + Redis) in YAML. Containers are the unit deployed to ECS/Fargate, Cloud Run, Azure Container Apps and Kubernetes.',
  why:'Docker is listed in most DevOps, back-end and full-stack roles and many data/AI ones. "It works on my machine" isn\'t acceptable on remote teams.',
  kw:['docker','container','containers','containerization','containerized','dockerfile','docker compose','docker-compose','ecr'],
  jobs:['Docker','Docker Compose','containerization','container registries','dev environments'],
  res:'Containerized applications with Docker and Docker Compose for consistent local development and cloud deployment.',
  con:[['Image vs container','Image = blueprint (read-only). Container = a running instance of it.'],
    ['Dockerfile','<code>FROM</code> base, <code>COPY</code> code, <code>RUN</code> install, <code>CMD</code> start. Order lines for good caching.'],
    ['Ports & volumes','<code>-p 8000:8000</code> exposes a port; volumes persist data outside the container.'],
    ['Docker Compose','<code>docker compose up</code> starts app + database + more from one YAML file.'],
    ['Registries','Push images to Docker Hub/GHCR/ECR so servers can pull them.'],
    ['Slim & secure images','Small base images, multi-stage builds, non-root user, no secrets baked in.']],
  ex:[['Dev teams','One-command setup','New hire runs <code>docker compose up</code> and has the full stack locally in minutes.'],
    ['Deployment','AWS ECS/Fargate','CI builds the image, pushes to ECR, ECS runs it.'],
    ['Data','Reproducible jobs','Scraper or Dagster pipeline runs in the same container everywhere.'],
    ['Testing','Throwaway databases','Spin up a fresh Postgres per test run.']],
  link:[['kubernetes','Kubernetes orchestrates many Docker containers.'],['aws','ECS/Fargate/App Runner run containers.'],['azure','Azure Container Apps run containers.'],['ubuntu','Containers use the Linux kernel.'],['git','CI builds images on each push.'],['postgresql','Run Postgres locally in a container.']],
  code:{ i:'Install Docker Desktop for Mac (Apple Silicon). In a folder with a FastAPI <code>main.py</code>, add these two files and run <code>docker compose up --build</code>.', s:`# ---- Dockerfile ----
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt   # cached unless deps change
COPY . .
RUN useradd -m appuser && chown -R appuser /app
USER appuser
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

# ---- docker-compose.yml ----
services:
  api:
    build: .
    ports: ["8000:8000"]
    env_file: .env                  # secrets stay out of the image
    depends_on: [db]
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: devpass
      POSTGRES_DB: leads
    volumes: ["pgdata:/var/lib/postgresql/data"]
volumes:
  pgdata:

# Useful commands:
# docker ps · docker logs -f <id> · docker exec -it <id> sh · docker compose down`, n:'Add a GitHub Actions workflow that builds the image and pushes it to GitHub Container Registry on every merge to main.' },
  vid:[['Docker in 100 Seconds','Fireship','~2 min','Core idea instantly.'],['Docker Tutorial for Beginners','TechWorld with Nana','~3 hr','The go-to DevOps teacher.'],['Docker Tutorial for Beginners','Programming with Mosh','~1 hr','Concise and clear.']],
  quiz:[['A container is…',['A VM with its own kernel','A running instance of an image','A Dockerfile','A registry'],1,'Images are blueprints; containers run them.'],
    ['Why COPY requirements.txt before the rest of the code?',['Style','Layer caching: dependencies reinstall only when they change','Security','Required syntax'],1,'Faster rebuilds.'],
    ['Run app + Postgres together locally with…',['docker compose','git compose','npm compose','kubectl only'],0,'Compose defines multi-container setups.'],
    ['Where should API keys go?',['Baked into the image','Runtime env vars/secrets','The Dockerfile','The image name'],1,'Images get shared, so never bake secrets in.']],
  fc:[['Dockerfile','Recipe of instructions to build an image'],['Image layer','Cached step in an image build'],['Docker Compose','YAML tool for multi-container apps'],['Registry','Storage for images (Docker Hub, GHCR, ECR)'],['Multi-stage build','Build in one stage, copy only output into a slim final image']],
  iv:[['Container vs virtual machine?','VMs virtualize hardware with a full guest OS (heavy, strong isolation). Containers share the host kernel and isolate processes (lightweight, fast startup). Containers are ideal for packaging apps.'],
    ['How do you make Docker images smaller and safer?','Slim/distroless bases, multi-stage builds, .dockerignore, fewer layers, non-root user, pinned versions, scan images, never bake secrets in.'],
    ['How would you take a Dockerized app to production?','CI builds and tags the image, pushes to a registry, deploys to a managed container service (ECS Fargate/Cloud Run) with env-based secrets, health checks, logging, autoscaling and rolling deploys.']],
  links:[['Docker Get Started','https://docs.docker.com/get-started/'],['Play with Docker (browser lab)','https://labs.play-with-docker.com/']] },

{ id:'kubernetes', t:'Kubernetes', cat:'Cloud & DevOps', e:'☸️', lvl:'Advanced',
  tag:'Run, scale and heal hundreds of containers automatically.',
  role:'The orchestration layer above Docker for larger systems: self-healing, autoscaling and rolling deploys across many servers.',
  eli5:'If Docker containers are lunchboxes, Kubernetes is the cafeteria manager. It makes sure enough lunches are out, replaces any that fall on the floor, and adds more when it gets busy.',
  pro:'Kubernetes (K8s) is a container orchestrator. You declare desired state in YAML; controllers reconcile reality to it. Core objects: <b>Pod</b> (1+ containers), <b>Deployment</b> (replicas, rolling updates), <b>Service</b> (stable networking), <b>Ingress</b> (HTTP routing/TLS), <b>ConfigMap/Secret</b>, <b>HPA</b> (autoscaling), namespaces. Managed offerings: AWS EKS, Azure AKS, Google GKE. Tooling: <code>kubectl</code>, Helm, Argo CD (GitOps).',
  why:'Required for many DevOps/SRE/platform roles and a strong plus for senior back-end roles. It\'s advanced, so even conceptual fluency differentiates you.',
  kw:['kubernetes','k8s','helm','eks','aks','gke','kubectl','orchestration','argo cd','gitops','sre'],
  jobs:['Kubernetes','EKS/AKS/GKE','Helm','GitOps (Argo CD)','SRE / platform engineering'],
  res:'Deployed containerized services to Kubernetes with Deployments, Services, Ingress and autoscaling (learning in a local cluster).',
  con:[['Desired state','You declare "3 replicas of image X"; Kubernetes keeps it true even when nodes fail.'],
    ['Pods & Deployments','Pods run containers; Deployments manage replicas and zero-downtime rolling updates.'],
    ['Services & Ingress','Services give pods a stable address; Ingress routes external HTTP(S) traffic.'],
    ['ConfigMaps & Secrets','Inject config and credentials without rebuilding images.'],
    ['Autoscaling','HPA adds pods under load; cluster autoscaler adds nodes.'],
    ['When NOT to use it','Small apps are simpler on ECS Fargate, Cloud Run, Railway or Render. K8s brings real complexity.']],
  ex:[['SaaS at scale','Microservices','Dozens of services with independent scaling and deploys.'],
    ['E-commerce','Black Friday','Autoscale checkout pods 10× during peak, then scale back down.'],
    ['AI','Model serving','GPU node pools serve inference with autoscaling.'],
    ['Platform teams','Internal developer platform','Devs ship by merging to Git; Argo CD syncs to clusters.']],
  link:[['docker','K8s runs container images.'],['aws','EKS is managed Kubernetes on AWS.'],['azure','AKS on Azure.'],['git','GitOps: Git is the source of truth for cluster state.'],['ubuntu','Nodes are Linux machines.'],['terminal','kubectl lives in the terminal.']],
  code:{ i:'Practice locally: Docker Desktop → Settings → Kubernetes → Enable. Save as <code>app.yaml</code>, then <code>kubectl apply -f app.yaml</code>.', s:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: lead-api
spec:
  replicas: 3                       # desired state: always 3 pods
  selector: { matchLabels: { app: lead-api } }
  template:
    metadata: { labels: { app: lead-api } }
    spec:
      containers:
        - name: api
          image: nginxdemos/hello   # swap for your image, e.g. ghcr.io/you/lead-api:1.0
          ports: [{ containerPort: 80 }]
          resources:
            requests: { cpu: "100m", memory: "128Mi" }
            limits:   { cpu: "500m", memory: "256Mi" }
          readinessProbe: { httpGet: { path: /, port: 80 } }
---
apiVersion: v1
kind: Service
metadata: { name: lead-api }
spec:
  type: LoadBalancer
  selector: { app: lead-api }
  ports: [{ port: 8080, targetPort: 80 }]

# kubectl get pods -w                       # watch them start
# kubectl delete pod <one-pod-name>          # watch K8s self-heal it!
# kubectl scale deployment lead-api --replicas=5
# open http://localhost:8080`, n:'Delete a pod and watch it come back. Then add a HorizontalPodAutoscaler and read about Helm charts.' },
  vid:[['Kubernetes Explained in 100 Seconds','Fireship','~2 min','The big idea.'],['Kubernetes Tutorial for Beginners','TechWorld with Nana','~4 hr','The most popular full course.'],['Kubernetes Crash Course for Absolute Beginners','TechWorld with Nana','~1 hr','Shorter hands-on version.']],
  quiz:[['Which object manages replicas and rolling updates?',['Pod','Deployment','Service','ConfigMap'],1,'Deployments manage ReplicaSets of pods.'],
    ['A pod crashes. Kubernetes…',['Waits for you','Recreates it to match desired state','Deletes the cluster','Emails you'],1,'Controllers reconcile to the declared state.'],
    ['Stable network address for a set of pods?',['Ingress only','Service','Volume','Namespace'],1,'Services load-balance across matching pods.'],
    ['For a small app with low traffic, best choice is often…',['A 50-node K8s cluster','A simpler managed container service','Bare metal','No hosting'],1,'Avoid unnecessary complexity.']],
  fc:[['Pod','Smallest deployable unit: one or more containers'],['Deployment','Manages replicas & rolling updates of pods'],['Service','Stable networking/load balancing for pods'],['Ingress','HTTP routing from outside into Services'],['HPA','Horizontal Pod Autoscaler']],
  iv:[['Explain Kubernetes to a non-technical stakeholder.','It\'s an autopilot for our app\'s servers: it keeps the right number of copies running, replaces broken ones automatically and adds capacity during traffic spikes, so customers don\'t see outages.'],
    ['How does a rolling update work?','The Deployment creates new pods with the new image gradually, waits for readiness probes to pass, then removes old pods, keeping capacity throughout. You can roll back to the previous ReplicaSet if needed.'],
    ['When would you NOT recommend Kubernetes?','Small teams or simple apps where ECS Fargate, Cloud Run, Railway or Render deliver the same outcome with far less operational overhead.']],
  links:[['Kubernetes official tutorials','https://kubernetes.io/docs/tutorials/'],['roadmap.sh Kubernetes','https://roadmap.sh/kubernetes']] },

{ id:'aws', t:'AWS', cat:'Cloud & DevOps', e:'☁️', lvl:'Intermediate',
  tag:'Amazon Web Services: the biggest cloud. Rent servers, storage, databases and AI by the second.',
  role:'Where the stack runs: compute, storage, databases, serverless functions, DNS and AI services under one account.',
  eli5:'Instead of buying your own computers, you rent Amazon\'s. Need a server for an hour, a place to store a million photos, or a database? Click, and it exists, and you pay only for what you use.',
  pro:'AWS offers 200+ services. Core: <b>IAM</b> (identity & permissions), <b>EC2</b> (VMs), <b>S3</b> (object storage), <b>RDS/Aurora</b> (managed SQL), <b>Lambda</b> (serverless functions), <b>ECS/Fargate</b> and EKS (containers), <b>API Gateway</b>, <b>CloudWatch</b> (logs/metrics), <b>Route 53</b> (DNS), <b>CloudFront</b> (CDN), <b>SQS/SNS/EventBridge</b> (messaging), <b>Bedrock</b> (LLMs incl. Claude). Concepts: regions/AZs, VPC networking, shared responsibility, cost management, infrastructure as code (Terraform/CDK).',
  why:'AWS is the most-requested cloud in job listings. The Cloud Practitioner certification is a quick, credible resume booster for non-engineers and engineers alike.',
  kw:['aws','amazon web services','ec2','s3','lambda','rds','cloudwatch','iam','ecs','fargate','eks','bedrock','cloudformation','terraform','cloud','serverless','route 53'],
  jobs:['AWS (EC2, S3, Lambda, RDS)','IAM','serverless','AWS certifications','infrastructure as code'],
  res:'Deployed and operated workloads on AWS (S3, Lambda, RDS, ECS/Fargate) with IAM least-privilege and CloudWatch monitoring.',
  con:[['IAM first','Users, roles and policies. Least privilege; MFA on root; never use root day to day.'],
    ['Compute choices','EC2 (VMs, full control) → ECS/Fargate (containers, no servers) → Lambda (functions, pay per request).'],
    ['S3','Infinite file storage: images, exports, backups, static sites. Keep buckets private by default.'],
    ['Managed databases','RDS/Aurora run Postgres/MySQL with backups and failover; DynamoDB for key-value at scale.'],
    ['Regions & AZs','Pick a region near users; spread across availability zones for resilience.'],
    ['Cost control','Budgets & alerts, right-sizing, stopping unused resources, Free Tier awareness.']],
  ex:[['E-commerce','Image + order pipeline','Product images in S3 + CloudFront; order webhook → API Gateway → Lambda → RDS.'],
    ['Property mgmt','Report automation','EventBridge schedule → Lambda pulls PMS data → stores CSV in S3 → emails via SES.'],
    ['AI','Bedrock','Use Claude via AWS Bedrock inside a company\'s existing AWS security boundary.'],
    ['SaaS','Container hosting','ECS Fargate runs the API; RDS Postgres stores data; CloudWatch alarms page on errors.']],
  link:[['docker','ECS/Fargate and EKS run your containers.'],['postgresql','RDS/Aurora host Postgres.'],['dns','Route 53 DNS.'],['network-security','IAM, security groups, encryption.'],['python','boto3 is the AWS SDK for Python.'],['llms','Bedrock serves Claude and other models.'],['azure','Azure is the main competitor; concepts map 1:1.']],
  code:{ i:'Create a free-tier account, set a $5 budget alert first, then <code>brew install awscli</code> and <code>aws configure</code> with an IAM user (not root).', s:`# S3: upload a report, generate a temporary share link
aws s3 mb s3://brandon-reports-demo-12345
aws s3 cp rent_roll.csv s3://brandon-reports-demo-12345/2026-11/
aws s3 presign s3://brandon-reports-demo-12345/2026-11/rent_roll.csv --expires-in 3600

# Who am I? (sanity-check credentials)
aws sts get-caller-identity

# ---- Lambda in Python (paste into the console's code editor) ----
# import json, boto3
# s3 = boto3.client("s3")
# def lambda_handler(event, context):
#     body = json.loads(event.get("body") or "{}")
#     key = f"leads/{body.get('email','unknown')}.json"
#     s3.put_object(Bucket="brandon-reports-demo-12345", Key=key, Body=json.dumps(body))
#     return {"statusCode": 201, "body": json.dumps({"saved": key})}
# Add a Function URL → you now have a serverless lead-capture API.

# Clean up when done (avoid charges!)
aws s3 rb s3://brandon-reports-demo-12345 --force`, n:'Study for AWS Certified Cloud Practitioner (free Skill Builder + the freeCodeCamp course). Then build the Lambda lead API above.' },
  vid:[['AWS Certified Cloud Practitioner Certification Course','freeCodeCamp.org (Andrew Brown)','~14 hr','Full cert prep, free.'],['AWS In 10 Minutes','Simplilearn OR Fireship','~10 min','The core services map.'],['AWS Lambda tutorial for beginners','Be A Better Dev','~20 min','Serverless hands-on.']],
  quiz:[['Best service to store product images and CSV exports?',['EC2','S3','IAM','Route 53'],1,'S3 is object storage.'],
    ['Run code only when a request comes in, paying per invocation?',['EC2','Lambda','RDS','CloudFront'],1,'Serverless functions.'],
    ['First thing to secure in a new AWS account?',['Buy reserved instances','Root MFA + IAM least privilege + budget alert','Launch EKS','Make S3 public'],1,'Security and cost guardrails first.'],
    ['Managed Postgres on AWS?',['DynamoDB','RDS / Aurora','S3','SQS'],1,'RDS handles backups, patching, failover.']],
  fc:[['IAM','Identity & Access Management: users, roles, policies'],['EC2','Virtual servers'],['Lambda','Serverless functions'],['S3','Object storage (buckets)'],['CloudWatch','Logs, metrics & alarms']],
  iv:[['How would you deploy a small web API on AWS?','Containerize it, push to ECR, run on ECS Fargate behind an Application Load Balancer, RDS Postgres in private subnets, secrets in Secrets Manager, CloudWatch logs/alarms, Route 53 + ACM for HTTPS, all defined in Terraform/CDK. Or Lambda + API Gateway if traffic is spiky and simple.'],
    ['How do you control AWS costs?','Budgets and alerts, tagging, right-sizing, auto-scaling, deleting idle resources, Savings Plans for steady load, S3 lifecycle rules, and reviewing Cost Explorer monthly.'],
    ['Explain the shared responsibility model.','AWS secures the cloud (hardware, facilities, managed-service internals); we secure what we put in the cloud: IAM, data, network config, OS patches on EC2, app security.']],
  links:[['AWS Skill Builder (free)','https://skillbuilder.aws/'],['AWS Free Tier','https://aws.amazon.com/free/']] },

{ id:'azure', t:'Microsoft Azure', cat:'Cloud & DevOps', e:'🔷', lvl:'Intermediate',
  tag:'Microsoft\'s cloud. Dominant in enterprises that live on Microsoft 365.',
  role:'The enterprise alternative to AWS: same building blocks, tightly integrated with Microsoft 365, Entra ID and Power Platform.',
  eli5:'Azure is Microsoft\'s version of renting computers in the cloud. Big companies that already use Outlook, Teams and Excel often pick Azure because everything connects easily.',
  pro:'Azure organizes resources into <b>subscriptions</b> and <b>resource groups</b>, governed by <b>Microsoft Entra ID</b> (formerly Azure AD) and RBAC. Key services: Virtual Machines, <b>App Service</b> (web apps), <b>Azure Functions</b> (serverless), <b>Container Apps</b>/AKS, Blob Storage, Azure SQL / PostgreSQL Flexible Server, Key Vault, Monitor, and <b>Azure OpenAI / AI Foundry</b>. Microsoft\'s automation suite: <b>Power Automate</b>, Logic Apps.',
  why:'Enterprises, government and healthcare lean Azure. AZ-900 is a beginner-friendly certification, and Power Automate/Entra skills open IT and automation roles at Microsoft-centric companies.',
  kw:['azure','microsoft azure','azure functions','entra','entra id','azure ad','active directory','power platform','power automate','logic apps','az-900','microsoft 365','aks','azure openai'],
  jobs:['Azure','Entra ID (Azure AD)','Azure Functions / App Service','Power Automate','AZ-900 / AZ-104'],
  res:'Built and deployed solutions on Microsoft Azure (App Service, Functions, Blob Storage) with Entra ID access control.',
  con:[['Subscriptions & resource groups','Billing boundary → logical folders that hold related resources. Delete the group to clean everything up.'],
    ['Entra ID & RBAC','Single sign-on identities for the whole company; role-based access to resources.'],
    ['App Service & Functions','Host web apps without managing servers; event-driven serverless functions.'],
    ['Storage & databases','Blob Storage (files), Azure SQL, PostgreSQL Flexible Server, Cosmos DB.'],
    ['Key Vault','Central secret storage for keys, passwords and certificates.'],
    ['AWS ↔ Azure map','EC2 = VMs, S3 = Blob, Lambda = Functions, RDS = Azure SQL/PG, IAM ≈ Entra + RBAC.']],
  ex:[['Enterprise','Microsoft 365 integration','An internal app uses Entra SSO so employees log in with work accounts.'],
    ['Automation','Power Automate','When an email with an invoice arrives in Outlook, save it to SharePoint and post in Teams.'],
    ['AI','Azure OpenAI / AI Foundry','Enterprises run LLMs inside their Azure compliance boundary.'],
    ['Property mgmt','Corporate IT','Large management companies often standardize on Microsoft 365 + Azure.']],
  link:[['aws','Same concepts, different names.'],['docker','Container Apps and AKS run containers.'],['automations','Power Automate / Logic Apps.'],['network-security','Entra ID, Key Vault, Defender.'],['kubernetes','AKS = managed Kubernetes.'],['llms','Azure OpenAI and AI Foundry.']],
  code:{ i:'Free account at azure.microsoft.com (credit for new users). <code>brew install azure-cli</code>, then <code>az login</code>. This deploys a static web page to App Service.', s:`# create a resource group (a folder for everything)
az group create --name learn-rg --location westus2

# deploy the current folder (HTML/Node/Python) as a web app in one command
mkdir hello-azure && cd hello-azure
echo "<h1>Hello from Azure 👋</h1>" > index.html
az webapp up --name brandon-hello-$RANDOM --resource-group learn-rg \\
  --html --sku F1          # F1 = free tier

# store a secret in Key Vault
az keyvault create --name brandonkv$RANDOM --resource-group learn-rg --location westus2
# az keyvault secret set --vault-name <name> --name TWILIO-TOKEN --value "xxx"

# see what you created
az resource list --resource-group learn-rg -o table

# clean up EVERYTHING in one go
az group delete --name learn-rg --yes --no-wait`, n:'Take the free Microsoft Learn AZ-900 path, and build a Power Automate flow: Outlook email with attachment → OneDrive → Teams message.' },
  vid:[['Azure Fundamentals Certification (AZ-900) - Full Course','freeCodeCamp.org (Andrew Brown)','~8 hr','Full cert prep, free.'],['AZ-900 study cram','John Savill\'s Technical Training','~3 hr','The legendary cram session.'],['Azure Tutorial for beginners','Adam Marczak - Azure for Everyone','series','Clear service-by-service videos.']],
  quiz:[['Azure\'s identity service (formerly Azure AD) is…',['Key Vault','Microsoft Entra ID','Blob','Monitor'],1,'Renamed to Entra ID.'],
    ['Azure equivalent of AWS Lambda?',['App Service','Azure Functions','AKS','Blob Storage'],1,'Event-driven serverless.'],
    ['Delete a resource group and…',['Nothing happens','All resources inside are deleted','Only VMs stop','Billing doubles'],1,'Great for cleanup, dangerous in prod.'],
    ['Where should app secrets live in Azure?',['App code','Key Vault','Blob public container','Teams chat'],1,'Key Vault centralizes secrets.']],
  fc:[['Resource group','Logical container for related Azure resources'],['Entra ID','Azure/Microsoft 365 identity & SSO'],['App Service','Managed web app hosting'],['Blob Storage','Azure object storage (like S3)'],['AZ-900','Azure Fundamentals certification']],
  iv:[['AWS vs Azure: how do you choose?','Mostly by the organization: Microsoft-centric enterprises benefit from Entra/M365 integration and licensing; AWS has the broadest services and market share. Skills transfer: compute, storage, IAM and networking concepts map directly.'],
    ['How would you secure an Azure web app?','Entra ID auth, managed identity to access Key Vault (no secrets in config), HTTPS only, private endpoints for databases, least-privilege RBAC, Defender for Cloud recommendations, logging to Azure Monitor.'],
    ['Describe a Power Automate flow you\'d build for operations.','For example: new SharePoint form → approval in Teams → on approval update an Excel table and email the requester, with error notifications. It saves manual follow-ups.']],
  links:[['Microsoft Learn: AZ-900 path (free)','https://learn.microsoft.com/en-us/training/courses/az-900t00'],['Azure free account','https://azure.microsoft.com/free/']] },

{ id:'network-security', t:'Network Security', cat:'Security', e:'🛡️', lvl:'Intermediate',
  tag:'Protect systems, data and customers. Everyone\'s job now, and a whole career path.',
  role:'Wraps every layer of the map: HTTPS, firewalls, secrets, auth and monitoring, so the machine can\'t be broken into or leak data.',
  eli5:'Network security is locks, alarms and guards for computers. It decides who can get in, keeps secrets secret, and notices when someone is trying to break in.',
  pro:'Core areas: <b>CIA triad</b> (confidentiality, integrity, availability); <b>TLS/HTTPS</b> and encryption at rest; <b>firewalls</b>, security groups, VPNs, network segmentation; <b>identity</b> (MFA, SSO, least privilege, zero trust); <b>application security</b> (OWASP Top 10: injection, broken access control, misconfiguration); secrets management; logging/monitoring (SIEM); incident response; compliance frameworks (SOC 2, PCI DSS for payments, HIPAA).',
  why:'Security appears as a requirement in nearly every engineering listing and as its own large remote job market (SOC analyst, cloud security, GRC). Knowing it also makes your automation consulting trustworthy to clients.',
  kw:['security','cybersecurity','network security','firewall','vpn','owasp','encryption','ssl','tls','https','soc 2','penetration testing','zero trust','mfa','sso','pci','hipaa','incident response','siem'],
  jobs:['security best practices','OWASP Top 10','IAM / MFA / SSO','SOC 2 / compliance','firewalls & VPNs'],
  res:'Applied security best practices (least-privilege IAM, MFA, secrets management, HTTPS, OWASP Top 10 mitigations) across apps and automations.',
  con:[['CIA triad','Confidentiality (only the right people see it), Integrity (not tampered with), Availability (it stays up).'],
    ['Encryption','TLS in transit (HTTPS), encryption at rest (disk/DB), hashing passwords (bcrypt/argon2).'],
    ['Firewalls & segmentation','Only open needed ports; databases in private networks; VPN/SSH bastions for admin access.'],
    ['Identity & zero trust','MFA everywhere, SSO, least privilege, verify every request, with no implicit trust inside the network.'],
    ['OWASP Top 10','Broken access control, injection (SQL/prompt), misconfiguration, vulnerable dependencies… the web app hit list.'],
    ['Secrets & monitoring','Keys in vaults/env vars, rotation, secret scanning; logs and alerts for suspicious activity.']],
  ex:[['E-commerce','PCI compliance','Use Shopify/Stripe hosted checkout so card data never touches your servers.'],
    ['Property mgmt','Resident data','SSNs and bank info need encryption, access controls and audit logs.'],
    ['Automation','Integration hygiene','Each Zap/n8n credential scoped to minimum permissions; webhooks verify signatures.'],
    ['AI','Prompt injection','An email tells your AI agent to "forward all invoices to X"; guardrails and human approval stop it.']],
  link:[['api','API keys, OAuth and webhook signatures.'],['dns','DNS security, Cloudflare, email auth.'],['aws','IAM, security groups, KMS.'],['ubuntu','Server hardening.'],['llms','Prompt injection & data leakage.'],['git','Secret scanning, protected branches.'],['full-stack','Auth and access control in apps.']],
  code:{ i:'Quick security checks you can run from your Mac\'s Terminal against your own domains and machines only.', s:`# 1. Is HTTPS set up correctly? Inspect the certificate
echo | openssl s_client -connect brandon-rose.com:443 -servername brandon-rose.com 2>/dev/null \\
  | openssl x509 -noout -issuer -dates

# 2. Security headers present?
curl -sI https://brandon-rose.com | grep -iE "strict-transport|content-security|x-frame|x-content-type"

# 3. Email spoofing protection (SPF / DMARC)
dig +short TXT brandon-rose.com | grep spf
dig +short TXT _dmarc.brandon-rose.com

# 4. Generate a strong random secret (API keys, webhook secrets)
openssl rand -hex 32

# 5. Did a secret sneak into your Git history?  (brew install gitleaks)
gitleaks detect --source . -v

# 6. Vulnerable dependencies?
npm audit            # Node projects
uvx pip-audit        # Python projects

# Only scan systems you own or have written permission to test.`, n:'Turn on MFA for every account (GitHub, AWS, Google, Shopify, Cloudflare). Read the OWASP Top 10 and map each item to something in your projects.' },
  vid:[['Cybersecurity Architecture series','IBM Technology','series','Excellent fundamentals from IBM.'],['CompTIA Security+ full course','Professor Messer','course','The free gold standard for Security+ prep.'],['OWASP Top 10 explained','Fireship OR Web Dev Simplified','~15 min','Web app vulnerabilities developers must know.']],
  quiz:[['Customer card data should be handled by…',['Your own database','A PCI-compliant processor\'s hosted checkout (Stripe/Shopify)','A Google Sheet','Email'],1,'Minimize your PCI scope by never touching raw card data.'],
    ['SQL injection is prevented mainly by…',['Longer passwords','Parameterized queries','HTTPS','Bigger servers'],1,'Never concatenate user input into SQL.'],
    ['"Least privilege" means…',['Everyone is admin','Grant only the minimum access needed','No passwords','Cheapest plan'],1,'Limits the blast radius of mistakes or breaches.'],
    ['MFA protects against…',['Disk failure','Stolen passwords alone being enough to log in','DNS outages','Slow sites'],1,'A second factor blocks most account takeovers.']],
  fc:[['CIA triad','Confidentiality, Integrity, Availability'],['TLS','Encryption protocol behind HTTPS'],['Zero trust','Never trust, always verify every request'],['OWASP Top 10','Most critical web app security risks'],['SOC 2','Audit framework proving a company\'s security controls']],
  iv:[['How do you approach security when building an integration?','Least-privilege credentials stored in a secrets manager, HTTPS only, verify webhook signatures, validate and sanitize inputs, rate-limit, log access, rotate keys, and document the data flow for compliance.'],
    ['What would you do if you suspected a breach?','Follow the incident response plan: contain (revoke keys, isolate systems), preserve evidence and logs, assess scope, eradicate, recover from clean backups, notify stakeholders and any legally required parties, then run a blameless post-mortem.'],
    ['Explain HTTPS to a non-technical person.','It\'s a sealed, tamper-proof envelope between your browser and the website. The padlock shows the site proved its identity and no one in the middle can read or change what\'s sent.']],
  links:[['OWASP Top 10','https://owasp.org/www-project-top-ten/'],['TryHackMe (gamified security labs)','https://tryhackme.com/']] },

{ id:'app-dev', t:'App Development', cat:'Mobile', e:'📱', lvl:'Beginner → Intermediate',
  tag:'How mobile apps get planned, built, tested and shipped to the App Store and Google Play.',
  role:'The mobile surface in the "What people see" layer: the same APIs and data, delivered through native or cross-platform apps.',
  eli5:'Making an app is like making a tiny website that lives on your phone. You plan what it does, build the screens, connect it to the internet, test it, then ask Apple and Google to put it in their stores.',
  pro:'Approaches: <b>native</b> (Swift/SwiftUI for iOS, Kotlin/Jetpack Compose for Android), <b>cross-platform</b> (React Native/Expo, Flutter) and PWAs. Lifecycle: product spec → UX/UI → build → backend/APIs (often Firebase/Supabase) → testing (unit, UI, beta via TestFlight/Play testing) → store submission and review → analytics, crash reporting, updates. Monetization: paid, in-app purchases/subscriptions (RevenueCat), ads.',
  why:'Mobile developer is a strong remote category, and product, QA and growth roles at app companies need lifecycle fluency.',
  kw:['app development','mobile app','mobile apps','app developer','mobile development','android','kotlin','flutter','cross-platform','app store','google play','pwa','firebase'],
  jobs:['mobile app development','iOS/Android','cross-platform (React Native/Flutter)','App Store / Play submissions','Firebase / Supabase'],
  res:'Contributed to mobile app development from spec to store release, including API integration, beta testing and analytics.',
  con:[['Native vs cross-platform','Native = best performance and platform features, two codebases. Cross-platform = one codebase, faster to ship.'],
    ['Backend for apps','Auth, database, push notifications, file storage: Firebase, Supabase or your own API.'],
    ['Mobile UX','Thumb-friendly targets, offline states, loading skeletons, platform conventions (iOS vs Android).'],
    ['Testing & betas','Unit/UI tests, TestFlight (iOS) and Play internal testing; crash reporting (Sentry/Crashlytics).'],
    ['Store submission','Developer accounts, screenshots, privacy labels, review guidelines. Rejections are common, so read the rules.'],
    ['Monetization & analytics','Subscriptions via StoreKit/Play Billing (RevenueCat helps), product analytics, push re-engagement.']],
  ex:[['Property mgmt','Resident app','Pay rent, submit maintenance with photos, get package notifications.'],
    ['E-commerce','Shopping app','Push notifications for drops; Shop Pay integration; higher repeat rate than mobile web.'],
    ['Services','Barbershop booking','Book a barber, get reminders, rebook in one tap.'],
    ['Internal','Field-ops app','Maintenance techs see work orders and upload completion photos.']],
  link:[['ios','Native Apple development.'],['react-native','Cross-platform with JavaScript.'],['xcode','Required to build and ship iOS apps.'],['api','Apps are front ends for APIs.'],['web-design','Same UI/UX principles, mobile constraints.'],['saas','Many SaaS products ship companion apps.']],
  code:{ i:'A one-page app spec you fill out before writing code. Professionals do this, and it doubles as a portfolio artifact.', s:`APP SPEC: "TourBook" (book apartment tours)

1. Problem: Prospects call/email to schedule tours; 30% never get a reply.
2. Users: Prospective renters (primary), leasing agents (secondary).
3. Core user stories (MVP)
   - As a renter, I can see available units with photos & prices.
   - As a renter, I can pick a tour slot and get an SMS confirmation.
   - As an agent, I get a push notification for each new booking.
4. Screens: Units list → Unit detail → Pick slot → Confirm → My tours
5. Data/API: GET /units, GET /slots?unit=, POST /bookings (Postgres + Twilio)
6. Tech choice: React Native (Expo) → one codebase for iOS + Android
7. Analytics events: unit_viewed, slot_selected, booking_created
8. Success metric: % of inquiries that book a tour within 24h
9. Release plan: TestFlight beta (10 users) → App Store + Play Store
10. Out of scope (v2): payments, application forms, chat`, n:'Write a spec like this for an app you\'d use, then sketch the 5 screens in Figma. Bring both to interviews.' },
  vid:[['How to make an app for beginners','CodeWithChris','~20 min','Big-picture lifecycle.'],['Mobile app development roadmap','roadmap.sh OR Fireship','~15 min','Native vs cross-platform choices.'],['How to publish an app to the App Store','Sean Allen OR CodeWithChris','~20 min','Submission walkthrough.']],
  quiz:[['One codebase for iOS + Android in JavaScript?',['SwiftUI','React Native','Kotlin','Xcode'],1,'React Native (often with Expo).'],
    ['Apple\'s beta-testing service is…',['Play Console','TestFlight','Firebase','Expo Go only'],1,'TestFlight distributes iOS betas.'],
    ['Common reason for App Store rejection?',['Too many users','Guideline violations (privacy, broken features, misleading metadata)','Using Swift','Dark mode'],1,'Read the App Review Guidelines.'],
    ['Firebase/Supabase provide…',['Graphic design','Backend services: auth, DB, storage, push','Ad campaigns','Domains'],1,'Backend-as-a-service for apps.']],
  fc:[['Native app','Built with platform languages (Swift, Kotlin)'],['Cross-platform','One codebase for multiple OSes (React Native, Flutter)'],['TestFlight','Apple\'s beta distribution'],['Push notification','Message sent to a device from a server'],['RevenueCat','Service simplifying in-app subscriptions']],
  iv:[['Native vs cross-platform: how do you decide?','Team skills, performance needs, platform-specific features, time to market and budget. Most business apps do great with React Native/Expo; heavy graphics or deep OS features favor native.'],
    ['Walk me through releasing a mobile app.','Feature-complete build → QA and automated tests → beta via TestFlight/Play testing → fix feedback → store listing (screenshots, privacy labels) → submit for review → phased rollout → monitor crashes and analytics → iterate.'],
    ['How do you handle poor connectivity in an app?','Cache data locally, optimistic UI, queue writes for retry, clear offline states, sensible timeouts and retries.']],
  links:[['roadmap.sh: iOS / React Native','https://roadmap.sh/react-native'],['Apple App Review Guidelines','https://developer.apple.com/app-store/review/guidelines/']] },

{ id:'ios', t:'iOS Development (Swift)', cat:'Mobile', e:'🍎', lvl:'Intermediate',
  tag:'Build native iPhone apps with Swift and SwiftUI.',
  role:'The native Apple layer of "What people see": the best iPhone experience, using your same APIs and data.',
  eli5:'iPhone apps are written in Apple\'s language called Swift. SwiftUI lets you describe a screen ("a list of apartments with photos") and the iPhone draws it beautifully.',
  pro:'Modern iOS development uses <b>Swift</b> (type-safe, optionals, structs, protocols, async/await) and <b>SwiftUI</b> (declarative UI: views, <code>@State</code>, <code>@Observable</code>, NavigationStack, lists). Older codebases use UIKit. Key frameworks: URLSession/Codable (networking/JSON), SwiftData/Core Data (storage), StoreKit (purchases), push notifications, WidgetKit. Built in <b>Xcode</b>; distributed via TestFlight and App Store Connect.',
  why:'iOS developers are well-paid and frequently remote. US iPhone market share means many startups launch iOS-first. Your M3 Mac is the ideal machine for it.',
  kw:['ios','swift','swiftui','uikit','iphone','ipad','apple','app store','swiftdata','objective-c'],
  jobs:['Swift / SwiftUI','iOS development','UIKit','App Store releases','Combine / async-await'],
  res:'Built native iOS features in Swift/SwiftUI consuming REST APIs, and shipped builds via TestFlight.',
  con:[['Swift basics','<code>let</code>/<code>var</code>, strong types, optionals (<code>String?</code>) to handle "maybe missing" safely.'],
    ['SwiftUI views','<code>struct UnitRow: View { var body: some View { … } }</code>. UI is a function of state.'],
    ['State & data flow','<code>@State</code> for local, <code>@Observable</code> models for shared state; views update automatically.'],
    ['Networking & Codable','<code>URLSession</code> + <code>async/await</code> fetch JSON; Codable decodes it into structs.'],
    ['Persistence','SwiftData for local storage; Keychain for secrets/tokens.'],
    ['App lifecycle & capabilities','Push notifications, background tasks, permissions (camera, location) with clear usage descriptions.']],
  ex:[['Property mgmt','Resident app','Native camera for maintenance photos; Apple Pay for rent.'],
    ['E-commerce','Brand app','Fast native browsing, push for drops, widgets for order tracking.'],
    ['Health/fitness','HealthKit apps','Native-only APIs are a reason to go Swift.'],
    ['Personal','Your own tools','A widget showing today\'s leads from your API.']],
  link:[['xcode','The IDE you build iOS apps in.'],['app-dev','The full lifecycle around it.'],['api','Apps consume your REST APIs.'],['json','Codable decodes JSON responses.'],['react-native','The cross-platform alternative.']],
  code:{ i:'Xcode → New Project → iOS App (SwiftUI). Replace ContentView.swift and press ▶ to run in the Simulator.', s:`import SwiftUI

struct Product: Codable, Identifiable {
    let id: Int
    let title: String
    let price: Double
}

@Observable class Store {
    var products: [Product] = []
    var cartCount = 0

    func load() async {
        guard let url = URL(string: "https://fakestoreapi.com/products?limit=8") else { return }
        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            products = try JSONDecoder().decode([Product].self, from: data)
        } catch { print("Load failed:", error) }
    }
}

struct ContentView: View {
    @State private var store = Store()

    var body: some View {
        NavigationStack {
            List(store.products) { p in
                HStack {
                    Text(p.title).lineLimit(2)
                    Spacer()
                    Button("$\\(p.price, specifier: "%.2f")") { store.cartCount += 1 }
                        .buttonStyle(.borderedProminent)
                }
            }
            .navigationTitle("🛒 Cart: \\(store.cartCount)")
            .task { await store.load() }
        }
    }
}`, n:'Add a detail screen with NavigationLink and an image (AsyncImage). Then follow Apple\'s free "Develop in Swift" tutorials.' },
  vid:[['Swift in 100 Seconds','Fireship','~2 min','Language overview.'],['100 Days of SwiftUI','Paul Hudson (Hacking with Swift)','course','The best free structured iOS course.'],['SwiftUI tutorial for beginners','Sean Allen OR CodeWithChris','~1 hr','First app, step by step.']],
  quiz:[['<code>String?</code> in Swift means…',['A required string','An optional: might be nil','An array','A function'],1,'Optionals force you to handle missing values.'],
    ['In SwiftUI, changing <code>@State</code>…',['Does nothing','Re-renders the views that depend on it','Crashes the app','Saves to disk'],1,'UI is a function of state.'],
    ['Decode JSON into Swift structs with…',['Codable + JSONDecoder','UIKit','StoreKit','Keychain'],0,'Conform structs to Codable.'],
    ['Where should auth tokens be stored on iOS?',['UserDefaults','Keychain','A text file','Hard-coded'],1,'Keychain is encrypted secure storage.']],
  fc:[['SwiftUI','Apple\'s declarative UI framework'],['Optional','A value that may be nil (String?)'],['@State','Local view state that triggers re-render'],['Codable','Protocol for encoding/decoding JSON'],['UIKit','Older imperative iOS UI framework']],
  iv:[['SwiftUI vs UIKit?','SwiftUI is declarative and faster to build, and it\'s the modern default. UIKit is mature with fine-grained control and is still in many codebases. I\'d use SwiftUI and bridge to UIKit where needed.'],
    ['How do you handle networking errors in an iOS app?','async/await with do/catch, typed errors, retry for transient failures, user-friendly error states, offline caching, and logging to crash/analytics tools.'],
    ['How do you architect a SwiftUI app?','MVVM-style: views stay thin, @Observable models hold state and logic, a service layer handles networking, dependency injection for testability, unit tests on models.']],
  links:[['Apple: Develop in Swift tutorials','https://developer.apple.com/tutorials/develop-in-swift'],['Hacking with Swift (100 Days of SwiftUI)','https://www.hackingwithswift.com/100/swiftui']] },

{ id:'xcode', t:'Xcode', cat:'Mobile', e:'🔨', lvl:'Beginner → Intermediate',
  tag:'Apple\'s IDE for building, testing and shipping every Apple-platform app.',
  role:'The workbench for the iOS layer: write Swift, preview UI, run simulators, debug, and archive builds for TestFlight and the App Store.',
  eli5:'Xcode is Apple\'s app-making workshop on your Mac. You write the app, try it on a pretend iPhone on your screen, fix bugs, and send it to Apple from there.',
  pro:'Xcode bundles the Swift compiler, <b>SwiftUI Previews</b>, <b>Simulator</b>, Interface Builder, the LLDB <b>debugger</b>, <b>Instruments</b> (performance/memory profiling), XCTest/Swift Testing, Swift Package Manager, signing & capabilities (certificates, provisioning profiles), and <b>Archive → Distribute</b> to App Store Connect. Xcode Cloud provides CI/CD. Recent versions add AI-assisted code completion.',
  why:'Required for any iOS/macOS role, and the signing, debugging and release knowledge is what separates hobbyists from shippable professionals.',
  kw:['xcode','testflight','simulator','app store connect','instruments','xctest','swift package manager','provisioning profile'],
  jobs:['Xcode','TestFlight / App Store Connect','Instruments profiling','XCTest','code signing'],
  res:'Used Xcode for development, debugging (LLDB, Instruments), testing and TestFlight/App Store distribution.',
  con:[['Projects, targets & schemes','A target is a product (app, widget, tests); schemes define how to build/run them.'],
    ['Previews & Simulator','See SwiftUI changes live; run on any iPhone/iPad model without a device.'],
    ['Debugger & breakpoints','Pause, inspect variables, <code>po</code> in the LLDB console; view hierarchy debugger for layout bugs.'],
    ['Instruments','Find memory leaks, slow code and energy problems.'],
    ['Signing & capabilities','Apple Developer account, certificates, provisioning, entitlements (push, Apple Pay). Usually "Automatically manage signing".'],
    ['Archive & distribute','Product → Archive → upload to App Store Connect → TestFlight → submit for review.']],
  ex:[['Dev workflow','Daily building','Edit in Xcode, preview instantly, run on the Simulator and your own iPhone.'],
    ['QA','TestFlight betas','Upload builds; testers install via the TestFlight app; collect feedback and crash logs.'],
    ['Performance','Fix a laggy list','Instruments Time Profiler finds expensive image decoding on the main thread.'],
    ['Teams','Xcode Cloud','Automatic builds and tests on every pull request.']],
  link:[['ios','Xcode is where iOS apps are built.'],['app-dev','Covers the release side of the lifecycle.'],['git','Built-in Git integration.'],['terminal','xcodebuild & command-line tools.'],['react-native','Expo/React Native iOS builds still use Xcode tooling.']],
  code:{ i:'Install Xcode free from the Mac App Store (large download). Useful command-line helpers plus a starter unit test.', s:`# Command Line Tools (gives you git, clang, etc.)
xcode-select --install

# List available simulators and boot one
xcrun simctl list devices available | head -20
open -a Simulator

# Build & test from the terminal (great for CI)
# xcodebuild -scheme TourBook -destination 'platform=iOS Simulator,name=iPhone 16' test

// ---- TourBookTests.swift (Swift Testing) ----
import Testing
@testable import TourBook

struct PricingTests {
    @Test func rentPerSqft() {
        let unit = Unit(rent: 3000, sqft: 1000)
        #expect(unit.rentPerSqft == 3.0)
    }
}
// Run with Cmd+U. Set a breakpoint by clicking the line gutter, then Cmd+R.`, n:'Run the iOS SwiftUI example on the Simulator, set a breakpoint inside <code>load()</code> and inspect <code>products</code> in the debugger.' },
  vid:[['Xcode tutorial for beginners','CodeWithChris','~30 min','Tour of the IDE.'],['Xcode tips and tricks','Sean Allen','~15 min','Shortcuts and productivity.'],['How to upload an app to TestFlight','Sean Allen OR Rebeloper','~15 min','Archive & distribute walkthrough.']],
  quiz:[['Test an app on many iPhone models without devices using…',['TestFlight','Simulator','Instruments','App Store Connect'],1,'Simulator runs virtual devices on your Mac.'],
    ['Find a memory leak with…',['Previews','Instruments','Interface Builder','Swift Package Manager'],1,'Instruments → Leaks / Allocations.'],
    ['To ship a build to testers you…',['Email the .swift files','Archive and upload to App Store Connect / TestFlight','Use Simulator','Zip the project'],1,'Product → Archive → Distribute.'],
    ['Shortcut to run unit tests?',['Cmd+R','Cmd+U','Cmd+B','Cmd+T'],1,'Cmd+U runs tests; Cmd+R runs the app; Cmd+B builds.']],
  fc:[['Target','A buildable product within an Xcode project'],['Simulator','Virtual iPhone/iPad on your Mac'],['Instruments','Performance & memory profiling tool'],['Provisioning profile','Links app ID, certificates and devices for signing'],['App Store Connect','Apple\'s portal for builds, TestFlight and listings']],
  iv:[['A build fails with a signing error. What do you check?','Correct team selected, bundle ID matches App Store Connect, automatic signing enabled (or valid certificates/profiles), required capabilities provisioned, then clean the build folder.'],
    ['How do you profile a slow screen?','Reproduce on a real device, run Instruments Time Profiler, find hot paths on the main thread, move work off it (async), cache images, re-measure.'],
    ['How would you set up CI for an iOS app?','Xcode Cloud or GitHub Actions with xcodebuild: run tests on each PR, archive on merge to main, upload to TestFlight automatically, store signing assets securely.']],
  links:[['Xcode documentation','https://developer.apple.com/documentation/xcode'],['Apple: Develop in Swift','https://developer.apple.com/tutorials/develop-in-swift']] },

{ id:'react-native', t:'React Native', cat:'Mobile', e:'📲', lvl:'Intermediate',
  tag:'Build real iOS + Android apps with JavaScript/React. One codebase, two stores.',
  role:'The fastest bridge from your web skills (JavaScript, React, APIs) to native mobile apps on both platforms.',
  eli5:'React Native lets you use your website-building skills to make real phone apps. Write it once and it runs on both iPhone and Android.',
  pro:'React Native renders <b>native</b> UI components (not a webview) from React code: <code>&lt;View&gt;</code>, <code>&lt;Text&gt;</code>, <code>&lt;FlatList&gt;</code>, styled with a CSS-like StyleSheet (or NativeWind for Tailwind). <b>Expo</b> is the recommended framework: Expo Go for instant device testing, <b>Expo Router</b> (file-based navigation), EAS Build/Submit for cloud builds and store submission, and OTA updates. Used by Shopify, Discord, Microsoft and Meta.',
  why:'React Native roles let web developers move into mobile and pay well. Shopify famously went all-in on it. Knowing React plus React Native makes you a "web + mobile" hire.',
  kw:['react native','expo','cross-platform','nativewind','eas'],
  jobs:['React Native','Expo / EAS','cross-platform mobile','TypeScript','mobile API integration'],
  res:'Built cross-platform mobile screens in React Native (Expo) with API integration, navigation and push notifications.',
  con:[['Core components','<code>View</code> (div), <code>Text</code>, <code>Image</code>, <code>Pressable</code>, <code>ScrollView</code>, <code>FlatList</code> for long lists.'],
    ['Styling','StyleSheet with flexbox (column by default) or NativeWind for Tailwind classes.'],
    ['Expo','Zero-config start: <code>npx create-expo-app</code>, scan a QR code with Expo Go, and it runs on your phone.'],
    ['Navigation','Expo Router: files in <code>app/</code> become screens, like Next.js.'],
    ['Native APIs','Camera, location, notifications, secure storage via Expo modules.'],
    ['Build & ship','EAS Build makes iOS/Android binaries in the cloud; EAS Submit uploads to the stores.']],
  ex:[['E-commerce','Shopify Shop app','Shopify\'s consumer app and merchant app are built with React Native.'],
    ['Startups','MVP on both stores','One small team ships iOS + Android simultaneously.'],
    ['Property mgmt','Resident app','Maintenance requests with camera + push notifications.'],
    ['Internal','Field tools','Inspections app with offline support for techs.']],
  link:[['react','Same components, hooks and state.'],['javascript','The language you write it in.'],['app-dev','The full mobile lifecycle.'],['ios','Native iOS when you need deeper platform features.'],['xcode','Used under the hood for iOS builds.'],['api','Apps fetch data from your APIs.']],
  code:{ i:'<code>npx create-expo-app@latest tourbook</code> → <code>cd tourbook</code> → <code>npx expo start</code>. Scan the QR code with Expo Go on your iPhone. Replace <code>app/(tabs)/index.tsx</code> with this.', s:`import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, ActivityIndicator } from 'react-native';

type Product = { id: number; title: string; price: number };

export default function Home() {
  const [items, setItems] = useState<Product[]>([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(r => r.json()).then(setItems);
  }, []);

  if (!items.length) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={s.screen}>
      <Text style={s.h1}>🛒 Cart: {cart}</Text>
      <FlatList
        data={items}
        keyExtractor={p => String(p.id)}
        renderItem={({ item }) => (
          <View style={s.card}>
            <Text numberOfLines={2} style={{ flex: 1 }}>{item.title}</Text>
            <Pressable style={s.btn} onPress={() => setCart(c => c + 1)}>
              <Text style={s.btnText}>{'$' + item.price}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, padding: 16, paddingTop: 60 },
  h1: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12,
          borderRadius: 12, backgroundColor: '#f2f2f7', marginBottom: 8 },
  btn: { backgroundColor: '#6d28d9', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8 },
  btnText: { color: 'white', fontWeight: '700' },
});`, n:'Add a detail screen with Expo Router, then a push notification with expo-notifications.' },
  vid:[['React Native in 100 Seconds','Fireship','~2 min','What it is and why.'],['React Native Tutorial for Beginners','Programming with Mosh OR Net Ninja','~1-2 hr','Fundamentals.'],['React Native Course for Beginners (Expo)','JavaScript Mastery','~3 hr+','Build a full modern app with Expo.']],
  quiz:[['React Native\'s equivalent of a <code>&lt;div&gt;</code>?',['&lt;Div&gt;','&lt;View&gt;','&lt;Box&gt;','&lt;Span&gt;'],1,'View is the basic container.'],
    ['Default flexDirection in React Native?',['row','column','grid','block'],1,'Column by default (web is row).'],
    ['Fastest way to test on your real phone?',['Xcode archive','Expo Go + QR code','TestFlight','Android Studio only'],1,'Expo Go runs your dev build instantly.'],
    ['Best component for long scrolling lists?',['ScrollView with map','FlatList','Text','Modal'],1,'FlatList virtualizes rows for performance.']],
  fc:[['Expo','Framework & tooling that makes React Native easy'],['FlatList','Virtualized, performant list component'],['EAS Build','Expo\'s cloud build service for iOS/Android binaries'],['Expo Router','File-based navigation for React Native'],['OTA update','Push JS updates without a full store release']],
  iv:[['Why choose React Native for a project?','One team and codebase for iOS and Android, reuse of React/JS skills and some web logic, a fast iteration loop with Expo, and a mature ecosystem used by Shopify and Meta. Drop to native modules for platform-specific needs.'],
    ['How do you optimize React Native performance?','FlatList with keys and getItemLayout, memoize expensive components, avoid unnecessary re-renders, optimize images, move heavy work off the JS thread, and profile with the React DevTools/Flipper alternatives.'],
    ['How do you handle platform differences?','Platform.select / .ios.tsx and .android.tsx files, respect platform UX conventions, test on both platforms and real devices.']],
  links:[['React Native docs','https://reactnative.dev/docs/getting-started'],['Expo docs & tutorial','https://docs.expo.dev/tutorial/introduction/']] },

{ id:'web-security', t:'Cybersecurity & Website Security', cat:'Security', e:'🔐', lvl:'Beginner → Intermediate',
  tag:'How websites, stores and apps get hacked, and how to stop it.',
  role:'The "Protect it" layer for everything people touch: your site, store, APIs, logins, AI agents, plus the human side (phishing).',
  eli5:'Hackers look for unlocked windows in websites: a form that accepts sneaky commands, a weak password, or an employee who clicks a fake email. Website security means locking every window, checking who\'s at the door, and keeping an alarm on.',
  pro:'Web application security (AppSec) centers on the <b>OWASP Top 10</b>: broken access control, cryptographic failures, <b>injection</b> (SQL, command, LLM prompt), insecure design, misconfiguration, vulnerable components, authentication failures, integrity failures, logging gaps and SSRF. Core defenses: input validation and parameterized queries, output encoding (stops <b>XSS</b>), <b>CSRF</b> tokens and SameSite cookies, secure session handling, MFA, security headers (CSP, HSTS), a <b>WAF</b>/CDN (Cloudflare), dependency patching, backups, monitoring. Plus the human layer: phishing and social engineering. Career paths: SOC analyst, AppSec engineer, pentester, GRC (CompTIA Security+, CEH, OSCP).',
  why:'Cybersecurity is one of the largest remote job markets, with a persistent talent shortage. Even non-security roles stand out when they can say "I build things securely," and small-business clients pay for site hardening.',
  kw:['cybersecurity','cyber security','web security','website security','application security','appsec','xss','csrf','sql injection','waf','owasp','phishing','secure coding','penetration testing','pentest','vulnerability','vulnerabilities','security+','soc analyst','incident response','csp'],
  jobs:['OWASP Top 10','application security (AppSec)','secure coding','SOC analyst / incident response','CompTIA Security+'],
  res:'Hardened websites and web apps against OWASP Top 10 risks (XSS, injection, broken access control) with security headers, WAF rules, MFA and dependency patching.',
  con:[['Injection (SQL & prompt)','User input executed as code. <code>"\' OR 1=1 --"</code> dumps a table if you concatenate SQL. Fix: parameterized queries. LLM version: untrusted text hijacking an AI agent.'],
    ['XSS (cross-site scripting)','Attacker\'s script runs in your users\' browsers (steals sessions, skims cards). Fix: escape output, Content-Security-Policy, avoid <code>innerHTML</code> with user data.'],
    ['Broken access control','User changes <code>/invoices/101</code> to <code>/102</code> and sees someone else\'s data. The #1 OWASP risk. Fix: check permissions on every request server-side.'],
    ['CSRF & sessions','A malicious site triggers actions using your logged-in cookie. Fix: CSRF tokens, SameSite cookies, HttpOnly + Secure flags.'],
    ['Auth & passwords','Hash with bcrypt/argon2, MFA, rate-limit logins, never roll your own crypto; prefer proven auth providers.'],
    ['Headers, WAF & patching','HSTS, CSP, X-Frame-Options; Cloudflare WAF and bot protection; update plugins/themes/packages (most WordPress hacks are outdated plugins).'],
    ['Human layer','Phishing, fake invoices, "CEO" gift-card texts. Training and MFA stop most real-world breaches.']],
  ex:[['E-commerce','Card skimming (Magecart)','Injected JavaScript on checkout pages steals cards. Defense: hosted checkout (Shopify/Stripe), CSP, script monitoring.'],
    ['Property mgmt','Resident portal IDOR','Changing a URL ID exposes other residents\' ledgers. Server-side access checks prevent it.'],
    ['Small business','WordPress hack','Outdated plugin → defaced site + SEO spam. Updates, WAF, backups and least-privilege admins fix it.'],
    ['AI','Agent prompt injection','A web page tells your browsing AI agent to email out customer data. Treat external text as data and require human approval for sensitive actions.']],
  link:[['network-security','Network side: firewalls, TLS, VPNs, zero trust.'],['html','XSS lives in how HTML renders user input.'],['javascript','Front-end security: CSP, safe DOM handling.'],['api','Auth, rate limits, access control on endpoints.'],['postgresql','Parameterized queries stop SQL injection.'],['shopify','Hosted checkout keeps card data off your servers.'],['llms','Prompt injection is the new injection.'],['dns','Cloudflare WAF & DNS-level protection.']],
  code:{ i:'See the most common bug and its fix side by side (Python + SQLite, runs anywhere). Then check your own site\'s headers.', s:`import sqlite3
db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE users (email TEXT, is_admin INT)")
db.executemany("INSERT INTO users VALUES (?,?)", [("maya@x.com",0), ("boss@x.com",1)])

attacker_input = "nobody@x.com' OR '1'='1"

# ❌ VULNERABLE: user input pasted into SQL
rows = db.execute(f"SELECT * FROM users WHERE email = '{attacker_input}'").fetchall()
print("Vulnerable query returned:", rows)        # leaks EVERY user!

# ✅ SAFE: parameterized query; input is treated as data, never as code
rows = db.execute("SELECT * FROM users WHERE email = ?", (attacker_input,)).fetchall()
print("Safe query returned:", rows)              # []

# ---- XSS: escape before inserting user text into HTML ----
import html
comment = '<img src=x onerror="alert(document.cookie)">'
print(html.escape(comment))   # &lt;img src=x onerror=...&gt;  -> rendered as harmless text

# ---- In Terminal: does your site send security headers? ----
# curl -sI https://yourbrand.com | grep -iE "strict-transport|content-security|x-frame|x-content-type"
# Free graded report: https://securityheaders.com`, n:'Play PortSwigger Web Security Academy\'s free SQLi and XSS labs. Then run your own sites through securityheaders.com and fix one finding.' },
  vid:[['Cyber Security in 7 Minutes','Simplilearn','~7 min','Big-picture intro to the field.'],['OWASP Top 10 explained','Web Dev Simplified OR IBM Technology','~15 min','The web risks every developer must know.'],['SQL Injection / XSS explained','Computerphile','~10 min','Brilliant, intuitive explanations of the classic attacks.'],['CompTIA Security+ full course','Professor Messer','course','Free cert prep that opens SOC/security roles.']],
  quiz:[['Best defense against SQL injection?',['Longer passwords','Parameterized queries','HTTPS','Hiding the database'],1,'Parameters keep input as data, never executable SQL.'],
    ['A user edits a URL from /orders/101 to /orders/102 and sees another customer\'s order. This is…',['XSS','Broken access control (IDOR)','DDoS','Phishing'],1,'Always verify the requester owns the resource, server-side.'],
    ['Content-Security-Policy mainly helps prevent…',['SQL injection','XSS / malicious script injection','Slow pages','DNS hijacking'],1,'CSP restricts which scripts may run.'],
    ['The most common way real breaches start?',['Quantum computers','Phishing / stolen credentials','Solar flares','Too many ads'],1,'That\'s why MFA and training matter so much.']],
  fc:[['XSS','Cross-site scripting: attacker JS runs in victims\' browsers'],['CSRF','Forged requests riding a logged-in user\'s session'],['IDOR','Insecure direct object reference: access by guessing IDs'],['WAF','Web application firewall filtering malicious traffic'],['CSP','Header restricting which scripts/resources a page can load'],['Phishing','Deceptive messages tricking people into giving access']],
  iv:[['How would you secure a small business website?','Managed platform or patched CMS, HTTPS + HSTS, Cloudflare WAF, security headers, MFA on every admin, least-privilege accounts, remove unused plugins, offsite backups with tested restores, uptime/integrity monitoring, and a short incident plan.'],
    ['Explain XSS and how to prevent it.','Untrusted input gets rendered as HTML/JS and runs in other users\' browsers. Prevent with contextual output encoding (frameworks like React escape by default), avoid dangerouslySetInnerHTML/innerHTML with user data, sanitize rich text, and add a strict CSP.'],
    ['How do you keep security in mind while building automations or AI agents?','Least-privilege API scopes, secrets in vaults, verify webhook signatures, validate inputs, treat external content as untrusted (prompt injection), require human approval for sensitive actions, and log everything.']],
  links:[['PortSwigger Web Security Academy (free labs)','https://portswigger.net/web-security'],['OWASP Top 10','https://owasp.org/www-project-top-ten/'],['TryHackMe (gamified training)','https://tryhackme.com/']] }
);
