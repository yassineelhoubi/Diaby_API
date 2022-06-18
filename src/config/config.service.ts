import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export interface EnvConfig {
    [key: string]: string;
}

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig;

    constructor() {
        const file: Buffer | undefined = fs.readFileSync(process.env.NODE_ENV === 'production' ? '.env.prod' : '.env');
        const config = dotenv.parse(file);
        this.envConfig = this.validateInput(config);
    }
    private validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            DATABASE_URI: Joi.string().required(),
            USER_SECRET_KEY: Joi.string().required()
        });

        const { error, value: validatedEnvConfig } =
            envVarsSchema.validate(envConfig);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}