import mockServer from 'mock-express';
import vehicleApi from '../server/routes/vehicles';

describe("The vehicle api", () => {

    it("should return a list of vehicles at /vehicle", (done) => {

        const app = mockServer();
        app.use('/', vehicleApi);

        let res = app.makeResponse((err, result) => {
            const json = result.json;
            expect(json.vehicles).toBeDefined();
            const vehicle = json.vehicles[0];
            expect(vehicle).toHaveProperty('id');
            expect(vehicle).toHaveProperty('modelYear');
            expect(vehicle).toHaveProperty('url');
            done();
        });

        app.invoke('get', '/api/vehicle', app.makeRequest(), res);

    });

    it("should return a single vehicle when passed a valid id", (done) => {

        const app = mockServer();
        app.use('/', vehicleApi);

        let res = app.makeResponse((err, result) => {
            const vehicle = result.json;
            expect(vehicle).toHaveProperty('description');
            expect(vehicle).toHaveProperty('price');
            done();
        })

        app.invoke('get', '/api/vehicle/xj', app.makeRequest(), res);

    });

    it("should return an error when passed an invalid ID", (done) => {

        const app = mockServer();
        app.use('/', vehicleApi);

        let res = app.makeResponse((err, result) => {
            expect(result.status).toBe(400)
            done();
        })

        app.invoke('get', '/api/vehicle/545667', app.makeRequest(), res);

    })


});