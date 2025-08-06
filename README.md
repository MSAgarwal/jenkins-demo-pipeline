# Jenkins Demo Pipeline 🚀


This repository is part of a **DevOps Internship Task** to demonstrate a basic CI/CD pipeline using **Jenkins** and **Docker**. The goal is to automate the process of building and deploying a Node.js application.

---

## 🧰 Tools Used

- **Jenkins**: Automation server for building CI/CD pipelines.
- **Docker**: Containerization platform to run applications in isolated environments.
- **GitHub**: Version control and source code management.
- **Node.js**: Runtime environment for the demo application.

---

## 📁 Repository Structure

jenkins-demo-pipeline/
├── Jenkinsfile # Declarative pipeline definition
├── app.js # Node.js application file
├── package.json # Node.js dependencies and scripts
└── README.md # Project documentation (you're reading it!)


---

## ⚙️ Jenkins Pipeline Overview

This project uses a **declarative Jenkins pipeline**, defined in the `Jenkinsfile`, with the following stages:

### ✅ Stages Breakdown

1. **Build**
   - Installs project dependencies using `npm install`.

2. **Test**
   - Runs a basic test to check if the app runs properly (You can extend this with a test framework like Jest or Mocha).

3. **Deploy**
   - Uses Docker to build and run the Node.js app in a container (you can extend this to push to DockerHub or deploy to a server).

---

## 🚀 How to Run this Pipeline

### 1. Setup Jenkins

- Install Jenkins locally or use a cloud instance (like Jenkins on Docker or Jenkins on AWS).
- Install necessary plugins: **Docker Pipeline**, **NodeJS**, etc.

### 2. Connect Your GitHub Repo

- Create a new pipeline project in Jenkins.
- Point it to this GitHub repository.

### 3. Enable Triggers

- Configure GitHub Webhooks to trigger the Jenkins pipeline on every commit.

### 4. Run the Pipeline

- Push code to the repository.
- Observe the pipeline stages executing in the Jenkins dashboard.

---

## 🐳 Docker Integration

You can integrate Docker in the deployment stage by adding a `Dockerfile` like below:

```Dockerfile
# Dockerfile
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
EXPOSE 3000
