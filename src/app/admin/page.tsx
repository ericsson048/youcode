// import { Button, buttonVariants } from '@/components/ui/button'
// import Link from 'next/link'

// function page() {
//   return (
//     <div><Link className={buttonVariants({variant:"outline"})+'p-3'} href='admin/cours'>account</Link></div>
//   )
// }

// export default page

import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from '@/components/layout/layout';
import Link from 'next/link';

export default async function CoursesPage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Courses</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Link href="/admin/courses">Courses</Link>
      </LayoutContent>
    </Layout>
  );
}