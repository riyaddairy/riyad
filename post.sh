#!/bin/bash

# Read each line from the file
while IFS= read -r line; do
  # Execute the Git command
  eval "$line"
done < post.txt
