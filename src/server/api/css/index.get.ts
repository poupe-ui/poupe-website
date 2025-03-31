export default defineEventHandler(async (event) => {
  const scheme = 'content';
  const color = colorToURL(); // random

  await sendRedirect(event, joinURL(event.path, scheme, color), 302);
});
