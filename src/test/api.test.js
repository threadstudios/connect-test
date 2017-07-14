import mockServer from 'mock-express';
import vehicleApi from '../server/routes/vehicles';

describe("The vehicle api", () => {

    const app = mockServer();

    beforeAll(() => {
        app.use('/api', vehicleApi);
    });

    it("should return a list of vehicles at /vehicle", (done) => {

        const res = app.makeResponse((err, result) => {
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

        const res = app.makeResponse((err, result) => {
            const vehicle = result.json;
            expect(vehicle).toHaveProperty('description');
            expect(vehicle).toHaveProperty('price');
            done();
        })

        app.invoke('get', '/api/vehicle/xj', app.makeRequest(), res);

    })


});