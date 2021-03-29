set -e
echo "add new base Problem: "
read NAME

mkdir $NAME
echo "# $NAME\n\n## 问题\n\n## 思路\n" > "$NAME/README.md"
touch $NAME/index.js

echo "add new problem success"