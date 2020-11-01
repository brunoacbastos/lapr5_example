import { Injectable } from '@nestjs/common';
import { Example } from './example.entity';

@Injectable()
export class ExampleService {

    private readonly examples: Example[] = [];

    create(example: Example) {
      this.examples.push(example);
    }
  
    findAll(): Example[] {
      return this.examples;
    }
}
