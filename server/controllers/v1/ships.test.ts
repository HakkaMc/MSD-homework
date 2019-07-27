import * as supertest from 'supertest';

import { server } from '../../server';
import { Ship } from './ships';

describe('ships controller', (): void => {
    describe('GET', (): void => {
        it('positive scenario', (done): void => {
            supertest
                .agent(server)
                .get('/v1/ships')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res): void => {
                    expect(err).toBeNull();
                    expect(res.body[0].id).toEqual(1);

                    // console.log(res.body)
                    expect(res.body.length).toEqual(3);

                    done();
                });
        });
    });

    describe('POST', (): void => {
        it('positive scenario', (done): void => {
            const ship: Ship = {
                name: 'Ship name',
                speed: 'Ship speed',
            };

            supertest
                .agent(server)
                .post('/v1/ships')
                .send(ship)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .end((err, res): void => {
                    expect(err).toBeNull();
                    expect(res.body.id).not.toBeUndefined();
                    expect(res.body.name).toEqual(ship.name);
                    expect(res.body.speed).toEqual(ship.speed);
                    done();
                });
        });

        it('negative scenario - invalid name', (done): void => {
            const ship: Ship = {
                name: undefined,
                speed: 'Ship speed',
            };

            supertest
                .agent(server)
                .post('/v1/ships')
                .send(ship)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400)
                .end((err, res): void => {
                    expect(res.body[0].param).toEqual('name');
                    done();
                });
        });

        it('negative scenario - invalid speed', (done): void => {
            const ship: Ship = {
                name: 'Ship name',
                speed: undefined,
            };

            supertest
                .agent(server)
                .post('/v1/ships')
                .send(ship)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400)
                .end((err, res): void => {
                    expect(res.body[0].param).toEqual('speed');
                    done();
                });
        });
    });
});
