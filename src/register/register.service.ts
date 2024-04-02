import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RegisterDto } from './register.dto';
import { registerEntity } from './register.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(registerEntity)
        public registerRepository: Repository<registerEntity>
    ) { }

    getSavedStudentsList() {
        return this.registerRepository.find();
    }

    getStudentListById(id: number) {
        return this.registerRepository.findOne({ where: { id } });
    }

    postStudentsList(dataList: RegisterDto) {
        return this.registerRepository.save(dataList);
    }

    updateStudentsList(id: number, dataList: RegisterDto) {
        return this.registerRepository.update(id, dataList)
    }

    deleteStudentsList(id: number) {
        return this.registerRepository.delete(id);
    }
}
