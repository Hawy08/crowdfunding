import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/utils/supabaseClient';

export function useCampaigns() {
  return useQuery(['campaigns'], async () => {
    const { data, error } = await supabase.from('campaigns').select('*').order('id', { ascending: true });
    if (error) throw error;
    return data;
  });
}
