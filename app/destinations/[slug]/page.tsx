import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleDestinationRedirect({ params }: PageProps) {
  const resolved = await params;
  redirect(`/locations/${resolved.slug}`);
}
