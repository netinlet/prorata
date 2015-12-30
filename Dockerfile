FROM nginx:latest
MAINTAINER Doug Bryant <doug@netinlet.com>

COPY app /usr/share/nginx/html
