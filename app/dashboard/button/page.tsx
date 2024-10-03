'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Loader2, Mail } from 'lucide-react';

export default function Page() {
  return (
    <div className='grid gap-2 grid-cols-3'>
      <Button>default</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => alert('clicked')}>click me</Button>
      <Button variant={'success'}>success</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button variant='outline' size={'icon'}>
        <ChevronRight className='h-4 w-4' />
      </Button>
      <Button>
        <Mail className='mr-2 h-4 w-4' /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
        Please wait
      </Button>
    </div>
  );
}
