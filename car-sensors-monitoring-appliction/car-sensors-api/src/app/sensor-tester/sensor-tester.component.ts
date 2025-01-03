import { Component, Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common"; // Add CommonModule for pipes like 'json'

@Component({
  selector: "app-sensor-tester",
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: "./sensor-tester.component.html",
  styleUrls: ["./sensor-tester.component.scss"],
})
export class SensorTesterComponent {
  apiUrl = "http://localhost:3000/api/cars";

  createData = { model: "", year: 0, sensorType: "", sensorValue: 0 };
  retrieveId = "";
  updateData = { id: "", sensorType: "", sensorValue: 0 };
  deleteId = "";
  response: any;

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  displayResponse(data: any) {
    this.response = data;
  }

  createCarSensorData() {
    const data = {
      model: this.createData.model,
      year: this.createData.year,
      sensors: [
        {
          type: this.createData.sensorType,
          value: this.createData.sensorValue,
        },
      ],
    };

    this.http.post(this.apiUrl, data).subscribe(
      (      res: any) => this.displayResponse(res),
      (      err: any) => this.displayResponse(err)
    );
  }

  getAllCarSensors() {
    this.http.get(this.apiUrl).subscribe(
      (      res: any) => this.displayResponse(res),
      (      err: any) => this.displayResponse(err)
    );
  }

  getCarSensorById() {
    this.http.get(`${this.apiUrl}/${this.retrieveId}`).subscribe(
      (      res: any) => this.displayResponse(res),
      (      err: any) => this.displayResponse(err)
    );
  }

  updateCarSensorData() {
    const data = {
      sensors: [
        {
          type: this.updateData.sensorType,
          value: this.updateData.sensorValue,
        },
      ],
    };

    this.http.put(`${this.apiUrl}/${this.updateData.id}`, data).subscribe(
      (      res: any) => this.displayResponse(res),
      (      err: any) => this.displayResponse(err)
    );
  }

  deleteCarSensorData() {
    this.http.delete(`${this.apiUrl}/${this.deleteId}`).subscribe(
      (res: any) => this.displayResponse(res),
      (err: any) => this.displayResponse(err)
    );
  }
}
