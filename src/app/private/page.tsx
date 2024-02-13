import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export default async function PrivatePage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/');
  }

  const { data: data1, error: error1 } = await supabase.functions.invoke(
    'hello-world',
    {
      body: { name: 'name' },
    }
  );

  if (error1 || !data1) {
    console.error(error1);
    return <p>Failed to fetch data from the server</p>;
  }

  return <p>{data1.message}</p>;
}
