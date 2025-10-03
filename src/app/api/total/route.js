export async function GET() {
    try {
        const response = await fetch('http://localhost:5678/webhook/a79fe01d-81f8-457b-bdb3-4bd746d24eef');
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return Response.json({ total: data.files_analyzed || 0 });
    } catch (error) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}