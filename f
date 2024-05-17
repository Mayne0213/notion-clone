[1mdiff --git a/test.py b/test.py[m
[1mindex 1e20800..7cf2338 100644[m
[1m--- a/test.py[m
[1m+++ b/test.py[m
[36m@@ -3,4 +3,6 @@[m [mstartNode = int(input())[m
 graph = [list() for _ in range(v+1)][m
 for _ in range(e):[m
     u,v,w = map(int,input().split())[m
[31m-    graph[u].append((v,w))[m
\ No newline at end of file[m
[32m+[m[32m    graph[u].append((v,w))[m
[32m+[m
[32m+[m[32mprint("it has beed added newly")[m
\ No newline at end of file[m
