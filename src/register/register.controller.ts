import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { RegisterService } from './register.service';
import { RegisterDto } from './register.dto';

@Controller('register')
export class RegisterController {

    constructor(public service: RegisterService) { }

    @Get()
    getStudentList() {
        return this.service.getSavedStudentsList();
    }

    @Get(':id')
    getStudentListById(@Param('id', ParseIntPipe) id: number) {
        return this.service.getStudentListById(id);
    }

    @Post()
    saveStudentsList(@Body() dataList: RegisterDto) {
        return this.service.postStudentsList(dataList);
    }

    @Put(':id')
    updateStudentsList(@Param('id', ParseIntPipe) id: number, @Body() dataList: RegisterDto) {
        return this.service.updateStudentsList(id, dataList);
    }

    @Delete(':id')
    deleteStudentsList(@Param('id', ParseIntPipe) id: number) {
        return this.service.deleteStudentsList(id);
    }
}
