export function isIndexableContext(context, nonIndexableContexts) {
  const normalizedContext = (context ?? "local").trim().toLowerCase();
  return !nonIndexableContexts.includes(normalizedContext);
}
