import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Line {

    @ObjectIdColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column()
    terminal_nodes: [string];

    @Column()
    restrictions: [object];
}
