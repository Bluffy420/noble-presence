import { createServerFn } from "@tanstack/react-start";

const SITE_ID = "255750078";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/wordpress_com";

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

async function wpGet(path: string, params?: Record<string, string>): Promise<any> {
  const apiKey = process.env.LOVABLE_API_KEY;
  const connKey = process.env.WORDPRESS_COM_API_KEY;
  if (!apiKey || !connKey) throw new Error("WordPress connection missing");
  const qs = params ? "?" + new URLSearchParams(params).toString() : "";
  const res = await fetch(`${GATEWAY_URL}${path}${qs}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "X-Connection-Api-Key": connKey,
    },
  });
  if (!res.ok) {
    throw new Error(`WordPress ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

const PAGE_FIELDS = "ID,title,slug,URL,content,excerpt,featured_image,date,metadata";

export const getPageBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => d)
  .handler(async ({ data }): Promise<WPPage | null> => {
    try {
      const r = await wpGet(`/rest/v1.1/sites/${SITE_ID}/posts/slug:${encodeURIComponent(data.slug)}`, {
        fields: PAGE_FIELDS,
      });
      return r as WPPage;
    } catch {
      return null;
    }
  });

export const getPosts = createServerFn({ method: "GET" })
  .inputValidator((d: { number?: number } = {}) => d)
  .handler(async ({ data }): Promise<WPPost[]> => {
    const r = await wpGet(`/rest/v1.1/sites/${SITE_ID}/posts`, {
      fields: PAGE_FIELDS,
      number: String(data.number ?? 20),
      type: "post",
    });
    return r.posts ?? [];
  });

export const getPostBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => d)
  .handler(async ({ data }): Promise<WPPost | null> => {
    try {
      const r = await wpGet(`/rest/v1.1/sites/${SITE_ID}/posts/slug:${encodeURIComponent(data.slug)}`, {
        fields: PAGE_FIELDS,
      });
      return r as WPPost;
    } catch {
      return null;
    }
  });
