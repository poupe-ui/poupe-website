export default defineEventHandler(async (event) => {
  const scheme = 'content';
  const color = hctToURL();

  await sendRedirect(event, joinURL(event.path, scheme, color), 302);
});
