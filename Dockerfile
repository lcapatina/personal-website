FROM ruby:2.4-alpine AS builder
WORKDIR /app

ENV RAILS_ENV production

RUN apk update && apk --update add ruby ruby-irb nodejs ruby-json ruby-rake \
   ruby-bigdecimal ruby-io-console libstdc++ tzdata  \
   libffi-dev libxml2-dev libxslt-dev

# Necessary for some gems which are compiled on bundle install

RUN apk add --virtual build-deps git build-base ruby-dev \
   libc-dev linux-headers && \
   gem install bundler && \
   bundle config build.nokogiri --use-system-libraries

# copy gem dependency file and install dependencies
COPY Gemfile* /app/
RUN bundle install

# copy sources and build app
COPY src/ /app
RUN bundle exec jekyll build -d ./build --verbose

FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
