IMAGE_NAME=personal-website

build-image:
	docker build -t $(IMAGE_NAME):latest .

