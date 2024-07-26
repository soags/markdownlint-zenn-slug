function validateSlug(slug: string) {
  if (!slug) return false
  return /^[0-9a-z\-_]{12,50}$/.test(slug)
}

function getSlugErrorMessage(slug: string) {
  return `slugの値（${slug}）が不正です。小文字の半角英数字（a-z0-9）、ハイフン（-）、アンダースコア（_）の12〜50字の組み合わせにしてください`
}

function validateChapterSlug(slug: string) {
  if (!slug) return false
  return (
    /^[0-9a-z\-_]{1,50}$/.test(slug) || /^[0-9]+.[0-9a-z\-_]{1,50}$/.test(slug)
  )
}

function getChapterSlugErrorMessage(slug: string) {
  return `チャプターのslugの値（${slug}）が不正です。小文字の半角英数字（a-z0-9）、ハイフン（-）、アンダースコア（_）の1〜50字の組み合わせにしてください`
}

function getConflictSlugMessage(slug: string) {
  return `slugの値（${slug}）が不正です。このslugは既に使われています。`
}

export default {
  validateSlug,
  getSlugErrorMessage,
  validateChapterSlug,
  getChapterSlugErrorMessage,
  getConflictSlugMessage,
}
