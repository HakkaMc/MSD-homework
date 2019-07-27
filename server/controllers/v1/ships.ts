import * as express from 'express';
import { checkSchema, validationResult, Result, ValidationError } from 'express-validator';

const router: express.Router = express.Router();

export interface Ship {
    name: string;
    speed: string;
}

export interface ShipWithId extends Ship {
    id: number;
}

// Simple ID counter
let shipIdCounter = 0;

// Runtime ships store with some mock data
const shipsMock: ShipWithId[] = [
    {
        id: ++shipIdCounter,
        name: 'Ship 1',
        speed: 'Warp 1',
    },
    {
        id: ++shipIdCounter,
        name: 'Ship 2',
        speed: 'Warp 2',
    },
    {
        id: ++shipIdCounter,
        name: 'Ship 3',
        speed: 'Warp 3',
    },
];

// Returns an array of ships
router.get('/', (req: express.Request, res: express.Response): void => {
    res.send(shipsMock);
});

// Save a new ship and returns her details
router.post(
    '/',
    checkSchema({
        name: {
            isString: true,
            isLength: {
                errorMessage: 'Name should be at least 3 chars long',
                options: { min: 3 },
            },
        },
        speed: {
            isString: true,
            isLength: {
                errorMessage: 'Speed should be at least 3 chars long',
                options: { min: 3 },
            },
        },
    }),
    (req: express.Request, res: express.Response): void => {
        const errors: Result = validationResult(req);

        if (!errors.isEmpty()) {
            const errorsArray: ValidationError[] = errors.array();
            res.status(400).send(errorsArray);
        } else {
            const newShip: ShipWithId = {
                id: ++shipIdCounter,
                name: req.body.name,
                speed: req.body.speed,
            };
            shipsMock.push(newShip);

            res.status(201).send(newShip);
        }
    },
);

export default router;
