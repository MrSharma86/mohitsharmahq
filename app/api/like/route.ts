import { kv } from "@vercel/kv";

function getLikeKey(slug: string) {
  return `likes:${slug}`;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }

  const likes = (await kv.get<number>(getLikeKey(slug))) ?? 0;

  return Response.json({ likes });
}

export async function POST(req: Request) {
  const { slug } = await req.json();

  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }

  const likes = await kv.incr(getLikeKey(slug));

  return Response.json({ likes });
}