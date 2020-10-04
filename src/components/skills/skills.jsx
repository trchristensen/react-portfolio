import React from "react";
import { useRecoilValue } from 'recoil';
import { themeState } from '../../atoms/themeState';

const currentYear = new Date().getFullYear();
const stackList = [
  {
    title: "HTML, CSS, Javascript",
    description: "Web Development",
    experience: 2012,
    icon:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSLlvaLnirZfMV8xOV8iIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyI+PGcgaWQ9IuW9oueKtl8xIj48Zz48cG9seWdvbiBwb2ludHM9IjkxLjgwOSwxMTcuMDcgMTIyLjU5Myw0NTAuNTc5IDI1NS45OTksNDg2LjUwMSAgICAgIDM4OS40MDIsNDUwLjU3OSA0MjAuMTkxLDExNy4wNyAgICAiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMxNzU4QTc7Ii8+PC9nPjwvZz48L2c+PGcgaWQ9IuW9oueKtl8xXzE4XyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7Ij48ZyBpZD0i5b2i54q2XzFfMV8iPjxnPjxwb2x5Z29uIHBvaW50cz0iMjU1Ljk5NywxNDQuMDg0IDI1NS45OTcsNDU3Ljg1MiAyNTYuMjk4LDQ1Ny45MzMgICAgICAzNjQuMjU3LDQyOC44NjMgMzg5LjE3NSwxNDQuMDg0ICAgICIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzM3OUFENjsiLz48L2c+PC9nPjwvZz48ZyBpZD0i5b2i54q2XzFfMTdfIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiPjxnIGlkPSLlvaLnirZfMV8yXyI+PGc+PHBvbHlnb24gcG9pbnRzPSIyNTUuNjIzLDM3Mi41MzcgMjU1LjU1MSwzNzIuNTU4IDIxMC45ODEsMzYxLjE5NyAgICAgIDIwOC4yOCwzMjguNDc5IDE2Ni44NjEsMzI4LjQ3OSAxNzIuMjYzLDM5MS42NDQgMjU2LjAwMSw0MTYuNjM3IDI1Ni4wMDEsMzcyLjQzICAgICIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0U4RThFNzsiLz48L2c+PC9nPjwvZz48ZyBpZD0i5b2i54q2XzFfMTZfIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiPjxnIGlkPSLlvaLnirZfMV8zXyI+PGc+PHBvbHlnb24gcG9pbnRzPSIyNTYuMDAxLDI2Ni43ODIgMjU2LjAwMSwzMDYuOTExIDI1Ni4xMiwzMDYuOTExICAgICAgMzA1LjYyMiwzMDYuOTY1IDMwMi40NDUsMzU5LjQxOSAyNTYuMTIsMzcyLjQ3IDI1Ni4wMDEsMzcyLjUwNCAyNTYuMDAxLDQxNi41OTEgMjU2LjEyLDQxNi42MjcgMjU2LjE1Myw0MTYuNjM3ICAgICAgMzQwLjExNCwzOTIuMTE0IDM1MS4wMDcsMjY2Ljc4MiAgICAiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGQkZCRkE7Ii8+PC9nPjwvZz48L2c+PGcgaWQ9IuW9oueKtl8xXzE1XyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7Ij48ZyBpZD0i5b2i54q2XzFfNF8iPjxnPjxwb2x5Z29uIHBvaW50cz0iMTYxLjAwMiwyNjYuNzgyIDE2NC4xNTQsMzA2Ljg2OSAxNjQuMTU5LDMwNi45MzEgICAgICAyNTYuMDAxLDMwNi45MzcgMjU2LjAwMSwyNjYuNzgyICAgICIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0U1RTRFMjsiLz48L2c+PC9nPjwvZz48ZyBpZD0i5b2i54q2XzFfMTRfIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiPjxnIGlkPSLlvaLnirZfMV81XyI+PGc+PHBvbHlnb24gcG9pbnRzPSIxNjEuMDA4LDI2Ni43ODIgMjU1Ljc2OCwyNjYuNzgyIDI1Ni4wMDEsMjY2LjY4MSAgICAgIDI1Ni4wMDEsMjI2LjYxNyAgICAiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNFRUVFRUU7Ii8+PC9nPjwvZz48L2c+PGcgaWQ9IuW9oueKtl8xXzEzXyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7Ij48ZyBpZD0i5b2i54q2XzFfNl8iPjxnPjxwb2x5Z29uIHBvaW50cz0iMjYxLjU1MywyMjQuNjY3IDI1Ni4wMDEsMjI2Ljk5MiAyNTYuMDAxLDI2Ni43NzMgICAgICAzNTMuOTU1LDIyNC42NjcgICAgIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGOyIvPjwvZz48L2c+PC9nPjxnIGlkPSLlvaLnirZfMV8xMl8iIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyI+PGcgaWQ9IuW9oueKtl8xXzdfIj48Zz48cG9seWdvbiBwb2ludHM9IjE1Mi4xOTYsMTg0LjUxNSAxNTcuMTYsMjI0LjY2NyAyNTYuMDAxLDIyNC42NjcgICAgICAyNTYuMDAxLDE4NC41MTUgICAgIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRTdFN0U2OyIvPjwvZz48L2c+PC9nPjxnIGlkPSLlvaLnirZfMV8xMV8iIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyI+PGcgaWQ9IuW9oueKtl8xXzhfIj48Zz48cGF0aCBkPSJNMjU2LjAwMSwyMjQuNjY3bDEwMS44NDItNDAuMTUySDI1Ni4wMDFWMjI0LjY2N3ogICAgICBNMjU2LjAyOCwyMjQuNjY3aDk3Ljc2bDQuMDU2LTQwLjE1MkwyNTYuMDI4LDIyNC42Njd6IiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRjhGOEY3OyIvPjwvZz48L2c+PC9nPjxnIGlkPSLlvaLnirZfMV8xMF8iIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyI+PGcgaWQ9IuW9oueKtl8xXzlfIj48Zz48cGF0aCBkPSJNMTU4LjU2NCw4Ny44OTJoNTAuNjgzVjY4LjA3aC0yOC45NjF2LTE5Ljg1aDI4Ljk2MVYyNi40OTkgICAgIGgtNTAuNjgzVjg3Ljg5MnogTTIzMC45MDcsNDguMjIxYzYuNzgxLDYuNzgxLDEwLjMxNywxMC4wMjYsMjAuMTI1LDE5LjgzNWMtNS43MzIsMC0yMC4xMjUsMC4wMjEtMjAuMTI1LDAuMDE5djE5LjgxN2g1MC42ODcgICAgIFY2OC4wN2wtMjAuMjQ2LTE5Ljg1aDIwLjI0NlYyNi40OTloLTUwLjY4N0MyMzAuOTA3LDI2LjQ5OSwyMzAuOTA3LDM3LjQwMSwyMzAuOTA3LDQ4LjIyMXogTTM1My40MzYsMjYuNDk5aC01MC42OSAgICAgYzAsMCwwLDEwLjkwMiwwLDIxLjcyMmM2Ljc4MSw2Ljc4MSwxMC4zMTksMTAuMDI2LDIwLjEyNywxOS44MzVjLTUuNzMsMC0yMC4xMjcsMC4wMjEtMjAuMTI3LDAuMDE5djE5LjgxN2g1MC42OVY2OC4wNyAgICAgbC0yMC4yNDctMTkuODVoMjAuMjQ3VjI2LjQ5OXoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMxQjFCMUI7Ii8+PC9nPjwvZz48L2c+PC9zdmc+",
  },
  {
    title: "React, VueJs",
    description: "Frontend Javascript library/framework",
    experience: 2018,
    icon:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwMCA2MDA7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwMEQ4RkY7fQo8L3N0eWxlPjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjI5OS41IiBjeT0iMjk5LjYiIHI9IjUwLjIiLz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjk5LjUsNDE0LjZjLTcwLjUsMC0xMzIuMS04LjMtMTc4LjItMjQuMWMtMjkuOS0xMC4yLTU1LjMtMjMuOC03My40LTM5LjNjLTE5LjItMTYuNC0yOS40LTM0LjMtMjkuNC01MS42ICAgYzAtMzMuMiwzNi40LTY1LjcsOTcuNS04Ni45YzUwLTE3LjQsMTE1LjItMjcuMSwxODMuNC0yNy4xYzY3LDAsMTMxLjMsOS40LDE4MSwyNi42YzI5LjEsMTAsNTMuNiwyMyw3MSwzNy40ICAgYzE4LjksMTUuOCwyOC45LDMzLjEsMjguOSw1MGMwLDM0LjUtNDAuNyw2OS40LTEwNi4zLDkxLjFDNDI3LjYsNDA2LjEsMzY1LjYsNDE0LjYsMjk5LjUsNDE0LjZ6IE0yOTkuNSwyMDkuNiAgIGMtNjQuNywwLTEyOC43LDkuNC0xNzUuNSwyNS43Yy01Ni4yLDE5LjYtODEuNCw0Ni40LTgxLjQsNjQuM2MwLDE4LjYsMjcuMSw0Ny45LDg2LjUsNjguMmM0My42LDE0LjksMTAyLjYsMjIuOCwxNzAuNCwyMi44ICAgYzYzLjYsMCwxMjIuOS04LDE2Ny0yMi43YzYxLjctMjAuNSw4OS45LTQ5LjgsODkuOS02OC4zYzAtOS41LTcuMi0yMC43LTIwLjMtMzEuNmMtMTUuMS0xMi42LTM3LjEtMjQuMS02My40LTMzLjIgICBDNDI1LjQsMjE4LjYsMzYzLjksMjA5LjYsMjk5LjUsMjA5LjZ6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODUuNiw1NDkuOGMtMTAuMiwwLTE5LjItMi4yLTI2LjgtNi42Yy0yOC43LTE2LjYtMzguNy02NC40LTI2LjYtMTI3LjljOS45LTUyLjEsMzQuMS0xMTMuMyw2OC4yLTE3Mi40ICAgYzMzLjUtNTgsNzMuNy0xMDksMTEzLjQtMTQzLjVjMjMuMi0yMC4yLDQ2LjctMzUsNjcuOS00Mi44YzIzLjEtOC41LDQzLjEtOC41LDU3LjctMC4xYzI5LjksMTcuMiwzOS44LDcwLDI1LjgsMTM3LjYgICBjLTkuOSw0OC0zMy41LDEwNS45LTY2LjUsMTYzLjJjLTM1LjIsNjEtNzMuMiwxMTAuMi0xMDkuOSwxNDIuM2MtMjMuOCwyMC44LTQ4LjMsMzYtNzAuNyw0My45ICAgQzIwNi40LDU0Ny43LDE5NS40LDU0OS44LDE4NS42LDU0OS44eiBNMjEwLjcsMjQ4LjlsMTAuNCw2Yy0zMi4zLDU2LTU2LjIsMTE2LjEtNjUuNCwxNjQuOWMtMTEuMSw1OC41LTAuNCw5My43LDE1LDEwMi42ICAgYzMuOCwyLjIsOC44LDMuNCwxNC45LDMuNGMxOS45LDAsNTEuMi0xMi42LDg3LjQtNDQuMmMzNC43LTMwLjMsNzEtNzcuNSwxMDQuOS0xMzYuMmMzMS44LTU1LjEsNTQuNC0xMTAuNSw2My44LTE1NiAgIGMxMy4xLTYzLjcsMS44LTEwMi43LTE0LjMtMTEyYy04LjItNC43LTIxLjUtNC4xLTM3LjUsMS44Yy0xOC41LDYuOC0zOS40LDIwLjEtNjAuNCwzOC40Yy0zNy43LDMyLjgtNzYuMiw4MS42LTEwOC40LDEzNy40ICAgTDIxMC43LDI0OC45eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDEzLjQsNTUwLjFjLTI3LjIsMC02MS43LTE2LjQtOTcuNy00Ny40Yy00MC4yLTM0LjYtODEuMS04Ni4xLTExNS4zLTE0NS4ydjBjLTMzLjYtNTgtNTcuNi0xMTguMy02Ny43LTE3MCAgIGMtNS45LTMwLjItNy01Ny45LTMuMi04MC4yYzQuMi0yNC4zLDE0LjEtNDEuNiwyOC44LTUwLjFjMjkuOC0xNy4zLDgwLjUsMC41LDEzMi4xLDQ2LjRjMzYuNiwzMi41LDc1LDgxLjksMTA4LjEsMTM5LjEgICBjMzUuMyw2MSw1OSwxMTguNSw2OC40LDE2Ni4zYzYuMSwzMSw3LjEsNTkuOCwyLjgsODMuMmMtNC42LDI0LjktMTUsNDIuNi0zMCw1MS4zQzQzMi4yLDU0Ny45LDQyMy4zLDU1MC4xLDQxMy40LDU1MC4xeiAgICBNMjIxLjIsMzQ1LjVjMzIuNCw1Niw3Mi42LDEwNi43LDExMC4yLDEzOWM0NS4xLDM4LjgsODAuOSw0Ny4yLDk2LjQsMzguMmMxNi4xLTkuMywyNy45LTQ3LjQsMTUuNy0xMDkgICBjLTktNDUuMi0zMS43LTEwMC4yLTY1LjctMTU4LjljLTMxLjktNTUuMS02OC42LTEwMi40LTEwMy4zLTEzMy4yQzIyNS45LDc4LjQsMTg2LjUsNjguNywxNzAuNCw3OGMtOC4yLDQuNy0xNC4zLDE2LjYtMTcuMiwzMy40ICAgYy0zLjMsMTkuNC0yLjMsNDQuMiwzLjEsNzEuNUMxNjUuOSwyMzIsMTg4LjksMjg5LjcsMjIxLjIsMzQ1LjVMMjIxLjIsMzQ1LjV6Ii8+PC9nPjwvc3ZnPg==",
  },
  {
    title: "Node.js, Express",
    description: "Backend Javascript libraries",
    experience: 2018,
    icon:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMyXzMzLW5vZGUtanMiPjxnPjxwYXRoIGQ9Ik0yNTUuOTA4LDQ4NS45OTljLTYuMTE2LDAtMTIuMzIzLTEuNjQyLTE3LjcwOC00Ljc0NmwtNTYuMzE5LTMzLjMxNiAgICBjLTguMzk3LTQuNzQ3LTQuMjktNi4zODktMS41NTEtNy4zMDNjMTEuMjI2LTMuOTI1LDEzLjUwOC00Ljc0NSwyNS40NjUtMTEuNTkyYzEuMjc5LTAuNzI5LDIuOTIyLTAuNDU3LDQuMTk5LDAuMzY2ICAgIGw0My4yNjYsMjUuNjQ4YzEuNTUyLDAuOTEyLDMuNzQxLDAuOTEyLDUuMjAyLDBsMTY4LjU5Mi05Ny4zMDRjMS41NTMtMC45MTMsMi41NTUtMi43MzgsMi41NTUtNC41NjNWMTU4LjU4MyAgICBjMC0xLjkxNy0xLjAwMi0zLjY1MS0yLjY0NS00LjY1NEwyNTguNDYzLDU2LjcxNmMtMS41NTEtMC45MTMtMy42NS0wLjkxMy01LjIwMiwwTDg0Ljg1MiwxNTQuMDE5ICAgIGMtMS42NDQsMC45MTMtMi42NDcsMi43MzgtMi42NDcsNC42NTV2MTk0LjUxNWMwLDEuODI1LDEuMDAzLDMuNjUsMi42NDcsNC40NzNsNDYuMTg4LDI2LjY1MyAgICBjMjUuMTAyLDEyLjUwNCw0MC40MzYtMi4xOTEsNDAuNDM2LTE3LjA2OFYxNzUuMTk1YzAtMi43MzgsMi4xOS00LjgzNyw0LjkzLTQuODM3aDIxLjM1OWMyLjY0NywwLDQuOTI4LDIuMDk5LDQuOTI4LDQuODM3ICAgIHYxOTIuMTQzYzAsMzMuNDA3LTE4LjI1Niw1Mi41NzYtNDkuOTI4LDUyLjU3NmMtOS43NjgsMC0xNy40MzUsMC0zOC43OTQtMTAuNTg4bC00NC4xNzktMjUuNDY3ICAgIGMtMTAuOTU0LTYuMjk5LTE3LjcwOC0xOC4wNzQtMTcuNzA4LTMwLjc2VjE1OC41ODNjMC0xMi41OTYsNi43NTQtMjQuNDYyLDE3LjcwOC0zMC43NkwyMzguMiwzMC41MTkgICAgYzEwLjY3OS02LjAyNCwyNC44MjgtNi4wMjQsMzUuNDE2LDBsMTY4LjU5NCw5Ny4zOTRjMTAuOTUzLDYuMjk4LDE3LjcwNywxOC4wNzMsMTcuNzA3LDMwLjc2MXYxOTQuNTE1ICAgIGMwLDEyLjU5Ni02Ljc1NCwyNC4zNzEtMTcuNzA3LDMwLjc2MWwtMTY4LjU5NCw5Ny4zMDNDMjY4LjIzLDQ4NC4zNTcsMjYyLjExMyw0ODUuOTk5LDI1NS45MDgsNDg1Ljk5OXogTTM5Mi4wMDYsMjk0LjIyNCAgICBjMC0zNi40MjEtMjQuNjQ2LTQ2LjA5Ni03Ni40LTUyLjk0MWMtNTIuMzk2LTYuOTM4LTU3LjY4OS0xMC40OTgtNTcuNjg5LTIyLjcyOWMwLTEwLjEzMSw0LjQ3My0yMy42NDEsNDMuMjY2LTIzLjY0MSAgICBjMzQuNTk2LDAsNDcuMzc1LDcuNDg1LDUyLjY2OCwzMC44NTNjMC40NTcsMi4xOSwyLjQ2NywzLjgzMyw0Ljc0NiwzLjgzM2gyMS45MWMxLjM2NywwLDIuNjQ1LTAuNTQ3LDMuNTU5LTEuNTUyICAgIGMwLjkxNC0xLjAwMywxLjM2OS0yLjM3MywxLjI3NS0zLjc0M2MtMy4zNzUtNDAuMjUyLTMwLjEyMS01OC45NjUtODQuMTU4LTU4Ljk2NWMtNDguMTAzLDAtNzYuNzY0LDIwLjI2NC03Ni43NjQsNTQuMzExICAgIGMwLDM2Ljg3NiwyOC41NjksNDcuMTAxLDc0LjY2NCw1MS42NjJjNTUuMjI1LDUuMzg3LDU5LjUxNCwxMy41MTEsNTkuNTE0LDI0LjM3M2MwLDE4LjgwNS0xNS4xNSwyNi44MzUtNTAuNjU4LDI2LjgzNSAgICBjLTQ0LjYzNSwwLTU0LjQwMy0xMS4yMjctNTcuNjg5LTMzLjQwNmMtMC4zNjUtMi4zNzMtMi4zNzQtNC4xMDctNC44MzctNC4xMDdoLTIxLjgxN2MtMi43MzgsMC00LjgzNiwyLjE5MS00LjgzNiw0LjgzNiAgICBjMCwyOC4zOSwxNS40MjYsNjIuMjU0LDg5LjI3MSw2Mi4yNTRDMzYxLjMzNiwzNTIuMDA1LDM5Mi4wMDYsMzMwLjkxNiwzOTIuMDA2LDI5NC4yMjRMMzkyLjAwNiwyOTQuMjI0eiIgc3R5bGU9ImZpbGw6IzUzOUU0MzsiLz48L2c+PC9nPjxnIGlkPSJMYXllcl8xIi8+PC9zdmc+",
  },
  {
    title: "Wordpress",
    description: "PHP Content Management System",
    experience: 2014,
    icon:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGlkPSJTb2NpYWxfSWNvbnMiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMyX19zdHJva2UiPjxnIGlkPSJXb3JkcHJlc3NfMV8iPjxyZWN0IGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY1LjEyMyw2OS41OTVsLTE5LjIwNSw1NS43OTcgICAgYzUuNzM2LDEuNjg4LDExLjgsMi42MDgsMTguMDgxLDIuNjA4YzcuNDUyLDAsMTQuNi0xLjI4OCwyMS4yNTMtMy42MjhjLTAuMTY4LTAuMjc2LTAuMzI4LTAuNTY0LTAuNDU2LTAuODhMNjUuMTIzLDY5LjU5NXogICAgIE0xMjAuMTYsMzMuMjk0YzAuMjc2LDIuMDQsMC40MzIsNC4yMjQsMC40MzIsNi41OGMwLDYuNDkyLTEuMjE2LDEzLjc5Mi00Ljg2OCwyMi45MjRsLTE5LjU0OSw1Ni41MTcgICAgQzExNS4yMDQsMTA4LjIyMywxMjgsODcuNjA2LDEyOCw2My45OThDMTI4LDUyLjg3LDEyNS4xNTYsNDIuNDEsMTIwLjE2LDMzLjI5NHogTTEwNy4yMDQsNjAuNzY5ICAgIGMwLTcuOTEyLTIuODQ0LTEzLjM4OC01LjI3Ni0xNy42NDhjLTMuMjQ0LTUuMjc2LTYuMjg4LTkuNzQtNi4yODgtMTUuMDEyYzAtNS44ODQsNC40Ni0xMS4zNiwxMC43NDgtMTEuMzYgICAgYzAuMjg0LDAsMC41NTIsMC4wMzYsMC44MjgsMC4wNTJDOTUuODMyLDYuMzY4LDgwLjY1OSwwLDYzLjk5OSwwQzQxLjYzOCwwLDIxLjk2OSwxMS40NzIsMTAuNTI1LDI4Ljg0NCAgICBjMS41MDQsMC4wNDgsMi45MiwwLjA3Niw0LjEyLDAuMDc2YzYuNjkyLDAsMTcuMDU3LTAuODEyLDE3LjA1Ny0wLjgxMmMzLjQ0OC0wLjIwNCwzLjg1Niw0Ljg2OCwwLjQwOCw1LjI3MiAgICBjMCwwLTMuNDY4LDAuNDA4LTcuMzI0LDAuNjEybDIzLjMwNSw2OS4zMjFsMTQuMDA4LTQyLjAwNUw1Mi4xMywzMy45OTJjLTMuNDQ4LTAuMjA0LTYuNzE2LTAuNjEyLTYuNzE2LTAuNjEyICAgIGMtMy40NDgtMC4yMDQtMy4wNDQtNS40NzYsMC40MDgtNS4yNzJjMCwwLDEwLjU2OCwwLjgxMiwxNi44NTcsMC44MTJjNi42OTIsMCwxNy4wNTctMC44MTIsMTcuMDU3LTAuODEyICAgIGMzLjQ1Mi0wLjIwNCwzLjg1Niw0Ljg2OCwwLjQwOCw1LjI3MmMwLDAtMy40NzIsMC40MDgtNy4zMjQsMC42MTJsMjMuMTI5LDY4Ljc5M2w2LjM4OC0yMS4zMjggICAgQzEwNS4wOTYsNzIuNjAxLDEwNy4yMDQsNjYuMjQ1LDEwNy4yMDQsNjAuNzY5eiBNMCw2My45OTdjMCwyNS4zMzIsMTQuNzIsNDcuMjI1LDM2LjA2OSw1Ny41OTdMNS41NCwzNy45NTIgICAgQzEuOTkyLDQ1LjkwOSwwLDU0LjcxNywwLDYzLjk5N3oiIGZpbGw9IiMwMDc1OUQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IldvcmRwcmVzcyIvPjwvZz48L2c+PC9zdmc+",
  },
  {
    title: "Laravel",
    description: "Full Stack PHP framework",
    experience: "~1 year",
    icon:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMxXzk0LWxhcmF2ZWwiPjxnPjxnPjxwYXRoIGQ9Ik00ODQuMjEyLDI0NS42MmMtMy4wMTgtMy40NS00NS4xMzItNTYuMTI3LTUyLjUzNS02NS4wMzhjLTcuNC04LjkxMi0xMS4wNjYtNy4zMzItMTUuNTk0LTYuNjg1ICAgICBjLTQuNTk5LDAuNjQ3LTU3Ljg1Myw5LjYzLTY0LjAzMSwxMC42MzdjLTYuMTgyLDEuMDc4LTEwLjA2MywzLjUyMS02LjI1Myw4LjgzOWMzLjM3Nyw0Ljc0MywzOC4zNzUsNTQuNDAzLDQ2LjEzOCw2NS4zMjYgICAgIEwyNTIuNzMsMjkyLjA0NUwxNDEuOTE0LDEwNi45ODljLTQuMzg1LTYuNTM5LTUuMzE4LTguODM4LTE1LjM4LTguMzM2Yy0xMC4wNjEsMC40MzEtODYuODg2LDYuODI3LTkyLjM0OSw3LjMzMSAgICAgYy01LjQ2MSwwLjQzMS0xMS40OTgsMi44NzUtNi4wMzYsMTUuODFjNS40NjIsMTIuOTM3LDkyLjcwNywyMDAuOTM5LDk1LjE1MSwyMDYuMzk5YzIuNDQzLDUuNDYyLDguNzY3LDE0LjM3NSwyMy41NzEsMTAuNzgxICAgICBjMTUuMTY0LTMuNjY1LDY3Ljc3LTE3LjM5Myw5Ni41MTctMjQuOTM4YzE1LjE2MywyNy41MjMsNDYuMTQsODMuMjkyLDUxLjg4Nyw5MS4yN2M3LjYxOSwxMC43MDgsMTIuOTM3LDguOTEzLDI0LjY1MSw1LjMxOSAgICAgYzkuMTk5LTIuODA0LDE0My40NDMtNTEuMSwxNDkuNDgxLTUzLjU0MWM2LjAzNi0yLjUxNyw5Ljc3My00LjI0Miw1LjY3Ny0xMC4zNWMtMy4wMTgtNC40NTUtMzguNDQ3LTUxLjg4OS01Ni45ODgtNzYuNzUzICAgICBjMTIuNzIxLTMuMzc3LDU3LjkyMy0xNS4zNzksNjIuNzM4LTE2Ljc0NUM0ODYuNTEzLDI1MS44LDQ4Ny4zMDQsMjQ5LjA2OSw0ODQuMjEyLDI0NS42Mkw0ODQuMjEyLDI0NS42MnogTTIzMS4xMDEsMjk3LjM2MyAgICAgYy0xLjY1NCwwLjM1OS03OS42MjksMTkuMDQ1LTgzLjc5NywxOS45NzljLTQuMTY5LDAuOTM2LTQuMTY5LDAuNTA0LTQuNjcyLTAuOTM0Yy0wLjUwMi0xLjQzOC05Mi43MDctMTkxLjY2Ny05NC4wMDEtMTk0LjAzOSAgICAgYy0xLjI5My0yLjM3My0xLjIyMi00LjI0MSwwLTQuMjQxYzEuMjIzLDAsNzMuNjY0LTYuNDY3LDc2LjE3OS02LjYxMmMyLjU4Ny0wLjE0MywyLjI5OSwwLjQzMiwzLjIzNCwyLjAxMiAgICAgYzAsMCwxMDIuMTkyLDE3Ni4zNTksMTAzLjkxOCwxNzkuNDUyQzIzMy44MywyOTYuMDcsMjMyLjc1MywyOTcuMDAzLDIzMS4xMDEsMjk3LjM2M3ogTTQ1MS4wMTEsMzM4LjYxNiAgICAgYzEuMjIxLDEuOTM5LDIuNTE1LDMuMjMxLTEuNDM4LDQuNTk5Yy0zLjg4MiwxLjQzOC0xMzIuMDE5LDQ0LjYzLTEzNC40NjIsNDUuNzA1Yy0yLjUxNiwxLjA3OC00LjQ1NiwxLjQzOC03LjYxNy0zLjIzMiAgICAgYy0zLjE2Mi00LjY3Mi00NC44NDYtNzYuNzUzLTQ0Ljg0Ni03Ni43NTNsMTM1LjY4NS0zNS4yODdjMy4zNzgtMS4wNzgsNC40NTYtMS43OTgsNi42MTEsMS41OCAgICAgQzQwNy4wMjgsMjc4LjY3OCw0NDkuNzg4LDMzNi42NzUsNDUxLjAxMSwzMzguNjE2eiBNNDU5LjcwNywyNDIuMjQzYy0zLjAyLDAuNjQ2LTUyLjg5NSwxMy4wMDctNTIuODk1LDEzLjAwN2wtNDAuNzQ4LTU1LjkxMyAgICAgYy0xLjE0OC0xLjY1Mi0yLjA4NC0zLjIzNCwwLjc5MS0zLjU5NGMyLjg3NC0wLjM1OCw0OS4xNTUtOC43NjYsNTEuMjQxLTkuMTk4YzIuMDgxLTAuNTA0LDMuODc4LTEuMDc4LDYuNDY3LDIuNDQzICAgICBjMi41ODgsMy41MjEsMzcuODAyLDQ4LjE1LDM5LjE2Nyw0OS44NzZDNDY1LjAyNCwyNDAuNTE3LDQ2Mi43MjUsMjQxLjUyMyw0NTkuNzA3LDI0Mi4yNDNMNDU5LjcwNywyNDIuMjQzeiIgc3R5bGU9ImZpbGw6I0YzNTA0NTsiLz48L2c+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMSIvPjwvc3ZnPg==",
  },
  {
    title: "Firebase",
    description: "Backend-as-a-Service (BaaS)",
    experience: "~1 year",
    icon:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgYmFzZVByb2ZpbGU9InRpbnkiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0yOTcuMDM2LDIwNS41NzhsLTM2LjMzNCwzMy44MDlsLTMzLjcxNi02OC4wMDVsMTcuNDQ2LTM5LjEwOGM0LjQxNi03Ljg0LDExLjYyMS03Ljg1NSwxNi4wMzcsMCAgIEwyOTcuMDM2LDIwNS41Nzh6IiBmaWxsPSIjRkZBMDAwIi8+PHBvbHlnb24gZmlsbD0iI0Y1N0YxNyIgcG9pbnRzPSIyNjAuNzAyLDIzOS4zODYgMTI0LjkyNCwzNjUuNjk3IDIyNi45ODYsMTcxLjM4MSAgIi8+PHBhdGggZD0iTTMzNi43NzYsMTUzLjkwMWM2LjQ5MS02LjIzOSwxMy4yMDItNC4xMTEsMTQuOTEyLDQuNzI5bDM1LjM0MiwyMDUuMzc1TDI2OS44NzMsNDM0LjIyICAgYy00LjEsMi4yNjQtMTQuOTU3LDMuMjQ2LTE0Ljk1NywzLjI0NnMtOS45MS0xLjE4NS0xMy42ODctMy4yODFMMTI0LjkyLDM2NS42OUwzMzYuNzc2LDE1My45MDF6IiBmaWxsPSIjRkZDQTI4Ii8+PHBhdGggZD0iTTIyNi45ODYsMTcxLjM4MUwxMjQuOTI0LDM2NS42OTdsNDUuNDYtMjgzLjk5OGMxLjY3NC04Ljg0Nyw2LjcxLTkuNjk5LDExLjIwMy0xLjg5TDIyNi45ODYsMTcxLjM4MXoiIGZpbGw9IiNGRkEwMDAiLz48L2c+PC9zdmc+",
  },
  {
    title: "Neo4j / CYPHER",
    description: "Graph database platform",
    experience: "~1 year",
    icon:
      "data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMDA4Q0MxO30NCgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9DQoJLnN0MntmaWxsOiM2NkIyNDU7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NjAuNywyMzIuNGMwLDExOC45LTk2LjQsMjE1LjMtMjE1LjMsMjE1LjNTMzAsMzUxLjMsMzAsMjMyLjRTMTI2LjQsMTcuMSwyNDUuMywxNy4xDQoJCUMzNjQuMywxNi45LDQ2MC43LDExMy40LDQ2MC43LDIzMi40Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyNS41LDE2MS43YzAsOS41LTcuNywxNy4yLTE3LjIsMTcuMmMtOS41LDAtMTcuMi03LjctMTcuMi0xNy4yYzAtOS41LDcuNy0xNy4yLDE3LjItMTcuMg0KCQlDMTE3LjksMTQ0LjUsMTI1LjUsMTUyLjMsMTI1LjUsMTYxLjciLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTI4LjQsMjA5YzAsOS41LTcuNywxNy4yLTE3LjIsMTcuMmMtOS41LDAtMTcuMi03LjctMTcuMi0xNy4yYzAtOS41LDcuNy0xNy4yLDE3LjItMTcuMg0KCQlDMTIwLjcsMTkxLjgsMTI4LjQsMTk5LjQsMTI4LjQsMjA5Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzOC45LDI1OS4xYzAsOS41LTcuNywxNy4yLTE3LjIsMTcuMnMtMTcuMi03LjctMTcuMi0xNy4yYzAtOS41LDcuNy0xNy4yLDE3LjItMTcuMg0KCQlDMTMxLjIsMjQxLjgsMTM4LjksMjQ5LjUsMTM4LjksMjU5LjEiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTYyLjUsMzAzLjljMCw5LjUtNy43LDE3LjItMTcuMiwxNy4yYy05LjUsMC0xNy4yLTcuNy0xNy4yLTE3LjJzNy43LTE3LjIsMTcuMi0xNy4yDQoJCUMxNTQuOCwyODYuNiwxNjIuNSwyOTQuMywxNjIuNSwzMDMuOSIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNDYuOCwzNjYuNmMwLDkuNS03LjcsMTcuMi0xNy4yLDE3LjJjLTkuNSwwLTE3LjItNy43LTE3LjItMTcuMmMwLTkuNSw3LjctMTcuMiwxNy4yLTE3LjINCgkJQzMzOS4xLDM0OS40LDM0Ni44LDM1Ny4xLDM0Ni44LDM2Ni42Ii8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTM3OC4xLDMyOS42YzAsOS41LTcuNywxNy4yLTE3LjIsMTcuMmMtOS41LDAtMTcuMi03LjctMTcuMi0xNy4yYzAtOS41LDcuNy0xNy4yLDE3LjItMTcuMg0KCQlDMzcwLjQsMzEyLjQsMzc4LjEsMzIwLjEsMzc4LjEsMzI5LjYiLz4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjg3LjQsNjcuOGMwLDkuNS03LjcsMTcuMi0xNy4yLDE3LjJTMjUzLDc3LjIsMjUzLDY3LjhzNy43LTE3LjIsMTcuMi0xNy4yUzI4Ny40LDU4LjMsMjg3LjQsNjcuOCIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNDIuMSw1MS45YzAsOS41LTcuNywxNy4yLTE3LjIsMTcuMmMtOS41LDAtMTcuMi03LjctMTcuMi0xNy4yczcuNy0xNy4yLDE3LjItMTcuMg0KCQlDMjM0LjQsMzQuNywyNDIuMSw0Mi40LDI0Mi4xLDUxLjkiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzY0LjIsNjYuM2M2My40LDAsMTE0LjgsNTEuNCwxMTQuOCwxMTQuOHMtNTEuNCwxMTQuOC0xMTQuOCwxMTQuOGMtNjMuNCwwLTExNC44LTUxLjQtMTE0LjgtMTE0LjgNCgkJUzMwMC44LDY2LjMsMzY0LjIsNjYuMyIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNjQuMiwyOTguOWMtNjUsMC0xMTcuOC01Mi45LTExNy44LTExNy44YzAtNjUsNTIuOS0xMTcuOCwxMTcuOC0xMTcuOGM2NSwwLDExNy44LDUyLjksMTE3LjgsMTE3LjgNCgkJQzQ4MiwyNDYsNDI5LjEsMjk4LjksMzY0LjIsMjk4Ljl6IE0zNjQuMiw2OS40Yy02MS42LDAtMTExLjcsNTAuMS0xMTEuNywxMTEuN2MwLDYxLjYsNTAuMSwxMTEuNywxMTEuNywxMTEuNw0KCQljNjEuNiwwLDExMS43LTUwLjEsMTExLjctMTExLjdDNDc1LjgsMTE5LjUsNDI1LjcsNjkuNCwzNjQuMiw2OS40eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMDYuOSwzMjEuMWM1MS45LDAsOTMuOSw0Miw5My45LDkzLjljMCw1MS45LTQyLDkzLjktOTMuOSw5My45Yy01MS45LDAtOTMuOS00Mi05My45LTkzLjkNCgkJQzExMy4xLDM2My4yLDE1NS4xLDMyMS4xLDIwNi45LDMyMS4xIi8+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIwNi45LDUxMmMtNTMuNSwwLTk3LTQzLjUtOTctOTdjMC01My41LDQzLjUtOTcsOTctOTdzOTcsNDMuNSw5Nyw5N0MzMDMuOSw0NjguNSwyNjAuNCw1MTIsMjA2LjksNTEyeg0KCQkgTTIwNi45LDMyNC4yYy01MC4xLDAtOTAuOCw0MC43LTkwLjgsOTAuOGMwLDUwLjEsNDAuNyw5MC44LDkwLjgsOTAuOHM5MC44LTQwLjcsOTAuOC05MC44QzI5Ny44LDM2NSwyNTcsMzI0LjIsMjA2LjksMzI0LjJ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEyOS42LDMuMWMzNC42LDAsNjIuNiwyOCw2Mi42LDYyLjZjMCwzNC42LTI4LDYyLjYtNjIuNiw2Mi42cy02Mi42LTI4LTYyLjYtNjIuNg0KCQlDNjcuMSwzMS4xLDk1LjEsMy4xLDEyOS42LDMuMSIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMjkuNiwxMzEuM2MtMzYuMiwwLTY1LjctMjkuNS02NS43LTY1LjdDNjQsMjkuNSw5My40LDAsMTI5LjYsMHM2NS43LDI5LjUsNjUuNyw2NS43DQoJCUMxOTUuMywxMDEuOSwxNjUuOSwxMzEuMywxMjkuNiwxMzEuM3ogTTEyOS42LDYuMWMtMzIuOCwwLTU5LjUsMjYuNy01OS41LDU5LjVjMCwzMi44LDI2LjcsNTkuNSw1OS41LDU5LjVzNTkuNS0yNi43LDU5LjUtNTkuNQ0KCQlDMTg5LjIsMzIuOCwxNjIuNSw2LjEsMTI5LjYsNi4xeiIvPg0KPC9nPg0KPC9zdmc+DQo=",
  },
  {
    title: "Facebook Ads",
    description: "Digital Marketing Campaigns",
    experience: "~1 year",
    icon:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxhZ18xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDQgMjA0OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjA0IDIwNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cgkuc3Qxe2ZpbGw6dXJsKCNTVkdJRF8yXyk7fQoJLnN0MntmaWxsOiM0QjczQjE7fQoJLnN0M3tmaWxsOiMzNjU0OTM7fQoJLnN0NHtmaWxsOiNGRkZGRkY7fQoJLnN0NXtmaWxsOiM1OTg5QzQ7fQoJLnN0NntmaWxsOiNFN0U5RUE7fQoJLnN0N3tmaWxsOiM0MjY4QUQ7fQo8L3N0eWxlPjxnPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9IlNWR0lEXzFfIiB4MT0iMTAyLjAwMDUiIHgyPSIxMDIuMDAwNSIgeTE9IjIwNC4wMDA5IiB5Mj0iLTIuNjcxMTg2ZS0wOSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMjYzQjc0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNEQ3OEJGIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYxLjUsMjA0aC0xMTlDMTkuMSwyMDQsMCwxODQuOSwwLDE2MS41di0xMTlDMCwxOS4xLDE5LjEsMCw0Mi41LDBoMTE5QzE4NC45LDAsMjA0LDE5LjEsMjA0LDQyLjV2MTE5ICAgQzIwNCwxODQuOSwxODQuOSwyMDQsMTYxLjUsMjA0eiIvPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9IlNWR0lEXzJfIiB4MT0iMTI2LjI0OTEiIHgyPSIxMjYuMjQ5MSIgeTE9IjIwNC4wMDA5IiB5Mj0iMjguMDQyIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRjMxNTciLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzRjYzQUYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMDQsMTYxLjV2LTU2LjJMMTI1LjUsMjhsLTc3LDExOC41bDU4LjgsNTcuNGg1NC4xQzE4NC45LDIwNCwyMDQsMTg0LjksMjA0LDE2MS41eiIvPjxnPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjIuNiwxMDEuNWwtMTEuNC0yMS42Yy0zLjYtNi45LTEyLjItOS42LTE5LjEtNmwtNTIuNSwyNy42Yy02LjksMy42LTkuNiwxMi4yLTYsMTkuMWwxMS40LDIxLjYgICAgYzMuNiw2LjksMTIuMiw5LjYsMTkuMSw2bDMuNC0xLjhjMCwwLDkuNiwxOC41LDEzLjQsMjUuNWMzLjgsNyw4LjUsNS41LDEzLDMuNXMxMS02LjUsMTEtNi41bC0xOC4yLTMyLjVsMzAtMTUuNyAgICBDMTIzLjUsMTE3LDEyNi4yLDEwOC40LDEyMi42LDEwMS41eiIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik05My45LDE3NS40YzQuNS0yLDExLTYuNSwxMS02LjVsLTE4LjItMzIuNWwyMS42LTExLjNsLTEzLjQtMjIuNEwzOS42LDEzMmw1LjQsMTAuM2MzLjYsNi45LDEyLjIsOS42LDE5LjEsNiAgICBsMy40LTEuOGMwLDAsOS42LDE4LjUsMTMuNCwyNS41Qzg0LjYsMTc4LjksODkuNCwxNzcuNCw5My45LDE3NS40eiIvPjxwb2x5Z29uIGNsYXNzPSJzdDQiIHBvaW50cz0iNjguMSw4NiA5My44LDEzMi4zIDE1Ny40LDEyMC4zIDExNC4xLDM4LjMgICAiLz48Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIxNDcuOCIgY3k9IjczLjYiIHI9IjEwLjciLz48cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMTU3LjYsMTIyLjJsLTQ1LjEtODUuN2MtMS4xLTIuMS0wLjMtNC43LDEuOC01LjdsNi40LTMuNGMyLjEtMS4xLDQuNy0wLjMsNS43LDEuOGw0NS4xLDg1LjcgICAgYzEuMSwyLjEsMC4zLDQuNy0xLjgsNS43bC02LjQsMy40QzE2MS4zLDEyNS4xLDE1OC43LDEyNC4zLDE1Ny42LDEyMi4yeiIvPjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iOTMuOCwxMzIuMyAxNTYuNywxMjAuNSAxMzYsODEuMiA4MS4zLDEwOS44ICAgIi8+PHBhdGggY2xhc3M9InN0NyIgZD0iTTE2My40LDEyNGw2LjQtMy40YzIuMS0xLjEsMi45LTMuNywxLjgtNS43bC0yMS4zLTQwLjVsLTE0LjEsN2wyMS41LDQwLjlDMTU4LjcsMTI0LjMsMTYxLjMsMTI1LjEsMTYzLjQsMTI0ICAgIHoiLz48L2c+PC9nPjwvc3ZnPg==",
  },
  {
    title: "Apollo",
    description: "GraphQL API library",
    experience: "~1 year",
    icon:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIyMiIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTE1Mi41NzYgMzIuOTYzbDU5LjE0NiAzNC4xNWEyNS44MTkgMjUuODE5IDAgMCAxIDUuODE4LTQuNjA0YzEyLjI2Ni03LjA1MiAyNy45MTItMi44NjUgMzUuMDM3IDkuNDAyIDcuMDUyIDEyLjI2NyAyLjg2NSAyNy45MTItOS40MDIgMzUuMDM3YTI1LjY5OCAyNS42OTggMCAwIDEtNi44MzEgMi43MnY2OC4zMjVhMjUuNyAyNS43IDAgMCAxIDYuNzU4IDIuNzAyYzEyLjM0IDcuMTI1IDE2LjUyNyAyMi43NzEgOS40MDIgMzUuMDM4LTcuMDUyIDEyLjI2Ni0yMi43NzEgMTYuNDUzLTM1LjAzOCA5LjQwMmEyNS40NjQgMjUuNDY0IDAgMCAxLTYuMzQtNS4xNDdsLTU4Ljc4NiAzMy45NGEyNS42NzEgMjUuNjcxIDAgMCAxIDEuMjk1IDguMDhjMCAxNC4xMDMtMTEuNDU4IDI1LjYzNi0yNS42MzUgMjUuNjM2LTE0LjE3NyAwLTI1LjYzNS0xMS40Ni0yNS42MzUtMjUuNjM2IDAtMi41Mi4zNjItNC45NTQgMS4wMzctNy4yNTNsLTU5LjEzLTM0LjE0YTI1LjgyNCAyNS44MjQgMCAwIDEtNS43MzggNC41MmMtMTIuMzQgNy4wNTEtMjcuOTg2IDIuODY0LTM1LjAzOC05LjQwMi03LjA1MS0xMi4yNjctMi44NjQtMjcuOTEzIDkuNDAyLTM1LjAzOGEyNS43MSAyNS43MSAwIDAgMSA2Ljc1OC0yLjcwM3YtNjguMzI0YTI1LjY5OCAyNS42OTggMCAwIDEtNi44MzEtMi43MkMuNTU4IDk5Ljg5Ny0zLjYyOSA4NC4xNzggMy40MjMgNzEuOTExYzcuMDUyLTEyLjI2NyAyMi43Ny0xNi40NTQgMzUuMDM3LTkuNDAyYTI1LjgyIDI1LjgyIDAgMCAxIDUuNzkgNC41NzVsNTkuMTYzLTM0LjE1OWEyNS43MDcgMjUuNzA3IDAgMCAxLTEuMDQ4LTcuMjlDMTAyLjM2NSAxMS40NiAxMTMuODIzIDAgMTI4IDBjMTQuMTc3IDAgMjUuNjM1IDExLjQ1OSAyNS42MzUgMjUuNjM1IDAgMi41NDgtLjM3IDUuMDA3LTEuMDU5IDcuMzI4em0tNi4xNjIgMTAuNTIybDU5LjI4NyAzNC4yM2EyNS41OTkgMjUuNTk5IDAgMCAwIDIuNDM3IDE5LjgzMWMzLjYwOSA2LjI3OCA5LjQ4OCAxMC40NCAxNi4wMTMgMTIuMDYydjY4LjQxYy0uMzMzLjA4MS0uNjY0LjE3LS45OTMuMjY0TDE0NS43MjUgNDQuMTdjLjIzNC0uMjI0LjQ2NC0uNDUyLjY4OS0uNjg0em0tMzYuMTIzLjdsLTc3LjQzMiAxMzQuMTFhMjUuODI0IDI1LjgyNCAwIDAgMC0xLjAxLS4yN3YtNjguNDE3YzYuNTI1LTEuNjIyIDEyLjQwNC01Ljc4NCAxNi4wMTMtMTIuMDYyYTI1LjYgMjUuNiAwIDAgMCAyLjQyNy0xOS44NjlsNTkuMjctMzQuMjJjLjIzOS4yNDcuNDgzLjQ5LjczMi43Mjd6bTI0Ljg3MiA2LjA3NWw3Ny40MTQgMTM0LjA4YTI1LjQ5MiAyNS40OTIgMCAwIDAtNC41MTMgNS43NTcgMjUuNyAyNS43IDAgMCAwLTIuNzAyIDYuNzU4SDUwLjY0YTI1LjcxIDI1LjcxIDAgMCAwLTIuNzA0LTYuNzU4IDI1LjgyNSAyNS44MjUgMCAwIDAtNC41MDYtNS43MjRsNzcuNDI5LTEzNC4xMDdBMjUuNzE1IDI1LjcxNSAwIDAgMCAxMjggNTEuMjdjMi40ODcgMCA0Ljg5LS4zNTIgNy4xNjMtMS4wMXptMTEuNzk1IDE5NC40NzhsNTguOTAyLTM0LjAwOGEyNS44NjUgMjUuODY1IDAgMCAxLS40NzMtMS42ODJINTAuNjA3Yy0uMDgyLjMzMy0uMTcxLjY2My0uMjY2Ljk5Mmw1OS4xOSAzNC4xNzVBMjUuNTU4IDI1LjU1OCAwIDAgMSAxMjggMjM2LjM3M2EyNS41NjQgMjUuNTY0IDAgMCAxIDE4Ljk1OCA4LjM2NXoiIGZpbGw9IiNFNTM1QUIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
  },
  {
    title: "TypeScript",
    description: "Strict syntactical superset of JS",
    experience: "~1 year",
    icon:
      "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCIgd2lkdGg9IjI1MDAiIGhlaWdodD0iMjUwMCI+PHN0eWxlPi5zdDB7ZmlsbDojMDA3YWNjfS5zdDF7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTAgMjAwVjBoNDAwdjQwMEgwIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTg3LjcgMjAwLjdWMjE3aDUydjE0OGgzNi45VjIxN2g1MnYtMTZjMC05IDAtMTYuMy0uNC0xNi41IDAtLjMtMzEuNy0uNC03MC4yLS40bC03MCAuM3YxNi40bC0uMy0uMXpNMzIxLjQgMTg0YzEwLjIgMi40IDE4IDcgMjUgMTQuMyAzLjcgNCA5LjIgMTEgOS42IDEyLjggMCAuNi0xNy4zIDEyLjMtMjcuOCAxOC44LS40LjMtMi0xLjQtMy42LTQtNS4yLTcuNC0xMC41LTEwLjYtMTguOC0xMS4yLTEyLS44LTIwIDUuNS0yMCAxNiAwIDMuMi42IDUgMS44IDcuNiAyLjcgNS41IDcuNyA4LjggMjMuMiAxNS42IDI4LjYgMTIuMyA0MSAyMC40IDQ4LjUgMzIgOC41IDEzIDEwLjQgMzMuNCA0LjcgNDguNy02LjQgMTYuNy0yMiAyOC00NC4zIDMxLjctNyAxLjItMjMgMS0zMC41LS4zLTE2LTMtMzEuMy0xMS00MC43LTIxLjMtMy43LTQtMTAuOC0xNC43LTEwLjQtMTUuNGwzLjgtMi40IDE1LTguNyAxMS4zLTYuNiAyLjYgMy41YzMuMyA1LjIgMTAuNyAxMi4yIDE1IDE0LjYgMTMgNi43IDMwLjQgNS44IDM5LTIgMy43LTMuNCA1LjMtNyA1LjMtMTIgMC00LjYtLjctNi43LTMtMTAuMi0zLjItNC40LTkuNi04LTI3LjYtMTYtMjAuNy04LjgtMjkuNS0xNC40LTM3LjctMjMtNC43LTUuMi05LTEzLjMtMTEtMjAtMS41LTUuOC0yLTIwLS42LTI1LjcgNC4zLTIwIDE5LjQtMzQgNDEtMzggNy0xLjQgMjMuNS0uOCAzMC40IDFsLS4yLjJ6Ii8+PC9zdmc+",
  },
  {
    title: "Stack Overflow",
    description: "Searching for solutions",
    experience: 2014,
    icon:
      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMjU2cHgiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjU2MDAyIDI1NjAwMiIgd2lkdGg9IjI1NnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICA8IVtDREFUQVsKICAgIC5maWw3IHtmaWxsOm5vbmV9CiAgICAuZmlsNSB7ZmlsbDojNjY2NjY2fQogICAgLmZpbDYge2ZpbGw6IzY3Njc2N30KICAgIC5maWw0IHtmaWxsOiM5MzgxNkR9CiAgICAuZmlsMyB7ZmlsbDojQzM3NzMxfQogICAgLmZpbDEge2ZpbGw6I0U5M0QwMX0KICAgIC5maWwyIHtmaWxsOiNFQzU3MDB9CiAgICAuZmlsMCB7ZmlsbDojRjMyRTFEfQogICBdXT4KICA8L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+PGcgaWQ9Il8zOTIyNDYyNDgiPjxwb2x5Z29uIGNsYXNzPSJmaWwwIiBwb2ludHM9IjIwMzU0MywwIDIyNjAyOSwxMDI1MjQgMjEwNjUwLDEwNTg0NiAxODgxNjMsMzMyMSAiLz48cG9seWdvbiBjbGFzcz0iZmlsMSIgcG9pbnRzPSIxNDExMzYsMjQ3NTEgMjAzMTc2LDEwOTQxNSAxOTA0OTIsMTE4NzEzIDEyODQ1MSwzNDA0OSAiLz48cG9seWdvbiBjbGFzcz0iZmlsMiIgcG9pbnRzPSI5MzE2NCw3MTU1OSAxODQzNDksMTIzNTQ1IDE3NjU4OCwxMzcyMjAgODU0MDMsODUyMzQgIi8+PHBvbHlnb24gY2xhc3M9ImZpbDMiIHBvaW50cz0iNjkyNjAsMTIwMTM3IDE3MDM5MywxNDgyMzAgMTY2MjAzLDE2MzM4NSA2NTA3MCwxMzUyOTIgIi8+PHBvbHlnb24gY2xhc3M9ImZpbDQiIHBvaW50cz0iNjE5MjQsMTYwODIwIDE2NjI5MywxNzE5NTkgMTY0NjMwLDE4NzU5OSA2MDI2MSwxNzY0NTkgIi8+PHBvbHlnb24gY2xhc3M9ImZpbDUiIHBvaW50cz0iNTgwMjgsMjAwODg3IDE2Mjk5MSwyMDA4ODcgMTYyOTkxLDIxNjYyNiA1ODAyOCwyMTY2MjYgIi8+PHBvbHlnb24gY2xhc3M9ImZpbDYiIHBvaW50cz0iNDU3MTAsMjQwMjYzIDE3NTMwNywyNDAyNjMgMTc1MzA3LDE0ODQxOCAxOTEwNDgsMTQ4NDE4IDE5MTA0OCwyNTYwMDQgMjk5NzEsMjU2MDA0IDI5OTcxLDE0ODQxOCA0NTcxMCwxNDg0MTggIi8+PC9nPjwvZz48cmVjdCBjbGFzcz0iZmlsNyIgaGVpZ2h0PSIyNTYwMDIiIHdpZHRoPSIyNTYwMDIiLz48L3N2Zz4=",
  },
  {
    title: "Git",
    description: "Version Control",
    experience: 2014,
    icon:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMjUxLjE3MiAxMTYuNTk0TDEzOS40IDQuODI4Yy02LjQzMy02LjQzNy0xNi44NzMtNi40MzctMjMuMzE0IDBsLTIzLjIxIDIzLjIxIDI5LjQ0MyAyOS40NDNjNi44NDItMi4zMTIgMTQuNjg4LS43NjEgMjAuMTQyIDQuNjkzIDUuNDggNS40ODkgNy4wMiAxMy40MDIgNC42NTIgMjAuMjY2bDI4LjM3NSAyOC4zNzZjNi44NjUtMi4zNjUgMTQuNzg2LS44MzUgMjAuMjY5IDQuNjU3IDcuNjYzIDcuNjYgNy42NjMgMjAuMDc1IDAgMjcuNzQtNy42NjUgNy42NjYtMjAuMDggNy42NjYtMjcuNzQ5IDAtNS43NjQtNS43Ny03LjE4OC0xNC4yMzUtNC4yNy0yMS4zMzZsLTI2LjQ2Mi0yNi40NjItLjAwMyA2OS42MzdhMTkuODIgMTkuODIgMCAwIDEgNS4xODggMy43MWM3LjY2MyA3LjY2IDcuNjYzIDIwLjA3NiAwIDI3Ljc0Ny03LjY2NSA3LjY2Mi0yMC4wODYgNy42NjItMjcuNzQgMC03LjY2My03LjY3MS03LjY2My0yMC4wODYgMC0yNy43NDZhMTkuNjU0IDE5LjY1NCAwIDAgMSA2LjQyMS00LjI4MVY5NC4xOTZhMTkuMzc4IDE5LjM3OCAwIDAgMS02LjQyMS00LjI4MWMtNS44MDYtNS43OTgtNy4yMDItMTQuMzE3LTQuMjI3LTIxLjQ0Nkw4MS40NyAzOS40NDJsLTc2LjY0IDc2LjYzNWMtNi40NCA2LjQ0My02LjQ0IDE2Ljg4NCAwIDIzLjMyMmwxMTEuNzc0IDExMS43NjhjNi40MzUgNi40MzggMTYuODczIDYuNDM4IDIzLjMxNiAwbDExMS4yNTEtMTExLjI0OWM2LjQzOC02LjQ0IDYuNDM4LTE2Ljg4NyAwLTIzLjMyNCIgZmlsbD0iI0RFNEMzNiIvPjwvc3ZnPg==",
  },
];


const Skills = () => {

  const theme = useRecoilValue(themeState);

  return (
    <div className="-mx-2 flex flex-row flex-wrap">

            {stackList.map((item, i) => {
              return (
                <div key={`${i}`} id={`stack__item-${i}`} className="stack__item text-secondary w-full md:w-auto">
                  <div className={`stack__item-content flex flex-row justify-start items-center border shadow-md rounded-lg m-2 py-2 px-4 ${ theme === 'dark' ? `border-gray-700` : `` }`}>
                    <div className="stack__item-icon pr-4">
                      <img
                        width="40"
                        height="40"
                        alt={item.title + " icon"}
                        src={item.icon}
                      />
                    </div>
                    <div className="stack__item-info">
                      <h6 className="font-semibold leading-none">
                        {item.title}
                      </h6>
                      <span className="text-sm flex mt-1 leading-none text">
                        {item.description}
                      </span>
                      <span className="text-sm mt-1 leading-none flex">
                        {Number.isInteger(item.experience)
                          ? currentYear - item.experience + "+ years"
                          : item.experience}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
         
    </div>
  );
};

export default Skills;

