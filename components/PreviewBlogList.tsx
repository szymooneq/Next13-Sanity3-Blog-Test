'use client';
import { usePreview } from '@/lib/sanity.preview';
import BlogList from './BlogList';

type Props = {
	query: string;
};

const token =
	'sk5D2oqFgBGoz1O5sPm2uiVoliDsEQg85TN6NUQGFvC5lX0Rs4iQsjGcOXV5VVGTz5u9orHiNA1nRRL6sLJj6ChyjQlzQGfT68aoKh1igkrU17Vg19FihKoxPJQ0gamM7h8WUvYqD296iO3EQq4np1oRgX6QsibyiynZwHKvVwQY9ABxGPX8';

function PreviewBlogList({ query }: Props) {
	const posts = usePreview(token, query);
	// console.log('Loading posts...', posts);
	return <BlogList posts={posts} />;
}

export default PreviewBlogList;
