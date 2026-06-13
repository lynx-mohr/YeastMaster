---
name: project-split-canvas-yaxis
description: Split canvas sticky Y-axis implementation in The Profiler chart — completed and tuned
metadata:
  type: project
---

Split canvas sticky Y-axis for The Profiler is complete and deployed.

**Why:** On mobile, scrolling the chart horizontally caused the Y-axis to scroll off-screen. User wanted Y-axis to stay fixed while only the X data scrolls.

**How to apply:** If revisiting this feature, the key files and values are below.

## Final structure
- `#lab-yaxis-sidebar`: 75px wide flex-shrink-0, contains `<canvas id="lab-chart-yaxis">`
- `#chart-scroll-area`: flex:1, overflow-x: auto
- `#chart-inner`: min-width: 525px (total with sidebar = 600px)
- `#view-lab .chart-container`: display: flex; overflow: hidden

## Key Chart.js settings
- Main chart Y-axis: `afterFit: scale => { scale.width = 0 }` — keeps gridlines but takes zero space
- Sidebar chart Y-axis: `afterFit(scale) { scale.width = 68; }` — forces proper spacing between title and tick labels (without this, "Temp (°C)" overlaps with numbers)
- Sidebar chart title: `display: true, text: \`Temp (°${currentTempUnit})\``
- `useYAxisSidebar = !isChartFullscreen` — controls which mode to use

## Fullscreen mode
- CSS hides `#lab-yaxis-sidebar` in fullscreen
- `initLabChart()` re-creates both charts with `useYAxisSidebar` flag
- Entering fullscreen: main chart gets full Y-axis back
- Exiting fullscreen: sidebar restored if chart was visible

## Tuning history
- 55px sidebar → clipped numbers
- 62px → numbers fit but title overlapped
- 75px → correct width, but title still overlapped until `afterFit` width was forced to 68px
