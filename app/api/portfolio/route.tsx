import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    portfolioItems,
    { status: 200}
  )
}

const portfolioItems = [
  {
    image: 'https://images.unsplash.com/photo-1640681857870-cdcd2508bb9b?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Item 1',
    description: 'This is item 1',
    link: 'https://images.unsplash.com/photo-1640681857870-cdcd2508bb9b?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image: 'https://images.unsplash.com/photo-1640681857870-cdcd2508bb9b?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Item 2',
    description: 'This is item 2',
    link: 'https://images.unsplash.com/photo-1640681857870-cdcd2508bb9b?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add more items here
];