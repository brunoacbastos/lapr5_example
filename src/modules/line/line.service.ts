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

    add(line: Line) {
        this.lines.push(line);
        return line;
    }

    find(id): Line {
        return this.lines[0];
    }

    findAll(): Line[] {
        return this.lines;
    }

    modify(id, data): Line {
        return this.lines[0];
    }

    remove(id): Line {
        return this.lines[0];
    }
}
