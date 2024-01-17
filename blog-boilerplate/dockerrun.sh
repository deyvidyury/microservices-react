for dir in */; do
  (cd "$dir" && docker run deyvidyury/"${dir::-1}" .)
done