import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1597823309980
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}

/**
 * Migrations controla versão do banco de dados e as instruções que podem ir.
 * Evita que banco de dados estejam em versões diferentes
 *
 * Linha do tempo
 *
 * Semana 1: Tabela de Agendamentos
 * Semana 2: Tabela de Usuários
 * Semana 3: Novo dev no mesmo projeto (e percebe que na tabela de agendamentos tá errada), edita tabela de agendamentos
 * Semana 4: Tabela de compras
 *
 */
