FROM mysql:8.0

ENV MYSQL_DATABASE=mysql_db \
  MYSQL_USER=user \
  MYSQL_PASSWORD=userpass \
  MYSQL_ROOT_PASSWORD=rootpass \
  TZ=Asia/Tokyo

COPY ./my.cnf /etc/mysql/conf.d/my.cnf
RUN chmod 644 /etc/mysql/conf.d/my.cnf
