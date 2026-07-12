<div align="center">

# 🌍 EcoSphere ESG Management Platform
### 🌱 Backend - Environmental Sustainability Module

<img src="https://img.shields.io/badge/Spring_Boot-3.5-success?style=for-the-badge&logo=springboot">
<img src="https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk">
<img src="https://img.shields.io/badge/MySQL-8-blue?style=for-the-badge&logo=mysql">
<img src="https://img.shields.io/badge/Maven-Build-red?style=for-the-badge&logo=apachemaven">
<img src="https://img.shields.io/badge/REST_API-Working-success?style=for-the-badge">

**An intelligent ESG (Environmental, Social & Governance) backend built using Spring Boot to monitor carbon emissions, calculate sustainability metrics, and provide real-time environmental insights.**

---

👩‍💻 **Contributor:** Vidhi Nema

🌿 **Branch:** `feature/environment-module`

</div>

---

# 📖 Overview

The Environmental Module acts as the backend engine for the EcoSphere ESG Management Platform.

It provides REST APIs for:

- Carbon Emission Monitoring
- ESG Score Tracking
- Sustainability Dashboard
- Environmental Statistics
- AI-inspired Sustainability Recommendations

Designed during a Hackathon using **Spring Boot**, **Java**, **MySQL**, and **REST APIs**.

---

# 🚀 Features Implemented

## ✅ Phase 1 - Backend Foundation

- Spring Boot Project Setup
- Maven Configuration
- Java 21 Configuration
- MySQL Integration
- Hibernate/JPA Configuration
- REST API Architecture
- Backend Documentation
- GitHub Version Control

---

## ✅ Phase 2 - Environmental Module APIs

### 🌱 Carbon Management

- Add Carbon Emission Record
- View Carbon Emission Records
- Carbon Monitoring API

---

### 📊 ESG Dashboard

Provides

- Total Emission
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
- Recommendation

---

### 🤖 Sustainability Recommendation API

Provides intelligent recommendations such as

- Switch to LED Lighting
- Reduce Paper Usage
- Solar Energy Adoption
- Route Optimization
- Tree Plantation

---

### 📈 Statistics API

Returns

- Total Employees
- Departments
- Reports Generated
- Carbon Saved

---

# 🛠 Tech Stack

| Technology | Version |
|------------|----------|
| Java | 21 |
| Spring Boot | 3.5 |
| Maven | Latest |
| Spring Web | ✔ |
| Spring Data JPA | ✔ |
| MySQL | 8 |
| Hibernate | ✔ |
| IntelliJ IDEA | Community |
| Postman | API Testing |

---

# 📂 Project Structure

```
backend
│
├── src
│   ├── main
│   │   ├── java
│   │   │
│   │   │── com.nexora.backend
│   │   │     │
│   │   │     ├── controller
│   │   │     │      ├── CarbonController
│   │   │     │      ├── DashboardController
│   │   │     │      ├── ESGController
│   │   │     │      ├── RecommendationController
│   │   │     │      └── StatisticsController
│   │   │     │
│   │   │     ├── entity
│   │   │     │      └── Department
│   │   │     │
│   │   │     ├── repository
│   │   │     │      └── DepartmentRepository
│   │   │     │
│   │   │     └── BackendApplication
│   │   │
│   │   └── resources
│   │          └── application.properties
│   │
│   └── test
│
├── pom.xml
├── mvnw
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/mradanshi/EcoSphere_ESG_Management_Platform-Team_Nexora.git
```

---

## 2️⃣ Switch Branch

```bash
git checkout feature/environment-module
```

---

## 3️⃣ Go to Backend

```bash
cd backend
```

---

## 4️⃣ Configure Database

Create database

```sql
CREATE DATABASE ecosphere;
```

Update

```
src/main/resources/application.properties
```

```
spring.datasource.username=root
spring.datasource.password=root123
```

---

## 5️⃣ Run Application

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

---

## ❤️ Health Check

### GET

```
/api/health
```

Response

```
EcoSphere Backend Running Successfully
```

---

## 🌱 Carbon API

### Add Carbon Record

POST

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

### View Carbon Records

GET

```
/api/carbon
```

---

## 📊 Dashboard API

GET

```
/api/dashboard
```

Returns

```json
{
  "totalEmission":550,
  "monthlyEmission":125,
  "esgScore":82,
  "treesRequired":28,
  "status":"GOOD"
}
```

---

## 🌍 ESG Score API

GET

```
/api/esg-score
```

---

## 🤖 Recommendation API

GET

```
/api/recommendations
```

---

## 📈 Statistics API

GET

```
/api/statistics
```

---

# 🧪 API Testing

Use **Postman** for testing all APIs.

Server URL

```
http://localhost:8080
```

---

# 🎯 Current Module Status

| Feature | Status |
|---------|--------|
| Spring Boot Setup | ✅ |
| MySQL Configuration | ✅ |
| REST APIs | ✅ |
| Carbon API | ✅ |
| Dashboard API | ✅ |
| ESG Score API | ✅ |
| Recommendation API | ✅ |
| Statistics API | ✅ |
| Repository Layer | ✅ |
| Entity Layer | ✅ |
| Documentation | ✅ |

---

# 🚀 Future Enhancements

- Authentication & Authorization
- JWT Security
- Live Database CRUD
- Dynamic ESG Score Calculation
- Carbon Prediction using AI
- Report Generation (PDF/Excel)
- Docker Deployment
- Cloud Deployment
- Swagger Documentation

---

# 🌟 Highlights

✔ Modular Spring Boot Architecture

✔ RESTful API Design

✔ MySQL Integration Ready

✔ Scalable Backend Structure

✔ Clean Project Organization

✔ Hackathon MVP Ready

✔ Easy Frontend Integration

---

<div align="center">

## 🌱 Building Smarter & Greener Enterprises through ESG Technology.

**Made with ❤️ by Team Nexora**

</div>