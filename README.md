# justChatWithMia

A chat project with Model Context Protocol (MCP) integration.

## MCP Access / גישה ל-MCP

**✅ Yes, the MCP is fully accessible! / כן, יש גישה מלאה ל-MCP!**

For detailed information about MCP access, see [MCP-ACCESS.md](MCP-ACCESS.md)

## Quick Start

### Validate MCP Configuration

Using npm:
```bash
npm run validate-mcp
```

Or directly with Node.js:
```bash
node copilot/validate-mcp.js
```

### Check MCP Configuration

```bash
cat copilot/mcp-config.json
```

## Project Structure

```
.
├── copilot/
│   ├── mcp-config.json      # MCP configuration
│   ├── validate-mcp.js      # Validation script
│   └── README.md            # MCP documentation
├── MCP-ACCESS.md            # MCP access information (Hebrew/English)
├── package.json             # Project configuration
└── README.md               # This file
```

## MCP Configuration

The project includes MCP (Model Context Protocol) configuration that allows AI assistants and automation tools to access external services.

Current configuration:
- **Server**: aws-ops
- **Transport**: HTTP
- **Endpoint**: https://mcp-aws.your-company.com/mcp

For more details, see [copilot/README.md](copilot/README.md)

## Scripts

- `npm run validate-mcp` - Validate MCP configuration
- `npm run check-mcp` - Alias for validate-mcp

## Documentation

- [MCP-ACCESS.md](MCP-ACCESS.md) - MCP access verification (Hebrew/English)
- [copilot/README.md](copilot/README.md) - Detailed MCP configuration guide

## License

ISC
