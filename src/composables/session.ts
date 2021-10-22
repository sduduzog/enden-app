import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { AuthSession } from 'vue-supabase';
const session = ref<AuthSession | null>();

export function useSession() {
  const route = useRoute();
  const signedIn = computed(() => session.value);
  const capturingSession = computed(() => route.hash.length > 1);
  const loading = computed(
    () => typeof session.value === 'undefined' || capturingSession.value
  );
  return {
    session,
    loading,
    signedIn,
  };
}
