# Note
docker build -t naas .
docker run -d -p 5001:5001 -p 5000:5000 --name naas --rm naas

docker run -d -p 5001:5001 -p 5000:5000 --name naas --rm registry.nexdev.net:5050/nexcel/olympus/naas:LOCAL_1-latest