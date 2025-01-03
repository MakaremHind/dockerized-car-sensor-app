# Car Sensors Monitoring Application

This project is a multi-container application for monitoring car sensors, built with Docker Compose. It includes a backend, frontend, and MongoDB database.

---

## **Architecture**
- **Backend:** Node.js application to handle data processing and API requests.
- **Frontend:** Angular-based interface to display sensor data.
- **Database:** MongoDB to store and manage data.

---

## **Prerequisites**
1. Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).
2. Ensure ports 3000 and 4200 are available on your machine.

---

## **Configuration and Setup**

### 1. Clone the Repository:
```bash
git clone https://github.com/MakaremHind/dockerized-car-sensor-app
cd car-sensors-monitoring-appliction
```

### 2. Environment Variables (Optional):
Ensure the following variables are set in `.env` if required:
```
PORT=3000
MONGODB_URI=mongodb://mongo:27017/carsensors
```

### 3. Build and Start the Application:
```bash
docker-compose up --build
```

### 4. Verify the Application:
- **Backend API:** [http://localhost:3000](http://localhost:3000)
- **Frontend:** [http://localhost:4200](http://localhost:4200)

### 5. Check Logs and Running Containers:
```bash
docker-compose logs
docker ps
```

### 6. Stop the Application:
```bash
docker-compose down
```

---

## **Project Structure**
```
.
├── car-sensors-monitoring-app       # Backend service
├── car-sensors-api                  # Frontend service
├── docker-compose.yml               # Docker Compose configuration
├── .env                             # Environment variables (optional)
└── README.md                        # Project documentation
```

---

## **Additional Notes**
- If MongoDB fails to start, ensure the image is pulled manually:
```bash
docker pull mongo:latest
```
- Logs can be viewed using:
```bash
docker-compose logs -f
```

## **Contributors**
- Hind MAKAREM - Initial setup and development.

Feel free to fork this repository and experiment with it as a practice project for multi-container Docker applications!
