import { db } from '@/lib/db';

export const runtime = 'edge';

export async function GET() {
  try {
    const data = await db.query.views.findMany();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
