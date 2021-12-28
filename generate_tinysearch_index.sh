#!/usr/bin/env bash

set -euxo pipefail

mkdir -p tmp

ls -1 _pages/ | \
xargs -I {} bash -c "pandoc _pages/{} --to plain | pandoc --from html --to plain | jq -R '[inputs] | add' > tmp/{}"

pushd tmp
jq -n 'reduce inputs as $s (.; . + [{title: input_filename | gsub("_"; " ") | sub("./(?<val>.*).md"; "\(.val)"), url: input_filename | gsub("_"; "-") | sub("./(?<val>.*).md"; "/products/\(.val)"), body: [input_filename | gsub("_"; " ") | sub("./(?<val>.*).md"; "\(.val)"), " ", $s] | add}])' ./* > tinysearch.json
popd

tinysearch tmp/tinysearch.json
