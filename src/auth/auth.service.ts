import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '../config/config.service';
import { jwtPayload } from './types';

@Injectable()
export class AuthService {
    constructor(
        private configService: ConfigService,
        private jwtService: JwtService,
    ) { }

    async createToken(
        payload: any,
        role: string
    ): Promise<string> {

        const secretKey = {
            USER: this.configService.get('USER_SECRET_KEY')
        }
        const jwtPayload: jwtPayload = {
            payload,
            role,
        };

        const token = await this.jwtService.signAsync(jwtPayload, {
            secret: secretKey[role],
            expiresIn: '1h',
        });

        return token;
    }
}
