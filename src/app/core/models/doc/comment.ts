import { User } from '../auth/user';
import { Process, Queue } from '../config/process';
import { Token } from '../token/token';
import { Document } from './document';

export interface Comment {
  id: string;
  document: Document;
  token?: Token;
  process: Process;
  queue: Queue;
  value: string;
  user: User;
  created_at: string;
  updated_at: string;
}

export interface QueueComment {
  id: string;
  comment: string;
  created_at: string;
  updated_at: string;
}
