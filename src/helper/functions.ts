import { v4 as uuidv4 } from "uuid";
export function generate() {
  const random_session = uuidv4();
  return random_session;
}
