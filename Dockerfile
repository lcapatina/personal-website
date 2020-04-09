FROM jekyll/jekyll:latest
WORKDIR /app
COPY . ./
RUN jekyll build
EXPOSE 4000
ENTRYPOINT ["jekyll", "serve", "--watch"]