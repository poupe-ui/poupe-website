export default defineEventHandler(async (event) => {
  const here = trimPath(event.path);
  const scheme = 'content';
  const color = hctToURL();

  await sendRedirect(event, `${here}/${scheme}/${color}`, 302);
});
