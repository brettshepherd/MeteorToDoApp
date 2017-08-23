import { Mongo } from 'meteor/mongo';

export const TasksDB = new Mongo.Collection('tasksDB');
