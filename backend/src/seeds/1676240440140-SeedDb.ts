import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1676240440140 implements MigrationInterface {
  name = 'SeedDb1676240440140';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password 321
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('baz', 'baz@gmail.com', '$2a$10$humacuFkfDUyJmZXqdRvaeQ2sfZZOqn1QLvkEzouBJqBnK7avqwsq')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee,dragons', 1)`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
