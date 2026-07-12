<div align="center">

# 🌍 EcoSphere ESG Management Platform
### 🌱 Backend - Environmental Sustainability Module

![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-success?style=for-the-badge&logo=springboot)
![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)
![MySQL](https://img.shields.io/badge/MySQL-8-blue?style=for-the-badge&logo=mysql)
![Maven](https://img.shields.io/badge/Maven-Build-red?style=for-the-badge&logo=apachemaven)
![REST API](https://img.shields.io/badge/REST_API-Working-success?style=for-the-badge)

### 🚀 Intelligent ESG Backend for Sustainable Enterprise Management

---

### 👩‍💻 Contributor

**Vidhi Nema**

🎓 B.Tech Information Technology  
Jabalpur Engineering College

📧 **Email:** vidh312@gmail.com

🐙 **GitHub:** https://github.com/Vidhi03826

🌿 **Branch:** `feature/environment-module`

---

*"Building scalable backend solutions for a greener and more sustainable future."* 🌱

</div>

---

# 📖 Overview

EcoSphere ESG Management Platform is a Spring Boot based backend developed during a Hackathon to help organizations monitor, analyze and improve their Environmental, Social and Governance (ESG) performance.

This backend currently focuses on the **Environmental Module**, providing REST APIs for carbon emission management, sustainability dashboards and ESG analytics.

---

# ✨ Features

## ✅ Phase 1 – Backend Foundation

- Spring Boot 3 Setup
- Maven Configuration
- Java 21
- REST API Architecture
- MySQL Configuration
- Hibernate & JPA Configuration
- Git Version Control
- Professional Documentation

---

## ✅ Phase 2 – Environmental Module

### 🌱 Carbon Emission Management

- Add Carbon Record
- View Carbon Records
- Carbon Monitoring API

---

### 📊 ESG Dashboard

Provides

- Total Carbon Emission
- Monthly Emission
- ESG Score
- Trees Required
- Sustainability Status

---

### 🌍 ESG Score API

Returns

- ESG Score
- ESG Grade
- Sustainability Status
- Sustainability Recommendation

---

### 🤖 Sustainability Recommendation API

Provides recommendations like

- Switch to LED Lighting
- Reduce Paper Usage
- Increase Solar Energy Adoption
- Optimize Transportation Routes
- Increase Tree Plantation

---

### 📈 Statistics API

Returns

- Total Employees
- Departments
- Reports Generated
- Carbon Saved

---

# 🏗 Backend Architecture

```
                Frontend
                    │
                    ▼
        Spring Boot REST APIs
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
 Carbon API   Dashboard API   ESG API
                    │
                    ▼
             Business Logic
                    │
                    ▼
                 MySQL
```

---

# 🛠 Tech Stack

| Technology | Version |
|------------|----------|
| Java | 21 |
| Spring Boot | 3.5 |
| Maven | Latest |
| Spring Web | ✅ |
| Spring Data JPA | ✅ |
| Hibernate | ✅ |
| MySQL | 8 |
| IntelliJ IDEA | Community |
| Postman | API Testing |

---

# 📂 Project Structure

```
backend
│
├── src
│   ├── main
│   │
│   ├── java
│   │
│   │   └── com.nexora.backend
│   │        │
│   │        ├── controller
│   │        │      ├── CarbonController
│   │        │      ├── DashboardController
│   │        │      ├── ESGController
│   │        │      ├── RecommendationController
│   │        │      └── StatisticsController
│   │        │
│   │        ├── entity
│   │        │      └── Department
│   │        │
│   │        ├── repository
│   │        │      └── DepartmentRepository
│   │        │
│   │        └── BackendApplication
│   │
│   └── resources
│          └── application.properties
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/mradanshi/EcoSphere_ESG_Management_Platform-Team_Nexora.git
```

---

## Checkout Branch

```bash
git checkout feature/environment-module
```

---

## Move to Backend

```bash
cd backend
```

---

## Create Database

```sql
CREATE DATABASE ecosphere;
```

---

## Configure Database

Update

```
src/main/resources/application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecosphere
spring.datasource.username=root
spring.datasource.password=root123
```

---

## Run Application

### Windows

```bash
mvnw.cmd spring-boot:run
```

### OR

Run

```
BackendApplication.java
```

directly from IntelliJ IDEA.

---

# 🌐 Server

```
http://localhost:8080
```

---

# 📡 REST APIs

## ❤️ Health API

### GET

```
/api/health
```

Returns

```
EcoSphere Backend Running Successfully
```

---

## 🌱 Carbon API

### POST

```
/api/carbon
```

Sample Request

```json
{
  "department":"IT",
  "activity":"Electricity",
  "quantity":120,
  "emission":55
}
```

---

### GET

```
/api/carbon
```

Returns all carbon records.

---

## 📊 Dashboard API

### GET

```
/api/dashboard
```

Returns

- Total Emission
- Monthly Emission
- ESG Score
- Trees Required
- Sustainability Status

---

## 🌍 ESG Score API

### GET

```
/api/esg-score
```

Returns ESG score and sustainability grade.

---

## 🤖 Recommendation API

### GET

```
/api/recommendations
```

Returns AI-inspired sustainability recommendations.

---

## 📈 Statistics API

### GET

```
/api/statistics
```

Returns platform statistics.

---

# 🧪 API Testing

The APIs can be tested using **Postman**.

Base URL

```
http://localhost:8080
```

---

# 📌 Current Status

| Module | Status |
|---------|--------|
| Spring Boot Setup | ✅ |
| REST APIs | ✅ |
| MySQL Configuration | ✅ |
| Carbon Module | ✅ |
| Dashboard API | ✅ |
| ESG Score API | ✅ |
| Recommendation API | ✅ |
| Statistics API | ✅ |
| Entity Layer | ✅ |
| Repository Layer | ✅ |
| Documentation | ✅ |

---

# 🚀 Future Scope

- User Authentication
- JWT Security
- Database CRUD Operations
- Live ESG Score Calculation
- AI-based Carbon Prediction
- PDF Report Generation
- Excel Export
- Docker Deployment
- Cloud Deployment
- Swagger Documentation

---

# 🌟 Highlights

- Clean Spring Boot Architecture
- RESTful API Design
- Modular Code Structure
- MySQL Integration Ready
- Frontend Integration Ready
- Hackathon MVP
- Easily Scalable

---

<div align="center">

## 🌱 EcoSphere ESG Management Platform

**Developed with ❤️ by Team Nexora**

Backend Module by **Vidhi Nema**

⭐ If you found this project useful, consider giving it a star.

</div>