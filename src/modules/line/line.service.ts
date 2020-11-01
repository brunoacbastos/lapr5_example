import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Line } from '../../models/line.entity';

@Injectable()
export class LineService {

    private readonly lines: Line[];
    constructor(
        @Inject('LINE_REPOSITORY')
        private lineRepository: Repository<Line>
    ) { }

    add(line: Line): Promise<Line> {
        return this.lineRepository.save(line);
    }

    find(id): Promise<Line> {
        return this.lineRepository.findOne(id);
    }

    findAll(): Promise<Line[]> {
        return this.lineRepository.find();
    }

    modify(id, data: Line) {
        return this.lineRepository.update(id, data);
    }

    remove(id) {
        return this.lineRepository.delete(id);
    }
}
