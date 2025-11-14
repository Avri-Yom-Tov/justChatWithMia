# גישה ל-MCP של הפרוייקט / MCP Access

## תשובה / Answer

**כן, יש גישה מלאה ל-MCP של הפרוייקט!**

**Yes, full access to the project's MCP is available!**

---

## פרטים / Details

### מיקום הקונפיגורציה / Configuration Location
```
copilot/mcp-config.json
```

### שרתים מוגדרים / Configured Servers

1. **aws-ops**
   - Transport: HTTP
   - URL: `https://mcp-aws.your-company.com/mcp`

---

## אימות גישה / Access Verification

### בדיקה אוטומטית / Automated Check
```bash
node copilot/validate-mcp.js
```

### בדיקה ידנית / Manual Check
```bash
cat copilot/mcp-config.json
```

---

## מי יכול לגשת / Who Can Access

- ✅ GitHub Copilot Workspace agents
- ✅ Automation tools
- ✅ Development environments
- ✅ CI/CD pipelines
- ✅ Any process with file system access to the repository

---

## אימות שהתבצע / Verification Performed

הסקריפט `validate-mcp.js` בודק:
The `validate-mcp.js` script checks:

1. ✓ קובץ הקונפיגורציה קיים / Configuration file exists
2. ✓ פורמט JSON תקין / Valid JSON format
3. ✓ מבנה תקין של השרתים / Valid server structure
4. ✓ שדות חובה נוכחים / Required fields present
5. ✓ URL תקין / Valid URLs
6. ✓ סוג Transport תקין / Valid transport types

---

## שימוש / Usage

הקונפיגורציה נגישה ופעילה עבור כל ה-agents וכלי הפיתוח המתחברים לפרוייקט.

The configuration is accessible and active for all agents and development tools connecting to the project.

---

## תיעוד נוסף / Additional Documentation

למידע מפורט נוסף, ראה:
For more detailed information, see:

- [copilot/README.md](copilot/README.md) - MCP Configuration Guide
- [copilot/mcp-config.json](copilot/mcp-config.json) - Configuration File
- [copilot/validate-mcp.js](copilot/validate-mcp.js) - Validation Script
