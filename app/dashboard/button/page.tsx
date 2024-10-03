import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className='grid gap-2 grid-cols-5'>
      <Button>default</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button disabled>disabled</Button>
    </div>
  );
}
