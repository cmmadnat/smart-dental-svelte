import 'reflect-metadata';
import { connectionToDatabase } from '$lib/database';

console.log('Connecting to database...');
connectionToDatabase();
