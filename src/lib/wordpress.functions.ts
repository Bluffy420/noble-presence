/**
 * WordPress REST API helpers — plain async functions, no server runtime.
 * The WordPress.com public REST API is used (no auth required for public content).
 * For self-hosted WordPress, swap the base URL to your domain + /wp-json/wp/v2/.
 */

const WP_BASE = "https://nbassociates.net/wp-json/wp/v2";

export type WPPost = {
  id: number;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
};

export type WPPage = WPPost;

export interface WPPostsResult {
  posts: WPPost[];
  totalPages: number;
  total: number;
}

async function wpFetch<T>(path: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${WP_BASE}${path}`);
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`WordPress API error ${res.status}: ${url}`);
  return res.json() as Promise<T>;
}

async function wpFetchWithHeaders(
  path: string,
  params?: Record<string, string>,
): Promise<{ data: WPPost[]; totalPages: number; total: number }> {
  const url = new URL(`${WP_BASE}${path}`);
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`WordPress API error ${res.status}: ${url}`);
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "1", 10);
  const total = parseInt(res.headers.get("X-WP-Total") ?? "0", 10);
  const data = (await res.json()) as WPPost[];
  return { data, totalPages, total };
}

/** Fetch a list of published posts (simple, for home page) */
export async function getPosts(args: { perPage?: number } = {}): Promise<WPPost[]> {
  return wpFetch<WPPost[]>("/posts", {
    per_page: String(args.perPage ?? 10),
    _embed: "wp:featuredmedia",
    status: "publish",
  });
}

/** Fetch a paginated page of posts (for the Blogs page) */
export async function getPostsPaginated(args: {
  page?: number;
  perPage?: number;
} = {}): Promise<WPPostsResult> {
  const { data, totalPages, total } = await wpFetchWithHeaders("/posts", {
    per_page: String(args.perPage ?? 9),
    page: String(args.page ?? 1),
    _embed: "wp:featuredmedia",
    status: "publish",
  });
  return { posts: data, totalPages, total };
}

/** Fetch a single post by slug */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>("/posts", {
    slug,
    _embed: "wp:featuredmedia",
    status: "publish",
  });
  return posts[0] ?? null;
}

/** Fetch a single page by slug */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await wpFetch<WPPage[]>("/pages", {
    slug,
    _embed: "wp:featuredmedia",
    status: "publish",
  });
  return pages[0] ?? null;
}
