```dataview
table dateformat(file.mtime, "yyyy-MM-dd") as "Last Modified"
from "یادداشت‌‌ها"
sort file.mtime desc
limit 10
```
