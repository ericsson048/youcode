'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// Define the props for the CoursePaginationButton component
export type CoursePaginationButtonProps = {
  totalPage: number; // Total number of pages
  page: number;      // Current page number
  baseUrl: string;   // Base URL for pagination
};

export const CoursePaginationButton = (props: CoursePaginationButtonProps) => {
  const router = useRouter();

  // Function to handle page navigation
  const navigateToPage = (newPage: number) => {
    const searchParams = new URLSearchParams({
      page: String(newPage),
    });
    const url = `${props.baseUrl}?${searchParams.toString()}`;
    router.push(url);
  };

  return (
    <div className="flex gap-2">
      {/* Previous page button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigateToPage(props.page - 1)}
        disabled={props.page <= 1} // Disable if on the first page
      >
        Previous
      </Button>

      {/* Next page button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigateToPage(props.page + 1)}
        disabled={props.page >= props.totalPage} // Disable if on the last page
      >
        Next
      </Button>
    </div>
  );
};