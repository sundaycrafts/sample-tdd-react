declare global {
  var __tac__: Date | null;
}

if (!global.__tac__) {
  global.__tac__ = null;
}

export async function acceptTac(tac: unknown) {
  global.__tac__ = tac ? new Date() : null;
}

export async function getAcceptedTac() {
  return !!global.__tac__;
}

export async function hasChanged(): Promise<boolean> {
  const acceptedAt = global.__tac__?.getTime() || NaN;
  return Date.now() - acceptedAt < 3_000;
}
