import 'reflect-metadata';
import { DATA_SOURCE_CONFIG } from './data-source-config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource(DATA_SOURCE_CONFIG);
