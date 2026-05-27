import { notFound, permanentRedirect } from "next/navigation";
import { fetchTaskPostBySlug, getPostTaskKey } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";
import { fetchSitePost } from "@/lib/site-connector";

export const revalidate = 3;

async function findTaskForSlug(slug: string) {
  try {
    const direct = await fetchSitePost(slug, { fresh: true });
    if (direct?.post) {
      const directTask = getPostTaskKey(direct.post);
      if (directTask) return directTask;
    }
  } catch {
    // Fall back to task-by-task lookup
  }

  for (const task of SITE_CONFIG.tasks) {
    if (!task.enabled) continue;
    try {
      const match = await fetchTaskPostBySlug(task.key, slug);
      if (match) return task.key;
    } catch {
      // Continue checking other tasks
    }
  }

  return null;
}

export default async function LegacyPostDetailPage({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const resolved = await params;
  const slug = String(resolved.slug || "").trim();
  if (!slug) notFound();

  const task = await findTaskForSlug(slug);
  if (!task) notFound();

  const route = SITE_CONFIG.taskViews[task] || `/${task}`;
  permanentRedirect(`${route}/${slug}`);
}
