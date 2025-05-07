export default function generateMetadata({ params }: { params: { id: string } }) {
    return (
       <div>{params.id}</div>
    );
}