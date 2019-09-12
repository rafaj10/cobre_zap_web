# Stage 1 - the build process
FROM node:8.11.3 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./

ARG DOCKER_ENV
RUN echo "Ambiente é: $DOCKER_ENV"
RUN if [ "$DOCKER_ENV" = "staging" ] ; then  yarn build-staging;  \
else  yarn build; \
fi

# Stage 2 - the production environment
FROM nginx:1.15.2-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]