.PHONY: build

build:
	docker build . -t eu.gcr.io/steadnet-189709/homepage && docker push eu.gcr.io/steadnet-189709/homepage
