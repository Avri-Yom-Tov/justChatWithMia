exports.handler = async (event) => {
  try {
    const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body || {};
    const { id, method, params } = body;

    // ----- initialize -----
    if (method === "initialize") {
      return response({
        id,
        result: {
          protocolVersion: "2024-11-05",
          serverInfo: {
            name: "time-mcp-demo",
            version: "0.1.0"
          },
          capabilities: {
            tools: {
              listChanged: false
            }
          }
        }
      });
    }

    // ----- tools/list -----
    if (method === "tools/list") {
      return response({
        id,
        result: {
          tools: [
            {
              name: "getTime",
              description: "Returns the current UTC time",
              inputSchema: {
                type: "object",
                properties: {},
                additionalProperties: false
              }
            }
          ]
        }
      });
    }

    // ----- tools/call -----
    if (method === "tools/call") {
      const toolName = params?.name;

      if (toolName === "getTime") {
        const now = new Date().toISOString();

        return response({
          id,
          result: {
            content: [
              {
                type: "text",
                text: now
              }
            ]
          }
        });
      }

      return response({
        id,
        error: {
          code: -32601,
          message: `Unknown tool: ${toolName}`
        }
      });
    }

    return response({
      id,
      error: {
        code: -32601,
        message: `Unsupported method: ${method}`
      }
    });

  } catch (err) {
    console.error("Handler error", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32000, message: "Internal server error" }
      })
    };
  }
};

function response(payload) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      ...payload
    })
  };
}
