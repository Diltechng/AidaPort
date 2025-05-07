export function generateMetadata({ params }: { params: { id: string } }) {
    return {
        title: `Blog Post ${params.id}`,
        description: "This is a blog post",
    };
}