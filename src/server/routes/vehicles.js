import { Router } from 'express';
import vehicles from 'technical-test/server_api/vehicles';

const api = new Router();

api.use((req, res, next) => {
    req.store = vehicles;
    return next();
});

api.get('/api/vehicle', (req, res) => {
    return res.json(vehicles);
});

api.get('/api/vehicle/:id', (req, res) => {
    // clean the id
    let id = req.params.id.replace(/[^\w\s\-]*/, "");
    try {
        let vehicle = require(`technical-test/server_api/vehicle_${id}`);
        return res.json(vehicle);
    } catch(e) {
        return res.status(400).json({
            error: 'Vehicle could not be found'
        })
    }
});

export default api;