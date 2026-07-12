# 🌱 EcoSphere ESG Management Platform - Backend

> Spring Boot backend for the Environmental module of the EcoSphere ESG Management Platform.

---

## 👩‍💻 Contributor

**Vidhi Nema**

Branch: `feature/environment-module`

---

## 🚀 Features Implemented

- ✅ Spring Boot Backend Setup
- ✅ Maven Configuration
- ✅ MySQL Integration
- ✅ REST API Structure
- ✅ Carbon Emission API
- ✅ Health Check API
- ✅ Department Entity
- ✅ Department Repository
- ✅ JPA Configuration

---

## 🛠 Tech Stack

- Java 21
- Spring Boot 3.5
- Spring Data JPA
- MySQL
- Maven
- IntelliJ IDEA
- Postman

---

# 📂 Project Structure

```
backend
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.nexora.backend
│   │   │       ├── controller
│   │   │       ├── entity
│   │   │       ├── repository
│   │   │       └── BackendApplication.java
│   │   │
│   │   └── resources
│   │       └── application.properties
│   │
│   └── test
│
├── pom.xml
└── README.md
```

---

# ⚙ Prerequisites

Before running the project, make sure you have:

- Java 21
- Maven
- MySQL 8+
- IntelliJ IDEA / VS Code
- Postman (optional)

---

# 🗄 Database Configuration

Create a MySQL database

```sql
CREATE DATABASE ecosphere;
```

Update the database credentials in

```
src/main/resources/application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecosphere
spring.datasource.username=root
spring.datasource.password=root123
```

---

# ▶️ Running the Project

### Clone Repository

```bash
git clone https://github.com/mradanshi/EcoSphere_ESG_Management_Platform-Team_Nexora.git
```

### Go to Backend

```bash
cd EcoSphere_ESG_Management_Platform-Team_Nexora/backend
```

### Run using Maven Wrapper

Windows

```bash
mvnw.cmd spring-boot:run
```

Linux / Mac

```bash
./mvnw spring-boot:run
```

OR

Run `BackendApplication.java` directly from IntelliJ.

---

# 🌐 Server

Backend runs on

```
http://localhost:8080
```

---

# 📡 Available APIs

## Health Check

### GET

```
http://localhost:8080/api/health
```

Response

```
EcoSphere Backend Running Successfully
```

---

## Get Carbon Records

### GET

```
http://localhost:8080/api/carbon
```

---

## Add Carbon Record

### POST

```
http://localhost:8080/api/carbon
```

Request

```json
{
    "department":"IT",
    "activity":"Electricity",
    "quantity":120,
    "emission":55
}
```

Response

```
Carbon Record Added Successfully
```

---

# 🧪 Testing

Use Postman to test all REST APIs.

---

# 🔮 Future Enhancements

- Store Carbon Records in MySQL
- ESG Score Calculation
- Dashboard Analytics
- Carbon Footprint Reports
- Authentication & Authorization
- Frontend Integration
- AI-based Sustainability Recommendations

---

# 📌 Status

- ✅ Spring Boot Setup Completed
- ✅ Backend APIs Working
- ✅ MySQL Connected
- 🚧 Additional features under development

---

## 📎 Repository

GitHub Repository

https://github.com/mradanshi/EcoSphere_ESG_Management_Platform-Team_Nexora

Feature Branch

```
feature/environment-module
```

---

⭐ Developed as part of the **EcoSphere ESG Management Platform** Hackathon Project.