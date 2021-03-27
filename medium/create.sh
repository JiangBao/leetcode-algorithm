set -e
echo "add new medium Problem: "
read NAME

mkdir $NAME
echo "# $NAME\n\n## 问题\n\n## 思路\n\n[传送门]()" > "$NAME/README.md"
touch $NAME/index.js

echo "add new problem success"