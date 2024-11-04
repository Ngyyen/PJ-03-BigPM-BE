# Sử dụng MySQL image chính thức
FROM mysql:latest

# Thiết lập biến môi trường cho MySQL
ENV MYSQL_ROOT_PASSWORD=Admin@123
ENV MYSQL_DATABASE=MART_MANAGEMENT
ENV MYSQL_USER=nestjs_user
ENV MYSQL_PASSWORD=nestjs_password

# Expose cổng 3306 để MySQL có thể truy cập từ bên ngoài
EXPOSE 3306

# Khởi động MySQL
CMD ["mysqld"]
