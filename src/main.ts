import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.setGlobalPrefix('api/v1', {
        exclude: ['/', '/info']
    });

    // prettier-ignore
    const config = new DocumentBuilder()
        .setTitle('Api Tasks')
        .setDescription('Api management tasks')
        .setVersion('1.0')
        .build();

    const swaggerDocument = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, swaggerDocument);
    SwaggerModule.setup('swagger', app, swaggerDocument, {
        jsonDocumentUrl: 'swagger/json'
    });

    await app.listen(8000);
}
bootstrap();
