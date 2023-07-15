import { movements } from '../data/movements.js';

const getAllMovements = async (req, res) => {
    try {
        res.json(movements);
    } catch (error) {
        console.error(error);
    }
};

const getAllDeudas = async (req, res) => {
    try {
        res.json(movements.deudas);
    } catch (error) {
        console.error(error);
    }
};

const getAllPrestamos = async (req, res) => {
    try {
        res.json(movements.prestamos);
    } catch (error) {
        console.error(error);
    }
};

export const movementController = {
    getAllMovements,
    getAllDeudas,
    getAllPrestamos
};