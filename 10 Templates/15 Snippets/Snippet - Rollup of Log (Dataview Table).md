<%* var rollupValue = await tp.system.prompt("What rollup field?", "life_log") %>

```dataview
TABLE
<%* tR += rollupValue %> as "Log"
FROM "20 Periodic/21 Daily Notes"
WHERE <%* tR += rollupValue %>
SORT file.day DESC
```
