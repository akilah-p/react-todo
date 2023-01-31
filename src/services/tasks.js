import { checkError, client } from './client';

export async function getTasks() {
  const response = await client.from('todos').select();

  return checkError(response);
}

export async function createTasks(task, description) {
  const response = await client.from('todos').insert([{ task, description }]).single();

  return checkError(response);
}

export async function toggleTask({ id, isComplete }) {
    const response = await client.from('todos').update({ isComplete: !isComplete }).match({ id }).single();

    return checkError(response);
}