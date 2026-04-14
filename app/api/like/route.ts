const likes: Record<string, number> = {};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") || "";

  return Response.json({
    likes: likes[slug] || 0,
  });
}

export async function POST(req: Request) {
  const { slug } = await req.json();

  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }

  if (!likes[slug]) {
    likes[slug] = 0;
  }

  likes[slug] += 1;

  return Response.json({
    likes: likes[slug],
  });
}