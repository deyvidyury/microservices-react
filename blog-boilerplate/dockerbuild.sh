for dir in */; do
  (cd "$dir" && docker build -t deyvidyury/"${dir::-1}" .)
done