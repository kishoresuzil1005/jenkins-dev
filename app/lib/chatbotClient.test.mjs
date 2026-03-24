import { test, mock } from 'node:test';
import assert from 'node:assert/strict';

import { parseChatbotResponse, callChatbotApi } from './chatbotClient.mjs';

test('parseChatbotResponse parses plain JSON', () => {
  const raw = JSON.stringify({
    answer: 'Hello',
    sources: ['https://codework.ai'],
    followups: ['What is CODEWORK?']
  });
  const result = parseChatbotResponse(raw);
  assert.equal(result.answer, 'Hello');
  assert.deepEqual(result.sources, [{ name: 'https://codework.ai', url: 'https://codework.ai' }]);
  assert.deepEqual(result.followups, ['What is CODEWORK?']);
});

test('parseChatbotResponse merges newline-separated JSON objects', () => {
  const raw = [
    JSON.stringify({ answer: 'Hi' }),
    JSON.stringify({ sources: ['a', 'b'] }),
    JSON.stringify({ followups: ['x'] })
  ].join('\n');
  const result = parseChatbotResponse(raw);
  assert.equal(result.answer, 'Hi');
  assert.deepEqual(result.sources, [
    { name: 'a', url: 'a' },
    { name: 'b', url: 'b' },
  ]);
  assert.deepEqual(result.followups, ['x']);
});

test('callChatbotApi sends expected payload and headers', async (t) => {
  const originalFetch = globalThis.fetch;
  const key = 'abc123';
  const prevKey = process.env.NEXT_PUBLIC_CHATBOT_API_KEY;
  process.env.NEXT_PUBLIC_CHATBOT_API_KEY = key;

  t.after(() => {
    globalThis.fetch = originalFetch;
    process.env.NEXT_PUBLIC_CHATBOT_API_KEY = prevKey;
  });

  globalThis.fetch = async (url, init) => {
    assert.ok(String(url).includes('/api/v1/chat'));
    assert.equal(init.method, 'POST');
    assert.equal(init.headers.Authorization, `Bearer ${key}`);
    const body = JSON.parse(init.body);
    assert.equal(body.query, 'hello');
    assert.equal(body.question, 'hello');
    return new Response(
      JSON.stringify({ answer: 'ok', sources: [], followups: [] }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  };

  const result = await callChatbotApi('hello');
  assert.equal(result.answer, 'ok');
});

test('callChatbotApi times out and throws error', async (t) => {
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });

  globalThis.fetch = (url, init) => {
    return new Promise((_, reject) => {
      const err = new Error('Aborted');
      err.name = 'AbortError';
      // Abort when signal aborts
      init.signal.addEventListener('abort', () => reject(err));
    });
  };

  await assert.rejects(
    callChatbotApi('timeout test', { timeoutMs: 10 }),
    /timed out|Unable to reach|Please try again/i
  );
});
