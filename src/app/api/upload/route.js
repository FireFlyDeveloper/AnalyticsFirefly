import { NextResponse } from "next/server";
import { Readable } from "node:stream";
import readline from "node:readline";

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const fileName = file.name || "";
    const ext = fileName.split(".").pop()?.toLowerCase();

    if (!["xlsx", "xls"].includes(ext)) {
      return NextResponse.json(
        { error: "Only .xlsx and .xls files are allowed" },
        { status: 400 },
      );
    }

    const formData = new FormData();
    formData.append("file", file, fileName || "upload.xlsx");
    formData.append("fileName", fileName || "upload.xlsx");
    formData.append(
      "fileType",
      file.type ||
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    );

    const response = await fetch(
      "http://localhost:5678/webhook/3287b7e2-fae5-45cc-98b4-28ec3242412e",
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Upload failed: ${response.status} ${response.statusText}` },
        { status: 500 },
      );
    }

    if (!response.body) {
      return NextResponse.json({ error: "No response body" }, { status: 500 });
    }

    const nodeStream = Readable.fromWeb(response.body);
    const rl = readline.createInterface({
      input: nodeStream,
      crlfDelay: Infinity,
    });

    const stream = new Readable({ read() {} });

    (async () => {
      for await (const line of rl) {
        try {
          const data = JSON.parse(line);

          if (data?.type === "item") {
            const filtered = {
              content: data.content,
              node:
                data.metadata?.nodeName === "AI Agent"
                  ? "AI"
                  : data.metadata?.nodeName,
            };
            stream.push(JSON.stringify(filtered) + "\n");
          }
        } catch {
          // skip malformed lines silently
        }
      }
      stream.push(null);
    })();

    return new Response(stream, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
