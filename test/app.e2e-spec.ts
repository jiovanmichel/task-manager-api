import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
    });

    it('/info (GET)', () => {
        return request(app.getHttpServer()).get('/info').expect(200).expect({
            name: 'Api Tasks',
            framework: 'Node with NestJS',
            version: '1.0.0',
            description: 'Api management tasks',
            author: 'Jiovan Michel da Silva',
        });
    });
});
