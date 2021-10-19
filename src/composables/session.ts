import { ref } from 'vue';
import { Session } from 'vue-supabase';
const session = ref<Session | null>();

export function useSession() {
  return {
    session,
  };
}
