FROM nginx:alpine

# Remove default Nginx welcome pages
RUN rm -rf /usr/share/nginx/html/*

# Copy website assets and index.html
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]