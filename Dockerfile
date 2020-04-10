FROM jekyll/jekyll:latest
COPY --chown=jekyll:jekyll . ./
RUN jekyll build
EXPOSE 4000
ENTRYPOINT ["jekyll", "serve", "--watch"]
