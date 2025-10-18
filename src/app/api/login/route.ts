import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (!email || password !== 'demo') {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  const token = Buffer.from(`${email}:demo`).toString('base64');
  return NextResponse.json({ token });
}
