FROM nginx:alpine

# Copy the website static files to Nginx html directory
COPY frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
