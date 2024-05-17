v,e = map(int,input().split())
startNode = int(input())
graph = [list() for _ in range(v+1)]
for _ in range(e):
    u,v,w = map(int,input().split())
    graph[u].append((v,w))