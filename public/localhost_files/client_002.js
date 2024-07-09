import { createHotContext as __vite__createHotContext } from "/_build/@vite/client";import.meta.hot = __vite__createHotContext("/node_modules/vinxi/runtime/client.js?v=ff703938");import manifest from "/_build/node_modules/vinxi/lib/manifest/client-manifest.js?v=ff703938";

// if (import.meta.env.DEVTOOLS && import.meta.env.DEV) {
// 	window.onload = async () => {
// 		const { default: mount } = await import("@vinxi/devtools/mount");
// 		await mount();
// 	};
// }

if (typeof window !== "undefined" && import.meta.hot) {
  import.meta.hot.on("css-update", data => {
    for (const el of document.querySelectorAll(`style[data-vite-dev-id="${data.file}"]`)) {
      el.innerHTML = data.contents;
    }
  });
}

//
globalThis.MANIFEST = manifest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYW5pZmVzdCIsIndpbmRvdyIsImltcG9ydCIsIm1ldGEiLCJob3QiLCJvbiIsImRhdGEiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZpbGUiLCJpbm5lckhUTUwiLCJjb250ZW50cyIsImdsb2JhbFRoaXMiLCJNQU5JRkVTVCJdLCJzb3VyY2VzIjpbImNsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFuaWZlc3QgZnJvbSBcIi4uL2xpYi9tYW5pZmVzdC9jbGllbnQtbWFuaWZlc3RcIjtcblxuLy8gaWYgKGltcG9ydC5tZXRhLmVudi5ERVZUT09MUyAmJiBpbXBvcnQubWV0YS5lbnYuREVWKSB7XG4vLyBcdHdpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4vLyBcdFx0Y29uc3QgeyBkZWZhdWx0OiBtb3VudCB9ID0gYXdhaXQgaW1wb3J0KFwiQHZpbnhpL2RldnRvb2xzL21vdW50XCIpO1xuLy8gXHRcdGF3YWl0IG1vdW50KCk7XG4vLyBcdH07XG4vLyB9XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGltcG9ydC5tZXRhLmhvdCkge1xuXHRpbXBvcnQubWV0YS5ob3Qub24oXCJjc3MtdXBkYXRlXCIsIChkYXRhKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0YHN0eWxlW2RhdGEtdml0ZS1kZXYtaWQ9XCIke2RhdGEuZmlsZX1cIl1gLFxuXHRcdCkpIHtcblx0XHRcdGVsLmlubmVySFRNTCA9IGRhdGEuY29udGVudHM7XG5cdFx0fVxuXHR9KTtcbn1cblxuLy9cbmdsb2JhbFRoaXMuTUFOSUZFU1QgPSBtYW5pZmVzdDtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsUUFBUSxNQUFNLGlDQUFpQzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksT0FBT0MsTUFBTSxLQUFLLFdBQVcsSUFBSUMsTUFBTSxDQUFDQyxJQUFJLENBQUNDLEdBQUcsRUFBRTtFQUNyREYsTUFBTSxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDLFlBQVksRUFBR0MsSUFBSSxJQUFLO0lBQzFDLEtBQUssTUFBTUMsRUFBRSxJQUFJQyxRQUFRLENBQUNDLGdCQUFnQixDQUN6QywyQkFBMkJILElBQUksQ0FBQ0ksSUFBSSxJQUNyQyxDQUFDLEVBQUU7TUFDRkgsRUFBRSxDQUFDSSxTQUFTLEdBQUdMLElBQUksQ0FBQ00sUUFBUTtJQUM3QjtFQUNELENBQUMsQ0FBQztBQUNIOztBQUVBO0FBQ0FDLFVBQVUsQ0FBQ0MsUUFBUSxHQUFHZCxRQUFRIiwiaWdub3JlTGlzdCI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=