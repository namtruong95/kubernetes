```
./buildDockerImage.sh -v 12.2.0.1 -s
```

## run docker oracle database

```
docker run --name oracle-database \
-p 1521:1521 -p 5500:5500 \
-e ORACLE_PWD=namtt \
-v ~/.oradata:/opt/oracle/oradata \
oracle/database:12.2.0.1-ee
```
