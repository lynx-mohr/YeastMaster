# Claude Code – minnesanteckningar (backup i repot)

Claude Codes minne ligger normalt **utanför** repot, i din användarmapp:

```
C:\Users\<användarnamn>\.claude\projects\<projekt-slug>\memory\
```

Den mappen följer inte med via git. Den här mappen (`docs/claude-memory/`) är en
**versionshanterad kopia** så att anteckningarna följer med projektet mellan datorer.

## Filer

- `MEMORY.md` – indexet som Claude laddar in varje session (en rad per minne)
- `project_*.md` – själva fakta-anteckningarna

## Återställa på en annan dator

1. Klona/pulla repot som vanligt.
2. Ta reda på projekt-slugen: det är projektets absoluta sökväg med `:` och `\`
   utbytt mot `-`. Är projektet på `C:\Users\<namn>\Desktop\YeastMasterWeb\YeastMaster`
   blir slugen `c--Users-<namn>-Desktop-YeastMasterWeb-YeastMaster`.
3. Kopiera filerna härifrån till minnesmappen (PowerShell):

   ```powershell
   $slug = "c--Users-$env:USERNAME-Desktop-YeastMasterWeb-YeastMaster"
   $dest = "$env:USERPROFILE\.claude\projects\$slug\memory"
   New-Item -ItemType Directory -Force $dest | Out-Null
   Copy-Item ".\docs\claude-memory\*.md" $dest -Force
   ```

   (Ligger projektet på en annan sökväg där – justera slugen efter den datorns
   faktiska sökväg.)

## Hålla kopian uppdaterad

När Claude lägger till/ändrar minnen på den här datorn uppdateras originalet i
`.claude\...\memory\`. Kör då omvänt för att uppdatera repo-kopian innan du committar:

```powershell
$slug = "c--Users-$env:USERNAME-Desktop-YeastMasterWeb-YeastMaster"
$src  = "$env:USERPROFILE\.claude\projects\$slug\memory"
Copy-Item "$src\*.md" ".\docs\claude-memory\" -Force
```
