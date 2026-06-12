import server from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    const host = req.headers.host || 'localhost';
    const url = `https://${host}${req.url}`;

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (Array.isArray(v)) v.forEach((val) => headers.append(k, String(val)));
      else if (v != null) headers.append(k, String(v));
    }

    let reqBody;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      reqBody = await new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', (c) => chunks.push(Buffer.from(c)));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
      });
    }

    const requestInit = {
      method: req.method,
      headers,
      body: reqBody,
    };

    const request = new Request(url, requestInit);
    const response = await server.fetch(request);

    res.statusCode = response.status;
    for (const [k, v] of response.headers) res.setHeader(k, v);

    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } catch (err) {
    console.error('SSR wrapper error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
