FROM nginx:alpine

# Copy static website files to Nginx default html directory
COPY . /usr/share/nginx/html

# Exclude unneeded git and doc files in nginx if needed
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]