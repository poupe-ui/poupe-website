export default defineEventHandler(async (event) => {
  const scheme = themeSchemeFromRouterParam(event, 'scheme');

  if (scheme === undefined) {
    setResponseStatus(event, 404);
    return;
  }

  const color = colorToURL(); // random
  await sendRedirect(event, joinURL(event.path, color), 302);
});
