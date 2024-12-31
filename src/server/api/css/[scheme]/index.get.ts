export default defineEventHandler(async (event) => {
  const here = trimPath(event.path);
  const color = hctToURL();

  await sendRedirect(event, `${here}/${color}`, 302);
});
