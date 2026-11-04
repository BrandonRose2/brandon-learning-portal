FROM caddy:2-alpine
COPY index.html app.js d1.js d2.js d3.js d4.js d5.js d6.js /srv/
CMD ["sh", "-c", "caddy file-server --root /srv --listen :${PORT:-8080}"]
