const SITE_ID = "255750078";

export type WPPage = {
  ID: number;
  title: string;
  slug: string;
  URL: string;
  content: string;
  excerpt: string;
  featured_image: string;
  date: string;
  metadata?: { key: string; value: string }[];
};

export type WPPost = WPPage;

const PAGE_FIELDS = "ID,title,slug,URL,content,excerpt,featured_image,date,metadata";

async function wpGet(path: string, params?: Record<string, string>): Promise<any> {
  const qs = params ? "?" + new URLSearchParams(params).toString() : "";
  const res = await fetch(`https://public-api.wordpress.com${path}${qs}`);
  if (!res.ok) throw new Error(`WordPress ${res.status}`);
  return res.json();
}

export async function getPageBySlug({ data }: { data: { slug: string } }): Promise<WPPage | null> {
  try {
    const r = await wpGet(`/rest/v1.1/sites/${SITE_ID}/posts/slug:${encodeURIComponent(data.slug)}`, {
      fields: PAGE_FIELDS,
    });
    return r as WPPage;
  } catch {
    return null;
  }
}

export async function getPosts({ data }: { data: { number?: number } } = { data: {} }): Promise<WPPost[]> {
  try {
    const r = await wpGet(`/rest/v1.1/sites/${SITE_ID}/posts`, {
      fields: PAGE_FIELDS,
      number: String(data.number ?? 20),
      type: "post",
    });
    return r.posts ?? [];
  } catch {
    return [];
  }
}

export async function getPostBySlug({ data }: { data: { slug: string } }): Promise<WPPost | null> {
  try {
    const r = await wpGet(`/rest/v1.1/sites/${SITE_ID}/posts/slug:${encodeURIComponent(data.slug)}`, {
      fields: PAGE_FIELDS,
    });
    return r as WPPost;
  } catch {
    return null;
  }
}
