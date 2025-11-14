#!/usr/bin/env node

/**
 * MCP Configuration Validator
 * 
 * This script validates the MCP (Model Context Protocol) configuration
 * to ensure it's properly formatted and accessible.
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, 'mcp-config.json');

// ANSI color codes for terminal output
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateMCPConfig() {
    log('\n🔍 Validating MCP Configuration...\n', 'blue');
    
    let hasErrors = false;

    // Check if config file exists
    if (!fs.existsSync(CONFIG_PATH)) {
        log('❌ Error: mcp-config.json not found!', 'red');
        log(`   Expected location: ${CONFIG_PATH}`, 'red');
        return false;
    }
    log('✓ Configuration file exists', 'green');

    // Read and parse JSON
    let config;
    try {
        const content = fs.readFileSync(CONFIG_PATH, 'utf8');
        config = JSON.parse(content);
        log('✓ Configuration is valid JSON', 'green');
    } catch (error) {
        log(`❌ Error parsing JSON: ${error.message}`, 'red');
        return false;
    }

    // Validate structure
    if (!config.servers) {
        log('❌ Error: "servers" field is missing', 'red');
        hasErrors = true;
    } else {
        log('✓ "servers" field is present', 'green');
        
        const serverCount = Object.keys(config.servers).length;
        log(`  Found ${serverCount} server(s) configured`, 'blue');

        // Validate each server
        for (const [serverName, serverConfig] of Object.entries(config.servers)) {
            log(`\n  Validating server: "${serverName}"`, 'blue');
            
            if (!serverConfig.transport) {
                log(`    ❌ Missing "transport" field`, 'red');
                hasErrors = true;
            } else {
                const validTransports = ['http', 'https', 'stdio', 'websocket'];
                if (validTransports.includes(serverConfig.transport.toLowerCase())) {
                    log(`    ✓ Transport: ${serverConfig.transport}`, 'green');
                } else {
                    log(`    ⚠ Warning: Unusual transport type: ${serverConfig.transport}`, 'yellow');
                }
            }

            if (!serverConfig.url && serverConfig.transport !== 'stdio') {
                log(`    ❌ Missing "url" field`, 'red');
                hasErrors = true;
            } else if (serverConfig.url) {
                try {
                    new URL(serverConfig.url);
                    log(`    ✓ URL: ${serverConfig.url}`, 'green');
                } catch (error) {
                    log(`    ❌ Invalid URL format: ${serverConfig.url}`, 'red');
                    hasErrors = true;
                }
            }
        }
    }

    // Summary
    log('\n' + '='.repeat(50), 'blue');
    if (hasErrors) {
        log('❌ Validation completed with errors', 'red');
        return false;
    } else {
        log('✅ MCP Configuration is valid and accessible!', 'green');
        log('\nThe MCP configuration can be accessed by:', 'blue');
        log('  • GitHub Copilot agents', 'blue');
        log('  • Automation tools', 'blue');
        log('  • Development environments', 'blue');
        return true;
    }
}

// Run validation
const isValid = validateMCPConfig();
process.exit(isValid ? 0 : 1);
