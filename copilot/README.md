# MCP Configuration

This directory contains the Model Context Protocol (MCP) configuration for the project.

## Overview

MCP (Model Context Protocol) allows the AI assistant to access external tools and services through a standardized protocol.

## Configuration

The MCP configuration is defined in `mcp-config.json`:

```json
{
    "servers": {
        "aws-ops": {
            "transport": "http",
            "url": "https://mcp-aws.your-company.com/mcp"
        }
    }
}
```

### Configured Servers

- **aws-ops**: AWS operations server
  - Transport: HTTP
  - Endpoint: `https://mcp-aws.your-company.com/mcp`

## Access

The MCP configuration is accessible to:
- GitHub Copilot Workspace agents
- Any automation tools that read the configuration file
- Development tools integrated with MCP

## Usage

To verify MCP access, you can use the validation script:

```bash
node copilot/validate-mcp.js
```

Or check the configuration manually:

```bash
cat copilot/mcp-config.json
```

## Validation

The MCP configuration can be validated using the included validation script which checks:
1. Configuration file exists and is valid JSON
2. Required fields are present
3. Server URLs are properly formatted
4. Transport types are valid

## Notes

- Update the server URL to match your actual MCP endpoint
- Ensure proper authentication is configured for MCP servers
- This configuration is read by GitHub Copilot during agent operations
